import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  CalendarCheck,
  CheckCircle2,
  Clock,
  HeartHandshake,
  HeartPulse,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UsersRound
} from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

const services = [
  { title: "Pregnancy Care", icon: Baby, text: "Supportive care through pregnancy with attention to comfort, safety, and clear guidance." },
  { title: "Antenatal Checkups", icon: CalendarCheck, text: "Regular checkups to monitor mother and baby, answer questions, and plan the next steps." },
  { title: "High-Risk Pregnancy Management", icon: ShieldCheck, text: "Careful monitoring and referral-ready planning for pregnancies that need closer attention." },
  { title: "Menstrual Disorder Treatment", icon: HeartPulse, text: "Evaluation and treatment planning for irregular, painful, heavy, or concerning periods." },
  { title: "PCOS/PCOD Management", icon: Sparkles, text: "Personalized care for cycle concerns, hormonal symptoms, lifestyle support, and long-term follow-up." },
  { title: "Infertility Consultation", icon: HeartHandshake, text: "Sensitive consultation for couples and individuals seeking fertility evaluation and guidance." },
  { title: "Menopause Care", icon: UsersRound, text: "Calm support for menopausal symptoms, preventive care, and changing health needs." },
  { title: "Family Planning & Contraception", icon: CheckCircle2, text: "Confidential counseling to help patients choose options that fit their health and plans." },
  { title: "Routine Gynecological Examination", icon: Stethoscope, text: "Preventive visits, screening guidance, and everyday gynecological concerns." }
];

const whyChoose = [
  "Experienced gynecological care",
  "Patient-centered approach",
  "Comfortable clinic environment",
  "Personalized treatment plans",
  "Trusted by local families"
];

const placeholders = [
  "Medical qualifications to be added",
  "Years of experience to be added",
  "Professional achievements to be added",
  "Special interests to be added"
];

const gallery = [
  { src: "/images/clinic-exterior.webp", alt: "Clinic exterior in Sector 17 Faridabad", label: "Clinic Exterior" },
  { src: "/images/consultation-room.webp", alt: "Consultation room at Dr. Vaijyanti Verma Clinic", label: "Consultation Room" },
  { src: "/images/clinic-entrance.webp", alt: "Clinic entrance sign and interiors", label: "Clinic Entrance" }
];

const reviewCards = [
  {
    name: "Gargi Shukla Arora",
    date: "4 months ago",
    rating: 5,
    sourceUrl: "https://www.google.com/maps/contrib/111958018079587450918/reviews?hl=en-IN",
    quote:
      "Dr. Vaijayanti mam is a well experienced and humble doctor, known for her expertise in gynaecology. She is always available for her patients. I have a wonderful experience of almost 8 years with her, she has always been there with her support and guidance, solving any query or doubt of mine, any time of the day or night. I will always be grateful to her."
  },
  {
    name: "Mukta Adlakha",
    date: "Google Review",
    rating: 5,
    quote:
      "I met Dr. Vaijayanti at Dr. Anita Soni clinic when I conceived in 2025. She has been a blessing in disguise as when you are becoming a first time parent your life is full of doubts, fears and what not, and Dr. Vaijayanti never got tired from thousands of my questions. She guided the best way possible. Amazing doctor I must say."
  },
  {
    name: "Sonam Bhatnagar",
    date: "Google Review",
    rating: 5,
    quote:
      "Dr. Vaijayanti is a very caring and good doctor. She listens to her patients carefully and gives them good treatment. She explains things clearly and is very kind. I had a great experience with her, and I really appreciate how she makes her patients feel comfortable. Love u Mam."
  }
];

const mapSrc =
  "https://www.google.com/maps?q=House%20Number%20471%2C%20Sector%2017%2C%20Faridabad%2C%20Haryana%20121002&output=embed";

