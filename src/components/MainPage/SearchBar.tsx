"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { createUrl } from '@/lib/utils';
import { regiones } from '@/data/regiones';

interface Municipio {
  name: string;
  link: string;
}

interface Destination {
  name: string;
  link: string;
  region: string;
  subRegion: string;
  zona: string;
}

const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputClick = () => {
    setOpen(true);
    inputRef.current?.focus();
  };

  const destinations: Destination[] = regiones.flatMap(region =>
    region.subRegions.flatMap(subRegion =>
      subRegion.zonas.flatMap(zona =>
        (zona.municipios || []).map((municipio: Municipio) => ({
          name: municipio.name,
          link: `/Regiones/${createUrl(region.name)}/${createUrl(subRegion.name)}/${createUrl(zona.name)}`,
          region: region.name,
          subRegion: subRegion.name,
          zona: zona.name
        }))
      )
    )
  );

  const filteredDestinations = destinations.filter(destination =>
    removeAccents(destination.name.toLowerCase()).includes(removeAccents(searchTerm.toLowerCase()))
  );

  const groupedDestinations = filteredDestinations.reduce((acc, destination) => {
    const firstLetter = destination.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(destination);
    return acc;
  }, {} as Record<string, typeof filteredDestinations>);

  const sortedLetters = Object.keys(groupedDestinations).sort();

  return (
    <div className="relative w-full max-w-6xl mx-auto" ref={commandRef}>
      <div className="flex items-center bg-white rounded-full shadow-md">
        <input
          ref={inputRef}
          type="text"
          placeholder="¿A qué municipio vas a viajar?"
          className="w-full py-6 px-8 rounded-l-full focus:outline-none border-none text-xl"
          onClick={handleInputClick}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-green-500 text-white rounded-r-full py-6 px-8 hover:bg-green-600 transition duration-300">
          <Search className="w-8 h-8" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="max-h-[70vh] overflow-y-auto">
              {filteredDestinations.length === 0 && (
                <p className="p-4 text-center text-gray-500">No se encontraron resultados.</p>
              )}
              {sortedLetters.map((letter) => (
                <div key={letter} className="p-4">
                  <h3 className="text-2xl font-bold mb-2">{letter}</h3>
                  {groupedDestinations[letter].map((destination, index) => (
                    <Link
                      key={index}
                      href={destination.link}
                      className="flex items-center py-3 hover:bg-gray-100 rounded-lg px-4 transition duration-200"
                    >
                      <MapPin className="mr-3 h-6 w-6 text-green-500" />
                      <span className="text-lg flex-grow">{destination.name}</span>
                      <span className="text-sm text-gray-500">
                        {destination.zona}, {destination.subRegion}, {destination.region}
                      </span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}