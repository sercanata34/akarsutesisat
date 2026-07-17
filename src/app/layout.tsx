import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akarsutesisat.com"),
  title: {
    default: "Akarsu Tesisat | Profesyonel Su Tesisatçısı",
    template: "%s | Akarsu Tesisat"
  },
  description: "İstanbul geneli 7/24 su tesisatı, cihazla kırmadan su kaçağı tespiti ve robotla tıkanıklık açma hizmetleri. Hızlı, garantili ve profesyonel tesisat servisi.",
  keywords: ["su tesisatçısı", "su kaçağı tespiti", "tıkanıklık açma", "petek temizliği", "istanbul tesisatçı", "kırmadan su kaçağı bulma", "robotla pimaş açma", "logar tıkanıklığı", "klozet tıkanıklığı", "kameralı tesisatçı"],
  authors: [{ name: "Akarsu Tesisat" }],
  creator: "Akarsu Tesisat",
  publisher: "Akarsu Tesisat",
  alternates: {
    canonical: "https://www.akarsutesisat.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Akarsu Tesisat | Kırmadan Cihazla Su Kaçağı Tespiti",
    description: "İstanbul'un tüm ilçelerine 30 dakikada acil tesisat servisi. Su kaçağı tespiti ve tıkanıklık açma için hemen arayın.",
    url: "https://www.akarsutesisat.com",
    siteName: "Akarsu Tesisat",
    images: [
      {
        url: "/images/tesisat3.png",
        width: 1200,
        height: 630,
        alt: "Akarsu Tesisat Profesyonel Hizmetler",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akarsu Tesisat | Tıkanıklık Açma & Petek Temizliği",
    description: "İstanbul'da güvenilir ve hızlı su tesisatçısı. Cihazlı ve robotik çözümler.",
    images: ["/images/tesisat3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { RiWhatsappFill } from "react-icons/ri";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${gilroy.className} antialiased bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        
        <Footer />

        {/* LocalBusiness Schema - Sitewide */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.akarsutesisat.com/#business",
              "name": "Akarsu Tesisat",
              "image": "https://www.akarsutesisat.com/images/tesisat3.png",
              "description": "İstanbul genelinde 7/24 kırmadan su kaçağı tespiti ve robotla tıkanıklık açma hizmetleri.",
              "url": "https://www.akarsutesisat.com",
              "telephone": "+905411071927",
              "priceRange": "₺₺",
              "openingHours": "Mo-Su 00:00-24:00",
              "currenciesAccepted": "TRY",
              "paymentAccepted": "Cash, Credit Card",
              "areaServed": {
                "@type": "City",
                "name": "İstanbul"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "H Cd. No:39, Uğur Mumcu Mah.",
                "addressLocality": "Sultangazi",
                "addressRegion": "İstanbul",
                "postalCode": "34265",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.1066,
                "longitude": 28.8713
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              }
            })
          }}
        />

        {/* Yüzen WhatsApp Butonu */}
        <a
          href="https://wa.me/905411071927"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all z-50 group"
          aria-label="WhatsApp ile İletişime Geç"
        >
          <RiWhatsappFill className="text-4xl" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-gray-900 text-sm font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp&apos;tan Yazın
          </span>
        </a>
      </body>
    </html>
  );
}