export default function HomePage() {
  return (
    <main>
      <section className="cream-panel relative overflow-hidden">
        <div className="container-pad grid min-h-[calc(100vh-80px)] items-center gap-12 py-12 lg:grid-cols-[0.98fr_1.02fr] lg:py-16">
          <MotionReveal>
            <div>
              <h1 className="clinic-gradient-text font-serif text-5xl font-semibold leading-[1.04] tracking-normal md:text-7xl">
                Personalized & Trusted Women&apos;s Healthcare
              </h1>
              <p className="mt-5 max-w-2xl text-xl leading-9 text-foreground/76">
                Personalized gynecological care with comfort, dignity, and expertise.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-foreground/78">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  <Star className="fill-accent text-accent" size={17} /> 5.0 Rating | 27+ Happy Patients
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                  <MapPin className="text-primary" size={17} /> Sector 17, Faridabad
                </span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="group shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-secondary hover:shadow-2xl hover:shadow-secondary/30">
                  <Link href="/#appointment">
                    Book Appointment
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" size={18} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-secondary hover:bg-[#EAF8FF] hover:text-secondary hover:shadow-xl hover:shadow-secondary/15">
                  <a href="tel:+919971998804">
                    <Phone className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" size={18} />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="glass rounded-lg p-3 md:p-4">
              <div className="relative overflow-hidden rounded-lg bg-[#DDF7EE]">
                <Image
                  src="/images/dr-vaijyanti-verma-portrait.png"
                  alt="Dr. Vaijyanti Verma, gynecologist in Faridabad"
                  width={900}
                  height={900}
                  priority
                  className="h-[320px] w-full object-cover object-top md:h-[430px]"
                />
                <div className="absolute bottom-4 left-4 w-fit max-w-[calc(100%-2rem)] rounded-md bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                  <h2 className="clinic-gradient-text font-serif text-xl font-semibold leading-tight">Dr. Vaijyanti Verma</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Gynecologist</p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="about-preview" className="section-pad bg-white">
        <div className="container-pad">
          <MotionReveal delay={0.08}>
            <div className="mx-auto max-w-4xl">
              <SectionHeading eyebrow="About Doctor" title="Care that listens first">
                Dr. Vaijyanti Verma provides gynecological care for women across different life stages, with a focus on respectful consultation, clear explanations, and a comfortable clinic experience.
              </SectionHeading>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                The clinic is designed for patients who value privacy, warmth, and professional guidance. Clinical details such as qualifications, experience, achievements, and special interests can be added here once verified.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {placeholders.map((item) => (
                  <div key={item} className="rounded-lg border bg-[#FFF8ED] p-4">
                    <CheckCircle2 className="text-primary" size={21} />
                    <p className="mt-3 text-sm font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
                <Link href="/about">
                  Read More About Doctor
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="services" className="section-pad bg-[#FFF8ED]">
        <div className="container-pad">
          <SectionHeading eyebrow="Services" title="Gynecology services with attentive, personal care" center>
            From routine visits to pregnancy support, each consultation is approached with patience, discretion, and careful next-step planning.
          </SectionHeading>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <MotionReveal key={service.title} delay={index * 0.035}>
                <div className="h-full rounded-lg border border-primary/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#DDF7EE] text-primary">
                    <service.icon size={21} />
                  </div>
                  <h3 className="clinic-gradient-text mt-4 font-serif text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.text}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad navy-panel text-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Why Choose Us" title="A calmer clinic experience for women and families" inverse>
            The clinic experience is built around trust, privacy, and the reassurance of being heard.
          </SectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div key={item} className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur">
                <CheckCircle2 className="text-accent" size={20} />
                <h3 className="mt-3 text-sm font-semibold leading-6">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading eyebrow="Patient Reviews" title="Real patient words, shared with gratitude" center>
            ★★★★★ 5.0 Google Rating based on 27 patient reviews
          </SectionHeading>
          <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4">
            {reviewCards.map((review) => (
              <div key={review.name} className="min-w-[310px] snap-center rounded-lg border bg-[#FFF8ED] p-5 shadow-sm md:min-w-[380px]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex text-accent">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="fill-accent" size={18} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">{review.date}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">&quot;{review.quote}&quot;</p>
                {review.sourceUrl ? (
                  <a href={review.sourceUrl} target="_blank" rel="noreferrer" className="review-author-link mt-5 inline-block font-semibold transition-colors">
                    {review.name}
                  </a>
                ) : (
                  <div className="review-author-link mt-5 font-semibold">{review.name}</div>
                )}
                <div className="text-sm text-muted-foreground">5-star Google review</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-pad bg-[#DDF7EE]/50">
        <div className="container-pad">
          <SectionHeading eyebrow="Clinic Gallery" title="A glimpse of the clinic environment" center>
            Real photos and placeholders can be updated as the clinic adds more professional interior photography.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {gallery.map((item, index) => (
              <MotionReveal key={item.src} delay={index * 0.04}>
                <div className="group overflow-hidden rounded-lg bg-white p-3 shadow-sm">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-md">
                    <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="px-2 py-4 font-semibold text-primary">{item.label}</div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className="section-pad bg-white">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Appointment" title="Book a visit with confidence">
              Clinic hours are every day from 5:00 PM to 8:00 PM. Share your preferred date and time, and the clinic can confirm availability.
            </SectionHeading>
            <div className="mt-8 grid gap-4">
              <div className="rounded-lg border bg-[#FFF8ED] p-5">
                <Clock className="text-primary" size={24} />
                <h3 className="mt-4 font-semibold text-primary">Clinic Timings</h3>
                <p className="mt-2 text-sm text-muted-foreground">Every Day, 5:00 PM - 8:00 PM</p>
              </div>
              <div className="rounded-lg border bg-[#FFF8ED] p-5">
                <Phone className="text-primary" size={24} />
                <h3 className="mt-4 font-semibold text-primary">Prefer calling?</h3>
                <a className="mt-2 block text-sm font-semibold text-foreground hover:text-primary" href="tel:+919971998804">+91 99719 98804</a>
              </div>
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      <section id="contact" className="section-pad bg-[#FFF8ED]">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact & Location" title="Dr. Vaijyanti Verma Clinic">
              House Number 471, Sector 17, Faridabad, Haryana 121002
            </SectionHeading>
            <div className="mt-8 grid gap-4 text-sm">
              <div className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"><Phone className="text-primary" size={21} /> <a href="tel:+919971998804" className="font-semibold">+91 99719 98804</a></div>
              <div className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"><Clock className="text-primary" size={21} /> <span>Every Day, 5:00 PM - 8:00 PM</span></div>
              <div className="flex gap-3 rounded-lg bg-white p-4 shadow-sm"><MapPin className="text-primary" size={21} /> <span>House Number 471, Sector 17, Faridabad, Haryana 121002</span></div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild><a href="tel:+919971998804"><Phone size={18} /> Call Now</a></Button>
              <Button asChild variant="outline"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></Button>
              <Button asChild variant="gold"><a href="https://www.google.com/maps/search/?api=1&query=House%20Number%20471%2C%20Sector%2017%2C%20Faridabad%2C%20Haryana%20121002" target="_blank" rel="noreferrer"><Navigation size={18} /> Directions</a></Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border bg-white p-3 shadow-sm">
            <iframe
              title="Google Maps location for Dr. Vaijyanti Verma Clinic"
              src={mapSrc}
              className="h-[420px] w-full rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
