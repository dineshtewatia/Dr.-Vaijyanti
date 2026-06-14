import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/70 bg-white/94 px-3 py-2 shadow-2xl backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href="tel:+919971998804" className="flex flex-col items-center justify-center rounded-md bg-primary px-2 py-2 text-xs font-semibold text-white">
          <Phone size={18} />
          Call Now
        </a>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center rounded-md bg-success px-2 py-2 text-xs font-semibold text-white">
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <Link href="/#appointment" className="flex flex-col items-center justify-center rounded-md bg-accent px-2 py-2 text-xs font-semibold text-accent-foreground">
          <CalendarCheck size={18} />
          Book
        </Link>
      </div>
    </div>
  );
}
