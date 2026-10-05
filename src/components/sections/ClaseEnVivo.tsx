"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { GeminiSparkle } from "../GeminiSparkle";

export function ClaseEnVivo() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStage, setActiveStage] = useState(0); // 0: Imparte, 1: Lanza ECO, 2: Recolecta

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle through stages
  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 3);
    }, 15000); // 15 seconds per stage
    return () => clearInterval(timer);
  }, [isInView, activeStage]);

  const stages = [
    { title: "Imparte tu clase", desc: "Presenta tu material directamente desde la plataforma con herramientas de pizarra en vivo." },
    { title: "Lanza el ECO", desc: "En los últimos minutos, proyecta el QR del Exit Ticket con un solo clic." },
    { title: "Monitorea en tiempo real", desc: "Observa cómo llegan las respuestas al instante y quién ya participó." }
  ];

  return (
    <section id="en-vivo" className="relative min-h-screen bg-eco-base overflow-hidden flex items-center py-24" ref={ref}>
      {/* Background */}
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
        <div className="absolute inset-0 bg-eco-base/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-eco-base via-eco-base/90 to-transparent lg:to-eco-base/60" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col gap-12">

        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="font-mono text-xs text-eco-accent tracking-widest mb-4">
            04 · CLASE EN VIVO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-eco-chalk mb-6">
            Proyecta. Lanza el ECO. <span className="text-eco-accent font-serif italic">Recolecta.</span>
          </h2>
          <p className="text-lg text-eco-gray">
            Presenta tus contenidos, activa el exit ticket y monitorea las respuestas de tu grupo antes de que salgan del aula.
          </p>
        </div>

        {/* Stages Navigation (Horizontal) */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {stages.map((stage, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`flex-1 max-w-sm text-left p-4 rounded-xl border transition-all duration-300 ${activeStage === i ? 'bg-eco-slate/90 border-eco-accent shadow-[0_0_20px_rgba(124,255,178,0.1)]' : 'bg-eco-base/50 border-eco-gray/20 hover:border-eco-gray/50'}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStage === i ? 'bg-eco-accent text-eco-base' : 'bg-eco-gray/20 text-eco-gray'}`}>
                  {i + 1}
                </div>
                <h3 className={`font-bold ${activeStage === i ? 'text-eco-chalk' : 'text-eco-gray'}`}>{stage.title}</h3>
              </div>
              <p className={`text-sm ${activeStage === i ? 'text-eco-gray/90' : 'text-eco-gray/50'}`}>{stage.desc}</p>

              {/* Progress Bar indicator */}
              <div className="h-1 w-full bg-eco-gray/20 rounded-full mt-4 overflow-hidden">
                {activeStage === i && (
                  <motion.div
                    className="h-full bg-eco-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 15, ease: "linear" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Dynamic Display Area */}
        <div className="w-full max-w-5xl mx-auto h-[500px] relative perspective-1000">
          <AnimatePresence mode="wait">

            {/* STAGE 0: IMPARTE */}
            {activeStage === 0 && (
              <motion.div
                key="stage0"
                className="absolute inset-0 bg-eco-slate border border-eco-gray/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, rotateX: 10, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -10, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Platform Top Bar */}
                <div className="bg-eco-base/80 px-6 py-3 flex justify-between items-center border-b border-eco-gray/10">
                  <span className="font-mono text-xs text-eco-gray">Sistemas Distribuidos · Presentación</span>
                  <div className="flex gap-4">
                    <span className="text-xs text-eco-gray bg-eco-gray/10 px-2 py-1 rounded">Herramientas de Pizarra</span>
                    <span className="text-xs text-eco-accent bg-eco-accent/10 px-2 py-1 rounded flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-eco-accent animate-pulse" /> En Vivo
                    </span>
                  </div>
                </div>
                {/* Slide Area */}
                <div className="flex-1 p-8 flex items-center justify-center relative bg-white/5">
                  <div className="w-full max-w-2xl aspect-[16/9] bg-white rounded flex flex-col p-10 relative shadow-lg font-serif text-black">
                    <h3 className="text-2xl font-bold mb-6 border-b-2 border-black/10 pb-4 text-center">
                      1.3. Modelos de Consistencia
                    </h3>

                    <div className="space-y-6 text-lg leading-relaxed">
                      <p>
                        En un sistema distribuido, la <strong>replicación</strong> se utiliza para incrementar la fiabilidad y el rendimiento. Sin embargo, mantener las copias sincronizadas introduce latencia.
                      </p>
                      <ul className="list-disc pl-8 space-y-2">
                        <li><strong>Consistencia Estricta:</strong> Cualquier lectura sobre un dato <span className="italic">x</span> retorna el valor correspondiente a la escritura más reciente en <span className="italic">x</span>.</li>
                        <li><strong>Consistencia Eventual:</strong> Si no se realizan nuevas escrituras, eventualmente todos los accesos retornarán el mismo valor.</li>
                      </ul>
                    </div>

                    {/* Subtle teacher annotation simulating laser pointer or marker */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <motion.path d="M 120 220 Q 200 240 300 220" fill="none" stroke="#7CFFB2" strokeWidth="3"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }} />
                    </svg>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE 1: LANZA EL ECO */}
            {activeStage === 1 && (
              <motion.div
                key="stage1"
                className="absolute inset-0 bg-[#080d0b] border border-eco-accent/30 rounded-2xl shadow-[0_0_50px_rgba(124,255,178,0.1)] overflow-hidden flex flex-col items-center justify-center relative"
                initial={{ opacity: 0, rotateX: 10, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -10, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Massive Sonar Wave Effect */}
                <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div className="w-64 h-64 border-2 border-eco-accent/50 rounded-full" animate={{ scale: [1, 4], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.div className="absolute w-64 h-64 border-2 border-eco-accent/30 rounded-full" animate={{ scale: [1, 4], opacity: [1, 0] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity }} />
                </motion.div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="font-mono text-eco-accent tracking-widest mb-4">EXIT TICKET ACTIVADO</div>

                  {/* QR Card */}
                  <div className="bg-white p-4 rounded-2xl shadow-2xl relative mb-6">
                    <svg viewBox="0 0 10 10" className="w-48 h-48 text-black" fill="currentColor">
                      <path d="M1 1h3v3H1V1zm1 1v1h1V2H2z" />
                      <path d="M6 1h3v3H6V1zm1 1v1h1V2H7z" />
                      <path d="M1 6h3v3H1V6zm1 1v1h1V7H2z" />
                      <rect x="5" y="5" width="1" height="1" />
                      <rect x="7" y="5" width="1" height="1" />
                      <rect x="5" y="7" width="1" height="1" />
                      <rect x="8" y="7" width="1" height="1" />
                      <rect x="6" y="8" width="1" height="1" />
                      <rect x="8" y="8" width="1" height="1" />
                      <rect x="5" y="1" width="1" height="1" />
                      <rect x="5" y="3" width="1" height="1" />
                      <rect x="1" y="5" width="1" height="1" />
                      <rect x="3" y="5" width="1" height="1" />
                    </svg>
                    <motion.div className="absolute left-0 right-0 h-[3px] bg-[#7CFFB2] shadow-[0_0_15px_#7CFFB2]" animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
                  </div>

                  <h3 className="text-2xl font-bold text-eco-chalk">Escanea para enviar tus respuestas</h3>
                </div>
              </motion.div>
            )}

            {/* STAGE 2: RECOLECTA */}
            {activeStage === 2 && (
              <motion.div
                key="stage2"
                className="absolute inset-0 bg-eco-slate border border-eco-gray/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, rotateX: 10, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -10, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-eco-base/80 px-6 py-4 flex justify-between items-center border-b border-eco-gray/10">
                  <span className="font-mono text-sm text-eco-chalk">Recepción de Respuestas y Asistencia</span>
                  <div className="bg-eco-accent/10 text-eco-accent font-bold px-4 py-1.5 rounded-full font-mono text-sm border border-eco-accent/20 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-eco-accent animate-pulse" />
                    24 / 30 Respondieron
                  </div>
                </div>

                <div className="bg-eco-danger/10 border-b border-eco-danger/20 px-6 py-2 flex items-center justify-center">
                  <span className="text-xs font-mono text-eco-danger/80">
                    * El análisis pedagógico (ECOSonar) se ejecuta al cerrar la sesión con toda la data recolectada.
                  </span>
                </div>

                <div className="flex-1 p-8 flex items-center justify-between relative overflow-hidden">

                  {/* Left: Incoming Student Responses (Funneling into center) */}
                  <div className="flex flex-col gap-6 w-[30%] relative z-10 pl-4 mt-8">
                    <div className="font-mono text-xs text-eco-gray absolute -top-12 left-4 flex items-center gap-2 bg-eco-base/80 py-1.5 px-3 rounded-full border border-eco-gray/10">
                      <Image src="/assets/logo_forms_2026q2_color_2x_web_96dp.png" alt="Forms" width={14} height={14} />
                      <span className="text-eco-gray/80">Sincronizando Forms...</span>
                    </div>
                    {[
                      { name: "Ana S.", delay: 0.2 },
                      { name: "Carlos M.", delay: 1.5 },
                      { name: "Lucía R.", delay: 2.8 },
                      { name: "Diego T.", delay: 4.1 },
                    ].map((student, i) => (
                      <motion.div
                        key={i}
                        className="bg-eco-base border border-eco-gray/10 rounded-full py-2 px-4 flex gap-3 items-center w-fit shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 150, 250], scale: [0.8, 1, 1, 0.5] }}
                        transition={{ duration: 6, delay: student.delay, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-eco-accent/20 text-eco-accent flex items-center justify-center font-bold font-mono text-[10px]">
                          {student.name[0]}
                        </div>
                        <div className="text-xs text-eco-chalk whitespace-nowrap">{student.name} <span className="text-eco-gray/50 ml-1">· Presente</span></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Center: ECO / Gemini Extraction Core */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-0">
                    <div className="relative flex items-center justify-center">
                      {/* Sonar waves */}
                      <motion.div className="absolute w-40 h-40 border border-eco-accent/40 rounded-full" animate={{ scale: [1, 2.5], opacity: [1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
                      <motion.div className="absolute w-40 h-40 border border-eco-accent/20 rounded-full" animate={{ scale: [1, 2.5], opacity: [1, 0] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} />

                      {/* Core */}
                      <motion.div className="absolute w-20 h-20 border-2 border-eco-accent rounded-full bg-eco-base flex items-center justify-center shadow-[0_0_30px_rgba(124,255,178,0.3)] z-10">
                        <span className="text-eco-chalk font-serif text-2xl font-bold text-center leading-tight">ECO</span>
                      </motion.div>
                    </div>
                    <div className="absolute top-24 font-mono text-[10px] text-eco-accent tracking-widest text-center whitespace-nowrap flex items-center gap-1 bg-eco-accent/10 px-2 py-1 rounded">
                      ALMACENANDO EVIDENCIA
                    </div>
                  </div>

                  {/* Right: Floating Doubts Output */}
                  <div className="flex flex-col justify-center gap-8 w-[35%] relative z-10 pr-4">
                    <div className="font-mono text-xs text-eco-accent/70 absolute -top-8 left-0">Dudas capturadas</div>

                    <motion.div className="bg-eco-base/95 backdrop-blur-md border border-eco-gray/20 rounded-xl p-4 text-sm text-eco-chalk w-fit relative shadow-xl"
                      initial={{ opacity: 0, x: -50, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 1.5, delay: 1.5, type: "spring" }}>
                      "¿Qué pasa si falla el nodo?"
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-eco-accent rounded-full shadow-[0_0_8px_#7CFFB2]" />
                    </motion.div>

                    <motion.div className="bg-eco-base/95 backdrop-blur-md border border-eco-gray/20 rounded-xl p-4 text-sm text-eco-chalk w-fit ml-8 relative shadow-xl"
                      initial={{ opacity: 0, x: -50, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 1.5, delay: 3.2, type: "spring" }}>
                      "No entendí la replicación"
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-eco-accent rounded-full shadow-[0_0_8px_#7CFFB2]" />
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
