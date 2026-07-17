import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { RiCheckDoubleLine, RiAwardFill, RiTeamFill, RiTimeLine, RiShieldCheckFill, RiPhoneFill, RiStarFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Hakkımızda | Akarsu Tesisat",
  description: "Akarsu Tesisat, 15 yılı aşkın tecrübesiyle İstanbul genelinde Avrupa standartlarında kırmadan su kaçağı tespiti ve robotla tıkanıklık açma hizmetleri sunar. Sertifikalı ustalar, %100 garantili işçilik.",
  alternates: {
    canonical: "https://www.akarsutesisat.com/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Akarsu Tesisat - 15+ Yıllık Tecrübe",
    description: "İstanbul'un güvenilir su tesisatçısı Akarsu Tesisat hakkında. Sertifikalı ustalar, modern ekipmanlar, %100 müşteri memnuniyeti.",
    url: "https://www.akarsutesisat.com/hakkimizda",
    siteName: "Akarsu Tesisat",
    images: [{ url: "https://www.akarsutesisat.com/images/tesisat3.png", width: 1200, height: 630 }],
    locale: "tr_TR",
    type: "website",
  },
};

const stats = [
  { value: "15+", label: "Yıllık Tecrübe" },
  { value: "5.000+", label: "Tamamlanan İş" },
  { value: "34", label: "İlçe Hizmet" },
  { value: "%100", label: "Garantili İşçilik" },
];

const features = [
  { icon: RiAwardFill, title: "Garantili İşçilik", desc: "Yaptığımız tüm tesisat işlemleri 1 yıl boyunca firmamızın garantisi altındadır. Sorun tekrar çıkarsa ücretsiz geliyoruz." },
  { icon: RiTeamFill, title: "Sertifikalı Ustalar", desc: "Ekibimiz sürekli eğitim alır. Tüm ustalarımız sıhhi tesisat sertifikasına ve modern cihaz kullanım yetkisine sahiptir." },
  { icon: RiTimeLine, title: "7/24 Acil Servis", desc: "Gecenin bir yarısı patlayan su borularında bile 30 dakikada kapınızdayız. Bayram, hafta sonu fark etmez." },
  { icon: RiShieldCheckFill, title: "Kırmadan Teknoloji", desc: "Termal kamera ve akustik cihazlarımızla fayans kırmadan, duvar yıkmadan, sadece noktasal müdahaleyle sorunu çözüyoruz." },
];

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Akarsu Tesisat",
    "url": "https://www.akarsutesisat.com",
    "logo": "https://www.akarsutesisat.com/images/tesisat3.png",
    "description": "İstanbul genelinde 7/24 profesyonel su tesisatı, kırmadan su kaçağı tespiti ve robotla tıkanıklık açma hizmetleri.",
    "telephone": "+905411071927",
    "foundingDate": "2009",
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
    "sameAs": [
      "https://wa.me/905411071927"
    ]
  };

  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50/80 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6">
                <RiStarFill className="text-yellow-500" /> İstanbul&apos;un Güvenilir Tesisatçısı
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                Biz <span className="text-blue-600">Kimiz?</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10 max-w-2xl">
                2009 yılından bu yana İstanbul&apos;un tüm ilçelerine modern teknolojilerle kusursuz tesisat hizmeti sunuyoruz. Kırma-dökme dönemi bizimle sona erdi.
              </p>
              <a
                href="tel:+905411071927"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-[0_8px_30px_rgb(37,99,235,0.24)] hover:bg-blue-700 transition-all text-lg"
              >
                <RiPhoneFill className="text-xl" />
                Hemen Ara: 0541 107 19 27
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-500 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative h-[450px] lg:h-[560px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/images/tesisat3.png" alt="Akarsu Tesisat Ekibi" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3">
                  <div className="text-2xl font-black text-gray-900">15+ Yıl</div>
                  <div className="text-sm font-bold text-gray-500">Sektör Tecrübesi</div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Kırmadan, Dökmeden<br /><span className="text-blue-600">Avrupa Standartlarında Çözüm</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Tesisat sorunlarında kırma-dökme dönemi bizimle sona erdi. Tamamen ithal, akustik ve termal dinleme cihazlarımızla arızayı noktasal olarak buluyor, en az masrafla kesin çözüm üretiyoruz.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Müşteri memnuniyetini her zaman ön planda tutarak, dürüst ve şeffaf fiyatlandırma politikası izliyoruz. Keşif ücreti almıyor, işi bitirince faturalandırıyoruz.
                </p>
                <div className="space-y-4">
                  {["Ücretsiz keşif ve fiyat teklifi", "Kırmadan kameralı ve akustik tespit", "Orijinal malzeme ve kaliteli işçilik", "1 yıl işçilik garantisi", "7/24 acil müdahale"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                        <RiCheckDoubleLine className="text-blue-600 text-sm" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-5 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/20 transition-all">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <feature.icon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Tesisat Sorununuz mu Var?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Hemen arayın, 30 dakika içinde uzman ekibimiz kapınızda olsun.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+905411071927" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-3 text-lg">
                <RiPhoneFill /> 0541 107 19 27
              </a>
              <a href="https://wa.me/905411071927" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#20bd5a] transition-all text-lg">
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
