"use client";

import { useEffect, useRef } from "react";
import { StarSolid } from "@medusajs/icons";

const testimonials = [
  {
    quote:
      "El lugar muy cálido y limpio. Las profesionales excelentes, súper comprometidas con la salud de los niños. Gracias Dra Capelli y Dra Barrera por cuidar de mis hijos!",
    name: "Natalia Altamirano",
    childAge: "",
    initials: "NA",
    color: "from-primary/20 to-primary/5",
  },
  {
    quote:
      "Excelentes profesionales! La calidez y la empatía de la Dra. Capelli para mi bebé es siempre increíble! Lo que le hacía falta a Luján, un servicio para los más chiquitos de excelencia!",
    name: "Rocio Florencia Ortiz",
    childAge: "",
    initials: "RFO",
    color: "from-accent/20 to-accent/5",
  },
  {
    quote:
      "Son las mejores pediatras sin dudas. Nada como tenes gente en quien confiar le lo más importante que hay que son los niños. Sigan así. Excelentes profesionales",
    name: "Valentina Gomez Hernandez",
    childAge: "",
    initials: "VGH",
    color: "from-surface to-cream",
  },
  {
    quote:
      "Fuimos por primera vez ayer , nos atendió la Dra Barrera , excelente! Sin espera y una atención excelente! Recomendada 100% para los papás que buscan un lugar de confianza para sus hijos!",
    name: "Antonell Agnoni",
    childAge: "",
    initials: "AA",
    color: "from-primary/10 to-surface",
  },
  {
    quote:
      "Recomiendo! La doctora Capelli es excelente profesional y persona! Muy atenta, cálida y dedicada. Mi hija se siente muy cómoda con ella y eso es lo más importante para mí.",
    name: "Mariana Cucchi",
    childAge: "",
    initials: "MC",
    color: "from-accent/15 to-surface",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 100);
          });
          el.querySelector(".reveal-stagger")?.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="opiniones"
      ref={sectionRef}
      className="py-24 bg-surface/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 text-center max-w-2xl mx-auto">
          <span className="inline-block mb-3 text-accent font-body font-semibold text-sm uppercase tracking-widest">
            Opiniones de Familias
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Lo que dicen los padres
          </h2>
          <p className="mt-4 font-body text-muted">
            Más de 1000 familias confían en nosotros para el cuidado de sus
            hijos.
          </p>
        </div>

        {/* Stars rating summary */}
        <div className="reveal mb-12 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white shadow-md border border-primary/10">
            {/* Google logo */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="h-10 w-px bg-primary/10" />
            <div>
              <p className="font-display text-4xl font-bold text-primary">5.0</p>
              <p className="font-body text-xs text-muted">sobre 5</p>
            </div>
            <div className="h-10 w-px bg-primary/10" />
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarSolid key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>
              <p className="font-body text-xs text-muted mt-1">
                +10 valoraciones en Google
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials masonry grid */}
        <div className="reveal-stagger columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`break-inside-avoid rounded-3xl bg-gradient-to-br ${t.color} border border-primary/10 p-8 relative`}
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 font-display text-7xl text-primary/10 leading-none select-none">
                &ldquo;
              </span>

              <p className="font-body text-[#1A1A1A] text-sm leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-display font-bold text-sm ring-2 ring-accent/40`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-[#1A1A1A]">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted">{t.childAge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
