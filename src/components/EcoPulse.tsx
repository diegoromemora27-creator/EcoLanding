"use client";
import { motion } from "framer-motion";

export function EcoPulse({ active = true, intensity = "strong" }: { active?: boolean; intensity?: "strong" | "soft" }) {
  if (!active) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden mix-blend-screen z-0">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full border border-eco-accent ${
            intensity === "soft" ? "opacity-10" : "opacity-30"
          }`}
          initial={{ width: "0vw", height: "0vw", opacity: intensity === "soft" ? 0.15 : 0.3 }}
          animate={{
            width: ["0vw", "150vw"],
            height: ["0vw", "150vw"],
            opacity: [intensity === "soft" ? 0.15 : 0.3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
