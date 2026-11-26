"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GeminiSparkle } from "../GeminiSparkle";

export function ClaseEnVivo() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="en-vivo"
      className="relative min-h-screen bg-eco-base overflow-hidden flex items-center py-20 md:py-28"
      ref={ref}
    >
      {/* Background with Ambient Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/classroom.jpg')" }}
        />
        <div className="absolute inset-0 bg-eco-base/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-eco-base via-eco-base/90 to-transparent lg:to-eco-base/60" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col gap-10 md:gap-12">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="font-mono text-xs text-eco-accent tracking-widest mb-3 md:mb-4">
            04 · DEMO EN VIVO
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-eco-chalk mb-4 md:mb-6">
            Observa a ECO en el{" "}
            <span className="text-eco-accent font-serif italic font-normal">
              aula.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-eco-gray leading-relaxed text-balance max-w-2xl">
            Proyecta, lanza el exit ticket y recolecta evidencias en 90 segundos. Conoce cómo funciona la plataforma en una sesión real con esta demostración completa.
          </p>
        </div>

        {/* Video Player Section */}
        <motion.div
          className="w-full max-w-5xl mx-auto flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video Container Frame */}
          <div className="bg-eco-slate/95 border border-eco-gray/20 rounded-2xl shadow-[0_0_50px_rgba(124,255,178,0.08)] overflow-hidden">
            
            {/* Top Bar simulating a modern workspace player */}
            <div className="bg-eco-base/90 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-eco-gray/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                <span className="ml-3 font-mono text-xs text-eco-gray hidden sm:inline">
                  demo-completa-aula-eco.mp4 (10 min)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-eco-accent bg-eco-accent/10 px-2.5 py-1 rounded-full border border-eco-accent/20 flex items-center gap-1.5">
                  <GeminiSparkle className="text-eco-accent text-xs" />
                  Demostración en Video
                </span>
              </div>
            </div>

            {/* YouTube Responsive Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/4e2CqpFwKCg?rel=0&modestbranding=1"
                title="Demostración de la plataforma ECO en clase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
