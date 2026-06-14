"use client";

import Link from "next/link";
import { CalendarCheck, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/data";
import { whatsappUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl">
      <div className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Dr. Vaijyanti Verma Clinic home">
          <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary font-serif text-xl font-semibold text-white">
            VV
          </span>
          <span>
            <span className="block font-serif text-xl font-semibold tracking-normal text-primary sm:text-2xl">Dr. Vaijyanti Verma</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">Gynecology Clinic</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/78 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EAF8FF] hover:text-secondary hover:shadow-sm hover:shadow-secondary/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <a href="tel:+919971998804">
              <Phone size={17} />
              Call Now
            </a>
          </Button>
          <Button asChild>
            <Link href="/#appointment">
              <CalendarCheck size={18} />
              Book Appointment
            </Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-white text-primary lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t bg-white lg:hidden">
          <div className="container-pad grid gap-3 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-[#EAF8FF] hover:text-secondary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button asChild variant="outline">
                <a href="tel:+919971998804">
                  <Phone size={17} />
                  Call
                </a>
              </Button>
              <Button asChild>
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
