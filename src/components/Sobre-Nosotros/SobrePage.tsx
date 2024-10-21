"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Heart, Compass } from 'lucide-react';
import Link from 'next/link';

const SobreNosotros = () => {
    const [activeSection, setActiveSection] = useState<number | null>(null);

    const sections = [
        {
            title: "Nuestra Misión",
            icon: <Heart className="w-8 h-8" />,
            content: "Conectamos y promovemos proyectos de turismo comunitario en 144 regiones de Colombia, apoyando a diversas comunidades locales."
        },
        {
            title: "Nuestra Historia",
            icon: <Compass className="w-8 h-8" />,
            content: "Desde 2004, evolucionamos de Regioncolombia a Mitiquete SAS, impulsando ahora conociendocolombia.com para un turismo de desarrollo comunitario único."
        },
        {
            title: "Nuestro Enfoque",
            icon: <MapPin className="w-8 h-8" />,
            content: "Mapeamos 144 regiones de Colombia, visibilizando proyectos turísticos comunitarios y formando guías locales para experiencias auténticas."
        },
        {
            title: "Nuestro Compromiso",
            icon: <Users className="w-8 h-8" />,
            content: "Empoderamos a jóvenes locales con habilidades en turismo y tecnología, creando oportunidades y preservando la cultura local."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-black p-8 font-serif">
            <h1 className="text-5xl font-light text-center mb-16 tracking-wide">DESCUBRE COLOMBIA</h1>

            <div className="max-w-4xl mx-auto">
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 border-b border-gray-200 pb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div
                            className="flex items-center space-x-4 cursor-pointer"
                            onClick={() => setActiveSection(activeSection === index ? null : index)}
                        >
                            {section.icon}
                            <h2 className="text-2xl font-light tracking-wide">{section.title.toUpperCase()}</h2>
                        </div>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: activeSection === index ? 'auto' : 0,
                                opacity: activeSection === index ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-4"
                        >
                            <p className="text-gray-600 leading-relaxed">{section.content}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-center"
            >
                <p className="text-xl text-gray-800 mb-8 font-light italic">
                &ldquo;Descubre la verdadera esencia de Colombia a través de sus comunidades&rdquo;
                </p>
                <Link href="/" className="inline-block bg-black text-white px-10 py-3 text-lg font-light tracking-wide hover:bg-gray-800 transition duration-300">
                    EXPLORAR PROYECTOS
                </Link>
            </motion.div>
        </div>
    );
};

export default SobreNosotros;