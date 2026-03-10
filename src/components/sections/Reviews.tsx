"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { StarIcon } from "@/components/ui/Icons";

const reviews = [
  {
    name: "Juan Gonzalez",
    text: "Mr. Epstein y todo su personal son muy profesionales y eficientes por eso los recomiendo gracias por ayudarme",
  },
  {
    name: "Javier Garcia",
    text: "Es un buen abogado. Y la oficina siempre ayuda con cualquier duda que tengas.",
  },
  {
    name: "Manuel Moreno",
    text: "El es un excelente abogado, me ayudó muchísimo en mi caso, en verdad el no hace nada sin consentimiento",
  },
  {
    name: "Lucia Núñez-Salgado",
    text: "El Sr. Epstein es muy profesional, responsable y compasivo y siempre se desvive por ayudar a sus clientes",
  },
  {
    name: "Nubia Ojeda",
    text: "Recomiendo ampliamente los servicios de Abogado Chicago. Fue muy fácil trabajar con ellos",
  },
  {
    name: "Ortega's Lawn Care LLC",
    text: "Recomendaría a Jack Epstein porque es un tipo muy agradable y hace todo lo posible para ayudarlo",
  },
];

export function Reviews() {
  return (
    <section className="bg-white py-14 lg:py-25 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <SectionLabel>TESTIMONIOS</SectionLabel>
        <h2 className="font-display text-[26px] md:text-[30px] lg:text-h2 text-navy mt-3">
          ¿Qué dicen nuestros clientes?
        </h2>

        {/* Google rating */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5 text-orange">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className={`w-5 h-5 ${i === 4 ? "opacity-50" : ""}`} />
            ))}
          </div>
          <span className="font-display font-bold text-navy text-lg">4.4</span>
          <span className="text-text-muted text-sm">· 167 reseñas en Google</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-14">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-off-white rounded-lg p-6 lg:p-7 text-left border border-blue/[0.08]"
            >
              <div className="flex gap-0.5 text-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-text-body text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-display font-bold text-navy text-sm mt-4">
                {review.name}
              </p>
            </div>
          ))}
        </div>

        <a
          href="https://search.google.com/local/reviews?placeid=ChIJ49bbO0wyDogRWm8v-AtYLS0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-orange font-bold text-sm mt-8 hover:gap-3 transition-all"
        >
          Ver todas las reseñas en Google
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
