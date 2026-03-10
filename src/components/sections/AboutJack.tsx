import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export function AboutJack() {
  return (
    <section className="bg-white py-14 lg:py-25 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <SectionLabel>EXPERTOS EN COMPENSACIÓN LABORAL</SectionLabel>
            <h2 className="font-display text-[26px] md:text-[30px] lg:text-h2 text-navy mt-3">
              ¿Quién es el Abogado Jack?
            </h2>
            <p className="text-text-body mt-4 leading-relaxed">
              Jack es un abogado destacado en Chicago especializado en
              compensación laboral. Fundador de su propia práctica legal, se
              distingue por su enfoque justo y personalizado hacia la
              representación de trabajadores lesionados. Criado en Missouri y
              educado en la Universidad de Missouri y en la Washington University
              School of Law.
            </p>
            <div className="mt-6">
              <Button href="/equipo" variant="ghost">
                Conoce al equipo
              </Button>
            </div>
          </div>

          {/* Video / Image */}
          <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://www.abogadochicago.com/wp-content/uploads/2023/04/11-3EpsteinHeadshots-4-scaled-1-768x614.jpg"
              alt="Abogado Jack Epstein"
              fill
              className="object-cover"
            />
            {/* Play button overlay if video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-orange/90 rounded-full flex items-center justify-center shadow-cta hover:bg-orange transition-colors cursor-pointer">
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
