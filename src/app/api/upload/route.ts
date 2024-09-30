import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const filename = `${Date.now()}-${file.name}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: filename,
      Body: Buffer.from(buffer),
      ContentType: file.type,
    });

    await s3Client.send(command);

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`;
    return NextResponse.json({ url: fileUrl });
  } catch (error) {
    console.error('Error uploading to S3:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};