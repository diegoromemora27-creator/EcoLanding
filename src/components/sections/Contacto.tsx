"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function Contacto() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => setFormState("success"), 2000);
  };

  return (
    <section id="contacto" className="relative py-32 bg-eco-slate/60 overflow-hidden">
      {/* Chalk Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left Column: Copy */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-eco-chalk mb-6">
            Da tu próxima clase con <span className="text-eco-accent font-serif italic">ventaja.</span>
          </h2>
          <p className="text-xl text-eco-gray mb-12 max-w-md">
            Cuéntanos qué asignatura impartes y qué parte del ciclo quieres automatizar primero.
          </p>

          <div className="flex flex-col gap-6">
            {[
              "Respuesta en menos de 24 h",
              "Demo guiada de 20 minutos",
              "Tus archivos permanecen en tu Google Drive"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-eco-chalk/80">
                <div className="w-6 h-6 rounded-full bg-eco-base flex items-center justify-center flex-shrink-0 border border-eco-accent/30 text-eco-accent">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <form 
            onSubmit={handleSubmit}
            className="bg-eco-base/80 p-8 rounded-2xl border border-eco-gray/20 shadow-xl flex flex-col gap-6 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-eco-gray tracking-widest">NOMBRE</label>
                <input required type="text" className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-4 py-3 text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-eco-gray tracking-widest">INSTITUCIÓN</label>
                <input required type="text" className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-4 py-3 text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-eco-gray tracking-widest">CORREO ELECTRÓNICO</label>
              <input required type="email" className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-4 py-3 text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-eco-gray tracking-widest">ASIGNATURA O NIVEL</label>
              <input required type="text" className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-4 py-3 text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-eco-gray tracking-widest">MENSAJE (OPCIONAL)</label>
              <textarea rows={3} className="bg-eco-slate/50 border border-eco-gray/20 rounded-lg px-4 py-3 text-eco-chalk focus:outline-none focus:border-eco-accent transition-colors resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={formState === "submitting" || formState === "success"}
              className="relative mt-4 bg-eco-accent text-eco-slate py-4 rounded-xl font-bold tracking-wide overflow-hidden transition-all disabled:opacity-80 group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {formState === "idle" && "Solicitar demo"}
                {formState === "submitting" && (
                  <><div className="w-4 h-4 border-2 border-eco-slate/30 border-t-eco-slate rounded-full animate-spin" /> Enviando...</>
                )}
                {formState === "success" && "Solicitud enviada ✓"}
              </span>
              
              {/* Subtle hover pulse */}
              {formState === "idle" && (
                <div className="absolute inset-0 border border-eco-slate/20 rounded-xl group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
