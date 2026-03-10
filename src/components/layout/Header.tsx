"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon } from "@/components/ui/Icons";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/compensacion-laboral", label: "Compensación Laboral" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Tu Equipo" },
  { href: "/preguntas-frecuentes", label: "FAQs" },
  { href: "/noticias", label: "Noticias" },
];

const LOGO_URL =
  "https://cdn-ikchf.nitrocdn.com/fmthJhwrlsZnCpaVQGHzEURkKxRjQMso/assets/images/optimized/rev-33e067b/www.abogadochicago.com/wp-content/uploads/2023/01/Asset-7-300x47.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${
        scrolled
          ? "bg-navy-deep py-3 border-white/[0.08]"
          : "bg-navy-deep/[0.92] backdrop-blur-[12px] py-[18px] border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="Abogado Chicago"
            width={300}
            height={47}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-[0.84375rem] font-semibold tracking-[0.02em] text-white/85 hover:text-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:7735227000"
            className="flex items-center gap-2 bg-orange hover:bg-orange-hover text-white text-[0.84375rem] font-bold px-[22px] py-2.5 rounded-md shadow-cta transition-all hover:-translate-y-px font-display"
          >
            <PhoneIcon />
            773-522-7000
          </a>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-4 pt-2 bg-navy-deep/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-semibold text-white/85 hover:text-orange py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:7735227000"
            className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white text-sm font-bold px-5 py-3 rounded-md shadow-cta mt-2 transition-all font-display"
          >
            <PhoneIcon />
            773-522-7000
          </a>
        </nav>
      </div>
    </header>
  );
}
