import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Dr. Vaijyanti Verma Clinic on WhatsApp"
      className="fixed bottom-24 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-2xl shadow-green-600/30 transition-transform hover:scale-105 md:inline-flex"
    >
      <MessageCircle size={25} />
    </a>
  );
}
