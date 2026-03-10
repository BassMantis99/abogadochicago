import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const teamPhotos = [
  {
    src: "https://www.abogadochicago.com/wp-content/uploads/2023/02/IMG_0005.jpg",
    alt: "Equipo Abogado Chicago en la comunidad",
  },
  {
    src: "https://www.abogadochicago.com/wp-content/uploads/2023/02/IMG_9685-scaled-1-768x1024.jpg",
    alt: "Equipo Abogado Chicago evento",
  },
  {
    src: "https://www.abogadochicago.com/wp-content/uploads/2023/05/IMG_2990-768x1024.jpg",
    alt: "Equipo legal",
  },
  {
    src: "https://www.abogadochicago.com/wp-content/uploads/2023/02/IMG_5726-scaled-1-768x1024.jpg",
    alt: "Equipo Abogado Chicago",
  },
];

export function TeamGallery() {
  return (
    <section className="bg-white py-14 lg:py-25 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <SectionLabel>NUESTRO EQUIPO</SectionLabel>
        <h2 className="font-display text-[26px] md:text-[30px] lg:text-h2 text-navy mt-3">
          Expertos como Abogados de Accidentes de Trabajo en Chicago
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-10 lg:mt-14">
          {teamPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative h-[200px] lg:h-[280px] rounded-lg overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button href="/equipo" variant="ghost">
            Conoce al equipo completo
          </Button>
        </div>
      </div>
    </section>
  );
}
