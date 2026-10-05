"use client";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { ChapterNav } from "@/components/ChapterNav";
import { Hero } from "@/components/sections/Hero";
import { Manifiesto } from "@/components/sections/Manifiesto";
import { Preparacion } from "@/components/sections/Preparacion";
import { ClaseEnVivo } from "@/components/sections/ClaseEnVivo";
import { EcoSonar } from "@/components/sections/EcoSonar";
import { Integracion } from "@/components/sections/Integracion";
import { Repaso } from "@/components/sections/Repaso";
import { Contacto } from "@/components/sections/Contacto";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(1);

  useEffect(() => {
    // Simple observer to update chapter based on scroll position
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "la-clase") setCurrentChapter(1);
            if (id === "preparacion") setCurrentChapter(2);
            if (id === "preparacion-2") setCurrentChapter(3);
            if (id === "en-vivo") setCurrentChapter(4);
            if (id === "eco") setCurrentChapter(5);
            if (id === "repaso") setCurrentChapter(6);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-eco-base selection:bg-eco-accent/30 selection:text-eco-chalk">
      <Header />
      <ChapterNav currentChapter={currentChapter} />
      
      <Hero />
      <Manifiesto />
      <Preparacion />
      <ClaseEnVivo />
      <EcoSonar />
      <Integracion />
      <Repaso />
      <Contacto />
      <Footer />
      
    </main>
  );
}
