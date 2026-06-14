import Link from "next/link";
import { Clock, Facebook, Instagram, Linkedin, MapPin, MessageCircle, Phone } from "lucide-react";
import { navItems } from "@/lib/data";
import { whatsappUrl } from "@/lib/utils";

const services = [
  "Pregnancy Care",
  "Antenatal Checkups",
  "High-Risk Pregnancy",
  "PCOS/PCOD Management",
  "Infertility Consultation"
];

export function SiteFooter() {
  return (
    <footer className="navy-panel pb-20 text-white md:pb-0">
      <div className="container-pad grid gap-10 py-14 lg:grid-cols-[1.1fr_0.7fr_0.9fr_1fr]">
        <div>
          <div className="font-serif text-3xl font-semibold">Dr. Vaijyanti Verma Clinic</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/74">
            Warm, respectful gynecological care for women and families in Sector 17, Faridabad.
          </p>
          <div className="mt-6 flex gap-3 text-white/80">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <span key={index} className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/10" aria-label="Social media placeholder">
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/58">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/76 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/58">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.map((item) => (
              <span key={item} className="text-sm text-white/76">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/58">Contact Details</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/76">
            <span className="flex gap-2"><MapPin size={18} /> House Number 471, Sector 17, Faridabad, Haryana 121002</span>
            <a className="flex gap-2 text-white hover:text-accent" href="tel:+919971998804"><Phone size={18} /> +91 99719 98804</a>
            <a className="flex gap-2 text-white hover:text-accent" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Start on WhatsApp
            </a>
            <span className="flex gap-2"><Clock size={18} /> Every Day, 5:00 PM - 8:00 PM</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-pad flex flex-col gap-2 text-xs text-white/58 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Dr. Vaijyanti Verma Clinic. Information on this website is not a substitute for medical advice.</span>
          <span>Social media links are placeholders until official profiles are added.</span>
        </div>
      </div>
    </footer>
  );
}
