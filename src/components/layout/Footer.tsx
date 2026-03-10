import Link from "next/link";
import { PhoneIcon } from "@/components/ui/Icons";

const serviceLinks = [
  { href: "/compensacion-laboral", label: "Compensación Laboral" },
  { href: "/muertes-accidentales", label: "Muertes Accidentales" },
  { href: "/lesiones-de-rodilla-y-hombro", label: "Lesiones de Rodilla y Hombro" },
  { href: "/accidentes-maquinaria", label: "Accidentes de Maquinaria" },
  { href: "/accidentes-electricos", label: "Accidentes Eléctricos" },
  { href: "/resbalones-y-caidas", label: "Resbalones y Caídas" },
  { href: "/quemaduras", label: "Quemaduras" },
  { href: "/lesiones-cerebrales-chicago", label: "Lesiones Cerebrales" },
  { href: "/lesiones-roofting", label: "Lesiones de Roofing" },
];

const companyLinks = [
  { href: "/equipo", label: "Tu Equipo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos-representativos", label: "Casos de Éxito" },
  { href: "/preguntas-frecuentes", label: "FAQs" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contact-us", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-14 lg:pt-20 pb-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <span className="font-display font-extrabold text-white text-xl tracking-tight">
              ABOGADO<span className="text-orange">CHICAGO</span>
            </span>
            <p className="text-on-dark-muted text-sm mt-4 leading-relaxed">
              Abogados de accidentes de trabajo en Chicago. +35 años de
              experiencia luchando por los derechos de los trabajadores
              lesionados.
            </p>
            <a
              href="tel:7735227000"
              className="flex items-center gap-2 text-orange font-bold text-sm mt-4 hover:text-orange-hover transition-colors"
            >
              <PhoneIcon />
              773-522-7000
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Servicios
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-dark-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Compañía
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-dark-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Consulta Gratuita
            </h4>
            <p className="text-on-dark-muted text-sm leading-relaxed">
              ¿Sufriste un accidente de trabajo? Llámanos hoy. No pagas nada a
              menos que ganemos tu caso.
            </p>
            <a
              href="tel:7735227000"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-cta mt-4 transition-all hover:-translate-y-px"
            >
              <PhoneIcon />
              ¡Llámame Ahora!
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-on-dark-faint text-xs">
            © {new Date().getFullYear()} Abogado Chicago. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/aviso-de-privacidad"
              className="text-on-dark-faint text-xs hover:text-white/70 transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
