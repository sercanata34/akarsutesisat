import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import {
  RiCheckDoubleLine, RiDropFill, RiToolsFill, RiWrenchLine,
  RiArrowRightLine, RiPhoneFill, RiShieldCheckFill, RiTimeLine,
  RiCameraLensFill, RiMapPin2Fill, RiWaterFlashLine,
  RiStarFill, RiSearchEyeLine, RiSettings3Line, RiVerifiedBadgeLine,
  RiCustomerService2Line, RiAlarmWarningLine,
} from "react-icons/ri";

export const revalidate = 60;

const testimonials = [
  {
    name: "Mehmet Yılmaz",
    location: "Kadıköy",
    text: "Duvardan su akıyordu, gelen usta 10 dakikada cihazla tam yeri buldu. Hiç kırmadan tek delikten halletti. Harika iş çıkardılar.",
    rating: 5,
  },
  {
    name: "Ayşe Kaya",
    location: "Şişli",
    text: "Petek temizliği için aradım, aynı gün geldiler. Petekler öncesine göre çok daha iyi ısınıyor. Fiyat da makul, kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Serkan Demir",
    location: "Sultangazi",
    text: "Logar tıkandı, gece 11'de aradım yine geldiler. Robotla 30 dakikada açtılar. 7/24 hizmetleri gerçekten çalışıyor.",
    rating: 5,
  },
  {
    name: "Fatma Arslan",
    location: "Üsküdar",
    text: "Su faturası şişince kaçak şüphesi ile aradım. Termal kamera ile tam noktayı buldular, sadece o yeri açıp kapattılar. Çok memnun kaldım.",
    rating: 5,
  },

];

