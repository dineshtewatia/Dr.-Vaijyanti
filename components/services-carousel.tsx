"use client";

import Image from "next/image";
import {
  Baby,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound
} from "lucide-react";
import { useRef } from "react";

const services = [
  { title: "Pregnancy Care", icon: Baby, image: "/images/consultation-room.webp", text: "Supportive care through pregnancy with attention to comfort, safety, and clear guidance." },
  { title: "Antenatal Checkups", icon: CalendarCheck, image: "/images/clinic-entrance.webp", text: "Regular checkups to monitor mother and baby, answer questions, and plan the next steps." },
  { title: "High-Risk Pregnancy Management", icon: ShieldCheck, image: "/images/clinic-exterior.webp", text: "Careful monitoring and referral-ready planning for pregnancies that need closer attention." },
  { title: "Menstrual Disorder Treatment", icon: HeartPulse, image: "/images/consultation-room.webp", text: "Evaluation and treatment planning for irregular, painful, heavy, or concerning periods." },
  { title: "PCOS/PCOD Management", icon: Sparkles, image: "/images/clinic-entrance.webp", text: "Personalized care for cycle concerns, hormonal symptoms, lifestyle support, and long-term follow-up." },
  { title: "Infertility Consultation", icon: HeartHandshake, image: "/images/clinic-exterior.webp", text: "Sensitive consultation for couples and individuals seeking fertility evaluation and guidance." },
  { title: "Menopause Care", icon: UsersRound, image: "/images/consultation-room.webp", text: "Calm support for menopausal symptoms, preventive care, and changing health needs." },
  { title: "Family Planning & Contraception", icon: CheckCircle2, image: "/images/clinic-entrance.webp", text: "Confidential counseling to help patients choose options that fit their health and plans." },
  { title: "Routine Gynecological Examination", icon: Stethoscope, image: "/images/clinic-exterior.webp", text: "Preventive visits, screening guidance, and everyday gynecological concerns." }
];

export function ServicesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth"
    });
  }

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous services"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF8FF] hover:text-secondary hover:shadow-md"
        >
          <ChevronLeft size={19} />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next services"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF8FF] hover:text-secondary hover:shadow-md"
        >
          <ChevronRight size={19} />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-6 pt-2"
        aria-label="Gynecology services carousel"
      >
        {services.map((service, index) => (
          <article
            key={service.title}
            data-active={index === 2}
            style={{ borderColor: index === 2 ? "#2BA7D8" : "#D7E7E1" }}
            className="service-card group min-h-[390px] min-w-[250px] snap-start rounded-lg border bg-white p-4 shadow-[0_18px_42px_rgba(31,41,55,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(43,167,216,0.18)] sm:min-w-[270px] lg:min-w-[285px]"
          >
            <div className="relative h-28 overflow-hidden rounded-md bg-[#EAF8FF]">
              <Image
                src={service.image}
                alt={`${service.title} at Dr. Vaijyanti Verma Clinic`}
                fill
                sizes="(min-width: 1024px) 285px, 250px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md bg-white/88 text-primary shadow-sm backdrop-blur transition-colors duration-300 group-hover:text-secondary">
                <service.icon size={19} />
              </div>
            </div>
            <div className="mt-6 text-lg font-bold tracking-[0.12em] text-slate-300">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 font-serif text-[1.35rem] font-bold leading-tight text-[#17427A]">{service.title}</h3>
            <p className="mt-4 text-[0.95rem] font-medium leading-7 text-slate-600">{service.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
