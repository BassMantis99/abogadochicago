import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Contáctanos",
    description: "Consulta sin anticipo",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/Frame-150x150.png",
  },
  {
    number: "02",
    title: "Jack atenderá tu caso",
    description: "Acompañamiento legal completo",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/Frame-1.png",
  },
  {
    number: "03",
    title: "Recibe tu compensación",
    description: "Proceso justo y sencillo",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/Frame-2.png",
  },
];

export function Process() {
  return (
    <section className="bg-off-white py-14 lg:py-25 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <SectionLabel>CÓMO FUNCIONA</SectionLabel>
        <h2 className="font-display text-[26px] md:text-[30px] lg:text-h2 text-navy mt-3">
          Recibe tu Compensación en 3 Pasos
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl p-8 lg:p-9 overflow-hidden"
            >
              {/* Watermark number */}
              <span className="absolute top-3 right-4 font-display font-extrabold text-[80px] text-navy/[0.04] leading-none select-none">
                {step.number}
              </span>

              <div className="relative w-16 h-16 mx-auto mb-5">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-navy text-h3">
                {step.title}
              </h3>
              <p className="text-text-muted text-sm mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
