import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckIcon } from "@/components/ui/Icons";

const reasons = [
  {
    title: "Enfoque Total en el Trabajador",
    description: "Solo representamos a empleados lesionados",
  },
  {
    title: "Un abogado con valores familiares",
    description: "",
  },
  {
    title: "Más de 12,500 clientes felices",
    description: "",
  },
  {
    title: "Más de 200 millones de dólares en compensaciones",
    description: "",
  },
  {
    title: "Sin anticipo. Si no ganas no pagas",
    description: "",
  },
  {
    title: "Atención inmediata",
    description: "",
  },
  {
    title: "En Abogado Chicago, te atendemos en español",
    description: "",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-navy-deep py-14 lg:py-25 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative h-[350px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://www.abogadochicago.com/wp-content/uploads/2023/04/11-3EpsteinHeadshots-2-scaled-1-1024x819.jpg"
              alt="Jack y Dena Epstein — equipo legal"
              fill
              className="object-cover"
            />
          </div>

          {/* Content side */}
          <div>
            <SectionLabel>ABOGADO CHICAGO</SectionLabel>
            <h2 className="font-display text-[26px] md:text-[30px] lg:text-h2 text-white mt-3">
              ¿Por Qué Contratarnos como tus abogados para accidentes de
              trabajo?
            </h2>
            <p className="text-on-dark mt-4 max-w-[500px]">
              Cada año, miles de trabajadores en Chicago sufren accidentes de
              trabajo que cambian sus vidas.
            </p>

            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-orange/15 flex items-center justify-center">
                    <CheckIcon className="w-3.5 h-3.5 text-orange" />
                  </span>
                  <span className="text-white font-medium text-sm lg:text-base">
                    {reason.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
