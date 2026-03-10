import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, MessageIcon } from "@/components/ui/Icons";
import { HeroBadges } from "./HeroBadges";

export function Hero() {
  return (
    <section className="relative bg-navy-deep min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://www.abogadochicago.com/wp-content/uploads/2025/12/ChatGPT-Image-18-nov-2025-05_33_26-p.m.-1.png"
          alt="Chicago skyline at dusk"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text side */}
          <div className="space-y-5">
            <p className="text-label text-orange uppercase tracking-[0.1em]">
              ABOGADO CHICAGO · Firma de Abogados en Chicago, Illinois
            </p>
            <div className="inline-block bg-orange/15 text-orange font-bold text-sm px-4 py-2 rounded-pill">
              + 35 años de experiencia
            </div>
            <h1 className="font-display text-[30px] md:text-[38px] lg:text-h1 text-white leading-tight">
              Abogados de Accidentes de Trabajo en Chicago
            </h1>
            <p className="text-lg md:text-xl font-display font-bold text-orange">
              ¡SI NO GANAS, NO PAGAS!
            </p>
            <p className="text-on-dark text-base md:text-lg max-w-[520px]">
              Si usted o un ser querido ha sufrido una lesión en el trabajo,
              merece una compensación justa
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button href="tel:7735227000" icon={<PhoneIcon />}>
                ¡Llámame Ahora — Consulta Gratuita!
              </Button>
              <Button
                href="https://m.me/AbogadoChicago"
                variant="secondary"
                icon={<MessageIcon />}
              >
                Manda Un Mensaje
              </Button>
            </div>
          </div>

          {/* Photo side */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-[420px] h-[580px]">
              <Image
                src="https://www.abogadochicago.com/wp-content/uploads/2025/03/image-666x1024.png"
                alt="Equipo legal de Abogado Chicago"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
            <HeroBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
