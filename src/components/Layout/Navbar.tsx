"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { regiones } from "@/data/regiones";
import { cn, createUrl } from "@/lib/utils";

const menuVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);
  const [activeSubRegion, setActiveSubRegion] = useState<number | null>(null);
  return (
    <nav className="bg-white shadow-md font-sans">
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-32">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo2.jpeg"
                alt="Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </Link>
          </div>
          <div className="flex space-x-2">
            {regiones.map((region, index) => (
              <div key={region.id} className="relative group">
                <Link
                  href={`/Regiones/${createUrl(region.name)}`}
                  className={cn(
                    "h-32 px-5 text-lg font-bold text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-200 flex items-center",
                    activeRegion === region.id && "text-green-600 bg-gray-100"
                  )}
                  onMouseEnter={() => setActiveRegion(region.id)}
                  onMouseLeave={() => {
                    setActiveRegion(null);
                    setActiveSubRegion(null);
                  }}
                >
                  {region.name}
                </Link>
                <AnimatePresence>
                  {activeRegion === region.id && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      className={cn(
                        "absolute mt-0 w-72 bg-white shadow-lg z-20",
                        index > regiones.length - 3 ? "right-0" : "left-0"
                      )}
                      onMouseEnter={() => setActiveRegion(region.id)}
                      onMouseLeave={() => {
                        setActiveRegion(null);
                        setActiveSubRegion(null);
                      }}
                    >
                      {region.subRegions.map((subRegion, subIndex) => (
                        <div key={subIndex} className="relative group/sub">
                          <Link
                            href={`/Regiones/${createUrl(
                              region.name
                            )}/${createUrl(subRegion.name)}`}
                            className={cn(
                              "block w-full text-left px-6 py-4 text-base font-bold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150",
                              activeSubRegion === subIndex &&
                                "bg-green-50 text-green-600"
                            )}
                            onMouseEnter={() => setActiveSubRegion(subIndex)}
                            onMouseLeave={() => setActiveSubRegion(null)}
                          >
                            {subRegion.name}
                          </Link>
                          <AnimatePresence>
                            {activeSubRegion === subIndex &&
                              subRegion.zonas && (
                                <motion.div
                                  initial="hidden"
                                  animate="visible"
                                  exit="hidden"
                                  variants={menuVariants}
                                  className={cn(
                                    "absolute top-0 mt-0 w-72 bg-white shadow-lg z-30",
                                    index > regiones.length - 4
                                      ? "right-full"
                                      : "left-full"
                                  )}
                                  onMouseEnter={() =>
                                    setActiveSubRegion(subIndex)
                                  }
                                  onMouseLeave={() => setActiveSubRegion(null)}
                                >
                                  {subRegion.zonas.map((zona, zonaIndex) => (
                                    <Link
                                      key={zonaIndex}
                                      href={`/Regiones/${createUrl(
                                        region.name
                                      )}/${createUrl(
                                        subRegion.name
                                      )}/${createUrl(zona.name)}`}
                                      className="block px-6 py-4 text-base font-bold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                                    >
                                      {zona.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="flex items-center ml-4 space-x-2">
              <Link
                href="/admin"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200"
              >
                Admin Login
              </Link>
              <Link
                href="/autor/login"
                className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50 transition-colors duration-200"
              >
                Autor Login
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
