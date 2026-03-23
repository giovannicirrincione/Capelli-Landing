"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "Dra. Luciana Capelli",
    role: "Pediatra General",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Dra. Florencia Barrera",
    role: "Pediatra General",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "Dra. Sofía Ibáñez",
    role: "Nutrición Infantil",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
  },
];

export default function MediaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r, i) => {
            setTimeout(() => r.classList.add("visible"), i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="equipo"
      ref={sectionRef}
      className="py-24 bg-surface/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16 max-w-2xl">
          <span className="inline-block mb-3 text-accent font-body font-semibold text-sm uppercase tracking-widest">
            Nuestro Equipo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Especialistas dedicados a tus hijos
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {team.map((doctor) => (
            <div
              key={doctor.name}
              className="reveal group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg cursor-default"
            >
              <Image
                src={doctor.img}
                alt={doctor.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-xl font-bold text-white">
                  {doctor.name}
                </p>
                <p className="font-body text-sm text-white/80 mt-1">
                  {doctor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide clinic photo */}
        <div className="reveal relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=80"
            alt="Interior de la clínica pediátrica"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="max-w-md">
              <p className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Un espacio diseñado para el bienestar de los niños
              </p>
              <p className="font-body text-white/80 text-sm">
                Instalaciones modernas, acogedoras y seguras para cada visita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
