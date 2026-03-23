"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Envelope, Clock, CheckCircleSolid } from "@medusajs/icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
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
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section ref={sectionRef} className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-10 2xl:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left info */}
          <div className="space-y-8">
            <div className="reveal">
              <span className="inline-block mb-3 text-accent font-body font-semibold text-sm uppercase tracking-widest">
                Contacto
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                Solicita tu cita sin compromiso
              </h2>
              <p className="mt-4 font-body text-muted leading-relaxed">
                Rellena el formulario y nos pondremos en contacto contigo en
                menos de 24 horas para confirmar tu cita.
              </p>
            </div>

            {/* Info cards */}
            <div className="reveal space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Dirección",
                  detail: "Valcanera 940, Luján de Cuyo, Mendoza",
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  detail: "0261 157 261 890",
                  href: "tel:+0261157261890",
                },
                {
                  icon: Envelope,
                  title: "Email",
                  detail: "info@pedisalud.es",
                  href: "mailto:info@pedisalud.es",
                },
                {
                  icon: Clock,
                  title: "Horario",
                  detail: "Lun–Vie 9:00–20:00 · Sáb 9:00–14:00",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-2xl bg-white border border-primary/10"
                >
                  <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm text-[#1A1A1A]">
                      {item.title}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-sm text-muted hover:text-primary transition-colors"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-muted">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="reveal">
            <div className="bg-white rounded-3xl border border-primary/10 shadow-lg p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto">
                    <CheckCircleSolid className="w-9 h-9 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary">
                    ¡Solicitud recibida!
                  </h3>
                  <p className="font-body text-muted">
                    Nos pondremos en contacto contigo en las próximas 24 horas
                    para confirmar tu cita.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-semibold text-[#1A1A1A] mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 font-body text-sm text-[#1A1A1A] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-semibold text-[#1A1A1A] mb-2">
                        Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tus apellidos"
                        className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 font-body text-sm text-[#1A1A1A] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold text-[#1A1A1A] mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 font-body text-sm text-[#1A1A1A] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold text-[#1A1A1A] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.es"
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 font-body text-sm text-[#1A1A1A] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold text-[#1A1A1A] mb-2">
                      Servicio de interés
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 font-body text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition">
                      <option value="">Selecciona un servicio</option>
                      <option>Pediatría General</option>
                      <option>Vacunación</option>
                      <option>Neurología Pediátrica</option>
                      <option>Nutrición Infantil</option>
                      <option>Urgencias Pediátricas</option>
                      <option>Seguimiento del Desarrollo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold text-[#1A1A1A] mb-2">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos brevemente qué necesitas..."
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 font-body text-sm text-[#1A1A1A] placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-accent text-white font-body font-bold text-base hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/30 transition-all duration-200"
                  >
                    Solicitar Cita
                  </button>

                  <p className="font-body text-xs text-muted text-center">
                    Al enviar este formulario aceptas nuestra{" "}
                    <a href="#" className="underline hover:text-primary">
                      Política de Privacidad
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
