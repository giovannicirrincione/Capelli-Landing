"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Equipo", href: "#equipo" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-4 md:px-6 xl:px-10 2xl:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image src="/Logo horizontal.jpg" alt="PediSalud" width={140} height={40} className="h-12 w-auto" priority />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-muted hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://mrturno.com/p/@capelli"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-primary-dark text-white text-sm font-body font-semibold hover:bg-[#5a2e42] hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          Reservar Cita
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-primary"
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-primary/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-body font-medium text-muted hover:text-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://mrturno.com/p/@capelli"
          target="_blank"
          rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 text-center px-6 py-3 rounded-full bg-primary-dark text-white text-sm font-body font-semibold"
          >
            Reservar Cita
          </a>
        </div>
      )}
    </header>
  );
}
