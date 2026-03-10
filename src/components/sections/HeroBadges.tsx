"use client";

import { Counter } from "@/components/ui/Counter";

export function HeroBadges() {
  return (
    <>
      {/* $200M+ badge */}
      <div className="absolute top-16 -left-8 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-4 shadow-badge animate-float">
        <p className="font-display font-extrabold text-2xl text-white">
          $<Counter target={200} suffix="M+" />
        </p>
        <p className="text-white/70 text-xs mt-0.5">En compensaciones</p>
      </div>

      {/* 12,500+ badge */}
      <div className="absolute bottom-24 -right-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-4 shadow-badge animate-float-delayed">
        <p className="font-display font-extrabold text-2xl text-white">
          <Counter target={12500} suffix="+" />
        </p>
        <p className="text-white/70 text-xs mt-0.5">Clientes felices</p>
      </div>
    </>
  );
}
