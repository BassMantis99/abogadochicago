import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, MessageIcon } from "@/components/ui/Icons";
import { HeroBadges } from "./HeroBadges";

export function Hero() {
  return (
    <section className="relative bg-navy-deep overflow-hidden min-h-[600px] pt-[160px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/chicago-skyline.png"
          alt="Chicago skyline at dusk"
          fill
          className="object-cover object-[center_30%] opacity-25"
          priority
        />
        {/* Vertical gradient overlay matching IC design */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/75 to-navy-deep/95" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Flex row: text LEFT, photo RIGHT — aligned to bottom */}
        <div className="flex flex-col lg:flex-row items-end gap-10">
          {/* Text side */}
          <div className="flex-1 pb-8 lg:pb-[60px]">
            <p className="font-display text-sm font-semibold text-white/60 tracking-[0.05em] mb-4">
              Abogado Chicago
            </p>
            <p className="font-display text-sm font-semibold text-white/60 tracking-[0.05em] -mt-2 mb-4">
              Firma de Abogados en Chicago · Illinois
            </p>
            <div className="inline-flex items-center gap-2 bg-orange text-white px-5 py-2 rounded-pill font-display text-[0.8125rem] font-bold shadow-badge mb-6">
              + 35 años de experiencia
            </div>
            <h1 className="font-display text-[30px] md:text-[38px] lg:text-h1 text-white leading-[1.08] tracking-[-0.02em] max-w-[560px] mb-6">
              Abogados de Accidentes de Trabajo en Chicago
            </h1>
            <p className="text-[1.0625rem] text-on-dark max-w-[520px] leading-relaxed mb-4">
              ¡SI NO GANAS, NO PAGAS! Si usted o un ser querido ha sufrido una
              lesión en el trabajo, merece una compensación justa.
            </p>
            <p className="text-sm text-on-dark-faint mb-8">
              Chicago · Sirviendo a todo Illinois
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
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

          {/* Photo side — cutout anchored to bottom, scaled down */}
          <div className="relative flex-1 hidden lg:flex items-end justify-center mr-10">
            <div className="relative w-full max-w-[560px] origin-bottom scale-[1.3]">
              <Image
                src="/images/team/jackhero.png"
                alt="Equipo legal de Abogado Chicago"
                width={1024}
                height={746}
                className="w-full h-auto"
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
