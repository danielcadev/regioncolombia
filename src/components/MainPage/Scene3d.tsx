'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';
import SearchBar from './SearchBar';

export default function Scene3d() {
  return (
    <div className="relative w-full h-screen">
      {/* Escena 3D de Spline */}
      <Spline scene="https://prod.spline.design/Sn9YUpi4cTsSC8C9/scene.splinecode" />
      
      <div className="absolute bottom-[23%] left-[3%] md:bottom-[30%] md:left-[8%] lg:bottom-[23%] lg:left-[3%] w-72 md:w-96 lg:w-[40rem]">
          <SearchBar />
      </div>
    </div>
  );
}