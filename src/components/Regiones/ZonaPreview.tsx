import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { Zona } from '@/types/regions';

type ZonaPreviewProps = {
  zona: Zona;
  regionName: string;
  subRegionName: string;
};

export default function ZonaPreview({ zona, regionName, subRegionName }: ZonaPreviewProps) {
  return (
    <Link href={`/Regiones/${regionName}/${subRegionName}/${zona.name}`} className="block w-full">
      <DirectionAwareHover 
        imageUrl={zona.imageUrl} 
        className="w-full h-64 rounded-lg"
        revealComponent={
          <div className="flex items-center text-green-400">
            <span className="mr-2 text-sm">Explora esta zona</span>
            <ArrowRight size={16} />
          </div>
        }
      >
        <div className="text-white">
          <h3 className="text-xl font-bold">{zona.name}</h3>
          <p className="text-sm">Descubre esta hermosa zona</p>
        </div>
      </DirectionAwareHover>
    </Link>
  );
}