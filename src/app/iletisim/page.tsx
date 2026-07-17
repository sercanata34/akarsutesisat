import { Metadata } from "next";
import Script from "next/script";
import { RiPhoneFill, RiMapPin2Fill, RiTimeLine, RiCheckDoubleLine } from "react-icons/ri";

export const metadata: Metadata = {
  title: "İletişim | Akarsu Tesisat - 7/24 Acil Tesisat",
  description: "Akarsu Tesisat iletişim sayfası. 7/24 acil su tesisatçısı için +90 541 107 19 27 numarasını arayın. WhatsApp destek hattı ve adres bilgileri.",
  alternates: {
    canonical: "https://www.akarsutesisat.com/iletisim",
  },
  openGraph: {
    title: "İletişim | Akarsu Tesisat - 7/24 Acil Su Tesisatçısı",
    description: "İstanbul geneli acil su tesisatçısı. +90 541 107 19 27 numaralı hattımızı 7/24 arayabilirsiniz.",
    url: "https://www.akarsutesisat.com/iletisim",
    siteName: "Akarsu Tesisat",
    images: [{ url: "https://www.akarsutesisat.com/images/tesisat3.png", width: 1200, height: 630 }],
    locale: "tr_TR",
    type: "website",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Akarsu Tesisat",
    "url": "https://www.akarsutesisat.com",
    "telephone": "+905411071927",
    "openingHours": "Mo-Su 00:00-24:00",
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
    }
  };

  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-50/80 to-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6">
              <RiTimeLine /> 7/24 Kesintisiz Servis
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Bize <span className="text-blue-600">Ulaşın</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
              Acil durumlar, keşif talepleri veya aklınıza takılan sorular için 7/24 bize ulaşabilirsiniz.
            </p>
          </div>
        </section>

        {/* Quick Contact Buttons */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+905411071927"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgb(37,99,235,0.24)] hover:bg-blue-700 transition-all"
              >
                <RiPhoneFill className="text-2xl" />
                0541 107 19 27
              </a>
              <a
                href="https://wa.me/905411071927"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(37,211,102,0.24)] hover:bg-[#20bd5a] transition-all"
              >
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>

        {/* Map & Contact Info */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gray-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
              <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none" />
                <h2 className="text-3xl font-black text-white mb-4 tracking-tight">İletişim Bilgileri</h2>
                <p className="text-gray-400 font-medium mb-10 text-lg">Sorunlarınızı bekletmeyin, uzman ekibimiz bir telefon uzağınızda.</p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiMapPin2Fill className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Merkez Adres</div>
                      <div className="text-white font-medium text-lg leading-relaxed">H Cd. No:39, Uğur Mumcu Mah.<br />Sultangazi/İstanbul</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiPhoneFill className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Telefon / WhatsApp</div>
                      <a href="tel:+905411071927" className="block text-white font-medium text-xl hover:text-blue-400 transition-colors mb-2">0541 107 19 27</a>
                      <a href="https://wa.me/905411071927" target="_blank" className="inline-block px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-bold hover:bg-[#20bd5a] transition-all">WhatsApp&apos;tan Mesaj At</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiTimeLine className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Çalışma Saatleri</div>
                      <div className="text-white font-medium text-lg">7/24 Kesintisiz Hizmet</div>
                      <div className="text-gray-400 text-sm mt-1">Bayram ve hafta sonları dahil</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 relative min-h-[500px] lg:min-h-full">
                <iframe
                  src="https://maps.google.com/maps?q=H+Cd.+No:39+U%C4%9Fur+Mumcu+Sultangazi+%C4%B0stanbul&hl=tr&z=16&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Akarsu Tesisat Konum - Sultangazi İstanbul"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Neden Bizi Seçmelisiniz?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "30 dakikada kapınızdayız",
                "Kırmadan cihazla tespit",
                "1 yıl işçilik garantisi",
                "Şeffaf ve dürüst fiyatlandırma",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <RiCheckDoubleLine className="text-blue-600 text-xl shrink-0" />
                  <span className="text-gray-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
