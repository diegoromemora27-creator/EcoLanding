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

  const metrics = [
    {
      value: "3",
      suffix: " Grupos",
      label: "Licenciatura UNAM",
      desc: "Implementado activamente en asignaturas universitarias por personal docente de la UNAM.",
      highlight: false,
    },
    {
      value: "60+",
      suffix: " Alumnos",
      label: "Estudiantes Impactados",
      desc: "Participación interactiva y diagnóstico continuo clase tras clase.",
      highlight: false,
    },
    {
      value: "En Vivo",
      suffix: "",
      label: "Detección Temprana",
      desc: "Comprensión a tiempo de qué está pasando con los alumnos antes de que reprueben.",
      highlight: true,
    },
    {
      value: "+30%",
      suffix: "",
      label: "Aprobación en Exámenes",
      desc: "Aumento en el índice de aprobación en las evaluaciones posteriores a su adopción.",
      highlight: true,
    },
  ];

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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col gap-12 md:gap-16">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-eco-slate/90 border border-eco-accent/30 mb-5 shadow-lg backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-eco-accent animate-ping" />
            <span className="w-2 h-2 rounded-full bg-eco-accent -ml-4" />
            <span className="font-mono text-xs tracking-wider text-eco-chalk uppercase font-semibold">
              Validado en la UNAM
            </span>
            <span className="text-eco-accent text-xs">·</span>
            <span className="text-xs text-eco-gray">Casos Reales en Aula</span>
          </motion.div>

          <div className="font-mono text-xs text-eco-accent tracking-widest mb-3 md:mb-4">
            04 · DEMO EN VIVO Y RESULTADOS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-eco-chalk mb-4 md:mb-6">
            Observa a ECO en acción.{" "}
            <span className="text-eco-accent font-serif italic font-normal">
              Resultados comprobados.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-eco-gray leading-relaxed text-balance max-w-2xl">
            La plataforma ya está siendo utilizada por <strong className="text-eco-chalk font-semibold">personal docente de la UNAM</strong>, permitiendo entender a tiempo qué dudas tienen los estudiantes antes de que sea demasiado tarde.
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

        {/* Impact & Evidence Metrics Grid */}
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((item, idx) => (
              <motion.div
                key={idx}
                className={`p-5 md:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? "bg-eco-slate/80 border-eco-accent/40 shadow-[0_0_25px_rgba(124,255,178,0.08)]"
                    : "bg-eco-base/70 border-eco-gray/15 hover:border-eco-gray/30"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              >
                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className={`text-3xl md:text-4xl font-bold font-mono tracking-tight ${
                        item.highlight ? "text-eco-accent" : "text-eco-chalk"
                      }`}
                    >
                      {item.value}
                    </span>
                    {item.suffix && (
                      <span className="text-base md:text-lg font-semibold text-eco-gray">
                        {item.suffix}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-eco-chalk mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs text-eco-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.highlight && (
                  <div className="mt-4 pt-3 border-t border-eco-accent/15 flex items-center gap-1.5 text-[11px] font-mono text-eco-accent">
                    <div className="w-1.5 h-1.5 rounded-full bg-eco-accent animate-pulse" />
                    Impacto directo medido
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contextual Narrative Card */}
          <motion.div
            className="mt-6 p-6 rounded-2xl bg-eco-slate/60 border border-eco-gray/20 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-eco-accent/10 border border-eco-accent/30 flex items-center justify-center shrink-0 text-eco-accent text-lg">
                ✦
              </div>
              <div>
                <h4 className="text-sm font-bold text-eco-chalk mb-1">
                  Intervención Pedagógica Oportuna
                </h4>
                <p className="text-xs sm:text-sm text-eco-gray leading-relaxed max-w-3xl">
                  En lugar de esperar al examen parcial para descubrir qué temas no quedaron claros, los docentes identifican la confusión en el minuto 80 de clase. Con ese diagnóstico temprano, el índice de aprobación se elevó un <strong>30%</strong> en las evaluaciones posteriores.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-eco-base border border-eco-gray/20 font-mono text-xs text-eco-gray">
              <span>UNAM</span>
              <span className="text-eco-accent">✓ Activo</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
