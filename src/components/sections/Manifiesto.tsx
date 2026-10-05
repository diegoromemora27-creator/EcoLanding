"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EcoPulse } from "../EcoPulse";

export function Manifiesto() {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Sonar Flashlight Effect linked to mouse position when hovering
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate relative position
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovering]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacityText = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const scaleText = useTransform(scrollYProgress, [0.3, 0.6], [0.9, 1]);

  const manifestoLines = [
    "Enseñar ya es bastante difícil.",
    "Saber qué entendieron no debería ser un misterio.",
    "ECO convierte las dudas del aula en claridad."
  ];

  const microphrases = [
    { from: "SILENCIO EN CLASE", to: "DUDAS DETECTADAS" },
    { from: "«¿QUEDÓ CLARO?»", to: "EVIDENCIA REAL" },
    { from: "EXAMEN SEMANAS DESPUÉS", to: "REPASO EN LA SIGUIENTE CLASE" },
  ];

  return (
    <section 
      ref={containerRef}
      id="manifiesto"
      className="relative min-h-screen flex flex-col justify-center bg-eco-slate overflow-hidden py-32 cursor-default"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Texture Layer: Chalk / Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')", backgroundSize: "40px 40px" }} />
      
      {/* Background Pulse */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <EcoPulse active={true} intensity="soft" />
      </div>

      {/* Flashlight Mask Effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10 mix-blend-plus-lighter"
        style={{
          background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(124, 255, 178, 0.15), transparent 80%)`,
          opacity: isHovering ? 1 : 0
        }}
      />

      <div className="container mx-auto px-6 max-w-4xl relative z-20">
        <motion.div 
          className="flex flex-col gap-8 md:gap-12"
          style={{ opacity: opacityText, scale: scaleText }}
        >
          {manifestoLines.map((line, i) => (
            <h2 
              key={i} 
              className={`text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-balance
                ${i === 2 ? "text-eco-accent font-serif italic" : "text-eco-gray/40 hover:text-eco-chalk transition-colors duration-700"}`}
            >
              {line}
            </h2>
          ))}
        </motion.div>

        {/* Microphrases */}
        <div className="mt-32 flex flex-col md:flex-row justify-between gap-8 border-t border-eco-gray/20 pt-12">
          {microphrases.map((phrase, i) => (
            <motion.div 
              key={i}
              className="flex flex-col gap-2 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
            >
              <span className="font-mono text-xs text-eco-gray/50 tracking-wider">
                {phrase.from}
              </span>
              <div className="h-4 w-px bg-eco-gray/20 ml-2 group-hover:bg-eco-accent transition-colors" />
              <span className="font-mono text-sm text-eco-accent tracking-wider font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-eco-accent shadow-[0_0_8px_rgba(124,255,178,0.8)] animate-pulse" />
                {phrase.to}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
