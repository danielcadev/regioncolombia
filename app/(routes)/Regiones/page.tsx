import { regiones } from '@/data/regiones';
import RegionCard from '@/components/Regiones/RegionCard';

export default function RegionesPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Regiones de Colombia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regiones.map((region) => (
          <RegionCard key={region.id} region={region} />
        ))}
      </div>
    </div>
  );
}