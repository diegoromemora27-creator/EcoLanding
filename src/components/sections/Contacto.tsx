"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function Contacto() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 2000);
  };

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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-16 md:gap-20">
        
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

        {/* Two-Column Grid: Leadership & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Team / Direction & Guarantees */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs text-eco-accent tracking-widest uppercase font-semibold">
                Dirección del Proyecto
              </span>
              <h3 className="text-2xl font-bold text-eco-chalk font-serif mt-1">
                Liderazgo y Desarrollo
              </h3>
              <p className="text-sm text-eco-gray mt-2">
                Innovación tecnológica y conceptual para transformar la docencia universitaria.
              </p>
            </div>

            {/* Leadership Cards */}
            <div className="flex flex-col gap-4">
              {team.map((person, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-2xl bg-eco-base/80 border border-eco-gray/15 hover:border-eco-accent/30 transition-all duration-300 flex items-start gap-4 backdrop-blur-sm group shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-eco-accent/10 border border-eco-accent/25 flex items-center justify-center text-eco-accent font-mono text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(124,255,178,0.1)]">
                    {person.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-eco-chalk group-hover:text-eco-accent transition-colors">
                      {person.name}
                    </span>
                    <span className="text-xs font-mono text-eco-accent mt-0.5 font-medium">
                      {person.role}
                    </span>
                    <p className="text-xs text-eco-gray mt-2 leading-relaxed">
                      {person.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust points */}
            <div className="pt-4 border-t border-eco-gray/10 flex flex-col gap-4">
              {[
                "Respuesta en menos de 24 h",
                "Demo guiada de 20 minutos con tu material",
                "Tus archivos y datos permanecen en tu Google Workspace",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3.5 text-sm text-eco-chalk/80">
                  <div className="w-5 h-5 rounded-full bg-eco-base flex items-center justify-center flex-shrink-0 border border-eco-accent/30 text-eco-accent">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            <form 
              onSubmit={handleSubmit}
              className="bg-eco-base/90 p-6 sm:p-8 rounded-2xl border border-eco-gray/20 shadow-2xl flex flex-col gap-5 backdrop-blur-md"
            >
              <div>
                <h3 className="text-xl font-bold text-eco-chalk mb-1">
                  Agenda una sesión o solicita acceso
                </h3>
                <p className="text-xs text-eco-gray">
                  Cuéntanos qué asignatura impartes y cómo te gustaría integrar ECO.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-eco-gray tracking-widest uppercase">Nombre</label>
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre"
                    className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-3.5 py-2.5 text-sm text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-eco-gray tracking-widest uppercase">Institución</label>
                  <input
                    required
                    type="text"
                    placeholder="Ej. UNAM, Facultad..."
                    className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-3.5 py-2.5 text-sm text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono text-eco-gray tracking-widest uppercase">Correo Institucional / Electrónico</label>
                <input
                  required
                  type="email"
                  placeholder="correo@ejemplo.edu.mx"
                  className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-3.5 py-2.5 text-sm text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono text-eco-gray tracking-widest uppercase">Asignatura o Nivel</label>
                <input
                  required
                  type="text"
                  placeholder="Ej. Sistemas Distribuidos, 4° semestre"
                  className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-3.5 py-2.5 text-sm text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-mono text-eco-gray tracking-widest uppercase">Mensaje (Opcional)</label>
                <textarea
                  rows={3}
                  placeholder="¿Qué reto de comprensión te gustaría resolver primero?"
                  className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-3.5 py-2.5 text-sm text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={formState === "submitting" || formState === "success"}
                className="relative mt-2 bg-eco-accent text-eco-slate py-3.5 rounded-xl font-bold text-sm tracking-wide overflow-hidden transition-all disabled:opacity-80 group cursor-pointer hover:bg-eco-accent-alt"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {formState === "idle" && "Solicitar acceso / demo"}
                  {formState === "submitting" && (
                    <><div className="w-4 h-4 border-2 border-eco-slate/30 border-t-eco-slate rounded-full animate-spin" /> Enviando...</>
                  )}
                  {formState === "success" && "Solicitud enviada ✓"}
                </span>
                
                {formState === "idle" && (
                  <div className="absolute inset-0 border border-eco-slate/20 rounded-xl group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
