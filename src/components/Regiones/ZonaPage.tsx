"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { createUrl, cn } from "@/lib/utils";
import { Zona, Region, SubRegion } from "@/types/regions";
import { ProyectoComunitario } from "@/types/blog";
import {
  MapPin,
  Users,
  Home,
  ArrowRight,
  Map,
} from "lucide-react";
import { fetchProyectosComunitarios } from "@/lib/strapi";
import { ProyectoComunitarioPreview } from '@/components/Regiones/ProyectoComunitarioPreview';
import { normalizeZoneName } from '@/lib/utils';


interface ZonaPageProps {
  zona: Zona;
  region: Region;
  subRegion: SubRegion;
}

export default function ZonaPage({ zona, region, subRegion }: ZonaPageProps) {
  const [proyectos, setProyectos] = useState<ProyectoComunitario[]>([]);

  useEffect(() => {
    async function loadProyectos() {
      try {
        const normalizedZonaName = normalizeZoneName(zona.name);
        console.log('Buscando proyectos para la zona normalizada:', normalizedZonaName);
        const data = await fetchProyectosComunitarios(normalizedZonaName);
        console.log('Proyectos obtenidos:', data);
        setProyectos(data);
      } catch (error) {
        console.error('Error fetching proyectos comunitarios:', error);
      }
    }
    loadProyectos();
  }, [zona.name]);
  
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-softblack-500 mb-2">
            {zona.name}
          </h1>
          <p className="text-xl text-green-500">{`${region.name} - ${subRegion.name}`}</p>
        </motion.div>

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

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card
              className={cn(
                "bg-white shadow-lg border-green-500 rounded-2xl overflow-hidden"
              )}
            >
              <CardHeader className="bg-softblack-500 rounded-t-2xl">
                <CardTitle className="flex items-center text-white">
                  <MapPin className="mr-2" /> Municipios
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {zona.municipios.map((municipio, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center text-softblack-500"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
                      <Link href={municipio.link} className="hover:underline">
                        {municipio.name}
                      </Link>
                      {municipio.description && (
                        <span className="ml-2 text-sm text-gray-500">
                          - {municipio.description}
                        </span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card
              className={cn(
                "bg-white shadow-lg border-green-500 rounded-2xl overflow-hidden"
              )}
            >
              <CardHeader className="bg-softblack-500 rounded-t-2xl">
                <CardTitle className="flex items-center text-white">
                  <Users className="mr-2" /> Información General
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="flex items-center">
                  <Users className="mr-2 text-green-500" />{" "}
                  <strong>Población:</strong>{" "}
                  <span className="ml-2">{zona.population}</span>
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 text-green-500" />{" "}
                  <strong>Superficie:</strong>{" "}
                  <span className="ml-2">{zona.surface}</span>
                </p>
                <p className="flex items-center">
                  <Users className="mr-2 text-green-500" />{" "}
                  <strong>Densidad:</strong>{" "}
                  <span className="ml-2">{zona.density}</span>
                </p>
                <p className="flex items-center">
                  <Home className="mr-2 text-green-500" />{" "}
                  <strong>Capital:</strong>{" "}
                  <span className="ml-2">{zona.capital}</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={cn(
            "bg-white p-6 rounded-2xl shadow-lg border border-green-500"
          )}
        >
          <h3 className="text-2xl font-semibold mb-4 text-softblack-500 flex items-center">
            <MapPin className="mr-2 text-green-500" /> Ubicación
          </h3>
          <p className="text-softblack-500 mb-4">{zona.location}</p>
          <Modal>
            <ModalTrigger
              className={cn(
                "bg-softblack-500 text-white hover:bg-green-600 transition-colors duration-300 px-6 py-3 rounded-full flex items-center justify-center"
              )}
            >
              <Map className="mr-2" /> Ver Mapa Interactivo
            </ModalTrigger>
            <ModalBody>
              <ModalContent className="bg-white rounded-2xl p-6">
                <h4 className="text-2xl text-softblack-500 font-bold text-center mb-4">
                  Mapa de {zona.name}
                </h4>
                <div className="h-[60vh] bg-green-50 rounded-xl flex items-center justify-center">
                  {/* Aquí iría el componente del mapa real */}
                  <p className="text-softblack-500">
                    Mapa interactivo de {zona.name}
                  </p>
                </div>
              </ModalContent>
              <ModalFooter>
                <ModalTrigger
                  className={cn(
                    "px-6 py-3 bg-softblack-500 text-white hover:bg-green-600 rounded-full transition-colors duration-300"
                  )}
                >
                  Cerrar
                </ModalTrigger>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-softblack-500 text-center">
          Proyectos Comunitarios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proyectos.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProyectoComunitarioPreview
                id={proyecto.id}
                title={proyecto.attributes.Title}
                slug={proyecto.attributes.Slug}
                regionName={region.name}
                subRegionName={subRegion.name}
                zonaName={zona.name}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
}
