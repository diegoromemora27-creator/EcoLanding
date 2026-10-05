"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { GeminiSparkle } from "../GeminiSparkle";

export function ClaseEnVivo() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStage, setActiveStage] = useState(0); // 0: Imparte, 1: Lanza ECO, 2: Recolecta
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <section id="en-vivo" className="relative min-h-screen bg-eco-base overflow-hidden flex items-center py-20 md:py-24" ref={ref}>
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col gap-8 md:gap-12">

        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-8">
          <div className="font-mono text-xs text-eco-accent tracking-widest mb-3 md:mb-4">
            04 · CLASE EN VIVO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-eco-chalk mb-4 md:mb-6">
            Proyecta. Lanza el ECO. <span className="text-eco-accent font-serif italic">Recolecta.</span>
          </h2>
          <p className="text-base sm:text-lg text-eco-gray">
            Presenta tus contenidos, activa el exit ticket y monitorea las respuestas de tu grupo antes de que salgan del aula.
          </p>
        </div>

        {/* Stages Navigation (Horizontal) */}
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-12">
          {stages.map((stage, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`flex-1 max-w-sm text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 ${activeStage === i ? 'bg-eco-slate/90 border-eco-accent shadow-[0_0_20px_rgba(124,255,178,0.1)]' : 'bg-eco-base/50 border-eco-gray/20 hover:border-eco-gray/50'}`}
            >
              <div className="flex items-center gap-3 mb-1.5 md:mb-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activeStage === i ? 'bg-eco-accent text-eco-base' : 'bg-eco-gray/20 text-eco-gray'}`}>
                  {i + 1}
                </div>
                <h3 className={`font-bold text-sm sm:text-base ${activeStage === i ? 'text-eco-chalk' : 'text-eco-gray'}`}>{stage.title}</h3>
              </div>
              <p className={`text-xs sm:text-sm ${activeStage === i ? 'text-eco-gray/90' : 'text-eco-gray/50'}`}>{stage.desc}</p>

              {/* Progress Bar indicator */}
              <div className="h-1 w-full bg-eco-gray/20 rounded-full mt-3 md:mt-4 overflow-hidden">
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
        <div className="w-full max-w-5xl mx-auto h-[480px] sm:h-[500px] relative perspective-1000">
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
                <div className="bg-eco-base/80 px-4 md:px-6 py-2.5 md:py-3 flex justify-between items-center border-b border-eco-gray/10">
                  <span className="font-mono text-[11px] md:text-xs text-eco-gray truncate">Sistemas Distribuidos · Presentación</span>
                  <div className="flex gap-2 md:gap-4 shrink-0">
                    <span className="text-[10px] md:text-xs text-eco-gray bg-eco-gray/10 px-2 py-0.5 md:py-1 rounded hidden sm:inline">Herramientas de Pizarra</span>
                    <span className="text-[10px] md:text-xs text-eco-accent bg-eco-accent/10 px-2 py-0.5 md:py-1 rounded flex items-center gap-1.5 md:gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-eco-accent animate-pulse" /> En Vivo
                    </span>
                  </div>
                </div>
                {/* Slide Area */}
                <div className="flex-1 p-3 sm:p-6 md:p-8 flex items-center justify-center relative bg-white/5">
                  <div className="w-full max-w-2xl aspect-[16/9] bg-white rounded-lg md:rounded flex flex-col p-4 sm:p-7 md:p-10 relative shadow-lg font-serif text-black overflow-hidden">
                    <h3 className="text-sm sm:text-lg md:text-2xl font-bold mb-2 sm:mb-4 md:mb-6 border-b sm:border-b-2 border-black/10 pb-1.5 sm:pb-3 md:pb-4 text-center">
                      1.3. Modelos de Consistencia
                    </h3>

                    <div className="space-y-2 sm:space-y-4 md:space-y-6 text-[10px] sm:text-xs md:text-lg leading-relaxed">
                      <p>
                        En un sistema distribuido, la <strong>replicación</strong> se utiliza para incrementar la fiabilidad y el rendimiento. Sin embargo, mantener las copias sincronizadas introduce latencia.
                      </p>
                      <ul className="list-disc pl-5 md:pl-8 space-y-1 md:space-y-2">
                        <li><strong>Consistencia Estricta:</strong> Cualquier lectura sobre un dato <span className="italic">x</span> retorna la escritura más reciente.</li>
                        <li><strong>Consistencia Eventual:</strong> Si no hay nuevas escrituras, eventualmente retornarán el mismo valor.</li>
                      </ul>
                    </div>

                    {/* Subtle teacher annotation simulating laser pointer or marker */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <motion.path d="M 60 140 Q 150 160 220 140" fill="none" stroke="#7CFFB2" strokeWidth="3"
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
                className="absolute inset-0 bg-[#080d0b] border border-eco-accent/30 rounded-2xl shadow-[0_0_50px_rgba(124,255,178,0.1)] overflow-hidden flex flex-col items-center justify-center relative p-4"
                initial={{ opacity: 0, rotateX: 10, y: 20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -10, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Massive Sonar Wave Effect */}
                <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div className="w-48 h-48 md:w-64 md:h-64 border-2 border-eco-accent/50 rounded-full" animate={{ scale: [1, 3.5], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.div className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-eco-accent/30 rounded-full" animate={{ scale: [1, 3.5], opacity: [1, 0] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity }} />
                </motion.div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="font-mono text-xs md:text-sm text-eco-accent tracking-widest mb-3 md:mb-4">EXIT TICKET ACTIVADO</div>

                  {/* QR Card */}
                  <div className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl relative mb-4 md:mb-6">
                    <svg viewBox="0 0 10 10" className="w-32 h-32 md:w-48 md:h-48 text-black" fill="currentColor">
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

                  <h3 className="text-lg md:text-2xl font-bold text-eco-chalk text-center px-4">Escanea para enviar tus respuestas</h3>
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
                <div className="bg-eco-base/80 px-3 sm:px-6 py-2.5 sm:py-4 flex justify-between items-center border-b border-eco-gray/10">
                  <span className="font-mono text-xs sm:text-sm text-eco-chalk truncate pr-2">Recepción de Respuestas y Asistencia</span>
                  <div className="bg-eco-accent/10 text-eco-accent font-bold px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full font-mono text-xs sm:text-sm border border-eco-accent/20 flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-eco-accent animate-pulse" />
                    24 / 30 Respondieron
                  </div>
                </div>

                <div className="bg-eco-danger/10 border-b border-eco-danger/20 px-3 md:px-6 py-1.5 md:py-2 flex items-center justify-center text-center">
                  <span className="text-[10px] md:text-xs font-mono text-eco-danger/80 leading-tight">
                    * El análisis pedagógico (ECOSonar) se ejecuta al cerrar la sesión con toda la data recolectada.
                  </span>
                </div>

                <div className="flex-1 p-3 sm:p-6 md:p-8 flex items-center justify-between relative overflow-hidden">

                  {/* Left: Incoming Student Responses (Funneling into center) */}
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[34%] sm:w-[32%] md:w-[30%] relative z-10 pl-1 md:pl-4 mt-6 md:mt-8">
                    <div className="font-mono text-[9px] md:text-xs text-eco-gray absolute -top-8 md:-top-12 left-1 md:left-4 flex items-center gap-1.5 md:gap-2 bg-eco-base/80 py-1 md:py-1.5 px-2 md:px-3 rounded-full border border-eco-gray/10 whitespace-nowrap shadow-sm">
                      <Image src="/assets/logo_forms_2026q2_color_2x_web_96dp.png" alt="Forms" width={12} height={12} className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      <span className="text-eco-gray/80"><span className="hidden sm:inline">Sincronizando </span>Forms...</span>
                    </div>
                    {[
                      { name: "Ana S.", delay: 0.2 },
                      { name: "Carlos M.", delay: 1.5 },
                      { name: "Lucía R.", delay: 2.8 },
                      { name: "Diego T.", delay: 4.1 },
                    ].map((student, i) => (
                      <motion.div
                        key={i}
                        className="bg-eco-base/90 border border-eco-gray/10 rounded-full py-1 px-2 md:py-2 md:px-4 flex gap-1.5 md:gap-3 items-center w-fit shadow-lg"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: [0, 1, 0.9, 0],
                          x: isMobile ? [-10, 0, 50, 90] : [-20, 0, 150, 240],
                          scale: isMobile ? [0.85, 1, 0.9, 0.35] : [0.8, 1, 1, 0.5]
                        }}
                        transition={{ duration: 6, delay: student.delay, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-eco-accent/20 text-eco-accent flex items-center justify-center font-bold font-mono text-[8px] md:text-[10px] shrink-0">
                          {student.name[0]}
                        </div>
                        <div className="text-[10px] md:text-xs text-eco-chalk whitespace-nowrap font-medium">
                          {student.name}
                          <span className="hidden sm:inline text-eco-gray/50 ml-1">· Presente</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Center: ECO / Gemini Extraction Core */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-0 pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      {/* Sonar waves */}
                      <motion.div className="absolute w-24 h-24 md:w-40 md:h-40 border border-eco-accent/40 rounded-full" animate={{ scale: [1, 2.2], opacity: [1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
                      <motion.div className="absolute w-24 h-24 md:w-40 md:h-40 border border-eco-accent/20 rounded-full" animate={{ scale: [1, 2.2], opacity: [1, 0] }} transition={{ duration: 3, delay: 1.5, repeat: Infinity }} />

                      {/* Core */}
                      <motion.div className="w-14 h-14 md:w-20 md:h-20 border-2 border-eco-accent rounded-full bg-eco-base flex items-center justify-center shadow-[0_0_20px_rgba(124,255,178,0.25)] md:shadow-[0_0_30px_rgba(124,255,178,0.3)] z-10">
                        <span className="text-eco-chalk font-serif text-lg md:text-2xl font-bold text-center leading-tight">ECO</span>
                      </motion.div>
                    </div>
                    <div className="absolute top-16 md:top-24 font-mono text-[7px] md:text-[10px] text-eco-accent tracking-wider md:tracking-widest text-center whitespace-nowrap flex items-center gap-1 bg-eco-accent/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded border border-eco-accent/20">
                      ALMACENANDO EVIDENCIA
                    </div>
                  </div>

                  {/* Right: Floating Doubts Output */}
                  <div className="flex flex-col justify-center gap-3 md:gap-8 w-[42%] md:w-[35%] relative z-10 pr-1 md:pr-4">
                    <div className="font-mono text-[9px] md:text-xs text-eco-accent/70 absolute -top-7 md:-top-8 left-0">Dudas capturadas</div>

                    <motion.div className="bg-eco-base/95 backdrop-blur-md border border-eco-gray/20 rounded-lg md:rounded-xl p-2 md:p-4 text-[11px] md:text-sm text-eco-chalk w-fit relative shadow-xl leading-snug"
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 1.5, delay: 1.5, type: "spring" }}>
                      "¿Qué pasa si falla el nodo?"
                      <div className="absolute -left-1 md:-left-2 top-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-eco-accent rounded-full shadow-[0_0_8px_#7CFFB2]" />
                    </motion.div>

                    <motion.div className="bg-eco-base/95 backdrop-blur-md border border-eco-gray/20 rounded-lg md:rounded-xl p-2 md:p-4 text-[11px] md:text-sm text-eco-chalk w-fit ml-1 sm:ml-4 md:ml-8 relative shadow-xl leading-snug"
                      initial={{ opacity: 0, x: -20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 1.5, delay: 3.2, type: "spring" }}>
                      "No entendí la replicación"
                      <div className="absolute -left-1 md:-left-2 top-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-eco-accent rounded-full shadow-[0_0_8px_#7CFFB2]" />
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
