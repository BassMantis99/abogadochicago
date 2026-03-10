"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneIcon } from "@/components/ui/Icons";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/compensacion-laboral", label: "Compensación Laboral" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Tu Equipo" },
  { href: "/preguntas-frecuentes", label: "FAQs" },
  { href: "/noticias", label: "Noticias" },
];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display font-extrabold text-white text-xl tracking-tight">
            ABOGADO<span className="text-orange">CHICAGO</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:7735227000"
            className="flex items-center gap-2 bg-orange hover:bg-orange-hover text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-cta transition-all hover:-translate-y-px"
          >
            <PhoneIcon />
            773-522-7000
          </a>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
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
        <nav className="flex flex-col gap-1 px-4 pb-4 pt-2 bg-navy-deep/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white py-2 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:7735227000"
            className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-white text-sm font-bold px-5 py-3 rounded-md shadow-cta mt-2 transition-all"
          >
            <PhoneIcon />
            773-522-7000
          </a>
        </nav>
      </div>
    </header>
  );
}
