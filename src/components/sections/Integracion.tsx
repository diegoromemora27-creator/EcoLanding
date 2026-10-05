"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GeminiSparkle } from "../GeminiSparkle";

export function Integracion() {
  const tools = [
    { name: "Drive", img: "/assets/logo_drive_2026q2_color_2x_web_96dp.png", desc: "Guarda y organiza materiales", color: "#1FA463" }, // Drive uses multiple colors, picking green/blue
    { name: "Forms", img: "/assets/logo_forms_2026q2_color_2x_web_96dp.png", desc: "Captura respuestas y micro-verificaciones", color: "#7248B9" }, // Purple
    { name: "Sheets", img: "/assets/logo_sheets_2026q2_color_2x_web_48dp.png", desc: "Concentra métricas y evidencias", color: "#0F9D58" }, // Green
    { name: "Calendar", img: "/assets/logo_calendar_2026q2_color_2x_web_96dp.png", desc: "Agenda tus clases y recordatorios", color: "#4285F4" }, // Blue
    { name: "Classroom", img: "/assets/logo_classroom_color_2x_web_96dp.png", desc: "Publica repasos y tareas", color: "#F4B400" }, // Yellow
    { name: "Gemini", img: "/assets/logo_gemini_2026_color_2x_web_96dp.png", desc: "Interpreta datos y propone acciones", color: "#7CFFB2", special: true }
  ];

  const cycleDuration = 4; // 4 seconds per full pulse wave
  const waveDelay = 1.2; // Time it takes for the visual wave to reach the tools

  return (
    <section className="relative py-32 bg-[#080d0b] overflow-hidden border-y border-eco-gray/10">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#E8F1EA 1px, transparent 1px), linear-gradient(90deg, #E8F1EA 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[60vh]">

        {/* Left Side: Text */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs text-eco-accent tracking-widest mb-4">
              ECOSISTEMA GOOGLE WORKSPACE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-eco-chalk mb-6">
              Todo en un <span className="text-eco-accent font-serif italic">solo lugar.</span>
            </h2>
            <div className="space-y-6 text-lg text-eco-gray">
              <p>
                Da tus clases sin preocupaciones. Guarda tus archivos de forma ordenada en Drive, crea formularios, agenda en Calendar y publica en Classroom.
              </p>
              <p>
                Las herramientas que ya conoces, ahora <strong>potenciadas por ECO</strong>.
              </p>
              <p className="p-4 bg-eco-base border border-eco-gray/20 rounded-xl mt-6 flex gap-4 items-start shadow-lg">
                <GeminiSparkle className="text-2xl mt-1" />
                <span className="text-sm">
                  Accede al poder de la IA con Gemini directamente en tu flujo de trabajo, todo unificado bajo la experiencia pedagógica de ECO.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual Sonar & Tools */}
        <div className="relative w-full h-[500px] flex items-center justify-center">

          {/* Central ECO Core */}
          <div className="absolute z-20 flex items-center justify-center">
            <div className="w-24 h-24 bg-eco-base border-2 border-eco-accent rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(124,255,178,0.4)] z-10 relative">
              <span className="text-eco-chalk font-serif text-3xl font-bold">ECO</span>
            </div>

            {/* Constant Massive Pulse from ECO */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <motion.div className="absolute w-24 h-24 border-2 border-eco-accent/80 rounded-full"
                animate={{ scale: [1, 5.5], opacity: [1, 0] }}
                transition={{ duration: cycleDuration, ease: "easeOut", repeat: Infinity }} />
            </div>
          </div>

          {/* Surrounding Tools Orbiting/Lighting up */}
          {tools.map((tool, i) => {
            // Calculate a nice circular distribution (radius ~ 170px)
            const angle = (i * (360 / tools.length)) * (Math.PI / 180);
            const radius = 170;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={tool.name}
                className="absolute z-30 group cursor-pointer"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
              >
                {/* The tool icon box */}
                <div
                  className="w-16 h-16 rounded-2xl relative transition-transform duration-300 group-hover:scale-110 p-[1.5px] flex items-center justify-center shadow-xl"
                >
                  {/* Subtle pulsing gradient border */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl ${tool.special ? 'bg-eco-accent' : 'bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#0F9D58]'}`}
                    animate={{ opacity: [0.1, 0.8, 0.1] }}
                    transition={{ duration: cycleDuration, repeat: Infinity, delay: waveDelay, times: [0, 0.1, 1] }}
                  />
                  
                  {/* Inner Content */}
                  <div className="relative w-full h-full rounded-[14px] bg-white/30 backdrop-blur-md flex items-center justify-center z-10">
                    <Image src={tool.img} alt={tool.name} width={32} height={32} />
                  </div>
                </div>

                {/* Name Label */}
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-eco-base/90 px-2 py-1 rounded text-[10px] font-mono text-eco-gray border border-eco-gray/10 shadow-lg text-center whitespace-nowrap">
                  {tool.name}
                </div>

                {/* Hover Description Tooltip */}
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 bg-eco-accent text-[#080d0b] px-4 py-2 rounded-lg text-xs font-bold shadow-[0_0_20px_#7CFFB2] text-center w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none scale-95 group-hover:scale-100">
                  {tool.desc}
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-solid border-t-eco-accent border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                </div>
              </div>
            );
          })}

          {/* Decorative faint rings to show orbit paths */}
          <div className="absolute w-[340px] h-[340px] border border-eco-gray/10 rounded-full z-0 border-dashed pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
