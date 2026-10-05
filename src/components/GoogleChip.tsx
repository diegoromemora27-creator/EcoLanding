"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GoogleChipProps {
  name: string;
  iconPath: string;
  tooltip: string;
  delay: number;
  yOffset?: number;
}

export function GoogleChip({ name, iconPath, tooltip, delay, yOffset = 0 }: GoogleChipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer group"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: yOffset }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ y: yOffset }}
    >
      <div className="w-12 h-12 rounded-2xl bg-eco-slate/60 backdrop-blur-md border border-eco-gray/20 flex items-center justify-center p-2.5 hover:border-eco-accent/50 transition-colors shadow-xl">
        <Image src={iconPath} alt={name} width={32} height={32} className="object-contain" />
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 bg-eco-slate border border-eco-accent/30 rounded-md shadow-2xl z-20 pointer-events-none"
          >
            <span className="text-xs font-mono text-eco-chalk">{tooltip}</span>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-eco-slate drop-shadow-sm"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
