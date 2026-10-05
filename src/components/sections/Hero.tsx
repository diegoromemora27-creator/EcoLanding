"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { EcoPulse } from "../EcoPulse";
import { GoogleChip } from "../GoogleChip";
import { GeminiSparkle } from "../GeminiSparkle";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yChips = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const googleChipsData = [
    { name: "Drive", iconPath: "/assets/logo_drive_2026q2_color_2x_web_96dp.png", tooltip: "Tu material, listo para clase" },
    { name: "Classroom", iconPath: "/assets/logo_classroom_color_2x_web_96dp.png", tooltip: "Publicación automática" },
    { name: "Forms", iconPath: "/assets/logo_forms_2026q2_color_2x_web_96dp.png", tooltip: "Exit ticket en 90 segundos" },
    { name: "Sheets", iconPath: "/assets/logo_sheets_2026q2_color_2x_web_48dp.png", tooltip: "Respuestas en vivo" },
    { name: "Gemini", iconPath: "/assets/logo_gemini_2026_color_2x_web_96dp.png", tooltip: "Diagnóstico y plan de repaso" },
  ];

  return (
    <section ref={ref} id="la-clase" className="relative min-h-screen flex items-center overflow-hidden bg-eco-base pt-20">
      {/* Background Image with Parallax & Overlays */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/Fondo1.jpg')" }}
        />
        {/* Overlay global: capa verde-negra con opacidad 55–75%, más degradado radial */}
        <div className="absolute inset-0 bg-eco-base/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-eco-base/90" />
      </motion.div>

      {/* Sonar Effect behind content */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-0">
        <EcoPulse active={true} intensity="soft" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div style={{ opacity: opacityText }} className="flex flex-col gap-8 max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1]">
            <div className="overflow-hidden pb-2">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Tu clase habla.
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span 
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                ECO la <span className="font-serif italic text-eco-accent font-medium tracking-normal">escucha.</span>
              </motion.span>
            </div>
          </h1>

          <motion.p 
            className="text-lg md:text-xl text-eco-gray max-w-lg text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conecta tus materiales y respuestas de clase.<br />ECO usa IA con Gemini para ayudarte a preparar, entender y remediar a tiempo.
          </motion.p>

          <motion.div 
            className="mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="group relative inline-flex items-center gap-2 bg-[#080d0b] border border-eco-gray/20 px-4 py-2 rounded-full text-sm text-eco-chalk cursor-default">
              <GeminiSparkle className="text-eco-gray" /> IA pedagógica con Gemini
              <div className="absolute inset-0 rounded-full border border-eco-gray/10 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
              
              {/* Tooltip */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-eco-slate border border-eco-gray/20 text-eco-chalk text-xs w-64 p-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                Analiza materiales y respuestas para proponer preguntas, focos de repaso y planes de apertura.
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-eco-chalk text-eco-base px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
              Ver cómo funciona
            </button>
            <button className="px-8 py-4 rounded-full font-bold border border-eco-gray/30 hover:border-eco-chalk transition-colors text-eco-chalk">
              Agendar demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Google Workspace Chips */}
        <motion.div 
          style={{ y: yChips }}
          className="hidden lg:flex relative h-[500px] w-full items-center justify-center"
        >
          {/* Scatter the chips around */}
          {googleChipsData.map((chip, i) => {
            const positions = [
              { left: "10%", top: "20%" },
              { left: "40%", top: "10%" },
              { left: "70%", top: "30%" },
              { left: "20%", top: "60%" },
              { left: "60%", top: "70%" },
            ];
            
            // Add slight random offset to animation for floating effect
            const floatOffset = Math.sin(i) * 15;

            return (
              <div key={chip.name} className="absolute" style={positions[i]}>
                <motion.div
                  animate={{ y: [0, floatOffset, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GoogleChip {...chip} delay={0.8 + (i * 0.15)} />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-eco-gray/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-eco-accent rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
