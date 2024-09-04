import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: React.ReactElement<LucideIcon>;
  label: string;
  value: string | number;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex items-center text-gray-300">
    <div className="mr-3 text-green-400">{icon}</div>
    <div>
      <strong className="font-medium">{label}:</strong> <span className="ml-1">{value}</span>
    </div>
  </div>
);

export default InfoItem;