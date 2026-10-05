"use client";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { EcoPulse } from "../EcoPulse";
import { GeminiSparkle } from "../GeminiSparkle";

export function EcoSonar() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const [conceptScore, setConceptScore] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    // Only animate score when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(0, 42, {
            duration: 2,
            onUpdate: (latest) => setConceptScore(Math.round(latest)),
          });
          setTimeout(() => setShowSuggestion(true), 3000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const radarScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1]);
  const radarOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  const sectors = ["SINTAXIS", "CONCEPTO_BASE", "LÓGICA", "MÉTRICAS"];

  return (
    <section id="eco" className="relative min-h-screen flex items-center overflow-hidden bg-eco-base py-24" ref={ref}>
      {/* Background Section */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/students_leaving.jpg')" }}
        />
        <div className="absolute inset-0 bg-eco-base/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-eco-base via-transparent to-eco-base" />
      </motion.div>

      {/* Number behind */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 z-0">
        <span className="text-[400px] font-serif font-bold text-eco-accent">05</span>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text and Radar */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-12">
          <div className="max-w-lg">
            <div className="font-mono text-xs text-eco-accent tracking-widest mb-6">
              05 · ECOSONAR · ANÁLISIS CON GEMINI
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              El silencio también<br/>
              <span className="text-eco-accent font-serif italic">deja datos.</span>
            </h2>
            <p className="text-xl text-eco-gray">
              Gemini analiza las respuestas del exit ticket junto con los conceptos de tu clase. ECO detecta brechas, identifica falsa confianza y propone cómo abrir la siguiente sesión.
            </p>
          </div>

          {/* Radar Visualization */}
          <motion.div 
            className="relative w-80 h-80 md:w-96 md:h-96"
            style={{ scale: radarScale, opacity: radarOpacity }}
          >
            {/* Background Pulse */}
            <EcoPulse active={true} intensity="soft" />
            
            {/* Radar Lines */}
            <div className="absolute inset-0 rounded-full border border-eco-accent/20" />
            <div className="absolute inset-4 rounded-full border border-eco-accent/30" />
            <div className="absolute inset-12 rounded-full border border-eco-accent/40" />
            <div className="absolute inset-24 rounded-full border border-eco-accent/50" />
            
            {/* Crosshairs */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-eco-accent/30 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-eco-accent/30 -translate-x-1/2" />

            {/* Sector Labels */}
            {sectors.map((sector, i) => {
              const posClasses = [
                "top-4 left-1/2 -translate-x-1/2",
                "top-1/2 right-4 translate-x-1/2 -translate-y-1/2",
                "bottom-4 left-1/2 -translate-x-1/2",
                "top-1/2 left-4 -translate-x-1/2 -translate-y-1/2"
              ];
              return (
                <div key={sector} className={`absolute ${posClasses[i]} font-mono text-[10px] text-eco-gray/80 tracking-widest bg-eco-base/50 px-2 rounded backdrop-blur-sm z-10`}>
                  {sector}
                </div>
              );
            })}

            {/* Pings and Gap Line */}
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-eco-gray shadow-[0_0_15px_#9BAFA4] top-[20%] left-[30%]"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }}
            />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-eco-gray shadow-[0_0_15px_#9BAFA4] top-[40%] left-[70%]"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }}
            />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-eco-gray shadow-[0_0_15px_#9BAFA4] bottom-[30%] right-[30%]"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.9, type: "spring" }}
            />
            
            {/* The Gap Ping (Danger/Warning) in LÓGICA sector */}
            <motion.div 
              className="absolute w-4 h-4 rounded-full bg-eco-danger shadow-[0_0_20px_#FF6B5E] bottom-[20%] left-[40%] z-20"
              initial={{ scale: 0 }} 
              whileInView={{ scale: 1 }} 
              transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-eco-danger"
                animate={{ scale: [1, 2.5], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Red line indicating breach */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 400">
              <motion.path
                d="M 200 200 L 160 320"
                stroke="#FF6B5E"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Right Side: Diagnostic Card */}
        <div className="w-full max-w-md mx-auto lg:ml-auto relative">
          <motion.div 
            className="bg-eco-slate/95 backdrop-blur-xl border border-eco-gray/20 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* 01 GEMINI LEE */}
            <div className="p-6 border-b border-eco-gray/10">
              <div className="text-[10px] font-mono text-eco-gray mb-1 tracking-widest flex items-center justify-between">
                <span>01 · GEMINI LEE</span>
                <GeminiSparkle />
              </div>
              <div className="text-sm text-eco-chalk">Respuestas anónimas + conceptos de la sesión</div>
            </div>

            {/* 02 ECO DETECTA */}
            <div className="p-6 border-b border-eco-gray/10 relative">
              <div className="text-[10px] font-mono text-eco-gray mb-4 tracking-widest">
                02 · ECO DETECTA
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-mono text-eco-chalk text-sm mb-1">Punteros en C</div>
                  <div className="text-xs text-eco-gray/70 font-mono">P1/P2 altos · P4 bajo</div>
                </div>
                <div className="text-4xl font-mono text-eco-danger font-bold flex items-end">
                  {conceptScore}<span className="text-xl mb-1">%</span>
                </div>
              </div>
              <div className="font-mono text-xs text-eco-danger font-semibold bg-eco-danger/10 px-3 py-1.5 rounded-full inline-block border border-eco-danger/20">
                FALSA CONFIANZA DETECTADA
              </div>
            </div>

            {/* 03 GEMINI PROPONE */}
            <div className="p-6">
              <div className="text-[10px] font-mono text-eco-gray mb-4 tracking-widest flex items-center justify-between">
                <span>03 · GEMINI PROPONE</span>
                {showSuggestion && <GeminiSparkle />}
              </div>
              
              <div className="min-h-[140px]">
                {showSuggestion && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="text-sm font-bold text-eco-chalk">Plan de apertura · 10 minutos</div>
                    
                    <div className="flex flex-col gap-3 text-sm text-eco-gray">
                      <div>
                        <span className="text-eco-accent block text-xs font-mono mb-0.5">01 · Analogía</span>
                        <span className="text-eco-chalk">“Una dirección no es la casa: un puntero guarda dónde encontrar un valor.”</span>
                      </div>
                      <div>
                        <span className="text-eco-accent block text-xs font-mono mb-0.5">02 · Micro-reto · 2 min</span>
                        <span className="text-eco-chalk">Identifica qué variable cambia y cuál conserva la dirección en este fragmento.</span>
                      </div>
                      <div>
                        <span className="text-eco-accent block text-xs font-mono mb-0.5">03 · Contraejemplo</span>
                        <span className="text-eco-chalk">Mostrar por qué modificar una copia no cambia el valor original.</span>
                      </div>
                    </div>

                  </motion.div>
                )}
                {!showSuggestion && (
                  <div className="flex items-center gap-2 h-full text-eco-accent/50 pt-10 pl-4">
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-eco-accent" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-eco-accent" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-eco-accent" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} />
                  </div>
                )}
              </div>
            </div>

            {/* AI Suggestion Label */}
            <div className="bg-eco-base/80 p-4 border-t border-eco-gray/10 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-mono text-eco-gray mb-1 flex items-center justify-center">
                <GeminiSparkle className="text-eco-accent mr-1" /> Propuesta generada con Gemini
              </span>
              <span className="text-[9px] font-mono text-eco-gray/60 italic">
                Revisable, editable y aprobable por el docente.
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
