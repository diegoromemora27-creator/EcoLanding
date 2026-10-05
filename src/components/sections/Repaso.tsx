"use client";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { EcoPulse } from "../EcoPulse";
import { GeminiSparkle } from "../GeminiSparkle";

export function Repaso() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const [afterScore, setAfterScore] = useState(0);
  const [deltaScore, setDeltaScore] = useState(0);
  const [showVerified, setShowVerified] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(0, 88, {
            duration: 2,
            delay: 1,
            onUpdate: (val) => setAfterScore(Math.round(val)),
          });
          animate(0, 46, {
            duration: 2,
            delay: 1,
            onUpdate: (val) => setDeltaScore(Math.round(val)),
          });
          setTimeout(() => setShowVerified(true), 3500);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="repaso" className="relative min-h-screen flex items-center overflow-hidden bg-eco-base" ref={ref}>
      {/* Background Section */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/assets/repaso_class.jpg')" }}
        />
        <div className="absolute inset-0 bg-eco-base/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-eco-base via-eco-base/80 to-transparent" />
      </motion.div>

      {/* Number behind */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-5 z-0 flex items-center">
        <span className="text-[400px] font-serif font-bold text-eco-accent mr-4">06</span>
        {/* Arc blending with number */}
        <div className="w-[500px] h-[800px] rounded-full border-l border-eco-accent/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text and Flow */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4 text-balance">
              <span className="block text-eco-gray/80">No basta detectar.</span>
              <span className="block text-eco-chalk">Hay que cerrar el ciclo.</span>
            </h2>
            <p className="text-xl text-eco-gray max-w-md">
              ECO convierte el diagnóstico en una tarea de repaso. Gemini propone actividades y una micro-verificación. Tú eliges, editas y confirmas cómo retomarlo con tu grupo.
            </p>
          </div>

          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-3 top-4 bottom-4 w-px bg-eco-gray/20" />
            
            <motion.div 
              className="relative pl-10 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="absolute left-0 top-1.5 w-6 h-6 bg-eco-base border border-eco-accent/50 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-eco-accent rounded-full group-hover:scale-150 transition-transform" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-lg font-bold text-eco-chalk">Plan de apertura</h4>
                <span className="text-[9px] font-mono text-eco-accent bg-eco-accent/10 px-2 py-0.5 rounded flex items-center gap-1">
                  <GeminiSparkle /> Propuesta inicial con Gemini
                </span>
              </div>
              <p className="text-eco-gray">ECO propone cómo retomar el tema.</p>
            </motion.div>

            <motion.div 
              className="relative pl-10 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute left-0 top-1.5 w-6 h-6 bg-eco-base border border-eco-accent/50 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-eco-accent rounded-full group-hover:scale-150 transition-transform" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-lg font-bold text-eco-chalk">Micro-verificación</h4>
                <span className="text-[9px] font-mono text-eco-gray bg-eco-gray/10 px-2 py-0.5 rounded">Editable antes de publicar</span>
              </div>
              <p className="text-eco-gray">Una pregunta, un QR, 60 segundos.</p>
            </motion.div>

            <motion.div 
              className="relative pl-10 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="absolute left-0 top-1.5 w-6 h-6 bg-eco-base border border-eco-accent/50 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-eco-accent rounded-full group-hover:scale-150 transition-transform" />
              </div>
              <h4 className="text-lg font-bold text-eco-chalk">Delta de aprendizaje</h4>
              <p className="text-eco-gray">Mide la mejora real.</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Delta Card */}
        <div className="w-full max-w-md mx-auto lg:ml-auto">
          <motion.div 
            className="bg-eco-slate/90 backdrop-blur-xl border border-eco-gray/20 p-8 rounded-2xl shadow-2xl relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs text-eco-gray mb-8 tracking-widest border-b border-eco-gray/20 pb-4">
              DELTA DE APRENDIZAJE · PUNTEROS EN C
            </div>

            <div className="space-y-6 mb-10">
              {/* Antes */}
              <div>
                <div className="flex justify-between font-mono text-sm mb-2">
                  <span className="text-eco-gray">ANTES</span>
                  <span className="text-eco-warning">42%</span>
                </div>
                <div className="h-2 w-full bg-eco-base rounded-full overflow-hidden">
                  <motion.div className="h-full bg-eco-warning" initial={{ width: 0 }} whileInView={{ width: "42%" }} transition={{ duration: 1 }} />
                </div>
              </div>

              {/* Después */}
              <div>
                <div className="flex justify-between font-mono text-sm mb-2">
                  <span className="text-eco-gray">DESPUÉS</span>
                  <span className="text-eco-accent">{afterScore}%</span>
                </div>
                <div className="h-2 w-full bg-eco-base rounded-full overflow-hidden">
                  <motion.div className="h-full bg-eco-accent" initial={{ width: 0 }} whileInView={{ width: "88%" }} transition={{ duration: 2, delay: 1 }} />
                </div>
              </div>

              {/* Delta */}
              <div className="pt-4 flex justify-between items-end">
                <span className="font-mono text-eco-gray text-sm">DELTA</span>
                <span className="font-mono text-4xl font-bold text-eco-accent">+{deltaScore}%</span>
              </div>
            </div>

            {/* Verificado Stamp */}
            <div className="relative flex justify-center border-t border-eco-gray/20 pt-6">
              {showVerified ? (
                <motion.div 
                  className="flex items-center gap-2 border border-eco-accent text-eco-accent px-4 py-2 rounded-full font-mono text-sm relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-eco-accent" />
                  ESTADO: VERIFICADO
                  {/* Single Sonar Pulse */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-eco-accent"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </motion.div>
              ) : (
                <div className="flex items-center gap-2 text-eco-gray/50 px-4 py-2 font-mono text-sm">
                  <div className="w-2 h-2 rounded-full bg-eco-gray/50 animate-pulse" />
                  CALCULANDO...
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
