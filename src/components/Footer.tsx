import Link from "next/link";
import Image from "next/image";
import { RiMapPin2Fill, RiPhoneFill, RiToolsFill, RiWrenchLine, RiArrowRightLine } from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const genel = [
    { name: "Su Kaçağı Tespiti", href: "/su-kacagi-tespiti" },
    { name: "Tıkanıklık Açma", href: "/tikaniklik-acma" },
    { name: "Petek Temizliği", href: "/petek-temizligi" },
    { name: "Robotla Kaçak Bulma", href: "/robotla-su-kacagi-bulma" },
    { name: "Kameralı Tıkanıklık", href: "/kamerali-tikaniklik-acma" },
    { name: "Pimaş Açma", href: "/pimas-acma" },
    { name: "Logar Açma", href: "/logar-tikanikligi-acma" },
    { name: "Kombi Su Kaçağı", href: "/kombi-su-kacagi" },
    { name: "Klozet Tıkanıklığı", href: "/klozet-tikanikligi-acma" },
    { name: "Genel Tesisat Tamiri", href: "/su-tesisati-tamiri" },
  ];

  const uzmanlik = [
    { name: "Tuvalet Tıkanıklığı Açma", href: "/tuvalet-tikanikligi-acma" },
    { name: "Banyo Su Kaçağı Tespiti", href: "/banyo-su-kacagi-tespiti" },
    { name: "Kırmadan Lavabo Açma", href: "/kirmadan-lavabo-acma" },
    { name: "Mutfak Gideri Açma", href: "/mutfak-gideri-acma" },
    { name: "Cihazla Su Sızıntısı", href: "/cihazla-su-sizintisi-bulma" },
    { name: "Petek Havası Alma", href: "/petek-havasi-alma" },
    { name: "Robotla Kanal Açma", href: "/robotla-kanal-acma" },
    { name: "Balkon Gideri Açma", href: "/balkon-gideri-acma" },
    { name: "Alt Kata Su Sızıntısı", href: "/alt-kata-su-sizintisi" },
    { name: "Akustik Su Kaçağı", href: "/akustik-su-kacagi-tespiti" },
    { name: "Termal Kamera Tespit", href: "/termal-kamera-ile-su-kacagi-bulma" },
    { name: "Noktasal Kaçak Tespiti", href: "/noktasal-su-kacagi-tespiti" },
    { name: "Kanalizasyon Açma", href: "/kanalizasyon-acma" },
    { name: "Musluk Tamiri", href: "/musluk-tamiri-ve-degisimi" },
    { name: "Sifon Tamiri", href: "/sifon-tamiri" },
    { name: "Gömme Rezervuar", href: "/gomme-rezervuar-tamiri" },
    { name: "Kalorifer Tamiri", href: "/kalorifer-tesisati-tamiri" },
    { name: "Yerden Isıtma", href: "/yerden-isitma-temizligi" },
    { name: "Kat Kaloriferi", href: "/kat-kaloriferi-temizligi" },
    { name: "Rögar Temizleme", href: "/rogar-temizleme" },
  ];

  const bolgeAvrupa = [
    { name: "Beşiktaş", href: "/besiktas-su-tesisat" },
    { name: "Şişli", href: "/sisli-su-tesisat" },
    { name: "Sarıyer", href: "/sariyer-su-tesisat" },
    { name: "Fatih", href: "/fatih-su-tesisat" },
    { name: "Beyoğlu", href: "/beyoglu-su-tesisat" },
    { name: "Bakırköy", href: "/bakirkoy-su-tesisat" },
    { name: "Zeytinburnu", href: "/zeytinburnu-su-tesisat" },
    { name: "Avcılar", href: "/avcilar-su-tesisat" },
    { name: "Kağıthane", href: "/kagithane-su-tesisat" },
    { name: "Sultangazi", href: "/sultangazi-su-tesisat" },
    { name: "Gaziosmanpaşa", href: "/gaziosmanpasa-su-tesisat" },
    { name: "Esenler", href: "/esenler-su-tesisat" },
    { name: "Bağcılar", href: "/bagcilar-su-tesisat" },
    { name: "Güngören", href: "/gungoren-su-tesisat" },
    { name: "Bahçelievler", href: "/bahcelievler-su-tesisat" },
    { name: "Bayrampaşa", href: "/bayrampasa-su-tesisat" },
    { name: "Başakşehir", href: "/basaksehir-su-tesisat" },
    { name: "Küçükçekmece", href: "/kucukcekmece-su-tesisat" },
    { name: "Beylikdüzü", href: "/beylikduzu-su-tesisat" },
    { name: "Esenyurt", href: "/esenyurt-su-tesisat" },
    { name: "Büyükçekmece", href: "/buyukcekmece-su-tesisat" },
    { name: "Arnavutköy", href: "/arnavutkoy-su-tesisat" },
  ];

  const bolgeAnadolu = [
    { name: "Kadıköy", href: "/kadikoy-su-tesisat" },
    { name: "Üsküdar", href: "/uskudar-su-tesisat" },
    { name: "Maltepe", href: "/maltepe-su-tesisat" },
    { name: "Kartal", href: "/kartal-su-tesisat" },
    { name: "Pendik", href: "/pendik-su-tesisat" },
    { name: "Ümraniye", href: "/umraniye-su-tesisat" },
    { name: "Beykoz", href: "/beykoz-su-tesisat" },
    { name: "Çekmeköy", href: "/cekmekoy-su-tesisat" },
    { name: "Sancaktepe", href: "/sancaktepe-su-tesisat" },
    { name: "Tuzla", href: "/tuzla-su-tesisat" },
    { name: "Şile", href: "/sile-su-tesisat" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-auto border-t-[6px] border-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Top Row: Brand + Contact */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 mb-14 pb-14 border-b border-gray-800">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/logo.png" 
                alt="Akarsu Tesisat Logo" 
                width={280} 
                height={80} 
                className="h-16 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              İstanbul genelinde kırmadan su kaçağı bulma, cihazla tıkanıklık açma ve petek temizliği alanlarında 7/24 profesyonel, garantili sıhhi tesisat hizmeti.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <RiMapPin2Fill className="text-blue-500 text-lg shrink-0 mt-0.5" />
                <span className="text-sm">H Cd. No:39, Uğur Mumcu Mah.<br />Sultangazi/İstanbul</span>
              </div>
              <div className="flex items-center gap-3">
                <RiPhoneFill className="text-blue-500 text-lg shrink-0" />
                <a href="tel:+905411071927" className="text-sm hover:text-blue-400 transition-colors font-medium">+90 541 107 19 27</a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:text-right">
            <p className="text-gray-400 text-sm mb-4">Acil tesisat sorunu mu var?</p>
            <a
              href="tel:+905411071927"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              <RiPhoneFill /> Hemen Ara
            </a>
          </div>
        </div>

        {/* Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 pb-14 border-b border-gray-800">
          
          {/* Genel Hizmetler */}
          <div>
            <h4 className="text-white text-base font-black mb-4 flex items-center gap-2">
              <RiToolsFill className="text-blue-500" /> Genel Hizmetler
            </h4>
            <ul className="space-y-2">
              {genel.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                    <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
                          <li>
                <Link href="/kirmadan-pimas-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kırmadan Pimaş Açma
                </Link>
              </li>
              <li>
                <Link href="/boru-tikanikligi-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Boru Tıkanıklığı Açma
                </Link>
              </li>
              <li>
                <Link href="/klozet-ic-takim-degisimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Klozet İç Takım Değişimi
                </Link>
              </li>
              <li>
                <Link href="/gomme-rezervuar-su-kacagi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Gömme Rezervuar Su Kaçağı
                </Link>
              </li>
              <li>
                <Link href="/su-tesisati-yenileme" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Su Tesisatı Yenileme
                </Link>
              </li>
              <li>
                <Link href="/banyo-tesisat-kurulumu" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Banyo Tesisat Kurulumu
                </Link>
              </li>
              <li>
                <Link href="/mutfak-tesisat-kurulumu" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Mutfak Tesisat Kurulumu
                </Link>
              </li>
              <li>
                <Link href="/kalorifer-petek-temizleme" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kalorifer Petek Temizleme
                </Link>
              </li>
              <li>
                <Link href="/robotla-tuvalet-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Robotla Tuvalet Açma
                </Link>
              </li>
              <li>
                <Link href="/robotla-mutfak-gideri-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Robotla Mutfak Gideri
                </Link>
              </li>
              <li>
                <Link href="/kamerali-su-kacagi-tespiti" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kameralı Su Kaçağı Tespiti
                </Link>
              </li>
              <li>
                <Link href="/kirmadan-cihazla-su-kacagi-tespiti" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kırmadan Cihazla Tespit
                </Link>
              </li>
              <li>
                <Link href="/acil-su-tesisatcisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Acil Su Tesisatçısı
                </Link>
              </li>
              <li>
                <Link href="/nobetci-su-tesisatcisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Nöbetçi Tesisatçı
                </Link>
              </li>
              <li>
                <Link href="/en-yakin-su-tesisatcisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  En Yakın Tesisatçı
                </Link>
              </li>
              <li>
                <Link href="/7-24-tikaniklik-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  7/24 Tıkanıklık Açma
                </Link>
              </li>
              <li>
                <Link href="/logar-temizleme-ve-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Logar Temizleme
                </Link>
              </li>
              <li>
                <Link href="/kombi-su-akitiyor-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kombi Su Akıtıyor Tamiri
                </Link>
              </li>
              <li>
                <Link href="/petekler-isinmiyor-cozumu" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Petekler Isınmıyor Çözümü
                </Link>
              </li>
              <li>
                <Link href="/dogalgaz-tesisat-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Doğalgaz Tesisat Tamiri
                </Link>
              </li>
              <li>
                <Link href="/su-saati-vana-degisimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Su Saati Vana Değişimi
                </Link>
              </li>
              <li>
                <Link href="/banyo-bataryasi-degisimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Banyo Bataryası Değişimi
                </Link>
              </li>
              <li>
                <Link href="/mutfak-bataryasi-degisimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Mutfak Bataryası Değişimi
                </Link>
              </li>
              <li>
                <Link href="/camasir-makinesi-tesisati-baglantisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Çamaşır Makinesi Bağlantısı
                </Link>
              </li>
              <li>
                <Link href="/bulasik-makinesi-tesisati-baglantisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Bulaşık Makinesi Bağlantısı
                </Link>
              </li>
              <li>
                <Link href="/pimas-yikama-hizmeti" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Pimaş Yıkama
                </Link>
              </li>
              <li>
                <Link href="/gider-borusu-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Gider Borusu Açma
                </Link>
              </li>
              <li>
                <Link href="/lavabo-sifonu-degisimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Lavabo Sifonu Değişimi
                </Link>
              </li>
              <li>
                <Link href="/kirmadan-su-kacagi-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kırmadan Su Kaçağı Tamiri
                </Link>
              </li>
              <li>
                <Link href="/pis-su-gideri-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Pis Su Gideri Açma
                </Link>
              </li>
              <li key="/istanbul-avrupa-yakasi-su-tesisatcisi">
                <Link href="/istanbul-avrupa-yakasi-su-tesisatcisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Avrupa Yakası Su Tesisatçısı
                </Link>
              </li>
              <li key="/istanbul-anadolu-yakasi-su-tesisatcisi">
                <Link href="/istanbul-anadolu-yakasi-su-tesisatcisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Anadolu Yakası Su Tesisatçısı
                </Link>
              </li>
              <li key="/cihazli-su-tesisatcisi-istanbul">
                <Link href="/cihazli-su-tesisatcisi-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Cihazlı Su Tesisatçısı İstanbul
                </Link>
              </li>
              <li key="/istanbul-robotlu-tesisat-firmasi">
                <Link href="/istanbul-robotlu-tesisat-firmasi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Robotlu Tesisat Firması
                </Link>
              </li>
              <li key="/gece-acik-su-tesisatcisi-istanbul">
                <Link href="/gece-acik-su-tesisatcisi-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Gece Açık Su Tesisatçısı İstanbul
                </Link>
              </li>
              <li key="/istanbul-kirmadan-tesisat-tamiri">
                <Link href="/istanbul-kirmadan-tesisat-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Kırmadan Tesisat Tamiri
                </Link>
              </li>
              <li key="/garantili-su-kacagi-tespiti-istanbul">
                <Link href="/garantili-su-kacagi-tespiti-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Garantili Su Kaçağı Tespiti İstanbul
                </Link>
              </li>
              <li key="/istanbul-tesisat-ariza-servisi">
                <Link href="/istanbul-tesisat-ariza-servisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Tesisat Arıza Servisi
                </Link>
              </li>
              <li key="/kamerali-tesisatci-istanbul">
                <Link href="/kamerali-tesisatci-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kameralı Tesisatçı İstanbul
                </Link>
              </li>
              <li key="/akustik-dinleme-ile-su-kacagi-bulma-istanbul">
                <Link href="/akustik-dinleme-ile-su-kacagi-bulma-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Akustik Dinleme ile Kaçak Bulma
                </Link>
              </li>
              <li key="/termal-kamerali-tesisatci-istanbul">
                <Link href="/termal-kamerali-tesisatci-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Termal Kameralı Tesisatçı İstanbul
                </Link>
              </li>
              <li key="/istanbul-pimas-goruntuleme-merkezi">
                <Link href="/istanbul-pimas-goruntuleme-merkezi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Pimaş Görüntüleme
                </Link>
              </li>
              <li key="/istanbul-kanalizasyon-tikanikligi-acma">
                <Link href="/istanbul-kanalizasyon-tikanikligi-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kanalizasyon Tıkanıklığı Açma
                </Link>
              </li>
              <li key="/tikali-boru-acma-istanbul">
                <Link href="/tikali-boru-acma-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Tıkalı Boru Açma İstanbul
                </Link>
              </li>
              <li key="/istanbul-makineyle-petek-temizleme">
                <Link href="/istanbul-makineyle-petek-temizleme" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Makineyle Petek Temizleme
                </Link>
              </li>
              <li key="/ilacli-petek-temizligi-istanbul">
                <Link href="/ilacli-petek-temizligi-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İlaçlı Petek Temizliği İstanbul
                </Link>
              </li>
              <li key="/istanbul-kombi-tesisat-bakimi">
                <Link href="/istanbul-kombi-tesisat-bakimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Kombi Tesisat Bakımı
                </Link>
              </li>
              <li key="/mutfak-lavabosu-acma-istanbul">
                <Link href="/mutfak-lavabosu-acma-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Mutfak Lavabosu Açma İstanbul
                </Link>
              </li>
              <li key="/banyo-gideri-acma-istanbul">
                <Link href="/banyo-gideri-acma-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Banyo Gideri Açma İstanbul
                </Link>
              </li>
              <li key="/istanbul-klozet-tikanikligi-acma">
                <Link href="/istanbul-klozet-tikanikligi-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Klozet Tıkanıklığı Açma
                </Link>
              </li>
              <li key="/su-borusu-patlagi-tamiri-istanbul">
                <Link href="/su-borusu-patlagi-tamiri-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Su Borusu Patlağı Tamiri
                </Link>
              </li>
              <li key="/istanbul-tesisat-yenileme-fiyatlari">
                <Link href="/istanbul-tesisat-yenileme-fiyatlari" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Tesisat Yenileme Fiyatları
                </Link>
              </li>
              <li key="/gomme-rezervuar-tamiri-istanbul">
                <Link href="/gomme-rezervuar-tamiri-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Gömme Rezervuar Tamiri
                </Link>
              </li>
              <li key="/istanbul-sifon-degisimi-ve-tamiri">
                <Link href="/istanbul-sifon-degisimi-ve-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Sifon Değişimi ve Tamiri
                </Link>
              </li>
              <li key="/musluk-ve-batarya-montaji-istanbul">
                <Link href="/musluk-ve-batarya-montaji-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Musluk ve Batarya Montajı
                </Link>
              </li>
              <li key="/istanbul-su-saati-ariza-servisi">
                <Link href="/istanbul-su-saati-ariza-servisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  İstanbul Su Saati Arıza Servisi
                </Link>
              </li>
              <li key="/kalorifer-tesisati-kurulumu-istanbul">
                <Link href="/kalorifer-tesisati-kurulumu-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kalorifer Tesisatı Kurulumu
                </Link>
              </li>
              <li key="/istanbul-bina-ana-su-borusu-tamiri">
                <Link href="/istanbul-bina-ana-su-borusu-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Bina Ana Su Borusu Tamiri
                </Link>
              </li>
              <li key="/yagmursuyu-gideri-acma-istanbul">
                <Link href="/yagmursuyu-gideri-acma-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Yağmursuyu Gideri Açma
                </Link>
              </li>
              <li key="/istanbul-teras-su-yalitimi-ve-kacak">
                <Link href="/istanbul-teras-su-yalitimi-ve-kacak" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Teras Su Yalıtımı ve Kaçak
                </Link>
              </li>
              <li key="/bahce-tesisati-cekimi-istanbul">
                <Link href="/bahce-tesisati-cekimi-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Bahçe Tesisatı Çekimi İstanbul
                </Link>
              </li>
              <li key="/istanbul-dogalgaz-kacak-tespiti">
                <Link href="/istanbul-dogalgaz-kacak-tespiti" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Doğalgaz Kaçak Tespiti
                </Link>
              </li>
              <li key="/yangin-tesisati-kurulumu-istanbul">
                <Link href="/yangin-tesisati-kurulumu-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Yangın Tesisatı Kurulumu
                </Link>
              </li>
              <li key="/istanbul-hidrofor-tamiri-ve-montaji">
                <Link href="/istanbul-hidrofor-tamiri-ve-montaji" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Hidrofor Tamiri ve Montajı
                </Link>
              </li>
              <li key="/su-deposu-temizligi-istanbul">
                <Link href="/su-deposu-temizligi-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Su Deposu Temizliği
                </Link>
              </li>
              <li key="/istanbul-su-yumusatma-cihazi-montaji">
                <Link href="/istanbul-su-yumusatma-cihazi-montaji" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Su Yumuşatma Cihazı Montajı
                </Link>
              </li>
              <li key="/kombi-su-eksiltiyor-cozumu-istanbul">
                <Link href="/kombi-su-eksiltiyor-cozumu-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kombi Su Eksiltiyor Çözümü
                </Link>
              </li>
              <li key="/istanbul-logar-kapagi-bulma-ve-acma">
                <Link href="/istanbul-logar-kapagi-bulma-ve-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Logar Kapağı Bulma ve Açma
                </Link>
              </li>
              <li key="/profesyonel-su-tesisatcisi-istanbul">
                <Link href="/profesyonel-su-tesisatcisi-istanbul" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Profesyonel Su Tesisatçısı
                </Link>
              </li>
              <li key="/bakirkoy-robotla-tuvalet-acma">
                <Link href="/bakirkoy-robotla-tuvalet-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Bakırköy Robotla Tuvalet Açma
                </Link>
              </li>
</ul>
          </div>

          {/* Uzman Çözümler */}
          <div>
            <h4 className="text-white text-base font-black mb-4 flex items-center gap-2">
              <RiWrenchLine className="text-blue-500" /> Uzman Çözümler
            </h4>
            <ul className="space-y-2">
              {uzmanlik.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                    <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
                          <li key="/kadikoy-kirmadan-su-kacagi-tespiti">
                <Link href="/kadikoy-kirmadan-su-kacagi-tespiti" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kadıköy Kırmadan Su Kaçağı Tespiti
                </Link>
              </li>
              <li key="/sisli-acil-tesisatci-servisi">
                <Link href="/sisli-acil-tesisatci-servisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Şişli Acil Tesisatçı Servisi
                </Link>
              </li>
              <li key="/besiktas-kamerali-su-tesisatcisi">
                <Link href="/besiktas-kamerali-su-tesisatcisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Beşiktaş Kameralı Su Tesisatçısı
                </Link>
              </li>
              <li key="/bakirkoy-robotla-tikaniklik-acma">
                <Link href="/bakirkoy-robotla-tikaniklik-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Bakırköy Robotla Tıkanıklık Açma
                </Link>
              </li>
              <li key="/bahcelievler-noktasal-su-kacagi-bulma">
                <Link href="/bahcelievler-noktasal-su-kacagi-bulma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Bahçelievler Noktasal Su Kaçağı Bulma
                </Link>
              </li>
              <li key="/zeytinburnu-ilacli-petek-temizligi">
                <Link href="/zeytinburnu-ilacli-petek-temizligi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Zeytinburnu İlaçlı Petek Temizliği
                </Link>
              </li>
              <li key="/fatih-gece-acik-su-tesisatcisi">
                <Link href="/fatih-gece-acik-su-tesisatcisi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Fatih Gece Açık Su Tesisatçısı
                </Link>
              </li>
              <li key="/sariyer-cihazli-tesisatci">
                <Link href="/sariyer-cihazli-tesisatci" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Sarıyer Cihazlı Tesisatçı
                </Link>
              </li>
              <li key="/uskudar-gomme-rezervuar-tamiri">
                <Link href="/uskudar-gomme-rezervuar-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Üsküdar Gömme Rezervuar Tamiri
                </Link>
              </li>
              <li key="/umraniye-tikali-gider-acma">
                <Link href="/umraniye-tikali-gider-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Ümraniye Tıkalı Gider Açma
                </Link>
              </li>
              <li key="/maltepe-akustik-su-kacagi-tespiti">
                <Link href="/maltepe-akustik-su-kacagi-tespiti" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Maltepe Akustik Su Kaçağı Tespiti
                </Link>
              </li>
              <li key="/atasehir-dogalgaz-tesisat-tamiri">
                <Link href="/atasehir-dogalgaz-tesisat-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Ataşehir Doğalgaz Tesisat Tamiri
                </Link>
              </li>
              <li key="/kartal-pimas-yikama-ve-acma">
                <Link href="/kartal-pimas-yikama-ve-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kartal Pimaş Yıkama ve Açma
                </Link>
              </li>
              <li key="/pendik-makineyle-petek-temizleme">
                <Link href="/pendik-makineyle-petek-temizleme" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Pendik Makineyle Petek Temizleme
                </Link>
              </li>
              <li key="/sancaktepe-su-borusu-tamiri">
                <Link href="/sancaktepe-su-borusu-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Sancaktepe Su Borusu Tamiri
                </Link>
              </li>
              <li key="/cekmekoy-su-deposu-temizligi">
                <Link href="/cekmekoy-su-deposu-temizligi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Çekmeköy Su Deposu Temizliği
                </Link>
              </li>
              <li key="/beykoz-bahce-tesisati-kurulumu">
                <Link href="/beykoz-bahce-tesisati-kurulumu" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Beykoz Bahçe Tesisatı Kurulumu
                </Link>
              </li>
              <li key="/tuzla-kanalizasyon-acma">
                <Link href="/tuzla-kanalizasyon-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Tuzla Kanalizasyon Açma
                </Link>
              </li>
              <li key="/sultanbeyli-termal-kamerali-kacak-tespiti">
                <Link href="/sultanbeyli-termal-kamerali-kacak-tespiti" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Sultanbeyli Termal Kameralı Kaçak Tespiti
                </Link>
              </li>
              <li key="/kucukcekmece-lavabo-tikanikligi-acma">
                <Link href="/kucukcekmece-lavabo-tikanikligi-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Küçükçekmece Lavabo Tıkanıklığı Açma
                </Link>
              </li>
              <li key="/avcilar-kombi-su-eksiltme-cozumu">
                <Link href="/avcilar-kombi-su-eksiltme-cozumu" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Avcılar Kombi Su Eksiltme Çözümü
                </Link>
              </li>
              <li key="/beylikduzu-kirmadan-tuvalet-acma">
                <Link href="/beylikduzu-kirmadan-tuvalet-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Beylikdüzü Kırmadan Tuvalet Açma
                </Link>
              </li>
              <li key="/esenyurt-cihazla-su-sizintisi-bulma">
                <Link href="/esenyurt-cihazla-su-sizintisi-bulma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Esenyurt Cihazla Su Sızıntısı Bulma
                </Link>
              </li>
              <li key="/buyukcekmece-teras-su-yalitimi">
                <Link href="/buyukcekmece-teras-su-yalitimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Büyükçekmece Teras Su Yalıtımı
                </Link>
              </li>
              <li key="/basaksehir-musluk-ve-batarya-degisimi">
                <Link href="/basaksehir-musluk-ve-batarya-degisimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Başakşehir Musluk ve Batarya Değişimi
                </Link>
              </li>
              <li key="/eyupsultan-banyo-gideri-acma">
                <Link href="/eyupsultan-banyo-gideri-acma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Eyüpsultan Banyo Gideri Açma
                </Link>
              </li>
              <li key="/kagithane-kalorifer-tesisati-yenileme">
                <Link href="/kagithane-kalorifer-tesisati-yenileme" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Kağıthane Kalorifer Tesisatı Yenileme
                </Link>
              </li>
              <li key="/gaziosmanpasa-klozet-ic-takim-tamiri">
                <Link href="/gaziosmanpasa-klozet-ic-takim-tamiri" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Gaziosmanpaşa Klozet İç Takım Tamiri
                </Link>
              </li>
              <li key="/sultangazi-logar-kapagi-bulma">
                <Link href="/sultangazi-logar-kapagi-bulma" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Sultangazi Logar Kapağı Bulma
                </Link>
              </li>
              <li key="/esenler-su-saati-vanasi-degisimi">
                <Link href="/esenler-su-saati-vanasi-degisimi" className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group">
                  <RiArrowRightLine className="text-xs text-gray-600 group-hover:text-blue-500 transition-colors shrink-0" />
                  Esenler Su Saati Vanası Değişimi
                </Link>
              </li>
</ul>
          </div>

          {/* Avrupa Yakası */}
          <div>
            <h4 className="text-white text-base font-black mb-4 flex items-center gap-2">
              <RiMapPin2Fill className="text-blue-500" /> Avrupa Yakası
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {bolgeAvrupa.map((item) => (
                <Link key={item.href} href={item.href} className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Anadolu Yakası */}
          <div>
            <h4 className="text-white text-base font-black mb-4 flex items-center gap-2">
              <RiMapPin2Fill className="text-blue-500" /> Anadolu Yakası
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {bolgeAnadolu.map((item) => (
                <Link key={item.href} href={item.href} className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Legal / Nav */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="text-white text-sm font-black mb-3">Kurumsal</h4>
              <div className="space-y-2">
                <Link href="/hakkimizda" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">Hakkımızda</Link>
                <Link href="/iletisim" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">İletişim</Link>
                <Link href="/istanbul-su-tesisat" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">Tüm Hizmet Bölgeleri</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Akarsu Tesisat. Tüm Hakları Saklıdır.
          </p>
          <p className="text-xs text-gray-600">
            İstanbul 7/24 Profesyonel Su Tesisatçısı | Kırmadan Su Kaçağı Tespiti | Robotla Tıkanıklık Açma
          </p>
        </div>
      </div>
    </footer>
  );
}
