import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutJack } from "@/components/sections/AboutJack";
import { TeamGallery } from "@/components/sections/TeamGallery";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <WhyChooseUs />
      <AboutJack />
      <TeamGallery />
      <Process />
      <Reviews />
      <FinalCTA />
    </>
  );
}
