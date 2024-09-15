import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

type ProyectoComunitarioPreviewProps = {
  id: number;
  title: string;
  slug: string;
  regionName: string;
  subRegionName: string;
  zonaName: string;
};

export function ProyectoComunitarioPreview({
  id,
  title,
  slug,
  regionName,
  subRegionName,
  zonaName
}: ProyectoComunitarioPreviewProps) {
  return (
    <Link href={`/Regiones/${regionName}/${subRegionName}/${zonaName}/Proyecto-Comunitario/${slug}`} className="block w-full">
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex items-center justify-between p-4">
          <h3 className="text-lg font-semibold text-softblack-500">{title}</h3>
          <ArrowRight className="text-green-500" size={20} />
        </CardContent>
      </Card>
    </Link>
  );
}