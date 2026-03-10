"use client";

import { Counter } from "@/components/ui/Counter";

const stats = [
  { target: 35, suffix: "+", label: "Años de Experiencia" },
  { target: 12500, suffix: "+", label: "Clientes Felices" },
  { prefix: "$", target: 200, suffix: "M+", label: "En Compensaciones" },
  { target: 99, suffix: "%", label: "Tasa de Éxito" },
];

export function StatsBar() {
  return (
    <section className="bg-white py-14 lg:py-16 border-b border-gray-light">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-extrabold text-3xl lg:text-4xl text-navy">
                <Counter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
