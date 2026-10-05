"use client";
import { motion } from "framer-motion";

interface ChapterNavProps {
  currentChapter: number;
}

export function ChapterNav({ currentChapter }: ChapterNavProps) {
  const chapters = [1, 2, 3, 4, 5, 6];

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40 w-16 items-end">
      {chapters.map((ch) => {
        const isActive = ch === currentChapter;
        return (
          <div key={ch} className="flex items-center gap-3 group cursor-pointer text-eco-gray hover:text-eco-accent transition-colors w-full justify-end">
            <span className="font-mono text-xs">{String(ch).padStart(2, "0")}</span>
            <div className="relative flex items-center justify-end">
              <div className={`h-[1px] transition-all duration-300 ${isActive ? 'w-8 bg-eco-accent' : 'w-4 bg-eco-muted group-hover:w-6 group-hover:bg-eco-gray'}`} />
              {isActive && (
                <motion.div
                  className="absolute -right-1 w-2 h-2 rounded-full bg-eco-accent z-10"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
