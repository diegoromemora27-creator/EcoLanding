"use client";
import { motion } from "framer-motion";
import { GeminiSparkle } from "../GeminiSparkle";

export function Contacto() {
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
      desc: "Diagnóstico formativo continuo y participación en aula sesión tras sesión.",
      highlight: false,
    },
    {
      value: "En Vivo",
      suffix: "",
      label: "Detección Temprana",
      desc: "Comprensión a tiempo de qué está pasando con los alumnos antes de que fallen o reprueben.",
      highlight: true,
    },
    {
      value: "+30%",
      suffix: "",
      label: "Índice de Aprobación",
      desc: "Incremento registrado en las calificaciones de exámenes posteriores a la implementación.",
      highlight: true,
    },
  ];

  const team = [
    {
      initials: "DR",
      name: "Lic. Diego Romero Mora",
      role: "Dirección técnica y desarrollo tecnológico",
      desc: "Arquitectura integral de la plataforma, integración de modelos de inteligencia artificial y desarrollo tecnológico.",
    },
    {
      initials: "DA",
      name: "Dr. Daniel de Jesús Atencio",
      role: "Dirección conceptual y diseño pedagógico",
      desc: "Fundamentación pedagógica, diseño instruccional del ciclo de retroalimentación y evaluación formativa.",
    },
  ];

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-eco-slate/60 overflow-hidden">
      {/* Chalk Texture Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-14 md:gap-18">
        
        {/* Header & UNAM Validation */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-eco-base/90 border border-eco-accent/30 mb-5 shadow-lg backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-eco-accent animate-ping" />
            <span className="w-2 h-2 rounded-full bg-eco-accent -ml-4" />
            <span className="font-mono text-xs tracking-wider text-eco-chalk uppercase font-semibold">
              Validado en la UNAM
            </span>
            <span className="text-eco-accent text-xs">·</span>
            <span className="text-xs text-eco-gray">Casos Reales en Aula</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-eco-chalk mb-6">
            Da tu próxima clase con{" "}
            <span className="text-eco-accent font-serif italic font-normal">
              ventaja.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-eco-gray leading-relaxed text-balance">
            La plataforma ya está siendo utilizada por <strong className="text-eco-chalk font-semibold">personal docente de la UNAM</strong> en al menos 3 grupos de licenciatura, permitiendo mejorar la comprensión a tiempo de qué está pasando con los estudiantes antes de que fallen.
          </p>
        </div>

        {/* Video Player Demo */}
        <motion.div
          className="w-full max-w-5xl mx-auto flex flex-col"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-eco-base/95 border border-eco-gray/20 rounded-2xl shadow-[0_0_50px_rgba(124,255,178,0.08)] overflow-hidden">
            {/* Player Top Bar */}
            <div className="bg-eco-base px-4 sm:px-6 py-3 flex items-center justify-between border-b border-eco-gray/10">
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

            {/* Responsive Iframe */}
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

        {/* Statistics & Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              className={`p-5 md:p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${
                item.highlight
                  ? "bg-eco-base/90 border-eco-accent/40 shadow-[0_0_25px_rgba(124,255,178,0.08)]"
                  : "bg-eco-base/60 border-eco-gray/15 hover:border-eco-gray/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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

        {/* Project Leadership & Academic Direction */}
        <div className="flex flex-col gap-6 pt-6 border-t border-eco-gray/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-xs text-eco-accent tracking-widest uppercase font-semibold">
                Dirección del Proyecto
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-eco-chalk font-serif mt-1">
                Liderazgo y Desarrollo
              </h3>
            </div>
            <span className="text-xs font-mono text-eco-gray/70">
              ECO · Innovación Pedagógica y Tecnológica
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((person, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-eco-base/80 border border-eco-gray/15 hover:border-eco-accent/30 transition-all duration-300 flex items-start gap-4 backdrop-blur-sm group shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-eco-accent/10 border border-eco-accent/25 flex items-center justify-center text-eco-accent font-mono text-base font-bold shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(124,255,178,0.1)]">
                  {person.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-eco-chalk group-hover:text-eco-accent transition-colors">
                    {person.name}
                  </span>
                  <span className="text-xs font-mono text-eco-accent mt-0.5 font-medium">
                    {person.role}
                  </span>
                  <p className="text-xs text-eco-gray mt-2.5 leading-relaxed">
                    {person.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Note */}
          <div className="mt-4 p-5 rounded-2xl bg-eco-base/50 border border-eco-gray/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-eco-gray">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-eco-accent" />
              <span>
                Tus archivos y datos pedagógicos permanecen seguros en tu Google Workspace institucional.
              </span>
            </div>
            <div className="font-mono text-eco-chalk/70 shrink-0">
              UNAM · Investigación y Docencia
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
