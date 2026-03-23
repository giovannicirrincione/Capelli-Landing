"use client";

import { useEffect, useRef } from "react";
import { BellAlert } from "@medusajs/icons";

const schedule = [
  { day: "Lunes – Viernes", morning: "9:00 – 12:00", afternoon: "16:00 – 20:00" },
  { day: "Sábados", morning: "Cerrado", afternoon: "Cerrado" },
  { day: "Domingos", morning: "Cerrado", afternoon: "Cerrado" },
];

export default function LocationMap() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) {
      const reveals = el.querySelectorAll(".reveal");
      reveals.forEach((r) => observer.observe(r));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ubicacion"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-14 max-w-2xl">
          <span className="inline-block font-body text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Dónde estamos
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
            Encuéntranos en Lujan de Cuyo, Mendoza
          </h2>
          <p className="font-body text-text-muted mt-4 text-lg leading-relaxed">
            Ubicados en zona centrica de Lujan de Cuyo, a pocos minutos del centro y con fácil acceso desde las principales avenidas. Ven a visitarnos y conoce nuestras instalaciones diseñadas para el cuidado de tus hijos.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Schedule card */}
          <div className="reveal space-y-6">
            {/* Hours table */}
            <div className="bg-white rounded-3xl border border-primary/10 shadow-sm overflow-hidden">
              <div className="bg-[#8b4a65] px-8 py-5">
                <h3 className="font-display font-bold text-white text-xl">
                  Horario de Atención
                </h3>
              </div>
              <div className="px-8 py-6 divide-y divide-primary/8">
                {/* Column labels */}
                <div className="grid grid-cols-3 gap-4 pb-3">
                  <span className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider">Día</span>
                  <span className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider text-center">Mañana</span>
                  <span className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider text-center">Tarde</span>
                </div>
                {schedule.map(({ day, morning, afternoon }) => (
                  <div key={day} className="grid grid-cols-3 gap-4 py-4">
                    <span className="font-body text-sm font-semibold text-primary">{day}</span>
                    <span
                      className={`font-body text-sm text-center ${
                        morning === "Cerrado" ? "text-text-muted/50" : "text-text"
                      }`}
                    >
                      {morning}
                    </span>
                    <span
                      className={`font-body text-sm text-center ${
                        afternoon === "Cerrado" ? "text-text-muted/50" : "text-text"
                      }`}
                    >
                      {afternoon}
                    </span>
                  </div>
                ))}
              </div>
              {/* Urgencias banner */}
              <div className="mx-8 mb-6 p-4 rounded-2xl bg-accent/10 border border-accent/20 flex items-start gap-3">
                <BellAlert className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-bold text-accent">Urgencias 24h</p>
                  <p className="font-body text-sm text-text-muted mt-0.5">
                    Teléfono de guardia disponible fuera del horario habitual.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white rounded-3xl border border-primary/10 shadow-sm px-8 py-6 space-y-4">
              <h3 className="font-display font-bold text-primary text-lg">Contacto</h3>
              <div className="space-y-3 font-body text-sm text-text-muted">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Valcanera 940, Luján de Cuyo, Mendoza</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0261157261890" className="hover:text-accent transition-colors">0261 157 261 890</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@pedisalud.es" className="hover:text-accent transition-colors">info@pedisalud.es</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div className="reveal">
            <div className="w-full h-full min-h-[500px] rounded-3xl overflow-hidden border border-primary/10 shadow-sm">
              <iframe
                title="Ubicación Clínica PediSalud"
                src="https://maps.google.com/maps?q=-33.029505,-68.886555&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