const steps = [
  {
    num: "01",
    icon: RiAlarmWarningLine,
    title: "Bizi Arayın",
    desc: "7/24 açık hattımızdan ya da WhatsApp'tan bize ulaşın. Sorununuzu kısaca anlatın.",
  },
  {
    num: "02",
    icon: RiSearchEyeLine,
    title: "Ücretsiz Keşif",
    desc: "Uzman ekibimiz en geç 30 dakikada kapınızda. Termal kamera ve akustik cihazlarla sorunu tespit ediyoruz.",
  },
  {
    num: "03",
    icon: RiSettings3Line,
    title: "Net Fiyat Teklifi",
    desc: "Keşif sonrası şeffaf ve sabit fiyat veriyoruz. Gizli maliyet yok, sürpriz fatura yok.",
  },
  {
    num: "04",
    icon: RiVerifiedBadgeLine,
    title: "Garantili Çözüm",
    desc: "İşi kırmadan dökmeden tamamlıyoruz. 1 yıl işçilik garantisi ile teslim ediyoruz.",
  },
];

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "Akarsu Tesisat",
    "image": "https://www.akarsutesisat.com/images/tesisat3.png",
    "description": "Profesyonel su tesisatı, kırmadan su kaçağı tespiti ve robotla tıkanıklık açma hizmetleri.",
    "url": "https://www.akarsutesisat.com",
    "telephone": "+905411071927",
    "priceRange": "₺₺",
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
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <div className="flex flex-col min-h-screen bg-[#FDFDFD]">

        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[#FDFDFD]">
          <div className="absolute top-0 inset-x-0 h-[700px] bg-gradient-to-b from-blue-50/80 via-blue-50/30 to-transparent -z-10" />

          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

              {/* Sol: Metin */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-bold mb-8 shadow-sm w-max">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  Sahada Müsait &amp; 30 Dakikada Kapınızda
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-gray-900 tracking-tight mb-8 leading-[1.05]">
                  Su Tesisatında <br />
                  <span className="text-blue-600">Geleceğin Standartları</span>
                </h1>

                <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                  Evinizi kırmadan dökmeden, Avrupa standartlarında termal ve akustik cihazlarla tesisat sorunlarınızı kökünden çözüyoruz. Uzman ekibimizle anında müdahale.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="tel:+905411071927"
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-[0_8px_30px_rgb(37,99,235,0.24)] hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group text-lg"
                  >
                    <RiPhoneFill className="text-2xl group-hover:rotate-12 transition-transform" />
                    Hemen Usta Çağır
                  </a>
                  <a
                    href="#hizmetler"
                    className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group text-lg shadow-sm"
                  >
                    Hizmetlerimiz
                    <RiArrowRightLine className="text-xl group-hover:translate-x-1 transition-transform text-gray-400" />
                  </a>
                </div>

                {/* Güven rozetleri */}
                <div className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-gray-200/60">
                  <div className="flex items-center gap-3">
                    <RiShieldCheckFill className="text-3xl text-blue-600" />
                    <span className="text-base font-bold text-gray-800">%100 Garantili</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RiTimeLine className="text-3xl text-blue-600" />
                    <span className="text-base font-bold text-gray-800">7/24 Kesintisiz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RiWaterFlashLine className="text-3xl text-blue-600" />
                    <span className="text-base font-bold text-gray-800">Kırmadan Tespit</span>
                  </div>
                </div>
              </div>

              {/* Sağ: Görseller */}
              <div className="lg:col-span-7 relative h-[600px] lg:h-[750px] w-full mt-12 lg:mt-0 flex items-center justify-end">
                <div className="absolute right-0 top-0 w-full lg:w-[90%] h-[85%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 group">
                  <Image
                    src="/images/tesisat3.png"
                    alt="Profesyonel Ekipmanlar"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <h3 className="text-white text-3xl font-bold">Gelişmiş Teknolojiler</h3>
                    <p className="text-gray-200 text-lg font-medium mt-2">Kırmadan dökmeden nokta atışı tespit</p>
                  </div>
                </div>

                <div className="absolute left-0 bottom-0 w-[60%] lg:w-[45%] h-[55%] lg:h-[60%] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-8 border-[#FDFDFD] z-20 group">
                  <Image
                    src="/images/tesisat6.jpg"
                    alt="Su Kaçağı"
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                </div>

                <div className="absolute right-[-1rem] top-10 lg:right-4 lg:top-16 bg-white p-5 rounded-[2rem] shadow-2xl z-30 border border-gray-100 flex items-center gap-5 animate-bounce">
                  <div className="w-16 h-16 bg-blue-600 rounded-[1.25rem] flex items-center justify-center text-white shadow-inner">
                    <RiCameraLensFill className="text-3xl" />
                  </div>
                  <div className="pr-3">
                    <div className="text-3xl font-black text-gray-900 leading-none">15+</div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-1">Yıllık Tecrübe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STATS BAR ────────────────────────────────────────────────── */}
        <section className="py-10 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              {[
                { val: "15+", label: "Yıllık Tecrübe" },
                { val: "5.000+", label: "Tamamlanan İş" },
                { val: "34", label: "İlçeye Hizmet" },
                { val: "30dk", label: "Kapınızda" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-black mb-1">{s.val}</div>
                  <div className="text-white/90 font-bold text-sm uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NASIL ÇALIŞIYORUZ ────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">Süreç</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Nasıl Çalışıyoruz?</h2>
              <p className="text-gray-500 font-medium max-w-xl mx-auto mt-4 text-lg">
                Sizi tek adımda çözüme ulaştıran hızlı ve şeffaf sürecimiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="relative group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-100 hover:shadow-[0_8px_40px_rgb(37,99,235,0.08)] transition-all duration-500"
                >
                  <div className="absolute top-6 right-6 text-5xl font-black text-gray-100 group-hover:text-blue-50 transition-colors select-none leading-none" aria-hidden="true">
                    {step.num}
                  </div>
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HİZMETLER ────────────────────────────────────────────────── */}
        <section id="hizmetler" className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">Hizmetlerimiz</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Kusursuz Çözümler</h2>
              </div>
              <p className="text-gray-500 font-medium max-w-md text-lg leading-relaxed pb-2">
                Sorunları tahmin etmiyoruz, bilimsel cihazlarla tespit ediyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-[1920px] mx-auto pt-4">
              {[
                { href: "/su-kacagi-tespiti", img: "/images/tesisat1.avif", alt: "Termal Kamera Su Kaçağı", icon: <RiDropFill className="text-blue-600 text-xl" />, title: "Su Kaçağı Tespiti", desc: "Termal kamera ve akustik cihazlarla sızıntı kaynağını kırmadan noktasal olarak buluyoruz." },
                { href: "/tikaniklik-acma", img: "/images/tesisat10.jpg", alt: "Tıkanıklık Açma", icon: <RiToolsFill className="text-blue-600 text-xl" />, title: "Tıkanıklık Açma", desc: "Tuvalet, lavabo ve logar tıkanıklıklarını özel robotik helezon yay sistemlerimizle kırmadan açıyoruz." },
                { href: "/petek-temizligi", img: "/images/tesisat12.jpg", alt: "Petek Temizliği", icon: <RiWrenchLine className="text-blue-600 text-xl" />, title: "Petek Temizliği", desc: "İlaçlı özel kimyasallarla tesisat temizliği yaparak ısı kaybını önlüyor, faturanızda ciddi tasarruf sağlıyoruz." },
                { href: "/robotla-su-kacagi-bulma", img: "/images/tesisat6.jpg", alt: "Robotla Su Kaçağı Bulma", icon: <RiDropFill className="text-blue-600 text-xl" />, title: "Robotla Kaçak Bulma", desc: "Son teknoloji robotik sistemlerle beton altındaki sızıntıları milimetrik buluyoruz." },
                { href: "/kamerali-tikaniklik-acma", img: "/images/tesisat8.jpg", alt: "Kameralı Tıkanıklık Açma", icon: <RiCameraLensFill className="text-blue-600 text-xl" />, title: "Kameralı Tıkanıklık", desc: "Kamera sistemlerimizle gider borularının içini görüntülüyor, kırmadan açıyoruz." },
                { href: "/pimas-acma", img: "/images/tesisat2.png", alt: "Pimaş Açma", icon: <RiArrowRightLine className="text-blue-600 text-xl rotate-90" />, title: "Pimaş Açma", desc: "Bina içi ve dışı pimaş borularındaki tıkanıklıkları, özel helezonlu robot makinelerimizle açıyoruz." },
                { href: "/logar-tikanikligi-acma", img: "/images/tesisat3.png", alt: "Logar Tıkanıklığı Açma", icon: <RiWaterFlashLine className="text-blue-600 text-xl" />, title: "Logar Açma", desc: "Dış hat ve ana logar tıkanıklıklarını yüksek basınçlı ve robotik vidanjör sistemlerimizle kökten çözüyoruz." },
                { href: "/kombi-su-kacagi", img: "/images/tesisat4.png", alt: "Kombi Su Kaçağı", icon: <RiDropFill className="text-blue-600 text-xl" />, title: "Kombi Su Kaçağı", desc: "Kombi basınç düşmesi sorunlarına sebep olan kılcal tesisat kaçaklarını termal kameralarla anında buluyoruz." },
                { href: "/klozet-tikanikligi-acma", img: "/images/tesisat5.png", alt: "Klozet Tıkanıklığı Açma", icon: <RiToolsFill className="text-blue-600 text-xl" />, title: "Klozet Tıkanıklığı", desc: "Klozeti sökmeden, fayanslara zarar vermeden, koku ve pislik yaratmadan robotla açma işlemi uyguluyoruz." },
                { href: "/su-tesisati-tamiri", img: "/images/tesisat7.jpg", alt: "Su Tesisatı Tamiri", icon: <RiWrenchLine className="text-blue-600 text-xl" />, title: "Genel Tesisat Tamiri", desc: "Bozulan musluklar, patlayan borular, batarya değişimi ve tüm sıhhi tesisat arızalarınızda profesyonel çözüm." },
              ].map((h) => (
                <div key={h.href} className="group flex flex-col bg-white rounded-[2rem] p-3 hover:bg-white border border-gray-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] hover:border-gray-200 transition-all duration-500">
                  <Link href={h.href} className="block relative h-56 rounded-[1.5rem] overflow-hidden mb-5 bg-gray-200">
                    <Image src={h.img} alt={h.alt} fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                      {h.icon}
                    </div>
                  </Link>
                  <div className="px-3 pb-3 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{h.title}</h3>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{h.desc}</p>
                    <Link href={h.href} className="inline-flex items-center justify-between w-full text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">
                      İncele <RiArrowRightLine className="text-lg bg-gray-100 group-hover:bg-blue-50 p-1.5 w-7 h-7 rounded-full transition-colors" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NEDEN BİZ ────────────────────────────────────────────────── */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-4">Farkımız</p>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Neden Akarsu Tesisat&apos;ı <span className="text-blue-400">Seçmelisiniz?</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  15 yılı aşkın tecrübemizle standart tesistat firmalarından ayrılıyoruz. Tahmin değil, cihazla tespit yapıyoruz.
                </p>
                <div className="space-y-4">
                  {[
                    "Ücretsiz keşif ve net fiyat teklifi",
                    "Kırmadan termal kamera ve akustik tespit",
                    "Orijinal malzeme, uzman işçilik",
                    "1 yıl garantili tüm işlemler",
                    "7/24 acil müdahale, bayram dahil",
                    "Şeffaf fatura, gizli maliyet yok",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-7 h-7 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center shrink-0">
                        <RiCheckDoubleLine className="text-blue-400 text-sm" />
                      </div>
                      <span className="text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <a
                    href="tel:+905411071927"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all text-lg shadow-[0_8px_30px_rgb(37,99,235,0.3)]"
                  >
                    <RiPhoneFill className="text-xl" /> Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905411071927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#20bd5a] transition-all text-lg"
                  >
                    WhatsApp&apos;tan Yaz
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { img: "/images/tesisat13.jpg", alt: "Cihazla tespit" },
                  { img: "/images/tesisat15.webp", alt: "Robotik açma" },
                  { img: "/images/tesisat16.webp", alt: "Petek temizliği" },
                  { img: "/images/tesisat17.webp", alt: "Su kaçağı" },
                ].map((im, i) => (
                  <div key={i} className={`relative rounded-3xl overflow-hidden shadow-2xl ${i === 0 ? "h-64" : i === 3 ? "h-64" : "h-44"}`}>
                    <Image src={im.img} alt={im.alt} fill sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── MÜŞTERİ YORUMLARI ────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">Referanslar</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Müşterilerimiz Ne Diyor?</h2>
              <p className="text-gray-500 font-medium max-w-xl mx-auto mt-4 text-lg">
                Binlerce memnun müşterimizden bazı yorumlar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="flex flex-col p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(37,99,235,0.06)] transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <RiStarFill key={i} className="text-yellow-400 text-lg" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm flex-1 mb-5">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{t.name}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <RiMapPin2Fill className="text-blue-400" /> {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SAHADAN KARELER ──────────────────────────────────────────── */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 flex items-center justify-center gap-3">
                <RiCameraLensFill className="text-blue-600" /> Sahadan Kareler
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="col-span-2 row-span-2 relative h-[300px] md:h-[624px] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                <Image src="/images/tesisat4.png" alt="Çalışma 1" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="relative h-[150px] md:h-[300px] rounded-[2rem] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                <Image src="/images/tesisat5.png" alt="Çalışma 2" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="relative h-[150px] md:h-[300px] rounded-[2rem] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                <Image src="/images/tesisat7.jpg" alt="Çalışma 3" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="col-span-2 md:col-span-1 relative h-[150px] md:h-[300px] rounded-[2rem] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                <Image src="/images/tesisat14.jpg" alt="Çalışma 4" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className="col-span-2 md:col-span-1 relative h-[150px] md:h-[300px] rounded-[2rem] overflow-hidden group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                <Image src="/images/tesisat8.jpg" alt="Çalışma 5" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── BÖLGELER & UZMANLIK ──────────────────────────────────────── */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">İstanbul&apos;un Tüm İlçelerinde Hizmetinizdeyiz</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-12">
              Avrupa ve Anadolu yakasındaki tüm ilçelere 30 dakikada ulaşıyor, kırmadan dökmeden garantili tesisat çözümleri sunuyoruz.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                "Beşiktaş", "Kadıköy", "Şişli", "Üsküdar", "Maltepe", "Kartal",
                "Pendik", "Bakırköy", "Bahçelievler", "Zeytinburnu", "Fatih", "Beyoğlu",
                "Sarıyer", "Eyüp", "Kağıthane", "Başakşehir", "Küçükçekmece", "Avcılar",
                "Beylikdüzü", "Esenler", "Bağcılar", "Güngören", "Bayrampaşa", "Arnavutköy",
                "Sultangazi", "Gaziosmanpaşa", "Esenyurt", "Büyükçekmece", "Çekmeköy",
                "Ümraniye", "Sancaktepe", "Beykoz", "Tuzla", "Şile",
              ].map((ilce) => (
                <Link
                  key={ilce}
                  href={`/${ilce.toLowerCase().replace(/ç/g, "c").replace(/ş/g, "s").replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o")}-su-tesisat`}
                  className="bg-gray-50 p-3 md:p-4 rounded-2xl text-sm font-bold text-gray-700 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(37,99,235,0.1)] hover:text-blue-600 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <RiMapPin2Fill className="text-blue-400 group-hover:text-blue-600 transition-colors" />
                  {ilce}
                </Link>
              ))}
            </div>

            {/* Özel Hizmet Çaprazlamaları */}
            <div className="mt-16 pt-16 border-t border-gray-200/60 text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-gray-900">Özel Uzmanlık Bölgelerimiz</h3>
                  <p className="text-gray-500 font-medium mt-1">Nokta atışı çözümlerle en çok tercih edildiğimiz hizmetler</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Sultangazi Su Kaçağı Tespiti", slug: "sultangazi-su-kacagi-tespiti", icon: <RiDropFill className="text-xl" /> },
                  { name: "Şişli Petek Temizliği", slug: "sisli-petek-temizligi", icon: <RiWrenchLine className="text-xl" /> },
                  { name: "Üsküdar Tıkanıklık Açma", slug: "uskudar-tikaniklik-acma", icon: <RiToolsFill className="text-xl" /> },
                  { name: "Kadıköy Su Kaçağı", slug: "kadikoy-su-kacagi-tespiti", icon: <RiDropFill className="text-xl" /> },
                  { name: "Beşiktaş Petek Temizliği", slug: "besiktas-petek-temizligi", icon: <RiWrenchLine className="text-xl" /> },
                  { name: "Maltepe Petek Temizliği", slug: "maltepe-petek-temizligi", icon: <RiWrenchLine className="text-xl" /> },
                  { name: "Bahçelievler Tıkanıklık", slug: "bahcelievler-tikaniklik-acma", icon: <RiToolsFill className="text-xl" /> },
                  { name: "Fatih Su Kaçağı", slug: "fatih-su-kacagi-tespiti", icon: <RiDropFill className="text-xl" /> },
                  { name: "Zeytinburnu Tıkanıklık", slug: "zeytinburnu-tikaniklik-acma", icon: <RiToolsFill className="text-xl" /> },
                ].map((hizmet) => (
                  <Link
                    key={hizmet.slug}
                    href={`/${hizmet.slug}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.08)] hover:border-blue-100 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {hizmet.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{hizmet.name}</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">30 Dakikada Servis</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <RiArrowRightLine className="text-sm" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Kapsamlı Tesisat Çözümlerimiz */}
            <div className="mt-16 pt-16 border-t border-gray-200/60 text-left">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Kapsamlı Tesisat Çözümlerimiz</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: "Tuvalet Tıkanıklığı Açma", slug: "tuvalet-tikanikligi-acma" },
                  { name: "Banyo Su Kaçağı Tespiti", slug: "banyo-su-kacagi-tespiti" },
                  { name: "Kırmadan Lavabo Açma", slug: "kirmadan-lavabo-acma" },
                  { name: "Mutfak Gideri Açma", slug: "mutfak-gideri-acma" },
                  { name: "Cihazla Su Sızıntısı Bulma", slug: "cihazla-su-sizintisi-bulma" },
                  { name: "Petek Havası Alma", slug: "petek-havasi-alma" },
                  { name: "Robotla Kanal Açma", slug: "robotla-kanal-acma" },
                  { name: "Balkon Gideri Açma", slug: "balkon-gideri-acma" },
                  { name: "Kombi Su Basınç Düşmesi", slug: "kombi-su-basinc-dusmesi" },
                  { name: "Duvardaki Su Kaçağını Bulma", slug: "duvardaki-su-kacagini-bulma" },
                  { name: "Alt Kata Su Sızıntısı", slug: "alt-kata-su-sizintisi" },
                  { name: "Banyo Tavandan Su Akıyor", slug: "banyo-tavandan-su-akiyor" },
                  { name: "Robotla Lavabo Açma", slug: "robotla-lavabo-tikanikligi-acma" },
                  { name: "Yağmursuyu Gideri Açma", slug: "yagmursuyu-gideri-acma" },
                  { name: "Kalorifer Tesisatı Tamiri", slug: "kalorifer-tesisati-tamiri" },
                  { name: "Musluk Tamiri ve Değişimi", slug: "musluk-tamiri-ve-degisimi" },
                  { name: "Gömme Rezervuar Tamiri", slug: "gomme-rezervuar-tamiri" },
                  { name: "Sifon Tamiri", slug: "sifon-tamiri" },
                  { name: "Duşakabin Su Kaçağı", slug: "dusakabin-su-kacagi" },
                  { name: "Jakuzi Su Kaçağı Tamiri", slug: "jakuzi-su-kacagi-tamiri" },
                  { name: "Akustik Su Kaçağı Tespiti", slug: "akustik-su-kacagi-tespiti" },
                  { name: "Termal Kamera İle Tespit", slug: "termal-kamera-ile-su-kacagi-bulma" },
                  { name: "Noktasal Su Kaçağı Tespiti", slug: "noktasal-su-kacagi-tespiti" },
                  { name: "Kanalizasyon Açma", slug: "kanalizasyon-acma" },
                  { name: "Rögar Temizleme", slug: "rogar-temizleme" },
                  { name: "Su Sayacı Su Kaçağı", slug: "su-sayaci-su-kacagi" },
                  { name: "Ana Su Borusu Tamiri", slug: "bina-ana-su-borusu-tamiri" },
                  { name: "Yerden Isıtma Temizliği", slug: "yerden-isitma-temizligi" },
                  { name: "Taharet Musluğu Tamiri", slug: "taharet-muslugu-tamiri" },
                  { name: "Kat Kaloriferi Temizliği", slug: "kat-kaloriferi-temizligi" },
                  { name: "Kırmadan Pimaş Açma", slug: "kirmadan-pimas-acma" },
                  { name: "Boru Tıkanıklığı Açma", slug: "boru-tikanikligi-acma" },
                  { name: "Klozet İç Takım Değişimi", slug: "klozet-ic-takim-degisimi" },
                  { name: "Gömme Rezervuar Su Kaçağı", slug: "gomme-rezervuar-su-kacagi" },
                  { name: "Su Tesisatı Yenileme", slug: "su-tesisati-yenileme" },
                  { name: "Banyo Tesisat Kurulumu", slug: "banyo-tesisat-kurulumu" },
                  { name: "Mutfak Tesisat Kurulumu", slug: "mutfak-tesisat-kurulumu" },
                  { name: "Kalorifer Petek Temizleme", slug: "kalorifer-petek-temizleme" },
                  { name: "Robotla Tuvalet Açma", slug: "robotla-tuvalet-acma" },
                  { name: "Robotla Mutfak Gideri", slug: "robotla-mutfak-gideri-acma" },
                  { name: "Kameralı Su Kaçağı Tespiti", slug: "kamerali-su-kacagi-tespiti" },
                  { name: "Kırmadan Cihazla Tespit", slug: "kirmadan-cihazla-su-kacagi-tespiti" },
                  { name: "Acil Su Tesisatçısı", slug: "acil-su-tesisatcisi" },
                  { name: "Nöbetçi Tesisatçı", slug: "nobetci-su-tesisatcisi" },
                  { name: "En Yakın Tesisatçı", slug: "en-yakin-su-tesisatcisi" },
                  { name: "7/24 Tıkanıklık Açma", slug: "7-24-tikaniklik-acma" },
                  { name: "Logar Temizleme", slug: "logar-temizleme-ve-acma" },
                  { name: "Kombi Su Akıtıyor Tamiri", slug: "kombi-su-akitiyor-tamiri" },
                  { name: "Petekler Isınmıyor Çözümü", slug: "petekler-isinmiyor-cozumu" },
                  { name: "Doğalgaz Tesisat Tamiri", slug: "dogalgaz-tesisat-tamiri" },
                  { name: "Su Saati Vana Değişimi", slug: "su-saati-vana-degisimi" },
                  { name: "Banyo Bataryası Değişimi", slug: "banyo-bataryasi-degisimi" },
                  { name: "Mutfak Bataryası Değişimi", slug: "mutfak-bataryasi-degisimi" },
                  { name: "Çamaşır Makinesi Bağlantısı", slug: "camasir-makinesi-tesisati-baglantisi" },
                  { name: "Bulaşık Makinesi Bağlantısı", slug: "bulasik-makinesi-tesisati-baglantisi" },
                  { name: "Pimaş Yıkama", slug: "pimas-yikama-hizmeti" },
                  { name: "Gider Borusu Açma", slug: "gider-borusu-acma" },
                  { name: "Lavabo Sifonu Değişimi", slug: "lavabo-sifonu-degisimi" },
                  { name: "Kırmadan Su Kaçağı Tamiri", slug: "kirmadan-su-kacagi-tamiri" },
                  { name: "Pis Su Gideri Açma", slug: "pis-su-gideri-acma" },
                  { name: "İstanbul Avrupa Yakası Su Tesisatçısı", slug: "istanbul-avrupa-yakasi-su-tesisatcisi" },
                  { name: "İstanbul Anadolu Yakası Su Tesisatçısı", slug: "istanbul-anadolu-yakasi-su-tesisatcisi" },
                  { name: "Cihazlı Su Tesisatçısı İstanbul", slug: "cihazli-su-tesisatcisi-istanbul" },
                  { name: "İstanbul Robotlu Tesisat Firması", slug: "istanbul-robotlu-tesisat-firmasi" },
                  { name: "Gece Açık Su Tesisatçısı İstanbul", slug: "gece-acik-su-tesisatcisi-istanbul" },
                  { name: "İstanbul Kırmadan Tesisat Tamiri", slug: "istanbul-kirmadan-tesisat-tamiri" },
                  { name: "Garantili Su Kaçağı Tespiti İstanbul", slug: "garantili-su-kacagi-tespiti-istanbul" },
                  { name: "İstanbul Tesisat Arıza Servisi", slug: "istanbul-tesisat-ariza-servisi" },
                  { name: "Kameralı Tesisatçı İstanbul", slug: "kamerali-tesisatci-istanbul" },
                  { name: "Akustik Dinleme ile Kaçak Bulma", slug: "akustik-dinleme-ile-su-kacagi-bulma-istanbul" },
                  { name: "Termal Kameralı Tesisatçı İstanbul", slug: "termal-kamerali-tesisatci-istanbul" },
                  { name: "İstanbul Pimaş Görüntüleme", slug: "istanbul-pimas-goruntuleme-merkezi" },
                  { name: "Kanalizasyon Tıkanıklığı Açma", slug: "istanbul-kanalizasyon-tikanikligi-acma" },
                  { name: "Tıkalı Boru Açma İstanbul", slug: "tikali-boru-acma-istanbul" },
                  { name: "Makineyle Petek Temizleme", slug: "istanbul-makineyle-petek-temizleme" },
                  { name: "İlaçlı Petek Temizliği İstanbul", slug: "ilacli-petek-temizligi-istanbul" },
                  { name: "İstanbul Kombi Tesisat Bakımı", slug: "istanbul-kombi-tesisat-bakimi" },
                  { name: "Mutfak Lavabosu Açma İstanbul", slug: "mutfak-lavabosu-acma-istanbul" },
                  { name: "Banyo Gideri Açma İstanbul", slug: "banyo-gideri-acma-istanbul" },
                  { name: "Klozet Tıkanıklığı Açma", slug: "istanbul-klozet-tikanikligi-acma" },
                  { name: "Su Borusu Patlağı Tamiri", slug: "su-borusu-patlagi-tamiri-istanbul" },
                  { name: "Tesisat Yenileme Fiyatları", slug: "istanbul-tesisat-yenileme-fiyatlari" },
                  { name: "Gömme Rezervuar Tamiri", slug: "gomme-rezervuar-tamiri-istanbul" },
                  { name: "Sifon Değişimi ve Tamiri", slug: "istanbul-sifon-degisimi-ve-tamiri" },
                  { name: "Musluk ve Batarya Montajı", slug: "musluk-ve-batarya-montaji-istanbul" },
                  { name: "İstanbul Su Saati Arıza Servisi", slug: "istanbul-su-saati-ariza-servisi" },
                  { name: "Kalorifer Tesisatı Kurulumu", slug: "kalorifer-tesisati-kurulumu-istanbul" },
                  { name: "Bina Ana Su Borusu Tamiri", slug: "istanbul-bina-ana-su-borusu-tamiri" },
                  { name: "Yağmursuyu Gideri Açma", slug: "yagmursuyu-gideri-acma-istanbul" },
                  { name: "Teras Su Yalıtımı ve Kaçak", slug: "istanbul-teras-su-yalitimi-ve-kacak" },
                  { name: "Bahçe Tesisatı Çekimi İstanbul", slug: "bahce-tesisati-cekimi-istanbul" },
                  { name: "Doğalgaz Kaçak Tespiti", slug: "istanbul-dogalgaz-kacak-tespiti" },
                  { name: "Yangın Tesisatı Kurulumu", slug: "yangin-tesisati-kurulumu-istanbul" },
                  { name: "Hidrofor Tamiri ve Montajı", slug: "istanbul-hidrofor-tamiri-ve-montaji" },
                  { name: "Su Deposu Temizliği", slug: "su-deposu-temizligi-istanbul" },
                  { name: "Su Yumuşatma Cihazı Montajı", slug: "istanbul-su-yumusatma-cihazi-montaji" },
                  { name: "Kombi Su Eksiltiyor Çözümü", slug: "kombi-su-eksiltiyor-cozumu-istanbul" },
                  { name: "Logar Kapağı Bulma ve Açma", slug: "istanbul-logar-kapagi-bulma-ve-acma" },
                  { name: "Profesyonel Su Tesisatçısı", slug: "profesyonel-su-tesisatcisi-istanbul" },
                  { name: "Bakırköy Robotla Tuvalet Açma", slug: "bakirkoy-robotla-tuvalet-acma" },
                  { name: "Kadıköy Kırmadan Su Kaçağı Tespiti", slug: "kadikoy-kirmadan-su-kacagi-tespiti" },
                  { name: "Şişli Acil Tesisatçı Servisi", slug: "sisli-acil-tesisatci-servisi" },
                  { name: "Beşiktaş Kameralı Su Tesisatçısı", slug: "besiktas-kamerali-su-tesisatcisi" },
                  { name: "Bakırköy Robotla Tıkanıklık Açma", slug: "bakirkoy-robotla-tikaniklik-acma" },
                  { name: "Bahçelievler Noktasal Su Kaçağı Bulma", slug: "bahcelievler-noktasal-su-kacagi-bulma" },
                  { name: "Zeytinburnu İlaçlı Petek Temizliği", slug: "zeytinburnu-ilacli-petek-temizligi" },
                  { name: "Fatih Gece Açık Su Tesisatçısı", slug: "fatih-gece-acik-su-tesisatcisi" },
                  { name: "Sarıyer Cihazlı Tesisatçı", slug: "sariyer-cihazli-tesisatci" },
                  { name: "Üsküdar Gömme Rezervuar Tamiri", slug: "uskudar-gomme-rezervuar-tamiri" },
                  { name: "Ümraniye Tıkalı Gider Açma", slug: "umraniye-tikali-gider-acma" },
                  { name: "Maltepe Akustik Su Kaçağı Tespiti", slug: "maltepe-akustik-su-kacagi-tespiti" },
                  { name: "Ataşehir Doğalgaz Tesisat Tamiri", slug: "atasehir-dogalgaz-tesisat-tamiri" },
                  { name: "Kartal Pimaş Yıkama ve Açma", slug: "kartal-pimas-yikama-ve-acma" },
                  { name: "Pendik Makineyle Petek Temizleme", slug: "pendik-makineyle-petek-temizleme" },
                  { name: "Sancaktepe Su Borusu Tamiri", slug: "sancaktepe-su-borusu-tamiri" },
                  { name: "Çekmeköy Su Deposu Temizliği", slug: "cekmekoy-su-deposu-temizligi" },
                  { name: "Beykoz Bahçe Tesisatı Kurulumu", slug: "beykoz-bahce-tesisati-kurulumu" },
                  { name: "Tuzla Kanalizasyon Açma", slug: "tuzla-kanalizasyon-acma" },
                  { name: "Sultanbeyli Termal Kameralı Kaçak Tespiti", slug: "sultanbeyli-termal-kamerali-kacak-tespiti" },
                  { name: "Küçükçekmece Lavabo Tıkanıklığı Açma", slug: "kucukcekmece-lavabo-tikanikligi-acma" },
                  { name: "Avcılar Kombi Su Eksiltme Çözümü", slug: "avcilar-kombi-su-eksiltme-cozumu" },
                  { name: "Beylikdüzü Kırmadan Tuvalet Açma", slug: "beylikduzu-kirmadan-tuvalet-acma" },
                  { name: "Esenyurt Cihazla Su Sızıntısı Bulma", slug: "esenyurt-cihazla-su-sizintisi-bulma" },
                  { name: "Büyükçekmece Teras Su Yalıtımı", slug: "buyukcekmece-teras-su-yalitimi" },
                  { name: "Başakşehir Musluk ve Batarya Değişimi", slug: "basaksehir-musluk-ve-batarya-degisimi" },
                  { name: "Eyüpsultan Banyo Gideri Açma", slug: "eyupsultan-banyo-gideri-acma" },
                  { name: "Kağıthane Kalorifer Tesisatı Yenileme", slug: "kagithane-kalorifer-tesisati-yenileme" },
                  { name: "Gaziosmanpaşa Klozet İç Takım Tamiri", slug: "gaziosmanpasa-klozet-ic-takim-tamiri" },
                  { name: "Sultangazi Logar Kapağı Bulma", slug: "sultangazi-logar-kapagi-bulma" },
                  { name: "Esenler Su Saati Vanası Değişimi", slug: "esenler-su-saati-vanasi-degisimi" }
                ].map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="group flex items-center gap-2 py-2 px-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all"
                  >
                    <RiCheckDoubleLine className="text-blue-500 shrink-0" />
                    <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── HIZLI İLETİŞİM BUTONLARI ────────────────────────────────── */}
        <section className="py-8 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/90 font-bold text-sm uppercase tracking-widest mb-1">Acil Tesisat Sorunu mu Var?</p>
                <p className="text-white text-2xl font-black">Hemen Arayın — 30 Dakikada Kapınızda</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <a
                  href="tel:+905411071927"
                  className="flex items-center gap-3 px-7 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-lg text-lg"
                >
                  <RiPhoneFill className="text-2xl" />
                  0541 107 19 27
                </a>
                <a
                  href="https://wa.me/905411071927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-7 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg text-lg"
                >
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HARİTA & İLETİŞİM ────────────────────────────────────────── */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gray-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">

              {/* Sol: İletişim Bilgileri */}
              <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none" />

                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Hemen Ulaşın</h2>
                <p className="text-gray-400 font-medium mb-10 text-lg">7/24 tesisat servisi, anında müdahale. İstanbul&apos;un her noktasına hızlı servis.</p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiMapPin2Fill className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Merkez Adres</div>
                      <div className="text-white font-medium text-lg leading-relaxed">H Cd. No:39, Uğur Mumcu Mah.<br />Sultangazi/İstanbul</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiPhoneFill className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Telefon / WhatsApp</div>
                      <a href="tel:+905411071927" className="block text-white font-medium text-xl hover:text-blue-400 transition-colors mb-2">0541 107 19 27</a>
                      <a
                        href="https://wa.me/905411071927"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-bold hover:bg-[#20bd5a] transition-all"
                      >
                        WhatsApp&apos;tan Mesaj At
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiCustomerService2Line className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Çalışma Saatleri</div>
                      <div className="text-white font-medium text-lg">7/24 Kesintisiz Hizmet</div>
                      <div className="text-gray-400 text-sm mt-1">Bayram ve hafta sonları dahil</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ: Harita */}
              <div className="lg:w-3/5 relative min-h-[400px] lg:min-h-full">
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

      </div>
    </>
  );
}
