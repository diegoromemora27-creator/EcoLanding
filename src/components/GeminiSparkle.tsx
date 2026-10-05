"use client";
import { motion } from "framer-motion";

export function GeminiSparkle({ className = "text-eco-accent" }: { className?: string }) {
  return (
    <motion.span 
      className={`inline-block ${className}`}
      animate={{ 
        rotate: [0, 90, 90, 90], 
        scale: [1, 1.3, 1, 1]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        times: [0, 0.1, 0.2, 1],
        ease: "easeInOut" 
      }}
    >
      ✦
    </motion.span>
  );
}
