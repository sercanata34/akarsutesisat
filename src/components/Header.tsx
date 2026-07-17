"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiMenu3Line, RiCloseLine, RiPhoneFill,
  RiDropFill, RiToolsFill, RiWrenchLine, RiCameraLensFill,
  RiMapPin2Fill, RiArrowRightSLine, RiArrowRightLine,
  RiHomeLine, RiTeamLine, RiWhatsappFill
} from "react-icons/ri";

// ─── veri ────────────────────────────────────────────────────────────────────
const genelHizmetler = [
  { name: "Su Kaçağı Tespiti",      slug: "su-kacagi-tespiti",          icon: RiDropFill },
  { name: "Tıkanıklık Açma",        slug: "tikaniklik-acma",            icon: RiToolsFill },
  { name: "Petek Temizliği",        slug: "petek-temizligi",            icon: RiWrenchLine },
  { name: "Robotla Kaçak Bulma",    slug: "robotla-su-kacagi-bulma",    icon: RiDropFill },
  { name: "Kameralı Tıkanıklık",    slug: "kamerali-tikaniklik-acma",   icon: RiCameraLensFill },
  { name: "Pimaş Açma",             slug: "pimas-acma",                 icon: RiToolsFill },
  { name: "Logar Açma",             slug: "logar-tikanikligi-acma",     icon: RiWrenchLine },
  { name: "Kombi Su Kaçağı",        slug: "kombi-su-kacagi",            icon: RiDropFill },
  { name: "Klozet Tıkanıklığı",     slug: "klozet-tikanikligi-acma",    icon: RiToolsFill },
  { name: "Genel Tesisat Tamiri",   slug: "su-tesisati-tamiri",         icon: RiWrenchLine },
];

const uzmanHizmetler = [
  { name: "Tuvalet Tıkanıklığı",    slug: "tuvalet-tikanikligi-acma" },
  { name: "Banyo Su Kaçağı",        slug: "banyo-su-kacagi-tespiti" },
  { name: "Kırmadan Lavabo Açma",   slug: "kirmadan-lavabo-acma" },
  { name: "Mutfak Gideri",          slug: "mutfak-gideri-acma" },
  { name: "Cihazla Sızıntı",        slug: "cihazla-su-sizintisi-bulma" },
  { name: "Petek Havası Alma",       slug: "petek-havasi-alma" },
  { name: "Robotla Kanal Açma",     slug: "robotla-kanal-acma" },
  { name: "Balkon Gideri",          slug: "balkon-gideri-acma" },
  { name: "Kombi Basınç",           slug: "kombi-su-basinc-dusmesi" },
  { name: "Duvarda Kaçak",          slug: "duvardaki-su-kacagini-bulma" },
  { name: "Alt Kata Sızıntı",       slug: "alt-kata-su-sizintisi" },
  { name: "Tavandan Su Akıyor",     slug: "banyo-tavandan-su-akiyor" },
  { name: "Robotla Lavabo",         slug: "robotla-lavabo-tikanikligi-acma" },
  { name: "Kalorifer Tamiri",       slug: "kalorifer-tesisati-tamiri" },
  { name: "Musluk Tamiri",          slug: "musluk-tamiri-ve-degisimi" },
  { name: "Gömme Rezervuar",        slug: "gomme-rezervuar-tamiri" },
  { name: "Sifon Tamiri",           slug: "sifon-tamiri" },
  { name: "Duşakabin Kaçağı",       slug: "dusakabin-su-kacagi" },
  { name: "Akustik Tespit",         slug: "akustik-su-kacagi-tespiti" },
  { name: "Termal Kamera",          slug: "termal-kamera-ile-su-kacagi-bulma" },
  { name: "Kanalizasyon Açma",      slug: "kanalizasyon-acma" },
  { name: "Rögar Temizleme",        slug: "rogar-temizleme" },
  { name: "Ana Boru Tamiri",        slug: "bina-ana-su-borusu-tamiri" },
  { name: "Yerden Isıtma",          slug: "yerden-isitma-temizligi" },
  { name: "Kat Kaloriferi",         slug: "kat-kaloriferi-temizligi" },
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
];

const ilceler = [
  "Beşiktaş", "Kadıköy", "Şişli", "Üsküdar", "Maltepe", "Kartal",
  "Pendik", "Bakırköy", "Bahçelievler", "Zeytinburnu", "Fatih", "Beyoğlu",
  "Sarıyer", "Eyüp", "Kağıthane", "Başakşehir", "Küçükçekmece", "Avcılar",
  "Beylikdüzü", "Esenler", "Bağcılar", "Güngören", "Bayrampaşa",
  "Arnavutköy", "Sultangazi", "Gaziosmanpaşa", "Esenyurt", "Büyükçekmece",
  "Çekmeköy", "Ümraniye", "Sancaktepe", "Beykoz", "Tuzla", "Şile",
];

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ş/g, "s").replace(/ı/g, "i")
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ö/g, "o");
}

