"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <footer className="bg-[#080d0b] pt-20 pb-12 relative overflow-hidden text-eco-chalk border-t border-eco-gray/10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Grid: Logo & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div 
              className="relative w-fit"
              onViewportEnter={() => setHasEntered(true)}
            >
              <span className="font-serif text-4xl font-bold tracking-wider relative z-10">ECO</span>
              {/* Last Sonar Wave */}
              {hasEntered && (
                <motion.div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-eco-accent/40 pointer-events-none"
                  initial={{ width: 0, height: 0, opacity: 1 }}
                  animate={{ width: 400, height: 400, opacity: 0 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                />
              )}
            </motion.div>
            
            <h3 className="text-2xl font-bold font-serif italic text-eco-gray">Tus clases, bajo control.</h3>
            <p className="text-eco-gray/70 max-w-sm">
              ECO conecta tu clase, tus respuestas y tu siguiente repaso en un solo ciclo.
            </p>
          </div>

          {/* Links - Producto */}
          <div>
            <h4 className="font-mono text-xs text-eco-gray tracking-widest mb-6">PRODUCTO</h4>
            <ul className="flex flex-col gap-4">
              {["Preparación", "Clase en vivo", "EcoSonar", "Repaso"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="text-eco-chalk/80 hover:text-eco-accent transition-colors relative group inline-block">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-eco-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Empezar */}
          <div>
            <h4 className="font-mono text-xs text-eco-gray tracking-widest mb-6">EMPEZAR</h4>
            <ul className="flex flex-col gap-4">
              {["Demo en video", "Contacto", "Casos de uso", "Privacidad"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase().replace(/ /g, "-")}`} className="text-eco-chalk/80 hover:text-eco-accent transition-colors relative group inline-block">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-eco-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-eco-gray/10 text-sm text-eco-gray/50">
          <div>&copy; {new Date().getFullYear()} ECO Learning Systems. Todos los derechos reservados.</div>
          
          <div className="flex gap-6">
            {[1, 2, 3].map((i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full bg-eco-slate flex items-center justify-center hover:-translate-y-1 hover:text-eco-accent hover:border hover:border-eco-accent transition-all">
                <div className="w-3 h-3 bg-current opacity-50 rounded-sm" />
              </a>
            ))}
          </div>
          
          <div className="font-mono text-[10px] tracking-widest">VER 1.0</div>
        </div>
      </div>
    </footer>
  );
}
