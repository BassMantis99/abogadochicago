import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    title: "Muertes Accidentales",
    href: "/muertes-accidentales",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/muerte1-1.png",
  },
  {
    title: "Lesiones de Rodilla y Hombro",
    href: "/lesiones-de-rodilla-y-hombro",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/Rodilla1-1.png",
  },
  {
    title: "Accidentes de Maquinaria",
    href: "/accidentes-maquinaria",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/maquinaria1-1.png",
  },
  {
    title: "Accidentes Eléctricos",
    href: "/accidentes-electricos",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/electricos1-1.png",
  },
  {
    title: "Resbalones y Caídas",
    href: "/resbalones-y-caidas",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/caidas1-1.png",
  },
  {
    title: "Quemaduras",
    href: "/quemaduras",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/Quemaduras1-1.png",
  },
  {
    title: "Lesiones Cerebrales",
    href: "/lesiones-cerebrales-chicago",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/Lesiones_cerebrales1-1.png",
  },
  {
    title: "Lesiones de Roofing",
    href: "/lesiones-roofting",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/Roofing1-1.png",
  },
  {
    title: "Pérdida de Visión",
    href: "/perdida-de-la-vision",
    icon: "https://www.abogadochicago.com/wp-content/uploads/2025/03/perdida_de_vision1-1.png",
  },
];

export function Services() {
  return (
    <section className="bg-off-white py-14 lg:py-25 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <SectionLabel>NUESTROS SERVICIOS</SectionLabel>
        <h2 className="font-display text-[26px] md:text-[30px] lg:text-h2 text-navy mt-3">
          Tipos de Accidentes Laborales que Manejamos
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 mt-10 lg:mt-14">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white rounded-lg border border-blue/[0.08] p-6 lg:p-7 hover:-translate-y-1 hover:shadow-lg hover:border-orange transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 mb-4 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-display font-bold text-navy text-sm lg:text-h3 group-hover:text-orange transition-colors">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
