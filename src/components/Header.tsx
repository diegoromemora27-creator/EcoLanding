"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "La clase", id: "la-clase" },
    { label: "Preparación", id: "preparacion" },
    { label: "En vivo", id: "en-vivo" },
    { label: "Eco", id: "eco" },
    { label: "Repaso", id: "repaso" },
    { label: "Contacto", id: "contacto" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
        scrolled
          ? "bg-eco-base/80 backdrop-blur-md border-b border-eco-accent/12"
          : "bg-transparent border-transparent"
      }`}
    >
      {/* Logo */}
      <Link 
        href="/" 
        className="flex items-center gap-1 group"
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
      >
        <span className="font-serif text-2xl font-bold tracking-wider">ECO</span>
        <div className="relative w-4 h-4 flex items-center justify-center">
          <motion.div 
            className="absolute rounded-full border-r-2 border-t-2 border-eco-accent w-3 h-3 rotate-45"
            animate={{
              scale: logoHovered ? [1, 1.5, 1] : 1,
              opacity: logoHovered ? [0.5, 1, 0] : 0.5,
            }}
            transition={{ duration: 1, ease: "easeOut", repeat: logoHovered ? Infinity : 0 }}
          />
        </div>
      </Link>

      {/* Nav Links - Desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            className="text-eco-gray hover:text-eco-chalk transition-colors text-sm font-medium tracking-wide"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="relative group">
        <motion.button
          className="relative z-10 bg-eco-accent text-eco-slate px-5 py-2.5 rounded-full font-bold text-sm tracking-wide overflow-hidden hover:bg-eco-accent-alt transition-colors"
          whileHover="hover"
        >
          <span className="relative z-10">Agendar demo</span>
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full origin-center"
            initial={{ scale: 0, opacity: 0 }}
            variants={{
              hover: { scale: 2, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          />
        </motion.button>
      </div>
    </header>
  );
}
