import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, HeartHandshake, MapPin, Phone, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Dr. Vaijyanti Verma",
  description:
    "Learn about Dr. Vaijyanti Verma Clinic in Sector 17, Faridabad, offering caring gynecological consultations, pregnancy care, PCOS support, menopause care, and routine women's health visits."
};

const profilePlaceholders = [
  "Medical qualifications to be added after verification",
  "Years of experience to be added after confirmation",
  "Professional achievements to be added after confirmation",
  "Special interests to be added after confirmation"
];

const careValues = [
  {
    title: "Respectful consultation",
    text: "Patients are encouraged to share concerns openly, with privacy and dignity at the center of each visit.",
    icon: HeartHandshake
  },
  {
    title: "Clear next steps",
    text: "The clinic focuses on understandable guidance, appropriate follow-up, and practical treatment planning.",
    icon: CheckCircle2
  },
  {
    title: "Women-centered care",
    text: "Care spans pregnancy, menstrual health, PCOS/PCOD, family planning, menopause, and routine examinations.",
    icon: Stethoscope
  }
];

export default function AboutPage() {
  return (
    <main>
      <section className="cream-panel">
        <div className="container-pad grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/78 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <ShieldCheck size={17} />
              About Doctor
            </div>
            <h1 className="clinic-gradient-text mt-7 font-serif text-5xl font-semibold leading-[1.04] tracking-normal md:text-7xl">
              Dr. Vaijyanti Verma
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-9 text-foreground/76">
              An empathetic gynecology clinic experience for women and families in Sector 17, Faridabad.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/25">
                <Link href="/#appointment">
                  Book Appointment
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-[#DDF7EE] hover:shadow-xl hover:shadow-primary/10">
                <a href="tel:+919971998804">
                  <Phone size={18} />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <div className="glass rounded-lg p-3 md:p-4">
            <div className="relative overflow-hidden rounded-lg bg-[#DDF7EE]">
              <Image
                src="/images/dr-vaijyanti-verma-portrait.png"
                alt="Dr. Vaijyanti Verma"
                width={1200}
                height={1200}
                priority
                className="h-[340px] w-full object-cover object-top md:h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading eyebrow="Doctor Profile" title="Care that listens first">
            Dr. Vaijyanti Verma provides gynecological care with a focus on comfort, dignity, and thoughtful clinical guidance. Verified qualifications and achievements can be added here when provided by the clinic.
          </SectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {profilePlaceholders.map((item) => (
              <div key={item} className="rounded-lg border bg-[#FFF8ED] p-5">
                <Sparkles className="text-accent" size={22} />
                <p className="mt-4 text-sm font-semibold leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#FFF8ED]">
        <div className="container-pad">
          <SectionHeading eyebrow="Approach" title="A calm, private clinic experience" center>
            The clinic is designed for patients who value respectful conversation, careful explanation, and practical next steps.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {careValues.map((item) => (
              <div key={item.title} className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#DDF7EE] text-primary">
                  <item.icon size={24} />
                </div>
                <h2 className="clinic-gradient-text mt-5 font-serif text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad navy-panel text-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">Visit the clinic</h2>
            <p className="mt-4 max-w-2xl text-white/72">
              House Number 471, Sector 17, Faridabad, Haryana 121002
            </p>
          </div>
          <div className="grid gap-3 text-sm">
            <div className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur">
              <MapPin className="mb-3 text-accent" size={22} />
              Sector 17, Faridabad
            </div>
            <div className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur">
              <Clock className="mb-3 text-accent" size={22} />
              Every Day, 5:00 PM - 8:00 PM
            </div>
            <Button asChild variant="gold" className="mt-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
              <Link href="/#contact">
                Contact & Location
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
