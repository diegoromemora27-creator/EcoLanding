"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { GeminiSparkle } from "../GeminiSparkle";

export function Preparacion() {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === 0) {
          setPhase(1); // Show Card 1
          setTimeout(() => setPhase(2), 1000); // Scan Card 1
          setTimeout(() => setPhase(3), 2500); // Path to Card 2 + Concepts
          setTimeout(() => setPhase(4), 4000); // Doubt
          setTimeout(() => setPhase(5), 5500); // Path to Card 3 + Questions
          setTimeout(() => setPhase(6), 7000); // QR
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [phase]);

  return (
    <section id="preparacion" className="relative min-h-screen flex items-center overflow-hidden bg-eco-slate py-24" ref={ref}>
      {/* Image Background */}
      <motion.div className="absolute inset-0 z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
          style={{ backgroundImage: "url('/assets/Fondo 2.jpg')" }}
        />
        <div className="absolute inset-0 bg-eco-base/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-eco-base/90 via-eco-base/60 to-transparent" />
      </motion.div>

      {/* Giant Background Number to the left */}
      <div className="absolute -left-[10%] top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] z-0">
        <span className="text-[600px] font-serif font-bold text-eco-accent">03</span>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center">
        {/* Header Content */}
        <div className="text-center max-w-2xl mb-20">
          <div className="font-mono text-xs text-eco-accent tracking-widest mb-6">
            03 · PREPARA TU CLASE EN SEGUNDOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-eco-chalk">
            Sube tu material.<br />
            <span className="text-eco-accent font-serif italic">ECO arma todo tu ecosistema.</span>
          </h2>
          <p className="text-xl text-eco-gray text-balance">
            Gemini analiza tu presentación y extrae preguntas de verificación. Mientras tanto, ECO organiza tus carpetas de Drive para dejarlas <span className="text-eco-chalk">IA-ready</span>, prepara tu Classroom y crea el Forms para la sesión. Todo el setup automático para que solo te enfoques en dar tu clase.
          </p>
        </div>

        {/* 3 Cards Flow Container */}
        <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-4">
          
          {/* Card 1: TÚ APORTAS */}
          <motion.div 
            className="w-full lg:w-1/3 bg-eco-base border border-eco-gray/20 rounded-2xl p-6 flex flex-col relative shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[10px] text-eco-gray tracking-widest border-b border-eco-gray/10 pb-3 mb-4">
              TÚ APORTAS
            </div>
            <div className="flex-grow">
              <h4 className="text-eco-chalk font-bold text-lg mb-1">Material de la sesión</h4>
              <p className="text-eco-gray text-sm mb-6">Presentación · Sistemas Distribuidos · Unidad 02</p>

              {/* Document Thumbnail */}
              <div className="w-full aspect-[4/3] bg-eco-slate rounded-lg border border-eco-gray/10 p-4 relative overflow-hidden flex flex-col gap-2">
                <div className="w-2/3 h-4 bg-eco-gray/20 rounded" />
                <div className="w-full h-24 bg-eco-base/50 rounded flex items-center justify-center border border-eco-gray/5">
                  <div className="w-16 h-16 border-2 border-eco-gray/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-eco-gray/20 rounded-full" />
                  </div>
                </div>

                {/* Scan Line Animation */}
                {phase >= 2 && (
                  <motion.div 
                    className="absolute inset-0 border-t border-eco-accent bg-eco-accent/10"
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
                  />
                )}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-eco-gray/10">
              <Image src="/assets/logo_drive_2026q2_color_2x_web_96dp.png" alt="Drive" width={16} height={16} className="opacity-80" />
              <span className="text-xs font-mono text-eco-gray/80">Importado desde Google Drive</span>
            </div>
          </motion.div>

          {/* Connection Line 1 -> 2 (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-[30%] w-[10%] h-px bg-eco-gray/20 -translate-y-1/2">
            {phase >= 3 && (
              <motion.div 
                className="h-full bg-eco-accent shadow-[0_0_8px_#7CFFB2]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>

          {/* Card 2: ECO ANALIZA */}
          <motion.div 
            className="w-full lg:w-1/3 bg-eco-base border border-eco-gray/20 rounded-2xl p-6 flex flex-col relative shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[10px] text-eco-gray tracking-widest border-b border-eco-gray/10 pb-3 mb-4 flex justify-between">
              <span>GEMINI Y ECO TRABAJANDO</span>
              {phase >= 3 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <GeminiSparkle className="text-eco-accent font-bold" />
                </motion.div>
              )}
            </div>
            <div className="flex-grow">
              <h4 className="text-eco-chalk font-bold text-lg mb-1">Estructurando tu sesión</h4>
              <p className="text-eco-gray text-[10px] mb-4">Todo listo en segundo plano</p>
              
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  {text: "Extrayendo preguntas de verificación", icon: "/assets/logo_gemini_2026_color_2x_web_96dp.png"}, 
                  {text: "Organizando Drive (IA-Ready)", icon: "/assets/logo_drive_2026q2_color_2x_web_96dp.png"}, 
                  {text: "Creando sesión en Classroom", icon: "/assets/logo_classroom_color_2x_web_96dp.png"}
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3 text-eco-gray text-sm bg-eco-slate/50 p-2 rounded-lg border border-eco-gray/5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.5 + i * 0.4 }}
                  >
                    <Image src={item.icon} alt="icon" width={16} height={16} />
                    {item.text}
                  </motion.li>
                ))}
              </ul>

              {/* Status Note */}
              <motion.div 
                className="bg-eco-slate border border-eco-accent/30 rounded-lg p-3 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={phase >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <div className="text-[10px] font-mono text-eco-accent mb-1">Setup Automático</div>
                <div className="text-eco-chalk text-sm font-medium italic">Ecosistema estructurado para recopilar datos de aprendizaje.</div>
              </motion.div>
            </div>
            {phase >= 4 && (
              <motion.div 
                className="mt-4 text-center font-mono text-[10px] text-eco-gray border border-eco-gray/20 rounded-full py-1.5"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              >
                Proceso invisible al usuario
              </motion.div>
            )}
          </motion.div>

          {/* Connection Line 2 -> 3 (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 right-[30%] w-[10%] h-px bg-eco-gray/20 -translate-y-1/2">
            {phase >= 5 && (
              <motion.div 
                className="h-full bg-eco-accent shadow-[0_0_8px_#7CFFB2]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>

          {/* Card 3: ECO CREA */}
          <motion.div 
            className="w-full lg:w-1/3 bg-eco-base border border-eco-gray/20 rounded-2xl p-6 flex flex-col relative shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-mono text-[10px] text-eco-gray tracking-widest border-b border-eco-gray/10 pb-3 mb-4">
              ECO DEJA TODO LISTO
            </div>
            <div className="flex-grow">
              <h4 className="text-eco-chalk font-bold text-lg mb-1">Ecosistema preparado</h4>
              <p className="text-eco-gray text-sm mb-6">Drive, Classroom y Forms conectados</p>

              {/* Final Status UI */}
              <motion.div 
                className="bg-eco-slate rounded-xl border border-eco-gray/10 p-5 flex flex-col items-center justify-center text-center gap-6 h-36"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={phase >= 6 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <div className="flex gap-4">
                  <Image src="/assets/logo_drive_2026q2_color_2x_web_96dp.png" alt="Drive" width={32} height={32} />
                  <Image src="/assets/logo_forms_2026q2_color_2x_web_96dp.png" alt="Forms" width={32} height={32} />
                  <Image src="/assets/logo_classroom_color_2x_web_96dp.png" alt="Classroom" width={32} height={32} />
                </div>
                <div className="text-eco-accent font-mono text-[10px] tracking-widest bg-eco-accent/10 px-3 py-1.5 rounded-full border border-eco-accent/20">
                  LISTO PARA INICIAR CLASE
                </div>
              </motion.div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-2 pt-4 border-t border-eco-gray/10">
              <span className="text-xs font-mono text-eco-gray/80">Cero trabajo manual para el docente</span>
              <div className="w-2 h-2 rounded-full bg-eco-accent animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
