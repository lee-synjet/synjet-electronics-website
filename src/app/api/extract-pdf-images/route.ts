import { NextRequest, NextResponse } from 'next/server';
import { FetchClient, Config, HeaderUtils, S3Storage } from 'coze-coding-dev-sdk';
import { readFile } from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

interface ExtractedImage {
  url: string;
  width?: number;
  height?: number;
}

export async function POST(request: NextRequest) {
  try {
    const { pdfPath } = await request.json();

    if (!pdfPath) {
      return NextResponse.json({ error: 'PDF path is required' }, { status: 400 });
    }

    // Initialize storage
    const storage = new S3Storage({
      endpointUrl: process.env.COZE_BUCKET_ENDPOINT_URL,
      accessKey: '',
      secretKey: '',
      bucketName: process.env.COZE_BUCKET_NAME,
      region: 'cn-beijing',
    });

    // Read PDF file from local path
    const absolutePath = path.join(process.cwd(), pdfPath);
    const pdfBuffer = await readFile(absolutePath);

    // Upload PDF to object storage
    const pdfKey = await storage.uploadFile({
      fileContent: pdfBuffer,
      fileName: `pdfs/${path.basename(pdfPath)}`,
      contentType: 'application/pdf',
    });

    // Generate presigned URL for the PDF
    const pdfUrl = await storage.generatePresignedUrl({
      key: pdfKey,
      expireTime: 3600, // 1 hour
    });

    // Extract content from PDF using fetch-url skill
    const config = new Config();
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);
    const client = new FetchClient(config, customHeaders);

    const response = await client.fetch(pdfUrl);

    if (response.status_code !== 0) {
      return NextResponse.json(
        { error: response.status_message || 'Failed to extract PDF content' },
        { status: 500 }
      );
    }

    // Extract images from the response
    const images: ExtractedImage[] = [];
    for (const item of response.content) {
      if (item.type === 'image' && item.image?.display_url) {
        images.push({
          url: item.image.display_url,
          width: item.image.width,
          height: item.image.height,
        });
      }
    }

    // Also extract text content for product info
    const textContent = response.content
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('\n');

    return NextResponse.json({
      success: true,
      images,
      textContent,
      title: response.title,
    });

  } catch (error) {
    console.error('PDF extraction error:', error);
    return NextResponse.json(
      { error: 'Failed to extract PDF content' },
      { status: 500 }
    );
  }
}