type Tab = "hizmetler" | "bolgeler";

// ─── bileşen ─────────────────────────────────────────────────────────────────
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("hizmetler");
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // body scroll kilidi
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => {
    setMenuOpen(false);
    setServicesExpanded(false);
  };

  return (
    <>
      {/* ── Sticky Navbar ── */}
      <header className="sticky top-0 z-50 w-full pt-4 px-4">
        <div className="mx-auto max-w-5xl rounded-full border border-gray-200/60 bg-white/85 backdrop-blur-lg shadow-sm px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link href="/" onClick={close} className="flex items-center gap-2 group flex-shrink-0">
              <Image 
                src="/images/logo.png" 
                alt="Akarsu Tesisat Logo" 
                width={250} 
                height={70} 
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Anasayfa
              </Link>

              {/* Mega dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors py-2 cursor-pointer">
                  Hizmetlerimiz
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="w-[850px] bg-white/95 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-2xl overflow-hidden p-6 flex gap-6">

                    {/* Sol: Hizmetler */}
                    <div className="w-1/3 border-r border-gray-100 pr-4 flex flex-col">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-2">Genel Hizmetler</h4>
                      <div className="space-y-1 mb-6">
                        {genelHizmetler.slice(0, 3).map((h) => (
                          <Link key={h.slug} href={`/${h.slug}`} className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all">
                            <div className="w-8 h-8 rounded-lg bg-blue-100/50 flex items-center justify-center text-blue-600 shrink-0">
                              <h.icon className="text-lg" />
                            </div>
                            {h.name}
                          </Link>
                        ))}
                      </div>

                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 px-2 mt-2">Uzman Çözümler</h4>
                      <div className="space-y-0.5 max-h-[250px] overflow-y-auto custom-scrollbar pr-2">
                        {uzmanHizmetler.map((h) => (
                          <Link key={h.slug} href={`/${h.slug}`} className="group/item flex items-center gap-2.5 px-3 py-2 text-[13px] font-bold text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-blue-600 transition-colors shrink-0" />
                            {h.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Sağ: Bölgeler */}
                    <div className="w-2/3">
                      <h4 className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest mb-4 px-2">
                        <RiMapPin2Fill className="text-blue-500 text-sm" /> Servis Bölgelerimiz
                      </h4>
                      <div className="grid grid-cols-3 gap-x-2 gap-y-1 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                        {ilceler.map((ilce) => (
                          <Link key={ilce} href={`/${slugify(ilce)}-su-tesisat`} className="px-3 py-2 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors">
                            {ilce}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                        <Link href="/istanbul-su-tesisat" className="text-xs font-black text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link">
                          Tüm İstanbul <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/hakkimizda" className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">Hakkımızda</Link>
              <Link href="/iletisim" className="text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">İletişim</Link>
            </nav>

            {/* Sağ taraf */}
            <div className="flex items-center gap-3 z-50">
              {/* Desktop CTA */}
              <a href="tel:+905411071927" className="hidden md:flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-all active:scale-95">
                <RiPhoneFill className="text-lg" /> Hemen Ara
              </a>
              <a href="https://wa.me/905411071927" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all active:scale-95">
                <RiWhatsappFill className="text-xl" /> WhatsApp&apos;tan Yaz
              </a>

              {/* Mobil: Doğrudan ara butonu */}
              <a
                href="tel:+905411071927"
                className="md:hidden flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm active:scale-95"
                aria-label="Hemen Ara"
              >
                <RiPhoneFill className="text-base" />
                <span className="text-xs font-black">Ara</span>
              </a>

              <a
                href="https://wa.me/905411071927"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white shadow-sm active:scale-95"
                aria-label="WhatsApp&apos;tan Yaz"
              >
                <RiWhatsappFill className="text-lg" />
                <span className="text-xs font-black">Yaz</span>
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className="md:hidden rounded-full p-2 text-gray-900 hover:bg-gray-100 transition-colors bg-gray-50 border border-gray-200"
                aria-label="Menüyü Aç/Kapat"
              >
                {menuOpen ? <RiCloseLine className="text-2xl" /> : <RiMenu3Line className="text-2xl" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Overlay + Drawer ── */}
      {/* Karartma */}
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer: Alttan yukarı açılır */}
      <div className={`fixed bottom-0 inset-x-0 z-50 md:hidden rounded-t-[2rem] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${menuOpen ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "90dvh" }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2 shrink-0">
          <div className="w-10 h-1.5 rounded-full bg-gray-200" />
        </div>

        {/* Drawer başlık */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 shrink-0">
          <span className="text-base font-black text-gray-900">Menü</span>
          <button onClick={close} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
            <RiCloseLine className="text-xl" />
          </button>
        </div>

        {/* İçerik — kaydırılabilir */}
        <div className="flex-1 overflow-y-auto overscroll-contain">

          {/* Hızlı linkler */}
          <div className="px-4 pt-4 grid grid-cols-3 gap-3">
            <Link href="/" onClick={close} className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
              <RiHomeLine className="text-2xl text-blue-600" />
              <span className="text-xs font-black text-gray-700">Anasayfa</span>
            </Link>
            <Link href="/hakkimizda" onClick={close} className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
              <RiTeamLine className="text-2xl text-blue-600" />
              <span className="text-xs font-black text-gray-700">Hakkımızda</span>
            </Link>
            <Link href="/iletisim" onClick={close} className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
              <RiMapPin2Fill className="text-2xl text-blue-600" />
              <span className="text-xs font-black text-gray-700">İletişim</span>
            </Link>
          </div>

          {/* Tabs */}
          <div className="px-4 mt-5">
            <div className="flex bg-gray-100 rounded-2xl p-1 gap-1">
              <button
                onClick={() => setActiveTab("hizmetler")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all ${activeTab === "hizmetler" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
              >
                🔧 Hizmetler
              </button>
              <button
                onClick={() => setActiveTab("bolgeler")}
                className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all ${activeTab === "bolgeler" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
              >
                📍 Bölgeler
              </button>
            </div>
          </div>

          {/* Tab İçeriği: Hizmetler */}
          {activeTab === "hizmetler" && (
            <div className="px-4 pb-4 mt-4 space-y-2">

              {/* Genel Hizmetler */}
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1 mb-3">Genel Hizmetler</p>
              <div className="space-y-1.5">
                {genelHizmetler.map((h) => (
                  <Link
                    key={h.slug}
                    href={`/${h.slug}`}
                    onClick={close}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <h.icon className="text-xl" />
                    </div>
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{h.name}</span>
                    <RiArrowRightLine className="ml-auto text-gray-300 group-hover:text-blue-400 transition-colors" />
                  </Link>
                ))}
              </div>

              {/* Uzman Çözümler — toggle */}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <button
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  className="w-full flex items-center justify-between py-2 px-1"
                >
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Uzman Çözümler ({uzmanHizmetler.length})</p>
                  <RiArrowRightSLine className={`text-gray-400 text-xl transition-transform ${servicesExpanded ? "rotate-90" : ""}`} />
                </button>

                {servicesExpanded && (
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {uzmanHizmetler.map((h) => (
                      <Link
                        key={h.slug}
                        href={`/${h.slug}`}
                        onClick={close}
                        className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span className="text-xs font-bold text-gray-700 leading-tight">{h.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab İçeriği: Bölgeler */}
          {activeTab === "bolgeler" && (
            <div className="px-4 pb-4 mt-4">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1 mb-3">
                İstanbul İlçeleri ({ilceler.length})
              </p>
              <div className="grid grid-cols-3 gap-2">
                {ilceler.map((ilce) => (
                  <Link
                    key={ilce}
                    href={`/${slugify(ilce)}-su-tesisat`}
                    onClick={close}
                    className="flex items-center justify-center gap-1 px-2 py-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 hover:text-blue-600 transition-all text-xs font-bold text-gray-700 text-center"
                  >
                    <RiMapPin2Fill className="text-blue-400 text-xs shrink-0" />
                    {ilce}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/istanbul-su-tesisat"
                  onClick={close}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 font-black text-sm hover:bg-blue-100 transition-all"
                >
                  Tüm İstanbul Hizmetlerini Gör <RiArrowRightLine />
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* Sticky Alt CTA */}
        <div className="shrink-0 px-4 py-4 border-t border-gray-100 bg-white grid grid-cols-2 gap-3">
          <a
            href="tel:+905411071927"
            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-95"
          >
            <RiPhoneFill className="text-lg" /> Hemen Ara
          </a>
          <a
            href="https://wa.me/905411071927"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#25D366] text-white font-black text-sm shadow-lg shadow-green-600/20 hover:bg-[#20bd5a] transition-all active:scale-95"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>

      </div>
    </>
  );
}
