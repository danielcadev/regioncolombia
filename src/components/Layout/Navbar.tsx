'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { regiones } from '@/data/regiones'

const menuVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
}

const Navbar = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null)
  const [activeSubRegion, setActiveSubRegion] = useState<number | null>(null)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-32">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src="/logo2.jpeg" alt="Logo" width={120} height={120} className="rounded-full" />
            </Link>
          </div>
          <div className="flex space-x-2">
            {regiones.map((region) => (
              <div key={region.id} className="relative group">
                <button
                  className="h-32 px-5 text-lg font-bold text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-200"
                  onMouseEnter={() => setActiveRegion(region.id)}
                  onMouseLeave={() => {
                    setActiveRegion(null)
                    setActiveSubRegion(null)
                  }}
                >
                  REGIÓN {region.id}
                </button>
                <AnimatePresence>
                  {activeRegion === region.id && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={menuVariants}
                      className="absolute left-0 mt-0 w-72 bg-white shadow-lg z-20"
                      onMouseEnter={() => setActiveRegion(region.id)}
                      onMouseLeave={() => {
                        setActiveRegion(null)
                        setActiveSubRegion(null)
                      }}
                    >
                      {region.subRegions.map((subRegion, subIndex) => (
                        <div key={subIndex} className="relative group/sub">
                          <button
                            className="block w-full text-left px-6 py-4 text-base font-bold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                            onMouseEnter={() => setActiveSubRegion(subIndex)}
                            onMouseLeave={() => setActiveSubRegion(null)}
                          >
                            {subRegion.name}
                          </button>
                          <AnimatePresence>
                            {activeSubRegion === subIndex && subRegion.departments && (
                              <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={menuVariants}
                                className="absolute left-full top-0 mt-0 w-72 bg-white shadow-lg z-30"
                                onMouseEnter={() => setActiveSubRegion(subIndex)}
                                onMouseLeave={() => setActiveSubRegion(null)}
                              >
                                {subRegion.departments.map((dept, deptIndex) => (
                                  <Link
                                    key={deptIndex}
                                    href={`/region/${region.id}/${subIndex}/${deptIndex}`}
                                    className="block px-6 py-4 text-base font-bold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-150"
                                  >
                                    {dept}
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar;