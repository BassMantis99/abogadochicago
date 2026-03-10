import { Button } from "@/components/ui/Button";
import { PhoneIcon, MessageIcon } from "@/components/ui/Icons";

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-navy-deep to-navy py-14 lg:py-25 px-4">
      <div className="max-w-[700px] mx-auto text-center">
        <p className="text-label text-orange uppercase tracking-[0.1em]">
          CONSULTA GRATUITA
        </p>
        <h2 className="font-display text-[26px] md:text-[30px] lg:text-h2 text-white mt-3">
          ¿Sufriste un accidente de trabajo?
        </h2>
        <p className="text-on-dark mt-4 text-base lg:text-lg">
          Llámanos hoy para una consulta gratuita. No pagas nada a menos que
          ganemos tu caso.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
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
    </section>
  );
}
