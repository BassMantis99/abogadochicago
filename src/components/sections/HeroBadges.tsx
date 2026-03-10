"use client";

import { Counter } from "@/components/ui/Counter";

export function HeroBadges() {
  return (
    <>
      {/* $200M+ badge — white bg, top-right */}
      <div className="absolute -top-4 -right-4 bg-white rounded-lg px-5 py-4 shadow-md flex items-center gap-3 z-20">
        <span className="font-display font-extrabold text-2xl text-orange">
          $<Counter target={200} suffix="M+" />
        </span>
        <span className="text-text-muted text-[0.8125rem] leading-tight">
          En<br />compensaciones
        </span>
      </div>

      {/* 12,500+ badge — white bg, bottom-left */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-lg px-5 py-4 shadow-md flex items-center gap-3 z-20">
        <span className="font-display font-extrabold text-2xl text-orange">
          <Counter target={12500} suffix="+" />
        </span>
        <span className="text-text-muted text-[0.8125rem] leading-tight">
          Clientes<br />felices
        </span>
      </div>
    </>
  );
}
