
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Region } from '@/lib/types';
import { useAnimations } from '@/hooks/useAnimations';
import { AnimatedList } from '@/components/AnimatedList';
import { createUrl, formatDisplayName } from '@/lib/utils';

interface RegionPageProps {
  region: Region;
}

export default function RegionPage({ region }: RegionPageProps) {
  const [ref, controls] = useAnimations();

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        <div className="mb-8">
          <Image 
            src={region.imageUrl} 
            alt={region.name} 
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{region.turisticCorridor}</h1>
        <p className="text-xl mb-4">{region.touristRoutes}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Lugares de interés:</h2>
            <ul className="list-disc list-inside">
              {region.interestPlaces.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          </div>
          <div>
            <p><strong>Superficie:</strong> {region.surface}</p>
            <p><strong>Población:</strong> {region.population}</p>
            <p><strong>Densidad:</strong> {region.density}</p>
            <p><strong>Capital:</strong> {region.capital}</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Ubicación, Extensión y Límites</h2>
          <p>{region.location}</p>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Subregiones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {region.subRegions.map((subRegion, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{formatDisplayName(subRegion.name)}</CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatedList items={subRegion.zonas.map(zona => formatDisplayName(zona.name))} />
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
}