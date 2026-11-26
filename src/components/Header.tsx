"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        className="flex items-center group relative"
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
      >
        <div className="relative flex items-center">
          {/* Ambient glow on hover */}
          <motion.div
            className="absolute -inset-2 rounded-full bg-eco-accent/20 blur-md pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: logoHovered ? 0.8 : 0,
              scale: logoHovered ? 1.15 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          />

          <Image
            src="/assets/EcoLogo.png"
            alt="ECO Logo"
            width={120}
            height={78}
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
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
        <Link href="#en-vivo">
          <motion.button
            className="relative z-10 bg-eco-accent text-eco-slate px-5 py-2.5 rounded-full font-bold text-sm tracking-wide overflow-hidden hover:bg-eco-accent-alt transition-colors cursor-pointer"
            whileHover="hover"
          >
            <span className="relative z-10">Ver demo</span>
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full origin-center"
              initial={{ scale: 0, opacity: 0 }}
              variants={{
                hover: { scale: 2, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />
          </motion.button>
        </Link>
      </div>
    </header>
  );
}
