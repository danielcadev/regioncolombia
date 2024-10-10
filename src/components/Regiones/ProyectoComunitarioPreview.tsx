import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ProyectoComunitarioPreview as ProyectoComunitarioPreviewType } from '@/types/blog';
import { normalizeZoneName } from "@/lib/utils";

export function ProyectoComunitarioPreview({
  title,
  mainImage,
  slug,
  zone,
  regionName,
  subRegionName,
}: ProyectoComunitarioPreviewType) {
  console.log('Original zone:', zone);
  
  // Normalizar la zona antes de usarla en la URL
  const normalizedZona = normalizeZoneName(zone);
  console.log('Normalized zone:', normalizedZona);
  
  const projectUrl = `/Regiones/${regionName}/${subRegionName}/${normalizedZona}/Proyecto-Comunitario/${slug}`;
  console.log('Project URL:', projectUrl);

  return (
    <Link href={projectUrl} className="block w-full h-full">
      <div className="p-4 flex flex-col justify-between h-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div>
          {mainImage && (
            <div className="mb-4 relative h-48">
              <Image
                src={mainImage}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-softblack-500 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-1">Zona: {normalizedZona}</p>
        </div>
        <div className="flex justify-end items-center mt-4">
          <span className="text-sm font-medium mr-2 text-green-500">Ver más</span>
          <ArrowRight className="text-green-500" size={20} />
        </div>
      </div>
    </Link>
  );
}