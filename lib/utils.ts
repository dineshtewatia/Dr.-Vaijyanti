import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const whatsappUrl = (message = "Hello Dr. Vaijyanti Verma Clinic, I would like to book an appointment.") => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919971998804";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
