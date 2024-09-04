"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type DirectionAwareHoverProps = {
  imageUrl: string | StaticImageData;
  children: React.ReactNode;
  revealComponent: React.ReactNode;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
};

export function DirectionAwareHover({
  imageUrl,
  children,
  revealComponent,
  childrenClassName,
  imageClassName,
  className,
}: DirectionAwareHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt="Background"
        fill
        className={cn(
          "object-cover transition-transform duration-300 ease-in-out",
          isHovered ? "scale-110" : "scale-100",
          imageClassName
        )}
      />
      <div className={cn(
        "absolute inset-0 flex flex-col justify-between p-4 transition-colors duration-300",
        isHovered ? "bg-black bg-opacity-40" : "bg-black bg-opacity-20"
      )}>
        <div className={childrenClassName}>{children}</div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
        >
          {revealComponent}
        </motion.div>
      </div>
    </div>
  );
}