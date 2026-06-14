import type { Metadata } from "next";
import "./globals.css";
import { MobileActions } from "@/components/mobile-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export const metadata: Metadata = {
  title: {
    default: "Dr. Vaijyanti Verma Clinic | Gynecologist in Sector 17 Faridabad",
    template: "%s | Dr. Vaijyanti Verma Clinic"
  },
  description:
    "Compassionate gynecological care by Dr. Vaijyanti Verma in Sector 17, Faridabad. Pregnancy care, antenatal checkups, PCOS care, infertility consultation, menopause care, and routine women's health visits.",
  keywords: [
    "Best Gynecologist in Sector 17 Faridabad",
    "Women's Clinic in Faridabad",
    "Pregnancy Care Doctor in Faridabad",
    "Dr Vaijyanti Verma",
    "Gynecologist Faridabad"
  ],
  openGraph: {
    title: "Dr. Vaijyanti Verma Clinic",
    description: "Premium, caring women's healthcare in Sector 17, Faridabad.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloating />
        <MobileActions />
      </body>
    </html>
  );
}
