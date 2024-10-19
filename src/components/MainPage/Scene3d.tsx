'use client';
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import SearchBar from './SearchBar';

export default function Scene3d() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Ajusta este valor según tus necesidades
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopScene = "https://prod.spline.design/Sn9YUpi4cTsSC8C9/scene.splinecode";
  const mobileScene = "https://prod.spline.design/5iWs7F1RMjRhIGkh/scene.splinecode";

  return (
    <div className="relative w-full h-screen">
      {/* Escena 3D de Spline */}
      <Spline scene={isMobile ? mobileScene : desktopScene} />
     
      <div className={`absolute ${isMobile ? 'bottom-[30%] left-[5%] w-[90%]' : 'bottom-[23%] left-[3%] md:bottom-[30%] md:left-[8%] lg:bottom-[23%] lg:left-[3%] w-72 md:w-96 lg:w-[40rem]'}`}>
        <SearchBar />
      </div>
    </div>
  );
}