'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Modal, ModalContent, ModalBody, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import { createUrl, cn } from '@/lib/utils';
import { SubRegion, Region } from '@/types/regions';
import { MapPin, Users, Home, ArrowRight, Map, Camera, Calendar } from 'lucide-react';
import ZonaPreview from './ZonaPreview';

interface SubRegionComponentProps {
  subRegion: SubRegion;
  region: Region;
}

export default function SubRegionComponent({ subRegion, region }: SubRegionComponentProps) {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-softblack-500 mb-2">{subRegion.name}</h1>
          <p className="text-xl text-green-500">{subRegion.description}</p>
        </motion.div>

        <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={subRegion.imageUrl}
            alt={subRegion.name}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          {subRegion.insigniaUrl && (
            <div className="absolute top-4 left-4">
              <Image
                src={subRegion.insigniaUrl}
                alt={`Insignia de ${subRegion.name}`}
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-softblack-500 to-transparent flex items-end justify-start p-8">
            <div className="text-white">
              <h2 className="text-3xl font-semibold mb-2">Proyectos Comunitarios</h2>
              <p className="text-xl opacity-80">{subRegion.communityProjects}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
          >
            <Card className={cn("bg-white shadow-lg border-green-500 rounded-2xl overflow-hidden")}>
              <CardHeader className="bg-softblack-500 rounded-t-2xl">
                <CardTitle className="flex items-center text-white">
                  <MapPin className="mr-2" /> Lugares de interés
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {subRegion.interestPlaces.map((place, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center text-softblack-500"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-green-500" />
                      {place}
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
            <Card className={cn("bg-white shadow-lg border-green-500 rounded-2xl overflow-hidden")}>
              <CardHeader className="bg-softblack-500 rounded-t-2xl">
                <CardTitle className="flex items-center text-white">
                  <Users className="mr-2" /> Información General
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="flex items-center"><Users className="mr-2 text-green-500" /> <strong>Población:</strong> <span className="ml-2">{subRegion.population}</span></p>
                <p className="flex items-center"><MapPin className="mr-2 text-green-500" /> <strong>Superficie:</strong> <span className="ml-2">{subRegion.surface}</span></p>
                <p className="flex items-center"><Users className="mr-2 text-green-500" /> <strong>Densidad:</strong> <span className="ml-2">{subRegion.density}</span></p>
                <p className="flex items-center"><Home className="mr-2 text-green-500" /> <strong>Capital:</strong> <span className="ml-2">{subRegion.capital}</span></p>
                <p className="flex items-center"><Calendar className="mr-2 text-green-500" /> <strong>Desarrollo Sostenible:</strong> <span className="ml-2">{subRegion.sustainableDevelopment}</span></p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
          className={cn("bg-white p-6 rounded-2xl shadow-lg border border-green-500")}
        >
          <h3 className="text-2xl font-semibold mb-4 text-softblack-500 flex items-center">
            <MapPin className="mr-2 text-green-500" /> Ubicación
          </h3>
          <p className="text-softblack-500 mb-4">{subRegion.location}</p>
          <Modal>
            <ModalTrigger className={cn("bg-softblack-500 text-white hover:bg-green-600 transition-colors duration-300 px-6 py-3 rounded-full flex items-center justify-center")}>
              <Map className="mr-2" /> Ver Mapa Interactivo
            </ModalTrigger>
            <ModalBody>
              <ModalContent className="bg-white rounded-2xl p-6">
                <h4 className="text-2xl text-softblack-500 font-bold text-center mb-4">
                  Mapa de {subRegion.name}
                </h4>
                <div className="h-[60vh] bg-green-50 rounded-xl flex items-center justify-center">
                  <p className="text-softblack-500">Mapa interactivo de {subRegion.name}</p>
                </div>
              </ModalContent>
              <ModalFooter>
                <ModalTrigger className={cn("px-6 py-3 bg-softblack-500 text-white hover:bg-green-600 rounded-full transition-colors duration-300")}>
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
          <h3 className="text-3xl font-semibold mb-6 text-softblack-500 text-center">Zonas de {subRegion.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subRegion.zonas.map((zona, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
             <ZonaPreview 
              zona={zona}
              regionName={region.name}
              subRegionName={subRegion.name}
            />
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}