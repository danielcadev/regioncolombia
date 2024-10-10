import { S3Client, PutObjectCommand, DeleteObjectCommand, HeadObjectCommand  } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadFileToS3(file: File, key: string): Promise<string> {
  try {
    // Generar una URL firmada para la carga
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
      ContentType: file.type,
    });

    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    // Realizar la carga usando la URL firmada
    const response = await fetch(signedUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }

    // Devolver la URL del archivo cargado
    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
}

export async function getSignedUrlForUpload(key: string, contentType: string): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: key,
    ContentType: contentType,
  });

  return getSignedUrl(s3Client, command, { expiresIn: 3600 });
}

async function checkIfObjectExists(key: string): Promise<boolean> {
  try {
    await s3Client.send(new HeadObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: key,
    }));
    return true;
  } catch (error) {
    if ((error as any).$metadata?.httpStatusCode === 404) {
      return false;
    }
    console.error(`Error checking if object ${key} exists:`, error);
    return true; // Asumimos que existe si hay un error distinto a 404
  }
}


export async function deleteS3Object(key: string): Promise<void> {
  console.log(`Attempting to delete object with key: ${key}`);
  
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: key,
  });

  try {
    const response = await s3Client.send(command);
    console.log(`Deleted object ${key} from bucket ${process.env.AWS_BUCKET_NAME}`);
    console.log('Delete response:', JSON.stringify(response, null, 2));

    // Verificación post-eliminación
    const stillExists = await checkIfObjectExists(key);
    if (stillExists) {
      console.error(`Error: Object ${key} still exists after deletion attempt`);
    } else {
      console.log(`Confirmed: Object ${key} no longer exists in the bucket`);
    }
  } catch (error) {
    console.error(`Error deleting object ${key} from S3:`, error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  }
}


async function deleteImageIfExists(imageUrl: string | null) {
  if (imageUrl) {
    console.log(`Attempting to delete image: ${imageUrl}`);
    // Extraer la clave completa, incluyendo 'projects/'
    const key = imageUrl.split('/').slice(3).join('/');
    if (key) {
      console.log(`Extracted key for deletion: ${key}`);
      try {
        await deleteS3Object(key);
      } catch (error) {
        console.error(`Failed to delete image ${key}:`, error);
      }
    } else {
      console.log(`Could not extract key from URL: ${imageUrl}`);
    }
  } else {
    console.log('No image URL provided');
  }
}

export { deleteImageIfExists };