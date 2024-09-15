import React, { Suspense } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Zona, Region, SubRegion } from "@/types/regions";
import {
  MapPin,
  Users,
  Home,
  ArrowRight,
  Map,
} from "lucide-react";
import { ProyectoComunitarioPreview } from '@/components/Regiones/ProyectoComunitarioPreview';
import Link from "next/link";
import { fetchProyectosComunitariosByZona } from "@/lib/payload-api";

interface ZonaPageProps {
  zona: Zona;
  region: Region;
  subRegion: SubRegion;
}

async function ProyectosComunitarios({ zonaName, regionName, subRegionName }: { zonaName: string; regionName: string; subRegionName: string }) {
  const proyectos = await fetchProyectosComunitariosByZona(zonaName);

  if (proyectos.length === 0) {
    return <p>No se encontraron proyectos comunitarios para esta zona.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {proyectos.map((proyecto) => (
        <ProyectoComunitarioPreview
          key={proyecto.id}
          id={proyecto.id}
          title={proyecto.title || ''}
          slug={proyecto.slug || ''}
          regionName={regionName}
          subRegionName={subRegionName}
          zonaName={zonaName}
        />
      ))}
    </div>
  );
}


export default function ZonaPage({ zona, region, subRegion }: ZonaPageProps) {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4 space-y-8">
        {/* Título de la Zona */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-softblack-500 mb-2">
            {zona.name}
          </h1>
          <p className="text-xl text-green-500">{`${region.name} - ${subRegion.name}`}</p>
        </div>

        {/* Imagen principal de la Zona */}
        <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={zona.imageUrl}
            alt={zona.name}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-softblack-500 to-transparent flex items-end justify-start p-8">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">{zona.name}</h2>
              <p className="text-xl opacity-80">{zona.description}</p>
            </div>
          </div>
        </div>

        {/* Sección de Municipios e Información General */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card de Municipios */}
          <Card className={cn("bg-white shadow-lg border-green-500 rounded-2xl overflow-hidden")}>
            <CardHeader className="bg-softblack-500 rounded-t-2xl">
              <CardTitle className="flex items-center text-white">
                <MapPin className="mr-2" /> Municipios
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {zona.municipios.map((municipio, index) => (
                  <li key={index} className="flex items-center text-softblack-500">
                    <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
                    <Link href={municipio.link} className="hover:underline">
                      {municipio.name}
                    </Link>
                    {municipio.description && (
                      <span className="ml-2 text-sm text-gray-500">
                        - {municipio.description}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Card de Información General */}
          <Card className={cn("bg-white shadow-lg border-green-500 rounded-2xl overflow-hidden")}>
            <CardHeader className="bg-softblack-500 rounded-t-2xl">
              <CardTitle className="flex items-center text-white">
                <Users className="mr-2" /> Información General
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="flex items-center">
                <Users className="mr-2 text-green-500" /> <strong>Población:</strong> <span className="ml-2">{zona.population}</span>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 text-green-500" /> <strong>Superficie:</strong> <span className="ml-2">{zona.surface}</span>
              </p>
              <p className="flex items-center">
                <Users className="mr-2 text-green-500" /> <strong>Densidad:</strong> <span className="ml-2">{zona.density}</span>
              </p>
              <p className="flex items-center">
                <Home className="mr-2 text-green-500" /> <strong>Capital:</strong> <span className="ml-2">{zona.capital}</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Sección de Ubicación */}
        <div className={cn("bg-white p-6 rounded-2xl shadow-lg border border-green-500")}>
          <h3 className="text-2xl font-semibold mb-4 text-softblack-500 flex items-center">
            <MapPin className="mr-2 text-green-500" /> Ubicación
          </h3>
          <p className="text-softblack-500 mb-4">{zona.location}</p>
        </div>

        {/* Sección de Proyectos Comunitarios */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-softblack-500 text-center">
            Proyectos Comunitarios
          </h3>
          <Suspense fallback={<div>Cargando proyectos...</div>}>
            <ProyectosComunitarios 
              zonaName={zona.name} 
              regionName={region.name}
              subRegionName={subRegion.name}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}