import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { RiDropFill, RiToolsFill, RiWrenchLine, RiPhoneFill, RiShieldCheckFill, RiTimeLine, RiCameraLensFill, RiMapPin2Fill } from "react-icons/ri";

export const revalidate = 60; // ISR for ultra fast performance

type SeoPageData = {
  title: string;
  desc: string;
  h1: string;
  subH1: string;
  content: string;
  image: string;
  serviceType: "leak" | "clog" | "heat";
};

export const seoPages: Record<string, SeoPageData> = {
  "istanbul-su-tesisat": {
    title: "İstanbul Su Tesisatçısı | 7/24 Acil ve Garantili Servis",
    desc: "İstanbul genelinde kırmadan su kaçağı tespiti ve robotla tıkanıklık açma hizmetleri. 30 dakikada kapınızdayız. Avrupa standartlarında tesisat hizmeti.",
    h1: "İstanbul Profesyonel",
    subH1: "Su Tesisatçısı",
    content: "İstanbul'un tüm ilçelerine 7/24 kesintisiz, hızlı ve garantili su tesisatı hizmeti sunuyoruz. Modern ekipmanlarımızla sorunları kırmadan dökmeden buluyor ve onarıyoruz.",
    image: "/images/tesisat4.png",
    serviceType: "leak"
  },
  "sultangazi-su-tesisat": {
    title: "Sultangazi Su Tesisatçısı | Hızlı ve Güvenilir Servis",
    desc: "Sultangazi su tesisatçısı. Kırmadan dökmeden cihazla su kaçağı bulma, tıkanıklık açma ve petek temizliği. %100 garantili tesisat hizmetleri.",
    h1: "Sultangazi Bölgesi",
    subH1: "Uzman Tesisatçı",
    content: "Sultangazi merkezli ekibimizle tüm tesisat arızalarınıza 30 dakika içinde müdahale ediyoruz. Akustik cihazlar ve termal kameralar kullanarak nokta atışı tespit yapıyoruz.",
    image: "/images/tesisat5.png",
    serviceType: "leak"
  },
  "gaziosmanpasa-su-tesisat": {
    title: "Gaziosmanpaşa Su Tesisatçısı | Kırmadan Cihazla Tespit",
    desc: "Gaziosmanpaşa'da 7/24 su tesisatçısı arayanlar için en doğru adres. Robotla tıkanıklık açma ve termal kameralı su kaçağı tespiti.",
    h1: "Gaziosmanpaşa",
    subH1: "Garantili Tesisat Çözümleri",
    content: "Gaziosmanpaşa bölgesindeki ev ve iş yerlerinizde oluşan su tesisatı problemlerine, fayanslarınızı kırmadan teknolojik cihazlarla müdahale ediyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "su-kacagi-tespiti": {
    title: "Su Kaçağı Tespiti | Kırmadan Kameralı Noktasal Bulma",
    desc: "Evdeki veya iş yerindeki su sızıntılarını termal kamera ve akustik cihazlarla kırmadan noktasal olarak buluyoruz. Hemen arayın, masraftan kurtulun.",
    h1: "Kırmadan Cihazla",
    subH1: "Su Kaçağı Tespiti",
    content: "Su kaçakları artık kabusunuz olmasın. Geleneksel kırma dökme yöntemlerini bir kenara bırakın; en son teknoloji akustik dinleme cihazları ile kaçağın tam noktasını buluyoruz.",
    image: "/images/tesisat1.avif",
    serviceType: "leak"
  },
  "kirmadan-su-kacagi-tespiti": {
    title: "Kırmadan Su Kaçağı Tespiti ve Tamiri | Garantili Çözüm",
    desc: "Sadece tek bir fayans kaldırarak veya hiç kırmadan su kaçağı tamiri yapıyoruz. %100 garantili kırmadan su kaçağı tespiti için uzman ekibimize ulaşın.",
    h1: "Tek Fayansla",
    subH1: "Kırmadan Kaçak Tespiti",
    content: "Özel kimyasallar veya noktasal müdahaleler ile eviniz inşaat alanına dönmeden su kaçağı problemlerinizi kalıcı olarak ortadan kaldırıyoruz.",
    image: "/images/tesisat6.jpg",
    serviceType: "leak"
  },
  "robotla-su-kacagi-bulma": {
    title: "Robotla Su Kaçağı Bulma | Akustik ve Termal Cihazlar",
    desc: "Robotik cihazlar ve termal kameralar ile duvar arkası veya zemin altındaki su kaçaklarını santimi santimine tespit ediyoruz.",
    h1: "Termal Kamera ile",
    subH1: "Robotla Su Kaçağı Bulma",
    content: "Gözle görülmeyen sızıntıları robotik kameralarımız ve ısıya duyarlı termal tarayıcılarımızla saniyeler içinde görüntülüyor ve raporluyoruz.",
    image: "/images/tesisat16.webp",
    serviceType: "leak"
  },
  "tikaniklik-acma": {
    title: "Tıkanıklık Açma | Tuvalet, Lavabo ve Pimaş Açma Servisi",
    desc: "Tıkanmış lavabo, tuvalet ve logarları özel helezon yaylı robot makinelerle kırmadan açıyoruz. 7/24 tıkanıklık açma hizmeti.",
    h1: "Robot Makine ile",
    subH1: "Tıkanıklık Açma",
    content: "Pis su giderlerinde oluşan tıkanıklıklar sağlığınızı tehdit etmesin. Duvarları veya zeminleri kırmadan çelik yaylı robotik sistemlerle tıkanıklıkları kalıcı olarak açıyoruz.",
    image: "/images/tesisat10.jpg",
    serviceType: "clog"
  },
  "kamerali-tikaniklik-acma": {
    title: "Kameralı Tıkanıklık Açma | Görüntülü Pimaş Açma",
    desc: "Pimaş içi kamera sistemlerimizle tıkanıklığın sebebini görüntülüyor ve kırmadan robot cihazla açıyoruz. Kesin çözüm.",
    h1: "Görüntülü Sistemle",
    subH1: "Kameralı Tıkanıklık Açma",
    content: "Tıkanıklığın sebebi yağlanma mı, çökme mi yoksa yabancı cisim mi? Boru içi görüntüleme kameralarımızla sorunun merkezini ekranda size de gösteriyor ve çözüyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "petek-temizligi": {
    title: "Petek Temizliği | İlaçlı ve Makineli Sistemle Temizlik",
    desc: "Kombiniz yanıyor ama petekler ısınmıyor mu? İlaçlı petek temizliği ile doğalgaz faturanızda %30'a varan tasarruf sağlayın.",
    h1: "Maksimum Isı İçin",
    subH1: "Profesyonel Petek Temizliği",
    content: "Zamanla peteklerin içinde oluşan balçık ve kireçlenmeleri çift yönlü özel yıkama makinelerimizle temizleyerek kombinizin performansını artırıyoruz.",
    image: "/images/tesisat12.jpg",
    serviceType: "heat"
  },
  "makineli-petek-temizligi": {
    title: "Makineli Petek Temizliği | Garantili Kalorifer Temizleme",
    desc: "Kalorifer tesisatınızın ömrünü uzatan profesyonel makineli petek temizliği hizmeti. Filtre temizliği hediye!",
    h1: "Çift Yönlü Yıkama İle",
    subH1: "Makineli Petek Temizliği",
    content: "Peteklerinizi yerinden sökmeden, banyonuzdaki havlupan üzerinden sisteme bağladığımız özel makine ile tüm tesisatınızı ilk günkü temizliğine kavuşturuyoruz.",
    image: "/images/tesisat18.webp",
    serviceType: "heat"
  },
  "pimas-acma": {
    title: "Pimaş Açma | Robotla Kırmadan Tıkanıklık Açma",
    desc: "Tıkanan pimaş borularınızı robot makine ile fayansları kırmadan açıyoruz. Garantili pimaş açma servisi.",
    h1: "Robot Makine ile",
    subH1: "Kırmadan Pimaş Açma",
    content: "Bina içi ve dışı pimaş borularındaki tıkanıklıkları, özel helezonlu robot makinelerimizle kırmadan, dökmeden ve etrafı kirletmeden açıyoruz.",
    image: "/images/tesisat2.png",
    serviceType: "clog"
  },
  "logar-tikanikligi-acma": {
    title: "Logar Tıkanıklığı Açma | Kameralı Vidanjör Servisi",
    desc: "Tıkanan bina ve sokak logarlarını yüksek basınçlı vidanjör ve robot makinelerle açıyoruz.",
    h1: "Yüksek Basınçlı",
    subH1: "Logar Tıkanıklığı Açma",
    content: "Dış hat ve ana logar tıkanıklıklarını yüksek basınçlı su jeti ve robotik sistemlerimizle kökten çözüyoruz. Kötü koku ve taşmalara son veriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "kombi-su-kacagi": {
    title: "Kombi Su Kaçağı Tespiti | Basınç Düşmesi Çözümü",
    desc: "Kombiniz sürekli su eksiltiyor mu? Termal kameralarla kombi tesisatındaki gizli su kaçaklarını anında buluyoruz.",
    h1: "Termal Kamera ile",
    subH1: "Kombi Su Kaçağı Tespiti",
    content: "Kombi basınç düşmesi sorunlarına sebep olan kılcal kalorifer tesisat kaçaklarını termal kameralarla anında tespit ediyor, kimyasal kapatıcılarla kırmadan onarıyoruz.",
    image: "/images/tesisat4.png",
    serviceType: "leak"
  },
  "klozet-tikanikligi-acma": {
    title: "Klozet Tıkanıklığı Açma | Kırmadan Robotla Çözüm",
    desc: "Tıkanan klozeti sökmeden, fayanslara zarar vermeden, koku ve pislik yaratmadan robotla açma işlemi uyguluyoruz.",
    h1: "Temiz ve Hızlı",
    subH1: "Klozet Tıkanıklığı Açma",
    content: "Tuvalet ve klozet tıkanıklıkları kabusunuz olmasın. Özel robotik helezon yaylarımızla tıkanıklığı saniyeler içinde kırmadan dökmeden açıyoruz.",
    image: "/images/tesisat5.png",
    serviceType: "clog"
  },
  "su-tesisati-tamiri": {
    title: "Su Tesisatı Tamiri | Profesyonel Sıhhi Tesisatçı",
    desc: "Bozulan musluklar, patlayan borular, batarya değişimi ve tüm sıhhi tesisat arızalarınızda 7/24 profesyonel çözüm.",
    h1: "Garantili ve Hızlı",
    subH1: "Genel Su Tesisatı Tamiri",
    content: "Ev ve iş yerinizdeki her türlü sıhhi tesisat arızası, musluk değişimi, batarya montajı ve boru patlaklarına anında profesyonel müdahale ediyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "leak"
  },
  "besiktas-su-tesisat": {
    title: "Beşiktaş Su Tesisatçısı | Kırmadan Su Kaçağı Bulma",
    desc: "Beşiktaş su tesisatçısı olarak 7/24 kesintisiz hizmet veriyoruz. Kırmadan cihazla su kaçağı tespiti ve robotla tıkanıklık açma.",
    h1: "Beşiktaş Bölgesi",
    subH1: "Uzman Tesisat Servisi",
    content: "Beşiktaş ve çevresinde tesisat sorunlarına son! İthal cihazlarımızla su kaçaklarını anında buluyor, kırma dökme yapmadan tamir ediyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "leak"
  },
  "kadikoy-su-tesisat": {
    title: "Kadıköy Su Tesisatçısı | 30 Dakikada Acil Servis",
    desc: "Kadıköy'de su tesisatı arızalarınıza jet hızıyla müdahale. Termal kamera ve akustik cihazlarla %100 garantili tesisat onarımı.",
    h1: "Kadıköy",
    subH1: "7/24 Tesisatçı",
    content: "Kadıköy'ün her mahallesine 30 dakika içinde ulaşıyoruz. Tıkanıklık açma ve petek temizliği konusunda uzman ekibimiz hizmetinizde.",
    image: "/images/tesisat8.jpg",
    serviceType: "leak"
  },
  "sisli-su-tesisat": {
    title: "Şişli Su Tesisatçısı | Profesyonel Tesisat Firması",
    desc: "Şişli acil su tesisatçısı. Cihazla noktasal su kaçağı tespiti, pimaş açma ve kombi petek bakımı. Uygun fiyat, garantili işçilik.",
    h1: "Şişli",
    subH1: "Profesyonel Tesisat",
    content: "Şişli bölgesindeki konut ve iş yerleriniz için en teknolojik cihazlarla kırmadan tesisat tamiratı yapıyoruz.",
    image: "/images/tesisat14.jpg",
    serviceType: "leak"
  },
  "uskudar-su-tesisat": {
    title: "Üsküdar Su Tesisatçısı | Kırmadan Kameralı Çözüm",
    desc: "Üsküdar'da su tesisat problemlerine kalıcı çözümler. Teknolojik cihazlarla su kaçağı bulma ve robot makineyle gider açma.",
    h1: "Üsküdar",
    subH1: "Tesisat Uzmanı",
    content: "Üsküdar genelinde müşteri memnuniyeti odaklı çalışıyor, tesisat sorunlarınızı en az maliyetle hızlıca çözüme kavuşturuyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "maltepe-su-tesisat": {
    title: "Maltepe Su Tesisatçısı | Robotla Tıkanıklık Açma",
    desc: "Maltepe su tesisat firması. Su kaçağı tespiti, klozet tamiri, musluk montajı ve tüm sıhhi tesisat işlerinizde yanınızdayız.",
    h1: "Maltepe",
    subH1: "Acil Tesisat Servisi",
    content: "Maltepe'de tesisat arızası mı yaşadınız? Hiç dert etmeyin. Profesyonel ekibimiz ve son sistem makinelerimizle hemen kapınızdayız.",
    image: "/images/tesisat5.png",
    serviceType: "leak"
  },
  "kartal-su-tesisat": {
    title: "Kartal Su Tesisatçısı | Garantili ve Hızlı",
    desc: "Kartal bölgesi 7/24 tesisat ustası. Kırmadan su kaçağı tespiti, petek temizliği ve pimaş açma hizmetlerinde lider.",
    h1: "Kartal",
    subH1: "Güvenilir Tesisatçı",
    content: "Kartal'da uzun yıllardır edindiğimiz tecrübeyle su tesisatınızdaki en zorlu sızıntıları bile kırmadan tespit edip onarıyoruz.",
    image: "/images/tesisat12.jpg",
    serviceType: "leak"
  },
  "pendik-su-tesisat": {
    title: "Pendik Su Tesisatçısı | Cihazla Su Kaçağı Bulma",
    desc: "Pendik'te su tesisatçısı arıyorsanız doğru yerdesiniz. Akustik cihazlarla su sızıntılarını kırmadan buluyoruz.",
    h1: "Pendik",
    subH1: "Garantili Tesisat",
    content: "Pendik'te su kaçaklarına teknolojik müdahale! Duvarlarınızı kırmadan, cihazlarımızla kaçağın merkezini buluyor ve noktasal tamir yapıyoruz.",
    image: "/images/tesisat16.webp",
    serviceType: "leak"
  },
  "bakirkoy-su-tesisat": {
    title: "Bakırköy Su Tesisatçısı | Kameralı Pimaş Açma",
    desc: "Bakırköy su tesisatçısı ile tıkanıklıklara son. Robotla pimaş açma, klozet tıkanıklığı ve logar temizliği 7/24.",
    h1: "Bakırköy",
    subH1: "Sıhhi Tesisat Ustası",
    content: "Bakırköy'deki tesisat sorunlarınızda zamanla yarışıyoruz. Kötü koku ve su basmalarına karşı kameralı sistemlerimizle anında müdahale ediyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "bahcelievler-su-tesisat": {
    title: "Bahçelievler Su Tesisatçısı | Petek ve Tesisat Bakımı",
    desc: "Bahçelievler'de kırmadan cihazla su kaçağı bulma, tıkanıklık açma ve çift yönlü makineli petek temizliği.",
    h1: "Bahçelievler",
    subH1: "Acil Tesisat",
    content: "Bahçelievler merkezli mobil servis ağımızla, su sızıntılarından petek ısınmama sorunlarına kadar tüm arızalarda yanınızdayız.",
    image: "/images/tesisat18.webp",
    serviceType: "heat"
  },
  "zeytinburnu-su-tesisat": {
    title: "Zeytinburnu Su Tesisatçısı | 7/24 Tesisat Servisi",
    desc: "Zeytinburnu su tesisatçısı arayanlara 30 dakikada hizmet garantisi. Su kaçaklarına ve pimaş tıkanıklıklarına son teknoloji çözüm.",
    h1: "Zeytinburnu",
    subH1: "Tesisat Çözümleri",
    content: "Zeytinburnu genelinde ev ve iş yerlerinizdeki sıhhi tesisat problemlerini kırmadan dökmeden çözerek sizi büyük masraflardan kurtarıyoruz.",
    image: "/images/tesisat4.png",
    serviceType: "leak"
  },
  "fatih-su-tesisat": {
    title: "Fatih Su Tesisatçısı | Kırmadan Noktasal Tespit",
    desc: "Tarihi yarımada Fatih'te uzman su tesisatçısı. Eskimiş borulardaki su kaçaklarını kırmadan buluyor, robotla gider açıyoruz.",
    h1: "Fatih",
    subH1: "Kameralı Tesisat",
    content: "Fatih ilçesinin eski ve zorlu tesisat yapısını biliyor, tarihi binalara zarar vermeden termal kameralarla su kaçağı buluyoruz.",
    image: "/images/tesisat6.jpg",
    serviceType: "leak"
  },
  "beyoglu-su-tesisat": {
    title: "Beyoğlu Su Tesisatçısı | Robotla Tesisat Onarımı",
    desc: "Beyoğlu'nda 7/24 acil su tesisatçısı. İstiklal, Taksim ve Cihangir bölgelerine hızlı ve cihazlı tesisat servisi.",
    h1: "Beyoğlu",
    subH1: "7/24 Acil Tesisatçı",
    content: "Beyoğlu'nun hareketli temposuna ayak uyduruyor, gece gündüz demeden tesisat arızalarınızı profesyonel ekibimizle anında gideriyoruz.",
    image: "/images/tesisat8.jpg",
    serviceType: "leak"
  },
  "sariyer-su-tesisat": {
    title: "Sarıyer Su Tesisatçısı | Garantili Servis",
    desc: "Sarıyer bölgesinde villalar, siteler ve evler için profesyonel su tesisatçısı. Cihazla kaçak bulma ve petek temizliği.",
    h1: "Sarıyer",
    subH1: "Profesyonel Ekip",
    content: "Sarıyer'in tüm mahallelerine donanımlı araçlarımızla hizmet veriyoruz. Büyük alanlardaki tesisat sorunlarını teknoloji ile kırmadan çözüyoruz.",
    image: "/images/tesisat14.jpg",
    serviceType: "leak"
  },
  "eyup-su-tesisat": {
    title: "Eyüpsultan Su Tesisatçısı | Hızlı Tesisat Çözümleri",
    desc: "Eyüpsultan su tesisatçısı. Pimaş açma, su kaçağı tespiti ve sıhhi tesisat montaj işlerinizde garantili ve hızlı servis.",
    h1: "Eyüpsultan",
    subH1: "Güvenilir Servis",
    content: "Eyüpsultan bölgesinde tesisat ustasına ihtiyacınız varsa doğru adres. Yılların deneyimi ve modern cihazlarla sorunları kökünden çözüyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "leak"
  },
  "kagithane-su-tesisat": {
    title: "Kağıthane Su Tesisatçısı | Kırmadan Kaçak Bulma",
    desc: "Kağıthane su tesisat ustası. Evinizde su mu damlıyor? Kırmadan cihazla tespit edip 30 dakikada tamir ediyoruz.",
    h1: "Kağıthane",
    subH1: "Noktasal Tesisat",
    content: "Kağıthane'de fayans kırmaya son! Termal ısıya duyarlı kameralarımızla kaçağın yerini santimi santimine tespit ediyoruz.",
    image: "/images/tesisat12.jpg",
    serviceType: "leak"
  },
  "basaksehir-su-tesisat": {
    title: "Başakşehir Su Tesisatçısı | Tıkanıklık ve Kaçak Tespiti",
    desc: "Başakşehir tesisat servisi. Kameralı sistemlerle su kaçağı arama, logar açma ve petek temizliğinde bölgenin en iyisi.",
    h1: "Başakşehir",
    subH1: "Garantili Tesisat",
    content: "Başakşehir'deki modern sitelerin karmaşık tesisat yapılarına hakimiz. Gelişmiş donanımlarımızla kırmadan, temiz bir şekilde hizmet veriyoruz.",
    image: "/images/tesisat16.webp",
    serviceType: "leak"
  },
  "kucukcekmece-su-tesisat": {
    title: "Küçükçekmece Su Tesisatçısı | Acil Müdahale",
    desc: "Küçükçekmece 7/24 su tesisatçısı. Lavabo ve tuvalet tıkanıklığı açma, cihazla sızıntı bulma hizmetleri.",
    h1: "Küçükçekmece",
    subH1: "Robotlu Tesisat",
    content: "Küçükçekmece ilçesinde su baskını, kaçak veya tıkanıklık durumlarında çelik yaylı makinelerimiz ve kameralarımızla sorunu ortadan kaldırıyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "avcilar-su-tesisat": {
    title: "Avcılar Su Tesisatçısı | Cihazlı ve Garantili İşçilik",
    desc: "Avcılar su tesisatçısı. Kırmadan su kaçağı bulma ve robot makineyle tıkanıklık açma işlemlerinde 1 yıl işçilik garantisi.",
    h1: "Avcılar",
    subH1: "Uzman Tesisat Hizmeti",
    content: "Avcılar'da su tesisatınız güvende. Sızıntıları tespit etmek için saatlerce kırma işlemine son. Dinleme cihazlarımızla sadece tek fayans kaldırıyoruz.",
    image: "/images/tesisat5.png",
    serviceType: "leak"
  },
  "beylikduzu-su-tesisat": {
    title: "Beylikdüzü Su Tesisatçısı | 30 Dakika Servis",
    desc: "Beylikdüzü'nde petek temizleme, su kaçağı tespiti ve gider açma hizmetlerinde profesyonel ekiplerle 7/24 hizmet.",
    h1: "Beylikdüzü",
    subH1: "Acil Tesisat Servisi",
    content: "Beylikdüzü bölgesinde yaşayacağınız tüm su tesisatı problemlerine ithal robot makinelerimizle kalıcı çözümler getiriyoruz.",
    image: "/images/tesisat18.webp",
    serviceType: "heat"
  },
  "esenler-su-tesisat": {
    title: "Esenler Su Tesisatçısı | Kırmadan Kameralı Bakım",
    desc: "Esenler su tesisat tamircisi. Kırmadan dökmeden, cihazlı ve garantili tesisat hizmetleri. Acil usta için arayın.",
    h1: "Esenler",
    subH1: "Garantili Tesisatçı",
    content: "Esenler'in tüm bölgelerine tesisat servisimiz mevcuttur. Teknolojik alt yapımız sayesinde problemleri hızla tespit eder ve çözeriz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "bagcilar-su-tesisat": {
    title: "Bağcılar Su Tesisatçısı | Robotla Kırmadan",
    desc: "Bağcılar acil tesisatçı. Kırmadan su kaçağı bulma, cihazla pimaş açma. Hızlı servis garantisi.",
    h1: "Bağcılar",
    subH1: "Garantili Tesisatçı",
    content: "Bağcılar bölgesine özel gezici araçlarımızla tesisat arızalarınızı anında onarıyoruz.",
    image: "/images/tesisat4.png",
    serviceType: "leak"
  },
  "gungoren-su-tesisat": {
    title: "Güngören Su Tesisatçısı | 7/24 Kesintisiz",
    desc: "Güngören su tesisatçısı. Cihazlı tesisat onarımı ve petek temizliği için hemen arayın.",
    h1: "Güngören",
    subH1: "Uzman Servis",
    content: "Güngören'in tüm mahallelerine hızlı ve kaliteli sıhhi tesisat hizmeti sağlıyoruz.",
    image: "/images/tesisat5.png",
    serviceType: "leak"
  },
  "bayrampasa-su-tesisat": {
    title: "Bayrampaşa Su Tesisatçısı | Tıkanıklık ve Kaçak",
    desc: "Bayrampaşa'da kırmadan su kaçağı tespiti ve tuvalet açma hizmeti.",
    h1: "Bayrampaşa",
    subH1: "Güvenilir Tesisat",
    content: "Bayrampaşa genelinde tesisat problemlerinizi 30 dakikada adresinize gelerek çözüyoruz.",
    image: "/images/tesisat6.jpg",
    serviceType: "leak"
  },
  "arnavutkoy-su-tesisat": {
    title: "Arnavutköy Su Tesisatçısı | Kameralı Cihazla",
    desc: "Arnavutköy tesisat servisi. Su kaçaklarını termal kamera ile bulup onarıyoruz.",
    h1: "Arnavutköy",
    subH1: "Acil Tesisatçı",
    content: "Genişleyen Arnavutköy bölgesinde konut ve iş yerlerinizin tesisat işlerini profesyonellikle üstleniyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "leak"
  },
  "sultangazi-su-kacagi-tespiti": {
    title: "Sultangazi Su Kaçağı Tespiti | Cihazla Noktasal Bulma",
    desc: "Sultangazi'de kırmadan su kaçağı tespiti yapan uzman tesisat firması.",
    h1: "Sultangazi",
    subH1: "Su Kaçağı Tespiti",
    content: "Fayanslarınızı kırmıyoruz! Termal ve akustik cihazlarımızla kaçağı nokta atışı buluyoruz.",
    image: "/images/tesisat8.jpg",
    serviceType: "leak"
  },
  "gaziosmanpasa-tikaniklik-acma": {
    title: "Gaziosmanpaşa Tıkanıklık Açma | Robotla Pimaş Açma",
    desc: "Gaziosmanpaşa'da lavabo, logar ve tuvalet tıkanıklıklarını çelik yaylı robotlarla açıyoruz.",
    h1: "Gaziosmanpaşa",
    subH1: "Tıkanıklık Açma",
    content: "Tıkalı borular sorun olmaktan çıkıyor. Kameralı robotlarımızla tıkanıklığı anında açıyoruz.",
    image: "/images/tesisat10.jpg",
    serviceType: "clog"
  },
  "sisli-petek-temizligi": {
    title: "Şişli Petek Temizliği | İlaçlı Makineli Sistem",
    desc: "Şişli petek ve kombi temizliği. Isınmayan petekleri çift yönlü makinelerle yıkıyoruz.",
    h1: "Şişli",
    subH1: "Petek Temizliği",
    content: "Kışa girmeden peteklerinizi temizletin, yakıt tasarrufu ve yüksek performans sağlayın.",
    image: "/images/tesisat12.jpg",
    serviceType: "heat"
  },
  "kadikoy-su-kacagi-tespiti": {
    title: "Kadıköy Su Kaçağı Tespiti | Termal Kamera İle",
    desc: "Kadıköy bölgesinde noktasal kırmadan su kaçağı bulma ve tamiri. Hemen arayın.",
    h1: "Kadıköy",
    subH1: "Su Kaçağı Tespiti",
    content: "Alt komşuya damlayan sulara son! Dinleme cihazı ve kameralarla kaçağı yerinde görüyoruz.",
    image: "/images/tesisat14.jpg",
    serviceType: "leak"
  },
  "uskudar-tikaniklik-acma": {
    title: "Üsküdar Tıkanıklık Açma | Garantili Açma",
    desc: "Üsküdar logar, pimaş, mutfak gideri tıkanıklığı açma işlemlerinde teknolojik çözüm.",
    h1: "Üsküdar",
    subH1: "Tıkanıklık Açma",
    content: "Kötü koku ve su taşmalarını unutun. Kırmadan dökmeden robot cihazla tıkanıklık sorununu gideriyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "besiktas-petek-temizligi": {
    title: "Beşiktaş Petek Temizliği | Tesisat Bakımı",
    desc: "Beşiktaş petek temizliği firması. İlaçlı temizleme ile ısı verimini artırın.",
    h1: "Beşiktaş",
    subH1: "Petek Temizleme",
    content: "Peteklerinizin altı ısınmıyorsa bizi arayın. Özel kimyasallarla petek içindeki çamuru söküp atıyoruz.",
    image: "/images/tesisat18.webp",
    serviceType: "heat"
  },
  "kartal-su-kacagi-tespiti": {
    title: "Kartal Su Kaçağı Tespiti | Cihazla Kırmadan",
    desc: "Kartal su kaçağı bulma servisi. Noktasal tespit ve anında onarım.",
    h1: "Kartal",
    subH1: "Su Kaçağı Tespiti",
    content: "Gereksiz kırma işlemine son. Kartal'da garantili cihazla sızıntı bulma hizmeti sunuyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "pendik-tikaniklik-acma": {
    title: "Pendik Tıkanıklık Açma | Robotla Pimaş Yıkama",
    desc: "Pendik acil tıkanıklık açma. Giderleri kameralı cihazla görüntüleyip temizliyoruz.",
    h1: "Pendik",
    subH1: "Tıkanıklık Açma",
    content: "Pendik bölgesinde uzman ekiplerimizle tuvalet ve logar tıkanıklıklarına kesin çözüm getiriyoruz.",
    image: "/images/tesisat10.jpg",
    serviceType: "clog"
  },
  "maltepe-petek-temizligi": {
    title: "Maltepe Petek Temizliği | Tasarruflu Isınma",
    desc: "Maltepe'de makineli petek yıkama ve kombi bakımı. %30 yakıt tasarrufu sağlayın.",
    h1: "Maltepe",
    subH1: "Petek Temizliği",
    content: "Maltepe genelinde peteklerinizi sökmeden banyodan temizleyerek evinizi kirletmeden işlem yapıyoruz.",
    image: "/images/tesisat12.jpg",
    serviceType: "heat"
  },
  "bakirkoy-su-kacagi-tespiti": {
    title: "Bakırköy Su Kaçağı Tespiti | Kırmadan Tamir",
    desc: "Bakırköy'de gizli su sızıntılarını kırmadan buluyoruz.",
    h1: "Bakırköy",
    subH1: "Su Kaçağı Tespiti",
    content: "Bakırköy'ün eski binalarındaki zorlu sızıntıları bile hassas cihazlarımızla noktasal olarak tespit edebiliyoruz.",
    image: "/images/tesisat1.avif",
    serviceType: "leak"
  },
  "bahcelievler-tikaniklik-acma": {
    title: "Bahçelievler Tıkanıklık Açma | Acil Pimaş Açma",
    desc: "Bahçelievler bölgesinde tıkalı mutfak ve banyo giderleri kırmadan açılır.",
    h1: "Bahçelievler",
    subH1: "Tıkanıklık Açma",
    content: "Evinizi kırıp dökmeden, son teknoloji çelik yay sistemlerimizle boru içindeki engelleri yok ediyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "sariyer-su-kacagi-tespiti": {
    title: "Sarıyer Su Kaçağı Tespiti | Termal Kamera Sistemi",
    desc: "Sarıyer villa ve konutlarda cihazla kırmadan su kaçağı bulma.",
    h1: "Sarıyer",
    subH1: "Su Kaçağı Tespiti",
    content: "Büyük mekanlarda sızıntı bulmak tecrübe ister. Sarıyer'de garantili ve hızlı kaçak tespiti yapıyoruz.",
    image: "/images/tesisat5.png",
    serviceType: "leak"
  },
  "eyup-petek-temizligi": {
    title: "Eyüp Petek Temizliği | Cihazla İlaçlı Yıkama",
    desc: "Eyüp petek ve radyatör temizliği hizmeti.",
    h1: "Eyüp",
    subH1: "Petek Temizliği",
    content: "Tesisattaki kireç ve tortuyu sökerek kombinizin ömrünü uzatıyoruz.",
    image: "/images/tesisat18.webp",
    serviceType: "heat"
  },
  "fatih-su-kacagi-tespiti": {
    title: "Fatih Su Kaçağı Tespiti | Kırmadan Bulma",
    desc: "Fatih'in tarihi binalarına zarar vermeden akustik su kaçağı arama.",
    h1: "Fatih",
    subH1: "Su Kaçağı Tespiti",
    content: "Duvarlarınızı kırıp dökmeye son! Sızıntının kaynağını dinleme cihazlarıyla buluyoruz.",
    image: "/images/tesisat6.jpg",
    serviceType: "leak"
  },
  "zeytinburnu-tikaniklik-acma": {
    title: "Zeytinburnu Tıkanıklık Açma | Robot Makineli",
    desc: "Zeytinburnu gider ve pimaş açma servisi.",
    h1: "Zeytinburnu",
    subH1: "Tıkanıklık Açma",
    content: "Garantili ve hızlı müdahale ile Zeytinburnu'ndaki tüm tıkanıklık sorunlarınıza çözüm üretiyoruz.",
    image: "/images/tesisat10.jpg",
    serviceType: "clog"
  },
  "kagithane-su-kacagi-tespiti": {
    title: "Kağıthane Su Kaçağı Tespiti | Hızlı Çözüm",
    desc: "Kağıthane su kaçak bulma firması. Nokta atışı tespit ve onarım garantisi.",
    h1: "Kağıthane",
    subH1: "Su Kaçağı Tespiti",
    content: "Nemi ve rutubeti durdurun! Kağıthane'de akustik ve termal cihazlarla kaçak arama yapıyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "leak"
  },
  "beylikduzu-tikaniklik-acma": {
    title: "Beylikdüzü Tıkanıklık Açma | Kırmadan Pimaş Açma",
    desc: "Beylikdüzü tıkanıklık açma ve görüntüleme servisi.",
    h1: "Beylikdüzü",
    subH1: "Tıkanıklık Açma",
    content: "Robotik helezonlarla borularınıza zarar vermeden tıkanıklığı kökünden açıyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "esenyurt-su-tesisat": {
    title: "Esenyurt Su Tesisatçısı | 7/24 Kesintisiz",
    desc: "Esenyurt acil su tesisatçısı. Cihazla kaçak tespiti ve petek temizliği.",
    h1: "Esenyurt",
    subH1: "Uzman Tesisatçı",
    content: "Esenyurt genelinde mobil araçlarımızla her türlü tesisat arızasına 30 dakika içinde anında müdahale ediyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "avcilar-su-kacagi-tespiti": {
    title: "Avcılar Su Kaçağı Tespiti | Kameralı Sızıntı Bulma",
    desc: "Avcılar su kaçağı bulma merkezi. Kırmadan tespit ve noktasal onarım.",
    h1: "Avcılar",
    subH1: "Su Kaçağı Tespiti",
    content: "Evinizde gereksiz tadilat masrafından kurtulun. Sızıntıyı teknolojiyle buluyoruz.",
    image: "/images/tesisat14.jpg",
    serviceType: "leak"
  },
  "buyukcekmece-su-tesisat": {
    title: "Büyükçekmece Su Tesisatçısı | Acil Servis",
    desc: "Büyükçekmece 7/24 su tesisat servisi. Kırmadan cihazla kaçak arama.",
    h1: "Büyükçekmece",
    subH1: "Güvenilir Tesisat",
    content: "Geniş alanda güçlü servis ağımızla Büyükçekmece ilçesindeki tüm tesisat sorunlarınıza garantili çözümler.",
    image: "/images/tesisat16.webp",
    serviceType: "leak"
  },
  "cekmekoy-su-tesisat": {
    title: "Çekmeköy Su Tesisatçısı | Noktasal Çözümler",
    desc: "Çekmeköy'de sıhhi tesisat arızaları için uzman kadro. Cihazla su kaçağı bulma.",
    h1: "Çekmeköy",
    subH1: "Tesisat Servisi",
    content: "Evinizde oluşan tüm su sorunları için Çekmeköy genelinde 7/24 hizmetinizdeyiz.",
    image: "/images/tesisat8.jpg",
    serviceType: "leak"
  },
  "umraniye-su-tesisat": {
    title: "Ümraniye Su Tesisatçısı | Robotla Tıkanıklık Açma",
    desc: "Ümraniye su tesisat firması. Tuvalet, lavabo tıkanıklığı ve petek temizleme.",
    h1: "Ümraniye",
    subH1: "Sıhhi Tesisat Ustası",
    content: "Ümraniye'de her türlü arızanıza modern ekipmanlarla kırmadan müdahale eden uzman tesisatçı.",
    image: "/images/tesisat5.png",
    serviceType: "leak"
  },
  "sancaktepe-su-tesisat": {
    title: "Sancaktepe Su Tesisatçısı | 30 Dakikada Servis",
    desc: "Sancaktepe acil su tesisatçısı. Cihazla su sızıntısı tespiti.",
    h1: "Sancaktepe",
    subH1: "Acil Tesisat",
    content: "Sancaktepe genelinde kırma dökme işlemlerine son veriyoruz! Uzman ekibimiz sızıntıyı noktasal buluyor.",
    image: "/images/tesisat12.jpg",
    serviceType: "leak"
  },
  "beykoz-su-tesisat": {
    title: "Beykoz Su Tesisatçısı | Kaliteli Hizmet",
    desc: "Beykoz su tesisat işlerinde %100 garanti. Kırmadan su sızıntısı bulma.",
    h1: "Beykoz",
    subH1: "Tesisat Uzmanı",
    content: "Villa ve köşkler başta olmak üzere Beykoz'daki tüm yaşam alanlarına teknolojik altyapımızla hizmet veriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "tuzla-su-tesisat": {
    title: "Tuzla Su Tesisatçısı | Sanayi ve Ev Tesisatı",
    desc: "Tuzla'da fabrika, işyeri ve konut tesisat işleri için profesyonel çözümler.",
    h1: "Tuzla",
    subH1: "Profesyonel Servis",
    content: "Tuzla bölgesindeki yoğun sanayi ve konut yerleşimlerine özel, hızlı ve kalıcı tesisat müdahaleleri yapıyoruz.",
    image: "/images/tesisat4.png",
    serviceType: "leak"
  },
  "sile-su-tesisat": {
    title: "Şile Su Tesisatçısı | Kameralı Tespit",
    desc: "Şile acil su tesisat onarımı. Kırmadan logar açma ve cihazla sızıntı bulma.",
    h1: "Şile",
    subH1: "Kesintisiz Hizmet",
    content: "Şile bölgesinde her türlü altyapı ve tesisat problemlerinizde uzaklık dinlemeden yanınızdayız.",
    image: "/images/tesisat6.jpg",
    serviceType: "leak"
  },
  "tuvalet-tikanikligi-acma": {
    title: "Tuvalet Tıkanıklığı Açma | 7/24 Acil Robotla Açma",
    desc: "Tuvalet tıkanıklığı açma işlemlerinde kırmadan robot cihazlarla %100 garantili çözüm. Kötü koku ve taşmalara son.",
    h1: "Kırmadan Robotla",
    subH1: "Tuvalet Tıkanıklığı Açma",
    content: "Tıkanan tuvaletlerinizi çevreye zarar vermeden, kırmadan dökmeden ve hijyenik bir şekilde robot sistemlerle anında açıyoruz.",
    image: "/images/tesisat10.jpg",
    serviceType: "clog"
  },
  "banyo-su-kacagi-tespiti": {
    title: "Banyo Su Kaçağı Tespiti | Termal Kamera ile Çözüm",
    desc: "Banyonuzdaki alt kata sızan su kaçaklarını termal kameralarla tek fayans kırmadan buluyoruz.",
    h1: "Fayans Kırmadan",
    subH1: "Banyo Su Kaçağı Tespiti",
    content: "Banyo zemini veya duvarlarındaki gizli su sızıntılarını kırmadan buluyor, noktasal olarak tamir ediyoruz.",
    image: "/images/tesisat4.png",
    serviceType: "leak"
  },
  "kirmadan-lavabo-acma": {
    title: "Kırmadan Lavabo Açma | Tıkalı Lavabo Gideri Açma",
    desc: "Tıkanan lavabo giderlerini robot makinelerle kırmadan ve mutfağınıza zarar vermeden açıyoruz.",
    h1: "Hijyenik ve Hızlı",
    subH1: "Kırmadan Lavabo Açma",
    content: "Yemek artıkları ve yağlanma sonucu tıkanan lavabolarınızı profesyonel yaylı sistemlerimizle kalıcı olarak temizliyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "mutfak-gideri-acma": {
    title: "Mutfak Gideri Açma | Yağlanmış Boruları Temizleme",
    desc: "Mutfak pimaşlarındaki yağlanma ve tıkanıklıkları kameralı cihazlarla tespit edip robotla açıyoruz.",
    h1: "Pimaş Temizliği",
    subH1: "Mutfak Gideri Açma",
    content: "Mutfak borularınızda biriken katılaşmış yağları ve yemek kalıntılarını basınçlı ve robotik makinelerle yok ediyoruz.",
    image: "/images/tesisat5.png",
    serviceType: "clog"
  },
  "cihazla-su-sizintisi-bulma": {
    title: "Cihazla Su Sızıntısı Bulma | Kırmadan Kesin Tespit",
    desc: "Evinizdeki su sızıntılarını modern akustik cihazlar ve termal kameralarla kırmadan buluyoruz.",
    h1: "Modern Teknoloji ile",
    subH1: "Cihazla Sızıntı Bulma",
    content: "Su faturanız yüksek mi geliyor? Alt kata su mu damlıyor? Elektronik cihazlarımızla sızıntıyı anında tespit ediyoruz.",
    image: "/images/tesisat16.webp",
    serviceType: "leak"
  },
  "petek-havasi-alma": {
    title: "Petek Havası Alma | Isınmayan Peteklere Çözüm",
    desc: "Yarısı ısınıp yarısı soğuk kalan peteklerinizin havasını alıyor ve sistem bakımını yapıyoruz.",
    h1: "Eşit ve Güçlü Isınma İçin",
    subH1: "Petek Havası Alma",
    content: "Hava yapan kalorifer tesisatınızın basınç dengesini sağlıyor ve kış aylarında tam verimle ısınmanızı garantiliyoruz.",
    image: "/images/tesisat12.jpg",
    serviceType: "heat"
  },
  "robotla-kanal-acma": {
    title: "Robotla Kanal Açma | Bina İçi ve Dışı Kanalizasyon",
    desc: "Tıkanan ana hat ve kanalizasyon borularını dev robot makinelerimizle kökten açıyoruz.",
    h1: "Ana Hat Tıkanıklıkları İçin",
    subH1: "Robotla Kanal Açma",
    content: "Bina ana giderlerindeki kök salması, toprak çökmesi veya katı atık tıkanıklıklarını kameralı robotlarımızla tamamen temizliyoruz.",
    image: "/images/tesisat2.png",
    serviceType: "clog"
  },
  "balkon-gideri-acma": {
    title: "Balkon Gideri Açma | Yağmur Suyu ve Teras Giderleri",
    desc: "Tıkanan balkon, teras ve yağmur suyu giderlerinizi etrafı kirletmeden açıyoruz.",
    h1: "Teras ve Balkon İçin",
    subH1: "Gider Tıkanıklığı Açma",
    content: "Toz, toprak ve yapraklarla tıkanan teras ve balkon süzgeçlerinizi yüksek devirli makinelerle açarak su taşkınlarını önlüyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "clog"
  },
  "kombi-su-basinc-dusmesi": {
    title: "Kombi Su Basınç Düşmesi | Kılcal Kaçak Tespiti",
    desc: "Kombiniz sürekli basınç hatası mı veriyor? Kılcal kalorifer kaçaklarını cihazla bulup kimyasal kapatıcıyla onarıyoruz.",
    h1: "Basınç Hatalarına Son",
    subH1: "Kombi Kaçak Tespiti",
    content: "Kombi basıncının sürekli sıfırlanmasına neden olan gizli tesisat kaçaklarını termal kameralarla noktasal buluyoruz.",
    image: "/images/tesisat18.webp",
    serviceType: "leak"
  },
  "duvardaki-su-kacagini-bulma": {
    title: "Duvardaki Su Kaçağını Bulma | Rutubet ve Nem Çözümü",
    desc: "Duvarlarınızda kabarma veya sararma mı var? Duvardaki su kaçağını kırmadan dökmeden cihazla buluyoruz.",
    h1: "Kabaran Duvarlara Kesin Çözüm",
    subH1: "Duvardaki Kaçağı Bulma",
    content: "Duvar arkasındaki patlamış boruları akustik dinleme cihazlarıyla buluyor ve minimum hasarla onarıyoruz.",
    image: "/images/tesisat6.jpg",
    serviceType: "leak"
  },
  "alt-kata-su-sizintisi": {
    title: "Alt Kata Su Sızıntısı Çözümü | Komşunuzla Papaz Olmayın",
    desc: "Tavanınızdan veya banyonuzdan alt kata akan suyu termal cihazla tespit edip anında onarıyoruz.",
    h1: "Hızlı ve Kesin Çözüm",
    subH1: "Alt Kata Akan Su Sızıntısı",
    content: "Alt kat komşunuzun tavanına sızan suyun kaynağını sizin fayanslarınızı kırmadan teknolojik cihazlarla tespit ediyoruz.",
    image: "/images/tesisat14.jpg",
    serviceType: "leak"
  },
  "banyo-tavandan-su-akiyor": {
    title: "Banyo Tavandan Su Akıyor | Üst Kattan Gelen Kaçak",
    desc: "Banyo tavanınızdan damlayan suyun yerini kameralı sistemlerle buluyoruz.",
    h1: "Tavandan Gelen Sızıntıya",
    subH1: "Noktasal Müdahale",
    content: "Üst katın tesisatından sizin tavanınıza akan suyu, ustalarımızın tecrübesi ve modern cihazlarımızla hızla tespit ediyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "robotla-lavabo-tikanikligi-acma": {
    title: "Robotla Lavabo Tıkanıklığı Açma | Kalıcı ve Hijyenik",
    desc: "Lavabo giderlerindeki tıkanıklıkları çelik helezonlu robot sistemlerle söküp atıyoruz.",
    h1: "Çelik Helezon Sistemle",
    subH1: "Robotla Lavabo Açma",
    content: "Sürekli tıkanan lavabolarınızı unutun. Boru çeperlerine yapışan tüm pislikleri robot makinelerle kazıyarak temizliyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "yagmursuyu-gideri-acma": {
    title: "Yağmursuyu Gideri Açma | Çatı ve Oluk Tıkanıklığı",
    desc: "Şiddetli yağışlarda tıkanan çatı ve yağmursuyu giderlerini robotla temizliyoruz.",
    h1: "Su Baskınlarını Önleyin",
    subH1: "Yağmursuyu Gideri Açma",
    content: "Binaların dış cephelerindeki pimaşlarda oluşan yaprak ve çamur tıkanıklıklarını basınçlı yıkama ve robotla açıyoruz.",
    image: "/images/tesisat8.jpg",
    serviceType: "clog"
  },
  "kalorifer-tesisati-tamiri": {
    title: "Kalorifer Tesisatı Tamiri | Petek ve Boru Onarımı",
    desc: "Isıtma sistemlerinizdeki su kaçaklarını, petek tıkanıklıklarını ve boru patlaklarını garantili tamir ediyoruz.",
    h1: "Tam Verimli Kışlar İçin",
    subH1: "Kalorifer Tesisatı Tamiri",
    content: "Kışın ortasında petekleriniz soğumasın. Tüm kalorifer tesisat arızalarına 30 dakika içinde acil müdahale ediyoruz.",
    image: "/images/tesisat18.webp",
    serviceType: "heat"
  },
  "musluk-tamiri-ve-degisimi": {
    title: "Musluk Tamiri ve Değişimi | Batarya Montajı",
    desc: "Bozulan, su damlatan veya eskiyen tüm musluk ve bataryalarınızı değiştiriyoruz.",
    h1: "Su Damlamasına Son",
    subH1: "Musluk Tamiri ve Değişimi",
    content: "Mutfak ve banyo bataryalarınızın montajını, conta değişimlerini ve tamir işlemlerini profesyonelce gerçekleştiriyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "leak"
  },
  "gomme-rezervuar-tamiri": {
    title: "Gömme Rezervuar Tamiri | Kırmadan Şamandıra Değişimi",
    desc: "Geberit, Vitra, Serel gibi tüm marka gömme rezervuar arızalarını fayans kırmadan onarıyoruz.",
    h1: "Duvarı Kırmadan",
    subH1: "Gömme Rezervuar Tamiri",
    content: "Sürekli su kaçıran gömme rezervuarlarınızın iç takım, şamandıra ve boşaltma grubu arızalarını orijinal parçalarla kırmadan yapıyoruz.",
    image: "/images/tesisat5.png",
    serviceType: "leak"
  },
  "sifon-tamiri": {
    title: "Sifon Tamiri | Tuvalet İç Takım Değişimi",
    desc: "Bozuk klozet sifonlarınızı ve iç takımlarını anında değiştirerek su israfını önlüyoruz.",
    h1: "Su Faturanız Düşsün",
    subH1: "Hızlı Sifon Tamiri",
    content: "Klozetlerinizdeki sürekli su sızdıran sifon ve iç takım sorunlarını kaliteli yedek parçalarla kalıcı olarak çözüyoruz.",
    image: "/images/tesisat12.jpg",
    serviceType: "leak"
  },
  "dusakabin-su-kacagi": {
    title: "Duşakabin Su Kaçağı Tespiti | İzolasyon ve Tamir",
    desc: "Duşakabinden sızan suyun tesisattan mı yoksa silikondan mı geldiğini tespit edip onarıyoruz.",
    h1: "Banyonuz Islanmasın",
    subH1: "Duşakabin Su Kaçağı Tamiri",
    content: "Banyodan odalara sızan suyun kaynağını termal kameralarla buluyor, gerekirse küvet giderini kırmadan onarıyoruz.",
    image: "/images/tesisat4.png",
    serviceType: "leak"
  },
  "jakuzi-su-kacagi-tamiri": {
    title: "Jakuzi Su Kaçağı Tamiri | Motor ve Gider Tesisatı",
    desc: "Jakuzi altından sızan su kaçaklarını ve motor sistemi arızalarını profesyonel ekibimizle tamir ediyoruz.",
    h1: "Lüks Banyolar İçin",
    subH1: "Jakuzi Su Kaçağı Tamiri",
    content: "Jakuzilerdeki karmaşık borulama sistemlerinde oluşan kaçak ve tıkanıklıkları uzman kadromuzla tespit edip onarıyoruz.",
    image: "/images/tesisat16.webp",
    serviceType: "leak"
  },
  "akustik-su-kacagi-tespiti": {
    title: "Akustik Su Kaçağı Tespiti | Dinleme Cihazı ile Noktasal",
    desc: "Temiz su borularındaki patlakları akustik ses dinleme cihazlarıyla %100 noktasal buluyoruz.",
    h1: "Ses Dinleme Teknolojisi",
    subH1: "Akustik Su Kaçağı Tespiti",
    content: "Zemin veya duvar altından sızan tazyikli suları, hassas akustik mikrofonlarımızla milimetrik hata payıyla buluyoruz.",
    image: "/images/tesisat6.jpg",
    serviceType: "leak"
  },
  "termal-kamera-ile-su-kacagi-bulma": {
    title: "Termal Kamera ile Su Kaçağı Bulma | Isı Kaybı Tespit",
    desc: "Sıcak su ve kalorifer borularındaki gizli kaçakları termal kameralarla anında ekranda görüyoruz.",
    h1: "Sızıntıyı Gözle Görün",
    subH1: "Termal Kamera İle Tespit",
    content: "Isı haritası çıkaran ileri teknoloji termal kameralarımız sayesinde su kaçakları artık tesisatınızda saklanamıyor.",
    image: "/images/tesisat16.webp",
    serviceType: "leak"
  },
  "noktasal-su-kacagi-tespiti": {
    title: "Noktasal Su Kaçağı Tespiti | Sadece Sorunlu Yeri Açıyoruz",
    desc: "Evinizi şantiyeye çevirmeden, sadece arızalı noktayı bulup tek fayansla onarım yapıyoruz.",
    h1: "Minimum Hasar Maksimum Sonuç",
    subH1: "Noktasal Su Kaçağı Tespiti",
    content: "Eskiden olduğu gibi deneme yanılma yoluyla duvar kırmaya son! Cihazla sorunu noktasal bulup sadece oraya müdahale ediyoruz.",
    image: "/images/tesisat1.avif",
    serviceType: "leak"
  },
  "kanalizasyon-acma": {
    title: "Kanalizasyon Açma | Vidanjör ve Robot Cihazlar",
    desc: "Bina logar ve sokak kanalizasyon hatlarındaki büyük çaplı tıkanıklıkları yüksek devirli robotlarla açıyoruz.",
    h1: "Büyük Çaplı Hatlar İçin",
    subH1: "Kanalizasyon Açma",
    content: "Sokak veya site içi kanalizasyon sistemlerindeki tıkanmaları güçlü vidanjör ve kameralı robotik araçlarımızla çözüyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "rogar-temizleme": {
    title: "Rögar Temizleme | Periyodik Logar Bakımı",
    desc: "Kötü kokuya ve tıkanıklığa sebep olan dolmuş rögarları basınçlı suyla temizliyor ve dezenfekte ediyoruz.",
    h1: "Kötü Kokulara Son",
    subH1: "Rögar Temizleme",
    content: "Zamanla tortu ve katı atıklarla dolan rögarlarınızı, modern temizlik araçlarımızla çekerek hijyenik hale getiriyoruz.",
    image: "/images/tesisat22.jpg",
    serviceType: "clog"
  },
  "su-sayaci-su-kacagi": {
    title: "Su Sayacı Su Kaçağı | Yüksek Fatura Çözümü",
    desc: "Vana veya su sayacı diplerinden sızan suları kırmadan cihazla tespit edip tesisatınızı yeniliyoruz.",
    h1: "Faturanız Şişmesin",
    subH1: "Su Sayacı Kaçak Tespiti",
    content: "Tüm musluklar kapalıyken sayacınız dönmeye devam ediyorsa gizli bir kaçak var demektir. Hemen cihazla bulalım.",
    image: "/images/tesisat8.jpg",
    serviceType: "leak"
  },
  "bina-ana-su-borusu-tamiri": {
    title: "Bina Ana Su Borusu Tamiri | Kolon Hattı Yenileme",
    desc: "Binaların ortak ana su hatlarında meydana gelen devasa patlakları kırmadan cihazla bulup tamir ediyoruz.",
    h1: "Ortak Hat Arızaları İçin",
    subH1: "Ana Su Borusu Tamiri",
    content: "Sitelerin veya binaların ana kolon su hatlarında meydana gelen basınçlı su patlaklarına profesyonel ve kalıcı onarım sağlıyoruz.",
    image: "/images/tesisat14.jpg",
    serviceType: "leak"
  },
  "yerden-isitma-temizligi": {
    title: "Yerden Isıtma Temizliği | Mobil Sistem Bakımı",
    desc: "Yerden ısıtma sistemlerinizin borularındaki çamurlaşmayı makineli ve ilaçlı sistemlerle kökten temizliyoruz.",
    h1: "Eşit Zemin Isınması İçin",
    subH1: "Yerden Isıtma Temizliği",
    content: "Isınmayan odalarınıza son! Yerden ısıtma kolektörlerine bağladığımız yıkama makinesiyle boruların içini ilk günkü gibi açıyoruz.",
    image: "/images/tesisat18.webp",
    serviceType: "heat"
  },
  "taharet-muslugu-tamiri": {
    title: "Taharet Musluğu Tamiri | Klozet Ara Kesme Vana",
    desc: "Sürekli su sızdıran, yalama olmuş veya kırılmış taharet musluklarınızı 30 dakikada değiştiriyoruz.",
    h1: "Anında Hızlı Müdahale",
    subH1: "Taharet Musluğu Tamiri",
    content: "Paslanmış veya dönmeyen klozet taharet musluklarınızı ve ara kesme vanalarınızı en kaliteli malzemelerle yeniliyoruz.",
    image: "/images/tesisat7.jpg",
    serviceType: "leak"
  },
  "kat-kaloriferi-temizligi": {
    title: "Kat Kaloriferi Temizliği | Garantili Yakıt Tasarrufu",
    desc: "Kat kaloriferi sistemlerinizin tıkanmış filtre ve peteklerini çift yönlü teknolojik makinelerle temizliyoruz.",
    h1: "%30 Yakıt Tasarrufu",
    subH1: "Kat Kaloriferi Temizliği",
    content: "Müstakil evinizdeki veya villanızdaki kat kaloriferi sisteminin performansını artırıyor, doğalgaz faturalarınızı düşürüyoruz.",
    image: "/images/tesisat12.jpg",
    serviceType: "heat"
  },
  "kirmadan-pimas-acma": {
    title: "Kırmadan Pimaş Açma | Akarsu Tesisat Garantili Servis",
    desc: "Kırmadan Pimaş Açma alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Kırmadan Pimaş Açma",
    subH1: "Profesyonel Çözüm",
    content: "Kırmadan Pimaş Açma işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "boru-tikanikligi-acma": {
    title: "Boru Tıkanıklığı Açma | Akarsu Tesisat Garantili Servis",
    desc: "Boru Tıkanıklığı Açma alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Boru Tıkanıklığı Açma",
    subH1: "Profesyonel Çözüm",
    content: "Boru Tıkanıklığı Açma işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "klozet-ic-takim-degisimi": {
    title: "Klozet İç Takım Değişimi | Akarsu Tesisat Garantili Servis",
    desc: "Klozet İç Takım Değişimi alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Klozet İç Takım Değişimi",
    subH1: "Profesyonel Çözüm",
    content: "Klozet İç Takım Değişimi işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "gomme-rezervuar-su-kacagi": {
    title: "Gömme Rezervuar Su Kaçağı | Akarsu Tesisat Garantili Servis",
    desc: "Gömme Rezervuar Su Kaçağı alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Gömme Rezervuar Su Kaçağı",
    subH1: "Profesyonel Çözüm",
    content: "Gömme Rezervuar Su Kaçağı işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "su-tesisati-yenileme": {
    title: "Su Tesisatı Yenileme | Akarsu Tesisat Garantili Servis",
    desc: "Su Tesisatı Yenileme alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Su Tesisatı Yenileme",
    subH1: "Profesyonel Çözüm",
    content: "Su Tesisatı Yenileme işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "banyo-tesisat-kurulumu": {
    title: "Banyo Tesisat Kurulumu | Akarsu Tesisat Garantili Servis",
    desc: "Banyo Tesisat Kurulumu alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Banyo Tesisat Kurulumu",
    subH1: "Profesyonel Çözüm",
    content: "Banyo Tesisat Kurulumu işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "mutfak-tesisat-kurulumu": {
    title: "Mutfak Tesisat Kurulumu | Akarsu Tesisat Garantili Servis",
    desc: "Mutfak Tesisat Kurulumu alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Mutfak Tesisat Kurulumu",
    subH1: "Profesyonel Çözüm",
    content: "Mutfak Tesisat Kurulumu işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "kalorifer-petek-temizleme": {
    title: "Kalorifer Petek Temizleme | Akarsu Tesisat Garantili Servis",
    desc: "Kalorifer Petek Temizleme alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Kalorifer Petek Temizleme",
    subH1: "Profesyonel Çözüm",
    content: "Kalorifer Petek Temizleme işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "robotla-tuvalet-acma": {
    title: "Robotla Tuvalet Açma | Akarsu Tesisat Garantili Servis",
    desc: "Robotla Tuvalet Açma alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Robotla Tuvalet Açma",
    subH1: "Profesyonel Çözüm",
    content: "Robotla Tuvalet Açma işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "robotla-mutfak-gideri-acma": {
    title: "Robotla Mutfak Gideri | Akarsu Tesisat Garantili Servis",
    desc: "Robotla Mutfak Gideri alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Robotla Mutfak Gideri",
    subH1: "Profesyonel Çözüm",
    content: "Robotla Mutfak Gideri işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "kamerali-su-kacagi-tespiti": {
    title: "Kameralı Su Kaçağı Tespiti | Akarsu Tesisat Garantili Servis",
    desc: "Kameralı Su Kaçağı Tespiti alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Kameralı Su Kaçağı Tespiti",
    subH1: "Profesyonel Çözüm",
    content: "Kameralı Su Kaçağı Tespiti işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "kirmadan-cihazla-su-kacagi-tespiti": {
    title: "Kırmadan Cihazla Tespit | Akarsu Tesisat Garantili Servis",
    desc: "Kırmadan Cihazla Tespit alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Kırmadan Cihazla Tespit",
    subH1: "Profesyonel Çözüm",
    content: "Kırmadan Cihazla Tespit işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "acil-su-tesisatcisi": {
    title: "Acil Su Tesisatçısı | Akarsu Tesisat Garantili Servis",
    desc: "Acil Su Tesisatçısı alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Acil Su Tesisatçısı",
    subH1: "Profesyonel Çözüm",
    content: "Acil Su Tesisatçısı işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "nobetci-su-tesisatcisi": {
    title: "Nöbetçi Tesisatçı | Akarsu Tesisat Garantili Servis",
    desc: "Nöbetçi Tesisatçı alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Nöbetçi Tesisatçı",
    subH1: "Profesyonel Çözüm",
    content: "Nöbetçi Tesisatçı işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "en-yakin-su-tesisatcisi": {
    title: "En Yakın Tesisatçı | Akarsu Tesisat Garantili Servis",
    desc: "En Yakın Tesisatçı alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "En Yakın Tesisatçı",
    subH1: "Profesyonel Çözüm",
    content: "En Yakın Tesisatçı işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "7-24-tikaniklik-acma": {
    title: "7/24 Tıkanıklık Açma | Akarsu Tesisat Garantili Servis",
    desc: "7/24 Tıkanıklık Açma alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "7/24 Tıkanıklık Açma",
    subH1: "Profesyonel Çözüm",
    content: "7/24 Tıkanıklık Açma işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "logar-temizleme-ve-acma": {
    title: "Logar Temizleme | Akarsu Tesisat Garantili Servis",
    desc: "Logar Temizleme alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Logar Temizleme",
    subH1: "Profesyonel Çözüm",
    content: "Logar Temizleme işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "kombi-su-akitiyor-tamiri": {
    title: "Kombi Su Akıtıyor Tamiri | Akarsu Tesisat Garantili Servis",
    desc: "Kombi Su Akıtıyor Tamiri alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Kombi Su Akıtıyor Tamiri",
    subH1: "Profesyonel Çözüm",
    content: "Kombi Su Akıtıyor Tamiri işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "petekler-isinmiyor-cozumu": {
    title: "Petekler Isınmıyor Çözümü | Akarsu Tesisat Garantili Servis",
    desc: "Petekler Isınmıyor Çözümü alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Petekler Isınmıyor Çözümü",
    subH1: "Profesyonel Çözüm",
    content: "Petekler Isınmıyor Çözümü işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "dogalgaz-tesisat-tamiri": {
    title: "Doğalgaz Tesisat Tamiri | Akarsu Tesisat Garantili Servis",
    desc: "Doğalgaz Tesisat Tamiri alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Doğalgaz Tesisat Tamiri",
    subH1: "Profesyonel Çözüm",
    content: "Doğalgaz Tesisat Tamiri işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "su-saati-vana-degisimi": {
    title: "Su Saati Vana Değişimi | Akarsu Tesisat Garantili Servis",
    desc: "Su Saati Vana Değişimi alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Su Saati Vana Değişimi",
    subH1: "Profesyonel Çözüm",
    content: "Su Saati Vana Değişimi işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "banyo-bataryasi-degisimi": {
    title: "Banyo Bataryası Değişimi | Akarsu Tesisat Garantili Servis",
    desc: "Banyo Bataryası Değişimi alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Banyo Bataryası Değişimi",
    subH1: "Profesyonel Çözüm",
    content: "Banyo Bataryası Değişimi işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "mutfak-bataryasi-degisimi": {
    title: "Mutfak Bataryası Değişimi | Akarsu Tesisat Garantili Servis",
    desc: "Mutfak Bataryası Değişimi alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Mutfak Bataryası Değişimi",
    subH1: "Profesyonel Çözüm",
    content: "Mutfak Bataryası Değişimi işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "camasir-makinesi-tesisati-baglantisi": {
    title: "Çamaşır Makinesi Bağlantısı | Akarsu Tesisat Garantili Servis",
    desc: "Çamaşır Makinesi Bağlantısı alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Çamaşır Makinesi Bağlantısı",
    subH1: "Profesyonel Çözüm",
    content: "Çamaşır Makinesi Bağlantısı işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "bulasik-makinesi-tesisati-baglantisi": {
    title: "Bulaşık Makinesi Bağlantısı | Akarsu Tesisat Garantili Servis",
    desc: "Bulaşık Makinesi Bağlantısı alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Bulaşık Makinesi Bağlantısı",
    subH1: "Profesyonel Çözüm",
    content: "Bulaşık Makinesi Bağlantısı işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "pimas-yikama-hizmeti": {
    title: "Pimaş Yıkama | Akarsu Tesisat Garantili Servis",
    desc: "Pimaş Yıkama alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Pimaş Yıkama",
    subH1: "Profesyonel Çözüm",
    content: "Pimaş Yıkama işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "gider-borusu-acma": {
    title: "Gider Borusu Açma | Akarsu Tesisat Garantili Servis",
    desc: "Gider Borusu Açma alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Gider Borusu Açma",
    subH1: "Profesyonel Çözüm",
    content: "Gider Borusu Açma işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "lavabo-sifonu-degisimi": {
    title: "Lavabo Sifonu Değişimi | Akarsu Tesisat Garantili Servis",
    desc: "Lavabo Sifonu Değişimi alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Lavabo Sifonu Değişimi",
    subH1: "Profesyonel Çözüm",
    content: "Lavabo Sifonu Değişimi işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "kirmadan-su-kacagi-tamiri": {
    title: "Kırmadan Su Kaçağı Tamiri | Akarsu Tesisat Garantili Servis",
    desc: "Kırmadan Su Kaçağı Tamiri alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Kırmadan Su Kaçağı Tamiri",
    subH1: "Profesyonel Çözüm",
    content: "Kırmadan Su Kaçağı Tamiri işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "pis-su-gideri-acma": {
    title: "Pis Su Gideri Açma | Akarsu Tesisat Garantili Servis",
    desc: "Pis Su Gideri Açma alanında uzman ekibimizle 7/24 profesyonel, kırmadan dökmeden garantili hizmet. Hemen arayın, 30 dakikada kapınızda olalım.",
    h1: "Pis Su Gideri Açma",
    subH1: "Profesyonel Çözüm",
    content: "Pis Su Gideri Açma işlemlerinizde son teknoloji cihazlarımız ve sertifikalı ustalarımızla kalıcı çözümler üretiyoruz. Sorununuzu en kısa sürede, en az maliyetle garantili bir şekilde çözmekteyiz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "istanbul-avrupa-yakasi-su-tesisatcisi": {
    title: "İstanbul Avrupa Yakası Su Tesisatçısı | 1 Yıl Garantili Hizmet",
    desc: "Avrupa yakasındaki tüm ilçelere 30 dakikada ulaşan acil su tesisatçısı. Kırmadan dökmeden robot makinelerle garantili servis hizmeti sunuyoruz.",
    h1: "İstanbul Avrupa Yakası Su Tesisatçısı",
    subH1: "Garantili Uzman Servis",
    content: "Avrupa yakasında ikamet ediyorsanız tesisat sorunlarınız için günlerce beklemenize gerek yok. Şişli'den Beylikdüzü'ne kadar geniş servis ağımızla, su sızıntılarını ve boru arızalarını termal dinleme sistemlerimizle anında tespit edip çözüyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-anadolu-yakasi-su-tesisatcisi": {
    title: "İstanbul Anadolu Yakası Su Tesisatçısı | 1 Yıl Garantili Hizmet",
    desc: "Anadolu Yakası uzman tesisat ekibi. Kadıköy, Üsküdar ve tüm bölgelere 7/24 kesintisiz cihazlı su kaçağı bulma ve tamir hizmeti.",
    h1: "İstanbul Anadolu Yakası Su Tesisatçısı",
    subH1: "Garantili Uzman Servis",
    content: "Anadolu yakasının zorlu yapılaşmasına uygun yüksek teknoloji akustik dinleme cihazlarımızla hizmet veriyoruz. Duvardan su sızıyor veya alt kata su damlıyorsa, profesyonel ekibimiz fayanslarınızı kırmadan kalıcı onarım sağlar.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "cihazli-su-tesisatcisi-istanbul": {
    title: "Cihazlı Su Tesisatçısı İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Geleneksel yöntemleri unutun! İstanbul cihazlı su tesisatçısı olarak arızaları kırma yapmadan elektronik ortamda noktasal buluyoruz.",
    h1: "Cihazlı Su Tesisatçısı İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Tesisat onarımlarında en büyük maliyet gereksiz kırılan fayanslardır. Kameralı ve akustik cihazlarımızla kaçağın veya tıkanıklığın tam yerini tespit ediyor, sadece o noktaya müdahale ederek evinizi inşaat alanına çevirmiyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-robotlu-tesisat-firmasi": {
    title: "İstanbul Robotlu Tesisat Firması | 1 Yıl Garantili Hizmet",
    desc: "Özel çelik yaylı robotik cihazlarla pimaş ve logar tıkanıklıklarını kırmadan açıyoruz. İstanbul geneli garantili robotlu tesisat çözümleri.",
    h1: "İstanbul Robotlu Tesisat Firması",
    subH1: "Garantili Uzman Servis",
    content: "Robot makineler, tıkalı boruların içindeki sertleşmiş yabancı cisimleri bile parçalayarak dışarı atar. Tesisatınıza zarar vermeyen bu yöntemle, tıkanıklık sorunlarını saatler değil dakikalar içinde ortadan kaldırıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "gece-acik-su-tesisatcisi-istanbul": {
    title: "Gece Açık Su Tesisatçısı İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Gece yarısı patlayan su boruları için nöbetçi acil tesisatçı. İstanbul'un neresinde olursanız olun 7/24 gece vardiya ekibimiz hizmetinizde.",
    h1: "Gece Açık Su Tesisatçısı İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Su baskınları ve acil sızıntılar mesai saati beklemez. Bu yüzden oluşturduğumuz gece vardiyası acil müdahale timimiz, aramanızdan çok kısa bir süre sonra adresinize ulaşarak vanaları güvenceye alır ve hasarı durdurur.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-kirmadan-tesisat-tamiri": {
    title: "İstanbul Kırmadan Tesisat Tamiri | 1 Yıl Garantili Hizmet",
    desc: "Fayans ve parkelere zarar vermeden, %100 noktasal su kaçağı tamiratı. İstanbul içi ücretsiz keşif ve 1 yıl işçilik garantili hizmet.",
    h1: "İstanbul Kırmadan Tesisat Tamiri",
    subH1: "Garantili Uzman Servis",
    content: "Kırmadan onarım teknolojisi, sadece tespitte değil tamir aşamasında da fark yaratır. Bazı mikro sızıntıları kimyasal kapatıcılarla, bazılarını ise tek fayanslık nokta atışı tamirlerle hallederek size ekstra tadilat masrafı çıkarmıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "garantili-su-kacagi-tespiti-istanbul": {
    title: "Garantili Su Kaçağı Tespiti İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Bulamadığımız kaçaklardan ücret almıyoruz! İstanbul garantili su kaçağı tespiti ile kesin çözüm ve resmi faturalı hizmet alın.",
    h1: "Garantili Su Kaçağı Tespiti İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Tesisat sektöründe güven çok önemlidir. Firmamız yaptığı her kaçak tespitini faturalandırır ve onarımlara resmi 1 yıl işçilik garantisi verir. Sorun tekrarladığında aynı gün içinde ücretsiz teknik servis imkanı sağlıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-tesisat-ariza-servisi": {
    title: "İstanbul Tesisat Arıza Servisi | 1 Yıl Garantili Hizmet",
    desc: "Musluk arızalarından ana şebeke borusu patlaklarına kadar her türlü tesisat arızasına İstanbul genelinde aynı gün hızlı servis.",
    h1: "İstanbul Tesisat Arıza Servisi",
    subH1: "Garantili Uzman Servis",
    content: "Ev veya iş yerlerindeki tüm temiz su ve pis su tesisat arızalarını profesyonel kadromuzla gideriyoruz. Malzeme kalitesinden ödün vermeden, uzun ömürlü ve TSE belgeli ürünler kullanarak tesisatınızın ömrünü uzatıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "kamerali-tesisatci-istanbul": {
    title: "Kameralı Tesisatçı İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Boruların içini endoskopik kameralarla izleyerek sorunun ana kaynağını buluyoruz. Kameralı tesisatçı ile sürpriz maliyetlere son.",
    h1: "Kameralı Tesisatçı İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Sürekli tekrarlayan tıkanıklıkların sebebi boru içindeki çökmeler veya eğim hataları olabilir. Kameralı görüntüleme sistemlerimizle borunun iç yapısını ekrana yansıtıyor, sorunu size göstererek en doğru onarım planını çiziyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "akustik-dinleme-ile-su-kacagi-bulma-istanbul": {
    title: "Akustik Dinleme ile Kaçak Bulma | 1 Yıl Garantili Hizmet",
    desc: "Beton altındaki su seslerini milyonlarca kat büyüterek noktasal tespit yapan akustik cihazlı tesisat ekibi. Şaşmaz sonuç garantisi.",
    h1: "Akustik Dinleme ile Kaçak Bulma",
    subH1: "Garantili Uzman Servis",
    content: "Özellikle temiz su şebeke hatlarındaki basınçlı su kaçakları gözle görülemez. Hassas Alman teknolojisi akustik dinleme mikrofonlarımızla zemin altındaki suyun sızıntı sesini dinliyor ve kaçağın tam kalbini santimi santimine işaretliyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "termal-kamerali-tesisatci-istanbul": {
    title: "Termal Kameralı Tesisatçı İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Sıcak su hatları ve kalorifer kaçakları için FLIR termal kamera sistemleri ile kırmadan tespit yapıyoruz. Kesin tanı, sıfır hata.",
    h1: "Termal Kameralı Tesisatçı İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Termal kameralarımız zemin ve duvar arkasındaki ısı değişimlerini renk haritalarına dönüştürür. Özellikle kombi su eksiltme sorunlarında veya yerden ısıtma sistemlerindeki kaçaklarda termal kameralar %100 kesin çözüm sunar.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "istanbul-pimas-goruntuleme-merkezi": {
    title: "İstanbul Pimaş Görüntüleme | 1 Yıl Garantili Hizmet",
    desc: "Atık su borularınızdaki çatlak, kırık ve eğimsizlik problemlerini robotik kameralarla kayıt altına alıyor ve detaylı raporluyoruz.",
    h1: "İstanbul Pimaş Görüntüleme",
    subH1: "Garantili Uzman Servis",
    content: "Gider borularından gelen kötü kokular veya su sızıntıları ciddi bir pimaş arızasının habercisi olabilir. 30 metreye kadar uzanan fiber optik kameralarımızla pimaş borularınızı inceliyor ve bölgesel onarım yöntemleri uyguluyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "istanbul-kanalizasyon-tikanikligi-acma": {
    title: "Kanalizasyon Tıkanıklığı Açma | 1 Yıl Garantili Hizmet",
    desc: "Bina ana giderleri ve dış alan kanalizasyon tıkanmalarında yüksek motor gücüne sahip rogar açma makineleri ile kesin çözüm.",
    h1: "Kanalizasyon Tıkanıklığı Açma",
    subH1: "Garantili Uzman Servis",
    content: "Bina rögarı veya ana kanalizasyon hatlarında yaşanan taşmalar hem sağlığı tehdit eder hem de ağır kokular yayar. Özel logar açıcı robotik sistemlerimiz ve basınçlı yıkama araçlarımızla kanalizasyon hatlarını ilk günkü haline getiriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "tikali-boru-acma-istanbul": {
    title: "Tıkalı Boru Açma İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Evye, lavabo veya banyo borusu hiç fark etmez. Tıkalı tüm gider borularını sökmeden ve etrafı kirletmeden hijyenik şekilde açıyoruz.",
    h1: "Tıkalı Boru Açma İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Kimyasal açıcıların borularınızı eritmesine ve contaları yakmasına izin vermeyin. Mekanik helezon yaylı makinelerimizle tıkalı bölgeye ulaşıyor, yağı ve kireci parçalayarak tesisatınıza zarar vermeden açma işlemini tamamlıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "istanbul-makineyle-petek-temizleme": {
    title: "Makineyle Petek Temizleme | 1 Yıl Garantili Hizmet",
    desc: "Kombiniz boşuna çalışmasın. Çift yönlü basınçlı makineler ve özel solüsyonlarla peteklerinizi sökmeden banyodan temizliyoruz.",
    h1: "Makineyle Petek Temizleme",
    subH1: "Garantili Uzman Servis",
    content: "Kış aylarına girmeden yaptıracağınız makineli petek temizliği, tesisat içindeki çamurlaşmayı söküp atar. Sadece havlupan üzerinden bağladığımız makine ile eviniz kirlenmeden tüm peteklerin ısıl verimliliğini maksimuma çıkartıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "ilacli-petek-temizligi-istanbul": {
    title: "İlaçlı Petek Temizliği İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Nano teknolojik koruyucu ilaçlarla petek temizliği. %30'a varan doğalgaz tasarrufu ve kombi ömrünü uzatan özel formüllü bakım.",
    h1: "İlaçlı Petek Temizliği İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Petek temizliği sadece suyla yapılmaz. Özel sökücü ilaçlarla içerideki pası ve kireci eritiyor, işlem sonunda tesisata kattığımız koruyucu (inhibitor) ilaç sayesinde yeni pas oluşumunu yıllarca engelliyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "istanbul-kombi-tesisat-bakimi": {
    title: "İstanbul Kombi Tesisat Bakımı | 1 Yıl Garantili Hizmet",
    desc: "Kombi alt bağlantı boruları tamiri, filtre temizliği ve tesisat yıkama işlemleri. Kalorifer tesisatınızın tam kapsamlı bakımı.",
    h1: "İstanbul Kombi Tesisat Bakımı",
    subH1: "Garantili Uzman Servis",
    content: "Kombinizin arızalanmaması için tesisattaki suyun temiz olması şarttır. Kombi altı filtrelerinin temizlenmesi, paslanmış rekorların değişimi ve genel tesisat sağlığı kontrolü uzman ekiplerimizce titizlikle yapılmaktadır.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "mutfak-lavabosu-acma-istanbul": {
    title: "Mutfak Lavabosu Açma İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Yemek artıkları ve donmuş yağlar sebebiyle tıkanan mutfak lavabolarınızı robot makineyle %100 açıyor ve yıkamasını yapıyoruz.",
    h1: "Mutfak Lavabosu Açma İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Mutfak giderlerindeki daralma genellikle aşırı yağlanma kaynaklıdır. Robot cihazımız giderin taştığı noktadan girerek tüm yağ tabakasını kazır, suyun eskisi gibi girdap oluşturarak hızlıca akmasını sağlar.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "banyo-gideri-acma-istanbul": {
    title: "Banyo Gideri Açma İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Kıl, tüy ve sabun kalıntıları yüzünden tıkanan duşakabin ve yer süzgeçlerini etrafı ıslatmadan özel uçlarla garantili açıyoruz.",
    h1: "Banyo Gideri Açma İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Banyo süzgeçlerinde yaşanan yavaş su çekme veya taşma sorunları can sıkıcıdır. Çelik yaylı makinelerimiz ile banyo giderindeki yumaklaşmış atıkları çekip çıkartıyor, pis suyun geri tepmesini kesin olarak engelliyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "istanbul-klozet-tikanikligi-acma": {
    title: "Klozet Tıkanıklığı Açma | 1 Yıl Garantili Hizmet",
    desc: "Klozeti yerinden sökmeden, porselene zarar vermeden teknolojik aletlerle hızlı klozet tıkanıklığı açma servisi.",
    h1: "Klozet Tıkanıklığı Açma",
    subH1: "Garantili Uzman Servis",
    content: "Islak mendiller, kağıt havlular veya yanlışlıkla düşen cisimler tuvalet tıkanıklıklarının başlıca sebebidir. Hiçbir yeri kırmadan, sadece klozet içinden özel koruyucu kılıflı yaylar göndererek tıkanıklığı anında çözüyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "su-borusu-patlagi-tamiri-istanbul": {
    title: "Su Borusu Patlağı Tamiri | 1 Yıl Garantili Hizmet",
    desc: "Yüksek basınçtan kaynaklı demir veya plastik (PPRC) su borusu patlaklarına 30 dakikada acil müdahale ve kalıcı kaynaklı tamir.",
    h1: "Su Borusu Patlağı Tamiri",
    subH1: "Garantili Uzman Servis",
    content: "Ana şalterden su vanasını kapatıp hemen bizi arayın. Gelişmiş kaynak makinelerimiz ve orijinal PPRC ek parçalarımız ile patlayan boru hattını eski dayanıklılığına kavuşturacak şekilde tamir ediyor ve basınç testine sokuyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-tesisat-yenileme-fiyatlari": {
    title: "Tesisat Yenileme Fiyatları | 1 Yıl Garantili Hizmet",
    desc: "Eski çürümüş demir borularınızı yeni nesil sağlıklı plastik borularla değiştiriyoruz. Ücretsiz keşif ile en uygun tesisat yenileme teklifini alın.",
    h1: "Tesisat Yenileme Fiyatları",
    subH1: "Garantili Uzman Servis",
    content: "Sürekli su kaçağı yapan, paslı su akıtan eski binaların komple banyo veya mutfak tesisatlarını uzmanlıkla yeniliyoruz. Şeffaf fiyatlandırma politikamızla malzemeli veya sadece işçilik seçenekleriyle bütçenize uygun anahtar teslim projeler üretiyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "gomme-rezervuar-tamiri-istanbul": {
    title: "Gömme Rezervuar Tamiri | 1 Yıl Garantili Hizmet",
    desc: "Vitra, Serel, Geberit, Visam marka gömme rezervuarlardaki su kaçırma ve buton arızalarını orijinal yedek parçalarla onarıyoruz.",
    h1: "Gömme Rezervuar Tamiri",
    subH1: "Garantili Uzman Servis",
    content: "Duvar içindeki gömme rezervuarlarda oluşan arızalar için duvarı yıkmanıza gerek yok. Buton kapağı arkasından çalışan özel ustalarımız, şamandıra ve boşaltma grubu arızalarını orijinal parça değişimiyle garantili olarak onarır.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-sifon-degisimi-ve-tamiri": {
    title: "Sifon Değişimi ve Tamiri | 1 Yıl Garantili Hizmet",
    desc: "Altından su sızdıran mutfak ve lavabo sifonları, kırık esnek borular yenisiyle değiştirilir. Koku yapmaz ve uzun ömürlü sifon montajı.",
    h1: "Sifon Değişimi ve Tamiri",
    subH1: "Garantili Uzman Servis",
    content: "Lavabo altlarında biriken sular genellikle contası eskimiş veya yanlış monte edilmiş sifonlardan kaynaklanır. Koku önleyicili (çekvalfli) yeni nesil sifon montajları ile hem su akıntılarını hem de pis koku problemlerini bitiriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "musluk-ve-batarya-montaji-istanbul": {
    title: "Musluk ve Batarya Montajı | 1 Yıl Garantili Hizmet",
    desc: "ECA, Artema, Grohe gibi her marka mutfak, banyo ve lavabo bataryasının profesyonel montajı ve damlatan muslukların tamiri.",
    h1: "Musluk ve Batarya Montajı",
    subH1: "Garantili Uzman Servis",
    content: "Yeni aldığınız ankastre bataryaların montajını veya sürekli su damlatan contası bozulmuş eski muslukların tamirini yapıyoruz. Yanlış anahtar kullanımıyla krom yüzeylere zarar vermeden, garantili işçilikle bataryalarınızı takıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-su-saati-ariza-servisi": {
    title: "İstanbul Su Saati Arıza Servisi | 1 Yıl Garantili Hizmet",
    desc: "Su sayacı vanası su kaçırıyorsa veya saat rekorlarında sızıntı varsa, basınç düşürücü regülatör montajı ve vana değişimi yapıyoruz.",
    h1: "İstanbul Su Saati Arıza Servisi",
    subH1: "Garantili Uzman Servis",
    content: "Şebekeden gelen yüksek su basıncı, gece saatlerinde ev tesisatınızı patlatabilir. Su sayacınızın bulunduğu bölüme takacağımız su basınç düşürücü (regülatör) cihazlarla tesisatınızı ve kombi gibi beyaz eşyalarınızı koruma altına alıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "kalorifer-tesisati-kurulumu-istanbul": {
    title: "Kalorifer Tesisatı Kurulumu | 1 Yıl Garantili Hizmet",
    desc: "Sıfır binalara veya doğalgaza yeni geçecek evlere sıva altı, sıva üstü kalorifer borusu çekimi ve petek montajı işlemleri.",
    h1: "Kalorifer Tesisatı Kurulumu",
    subH1: "Garantili Uzman Servis",
    content: "Doğru tasarlanmamış bir kalorifer tesisatı kombiyi yorar ve bazı peteklerin soğuk kalmasına neden olur. Mobil sistem veya klasik sistem kalorifer tesisatlarınızı mühendislik hesaplamalarına uygun boru çaplarıyla profesyonelce çekiyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "istanbul-bina-ana-su-borusu-tamiri": {
    title: "Bina Ana Su Borusu Tamiri | 1 Yıl Garantili Hizmet",
    desc: "Apartman girişinden dairelere dağılan merkezi ana su kolonlarında oluşan patlak ve sızıntıların kazı yapılarak kırmadan tamiratı.",
    h1: "Bina Ana Su Borusu Tamiri",
    subH1: "Garantili Uzman Servis",
    content: "Bina yöneticilerinin korkulu rüyası ana boru kaçaklarında, zemin altı akustik dinleme ile patlağı toprak veya beton altında buluyoruz. Sadece arızalı bölgeyi kazarak elektrofüzyon veya maşon kaynakla kalıcı olarak kapatıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "yagmursuyu-gideri-acma-istanbul": {
    title: "Yağmursuyu Gideri Açma | 1 Yıl Garantili Hizmet",
    desc: "Çatı oluklarından inen yağmursuyu iniş pimaşlarında yaprak ve toprak kaynaklı oluşan tıkanıklıkları makine ile açıyoruz.",
    h1: "Yağmursuyu Gideri Açma",
    subH1: "Garantili Uzman Servis",
    content: "Özellikle sonbahar ve kış aylarında çatı olukları tıkanarak dış cepheden evin içine su sızdırmasına sebep olur. Yağmur suyu hatlarındaki tıkalı noktayı pimaş açma makineleri ile temizleyerek suyun sorunsuz tahliyesini sağlıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "istanbul-teras-su-yalitimi-ve-kacak": {
    title: "Teras Su Yalıtımı ve Kaçak | 1 Yıl Garantili Hizmet",
    desc: "Açık teraslardan veya balkonlardan alt kata sızan yağmur sularının kaynağını buluyor, derz dolgu ve izolasyon kimyasalları ile onarıyoruz.",
    h1: "Teras Su Yalıtımı ve Kaçak",
    subH1: "Garantili Uzman Servis",
    content: "Tesisat boruları sağlam olduğu halde tavandan su damlıyorsa sorun üst katın teras izolasyonundadır. Fayans derz aralarına uyguladığımız şeffaf poliüretan bazlı su yalıtım kimyasalları ile kırma işlemi yapmadan terasınızı su geçirmez hale getiriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "bahce-tesisati-cekimi-istanbul": {
    title: "Bahçe Tesisatı Çekimi İstanbul | 1 Yıl Garantili Hizmet",
    desc: "Bahçe sulama sistemleri, dış alan çeşme kurulumu ve yeraltı su borusu döşeme hizmetlerini kaliteli malzemelerle sunuyoruz.",
    h1: "Bahçe Tesisatı Çekimi İstanbul",
    subH1: "Garantili Uzman Servis",
    content: "Bahçeniz veya peyzaj alanlarınız için gerekli olan temiz su tesisatını dış mekan şartlarına (donma, güneş ışığı) dayanıklı PE (Polietilen) kangal borularla döşüyor, uygun noktalara bahçe muslukları konumlandırıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-dogalgaz-kacak-tespiti": {
    title: "Doğalgaz Kaçak Tespiti | 1 Yıl Garantili Hizmet",
    desc: "Doğalgaz kokusu alıyorsanız beklemeyin! Elektronik gaz detektörleri ile tesisatınızdaki sızıntıları anında bulup güvenliğe alıyoruz.",
    h1: "Doğalgaz Kaçak Tespiti",
    subH1: "Garantili Uzman Servis",
    content: "Gaz sızıntıları hayati risk taşır. İgdaş standartlarına uygun gaz ölçüm detektörlerimizle daire içi veya bina doğalgaz hatlarınızdaki mikro sızıntıları tespit ediyor, kaynaklı veya dişli tamiratını yetkili standartlarda gerçekleştiriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "yangin-tesisati-kurulumu-istanbul": {
    title: "Yangın Tesisatı Kurulumu | 1 Yıl Garantili Hizmet",
    desc: "Otopark, depo, iş yeri ve fabrikalar için çelik boru ile yangın dolabı montajı, sprinkler sistemi tesisatı çekimi ve kaçak testi.",
    h1: "Yangın Tesisatı Kurulumu",
    subH1: "Garantili Uzman Servis",
    content: "Mevzuata uygun galvaniz ve dikişsiz çelik çekme borular ile yivli/kaplin bağlantı elemanları kullanarak yangın tesisatlarınızı projelendiriyor, montaj sonrası sızdırmazlık basınç testlerini yaparak teslim ediyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-hidrofor-tamiri-ve-montaji": {
    title: "Hidrofor Tamiri ve Montajı | 1 Yıl Garantili Hizmet",
    desc: "Bina su basıncının yetersiz kaldığı durumlarda hidrofor pompa kurulumu, basınç şalteri değişimi ve genleşme tankı tamiri.",
    h1: "Hidrofor Tamiri ve Montajı",
    subH1: "Garantili Uzman Servis",
    content: "Üst katlarda suların az akması sorununa hidrofor sistemleri ile son veriyoruz. Arızalı hidrofor motorlarının rulman ve salmastra değişimlerini yapıyor, hava basma işlemlerini gerçekleştirerek sistemi en sessiz ve verimli halinde çalıştırıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "su-deposu-temizligi-istanbul": {
    title: "Su Deposu Temizliği | 1 Yıl Garantili Hizmet",
    desc: "Bina altlarındaki plastik, paslanmaz veya fayans kaplı su depolarının dezenfeksiyonu ve şamandıra arızalarının giderilmesi.",
    h1: "Su Deposu Temizliği",
    subH1: "Garantili Uzman Servis",
    content: "Zamanla su depolarının dibinde çamur, yosun ve bakteriler ürer. Sağlığınız için su depolarını profesyonel basınçlı makineler ve insan sağlığına zararsız klor bazlı solüsyonlarla detaylı olarak yıkıyor ve hijyenik hale getiriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "istanbul-su-yumusatma-cihazi-montaji": {
    title: "Su Yumuşatma Cihazı Montajı | 1 Yıl Garantili Hizmet",
    desc: "Şebeke suyunun kirecini alan, çamaşır makinesi ve kombileri koruyan bina tipi veya daire içi su yumuşatma arıtma sistemleri kurulumu.",
    h1: "Su Yumuşatma Cihazı Montajı",
    subH1: "Garantili Uzman Servis",
    content: "Aşırı kireçli sular tesisat borularınızı ve cihazlarınızı kısa sürede çürütür. Tesisat ana girişine bağladığımız özel filtreler ve reçineli su yumuşatma sistemleri sayesinde evinizdeki suyu kireçten arındırıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "kombi-su-eksiltiyor-cozumu-istanbul": {
    title: "Kombi Su Eksiltiyor Çözümü | 1 Yıl Garantili Hizmet",
    desc: "Kombi bar saati sürekli düşüyorsa gizli bir kalorifer kaçağı vardır. Kaçak tamir sıvısı (kimyasal) ile sistemi kırmadan onarıyoruz.",
    h1: "Kombi Su Eksiltiyor Çözümü",
    subH1: "Garantili Uzman Servis",
    content: "Günde veya haftada bir kombiye su basmak zorunda kalıyorsanız tesisatınızda ince bir sızıntı mevcuttur. Termal kamerayla dahi zor bulunan çok ince kaçakları, tesisat suyuna kattığımız kristalleşen özel kaçak giderici nano sıvılarla içeriden kalıcı olarak tıkıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "istanbul-logar-kapagi-bulma-ve-acma": {
    title: "Logar Kapağı Bulma ve Açma | 1 Yıl Garantili Hizmet",
    desc: "Üzeri asfaltla veya fayansla kapatılmış kayıp rögar kapaklarını detektör ve kameralı sondalarla santimi santimine tespit ediyoruz.",
    h1: "Logar Kapağı Bulma ve Açma",
    subH1: "Garantili Uzman Servis",
    content: "Bina dışında yaşanan büyük tıkanıklıklarda müdahale için logar kapağının bulunması şarttır. Üstü kapatılmış ve yeri bilinmeyen logarları sinyal gönderici vericili (sondalı) kameralarımızla noktasal olarak bulup yüzeye çıkartıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "profesyonel-su-tesisatcisi-istanbul": {
    title: "Profesyonel Su Tesisatçısı | 1 Yıl Garantili Hizmet",
    desc: "Günü kurtaran değil, hayat kurtaran tesisat çözümleri. Güler yüzlü hizmet, temiz işçilik ve uygun fiyatlarla profesyonel usta desteği.",
    h1: "Profesyonel Su Tesisatçısı",
    subH1: "Garantili Uzman Servis",
    content: "Amatör denemeler ve korsan ustalar tesisatınızı içinden çıkılmaz bir hale sokabilir. Milli Eğitim Bakanlığı onaylı ustalık belgelerine sahip profesyonel ekibimiz, kaliteli malzeme ve dürüst işçilikle yıllarca sorunsuz kullanacağınız tesisat hizmeti sunar.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "bakirkoy-robotla-tuvalet-acma": {
    title: "Bakırköy Robotla Tuvalet Açma | 1 Yıl Garantili Hizmet",
    desc: "Bakırköy ve çevresi için robot makinelerle kırmadan dökmeden garantili tuvalet ve pimaş açma servisi.",
    h1: "Bakırköy Robotla Tuvalet Açma",
    subH1: "Garantili Uzman Servis",
    content: "Bakırköy bölgesindeki eski binaların hassas pimaş hatlarına uygun, zarar vermeyen Alman malı robot cihazlarla tuvalet tıkanıklıklarını açıyoruz. Kırmadan ve evinizi kirletmeden hijyenik çözüm garantisi.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "kadikoy-kirmadan-su-kacagi-tespiti": {
    title: "Kadıköy Kırmadan Su Kaçağı Tespiti | Akarsu Tesisat Garantisi",
    desc: "Kadıköy acil kırmadan dökmeden cihazla su kaçağı tespiti.",
    h1: "Kadıköy Kırmadan Su Kaçağı Tespiti",
    subH1: "Bölgesel Uzman Servis",
    content: "Kadıköy bölgesindeki tüm mahallelerde uzman ekiplerimizle akustik cihazlı su kaçağı bulma işlemi yapıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "sisli-acil-tesisatci-servisi": {
    title: "Şişli Acil Tesisatçı Servisi | Akarsu Tesisat Garantisi",
    desc: "Şişli geneli 7/24 nöbetçi acil su tesisatçısı.",
    h1: "Şişli Acil Tesisatçı Servisi",
    subH1: "Bölgesel Uzman Servis",
    content: "Şişli'deki ev ve iş yerlerinizdeki tüm ani su patlakları ve tıkanıklıklar için 30 dakikada acil servis.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "besiktas-kamerali-su-tesisatcisi": {
    title: "Beşiktaş Kameralı Su Tesisatçısı | Akarsu Tesisat Garantisi",
    desc: "Beşiktaş'ta kameralı cihazla tıkanıklık ve su sızıntısı bulan profesyonel tesisatçı.",
    h1: "Beşiktaş Kameralı Su Tesisatçısı",
    subH1: "Bölgesel Uzman Servis",
    content: "Beşiktaş'ın eski binalarına uygun hasarsız kameralı gider görüntüleme ve tesisat çözümleri sunuyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "bakirkoy-robotla-tikaniklik-acma": {
    title: "Bakırköy Robotla Tıkanıklık Açma | Akarsu Tesisat Garantisi",
    desc: "Bakırköy kırmadan robot makineyle tıkalı gider açma.",
    h1: "Bakırköy Robotla Tıkanıklık Açma",
    subH1: "Bölgesel Uzman Servis",
    content: "Bakırköy'deki pimaş tıkanıklıklarını kimyasal kullanmadan robotik helezon yaylarla kesin olarak açıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "bahcelievler-noktasal-su-kacagi-bulma": {
    title: "Bahçelievler Noktasal Su Kaçağı Bulma | Akarsu Tesisat Garantisi",
    desc: "Bahçelievler termal kameralı su kaçağı bulma merkezi.",
    h1: "Bahçelievler Noktasal Su Kaçağı Bulma",
    subH1: "Bölgesel Uzman Servis",
    content: "Bahçelievler'de duvar ve fayans arkasındaki su sızıntılarını kırmadan termal kamerayla tespit ediyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "zeytinburnu-ilacli-petek-temizligi": {
    title: "Zeytinburnu İlaçlı Petek Temizliği | Akarsu Tesisat Garantisi",
    desc: "Zeytinburnu makineli ilaçlı petek temizleme hizmeti.",
    h1: "Zeytinburnu İlaçlı Petek Temizliği",
    subH1: "Bölgesel Uzman Servis",
    content: "Zeytinburnu'ndaki dairelerinizde peteklerinizi sökmeden banyodan bağladığımız cihazla çift yönlü yıkıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "fatih-gece-acik-su-tesisatcisi": {
    title: "Fatih Gece Açık Su Tesisatçısı | Akarsu Tesisat Garantisi",
    desc: "Fatih 7/24 kesintisiz gece tesisatçısı.",
    h1: "Fatih Gece Açık Su Tesisatçısı",
    subH1: "Bölgesel Uzman Servis",
    content: "Fatih ilçesinde gece yarısı yaşanan tesisat facialarında nöbetçi ustalarımız hızlıca müdahale etmektedir.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "sariyer-cihazli-tesisatci": {
    title: "Sarıyer Cihazlı Tesisatçı | Akarsu Tesisat Garantisi",
    desc: "Sarıyer geneli modern cihazlı tesisat arıza servisi.",
    h1: "Sarıyer Cihazlı Tesisatçı",
    subH1: "Bölgesel Uzman Servis",
    content: "Sarıyer bölgesi villalarında ve sitelerinde gelişmiş dinleme cihazları ile hasarsız tesisat tamiratı yapıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "uskudar-gomme-rezervuar-tamiri": {
    title: "Üsküdar Gömme Rezervuar Tamiri | Akarsu Tesisat Garantisi",
    desc: "Üsküdar her marka gömme rezervuar ve sifon tamircisi.",
    h1: "Üsküdar Gömme Rezervuar Tamiri",
    subH1: "Bölgesel Uzman Servis",
    content: "Üsküdar'da su sızdıran gömme rezervuarlarınızı duvarı kırmadan, panel arkasından orijinal yedek parçayla onarıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "umraniye-tikali-gider-acma": {
    title: "Ümraniye Tıkalı Gider Açma | Akarsu Tesisat Garantisi",
    desc: "Ümraniye lavabo, banyo ve tuvalet tıkanıklığı açma.",
    h1: "Ümraniye Tıkalı Gider Açma",
    subH1: "Bölgesel Uzman Servis",
    content: "Ümraniye'de tıkanan giderleri robot cihazla açıp ardından kameralı sistemle boru içini kontrol ediyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "maltepe-akustik-su-kacagi-tespiti": {
    title: "Maltepe Akustik Su Kaçağı Tespiti | Akarsu Tesisat Garantisi",
    desc: "Maltepe kırmadan akustik su sızıntı tespiti.",
    h1: "Maltepe Akustik Su Kaçağı Tespiti",
    subH1: "Bölgesel Uzman Servis",
    content: "Maltepe genelinde temiz su borularındaki zor kaçakları akustik dinleme mikrofonlarıyla santimi santimine buluyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "atasehir-dogalgaz-tesisat-tamiri": {
    title: "Ataşehir Doğalgaz Tesisat Tamiri | Akarsu Tesisat Garantisi",
    desc: "Ataşehir yetkili doğalgaz tesisat tamiratı ve kaçak bulma.",
    h1: "Ataşehir Doğalgaz Tesisat Tamiri",
    subH1: "Bölgesel Uzman Servis",
    content: "Ataşehir'de doğalgaz kaçaklarını dijital dedektörlerle bularak anında kaynaklı veya dişli onarımını yapıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "kartal-pimas-yikama-ve-acma": {
    title: "Kartal Pimaş Yıkama ve Açma | Akarsu Tesisat Garantisi",
    desc: "Kartal tıkalı pimaş açma ve basınçlı pimaş yıkama.",
    h1: "Kartal Pimaş Yıkama ve Açma",
    subH1: "Bölgesel Uzman Servis",
    content: "Kartal bölgesindeki yağlanmış pimaş hatlarını yüksek basınçlı su jetleriyle ilk günkü temizliğine kavuşturuyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "pendik-makineyle-petek-temizleme": {
    title: "Pendik Makineyle Petek Temizleme | Akarsu Tesisat Garantisi",
    desc: "Pendik %30 doğalgaz tasarruflu makineli petek bakımı.",
    h1: "Pendik Makineyle Petek Temizleme",
    subH1: "Bölgesel Uzman Servis",
    content: "Pendik'te peteklerin sadece altı değil tamamının ısınması için koruyucu ilaçlı ve makineli temizlik yapıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "sancaktepe-su-borusu-tamiri": {
    title: "Sancaktepe Su Borusu Tamiri | Akarsu Tesisat Garantisi",
    desc: "Sancaktepe patlayan plastik su borusu tamiratı.",
    h1: "Sancaktepe Su Borusu Tamiri",
    subH1: "Bölgesel Uzman Servis",
    content: "Sancaktepe'de patlayan PPRC temiz su borularınızı ve pimaş hatlarınızı en kaliteli malzemelerle garantili yeniliyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "cekmekoy-su-deposu-temizligi": {
    title: "Çekmeköy Su Deposu Temizliği | Akarsu Tesisat Garantisi",
    desc: "Çekmeköy hijyenik su deposu ve hidrofor bakımı.",
    h1: "Çekmeköy Su Deposu Temizliği",
    subH1: "Bölgesel Uzman Servis",
    content: "Çekmeköy sitelerindeki ve binalardaki su depolarını sağlığa uygun dezenfektanlarla periyodik olarak temizliyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "beykoz-bahce-tesisati-kurulumu": {
    title: "Beykoz Bahçe Tesisatı Kurulumu | Akarsu Tesisat Garantisi",
    desc: "Beykoz profesyonel bahçe ve peyzaj su tesisatı çekimi.",
    h1: "Beykoz Bahçe Tesisatı Kurulumu",
    subH1: "Bölgesel Uzman Servis",
    content: "Beykoz'daki müstakil evlerinize kışın donma yapmayacak yalıtımlı bahçe su tesisatı sistemleri kuruyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "tuzla-kanalizasyon-acma": {
    title: "Tuzla Kanalizasyon Açma | Akarsu Tesisat Garantisi",
    desc: "Tuzla fabrika ve bina ana rögar kanalizasyon açma.",
    h1: "Tuzla Kanalizasyon Açma",
    subH1: "Bölgesel Uzman Servis",
    content: "Tuzla sanayi bölgesi ve sitelerinde yaşanan büyük kanalizasyon taşmalarına güçlü robot cihazlarla anında müdahale ediyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "sultanbeyli-termal-kamerali-kacak-tespiti": {
    title: "Sultanbeyli Termal Kameralı Kaçak Tespiti | Akarsu Tesisat Garantisi",
    desc: "Sultanbeyli kalorifer kaçağı için termal kameralı tespit.",
    h1: "Sultanbeyli Termal Kameralı Kaçak Tespiti",
    subH1: "Bölgesel Uzman Servis",
    content: "Sultanbeyli'de parke ve fayansları sökmeden, ısıl farklılıkları gösteren termal kameralarla sızıntıyı buluyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "kucukcekmece-lavabo-tikanikligi-acma": {
    title: "Küçükçekmece Lavabo Tıkanıklığı Açma | Akarsu Tesisat Garantisi",
    desc: "Küçükçekmece mutfak lavabosu yağlanması ve tıkanıklığı açma.",
    h1: "Küçükçekmece Lavabo Tıkanıklığı Açma",
    subH1: "Bölgesel Uzman Servis",
    content: "Küçükçekmece'de su çekmeyen lavaboları duvarı kırmadan, helezon yaylı makinelerle saniyeler içinde açıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "avcilar-kombi-su-eksiltme-cozumu": {
    title: "Avcılar Kombi Su Eksiltme Çözümü | Akarsu Tesisat Garantisi",
    desc: "Avcılar kombi basıncı düşme sorunlarına kaçak tamir sıvılı çözüm.",
    h1: "Avcılar Kombi Su Eksiltme Çözümü",
    subH1: "Bölgesel Uzman Servis",
    content: "Avcılar'da bar saati sürekli düşen kombilerinizin tesisatındaki gizli sızıntıları kimyasal kapatıcılarla kırmadan onarıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "beylikduzu-kirmadan-tuvalet-acma": {
    title: "Beylikdüzü Kırmadan Tuvalet Açma | Akarsu Tesisat Garantisi",
    desc: "Beylikdüzü alaturka ve alafranga tıkalı tuvalet açma servisi.",
    h1: "Beylikdüzü Kırmadan Tuvalet Açma",
    subH1: "Bölgesel Uzman Servis",
    content: "Beylikdüzü'nde tuvalet tıkanıklıklarını porselene zarar vermeyen özel robot uçlarla garantili ve temiz bir şekilde açıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "esenyurt-cihazla-su-sizintisi-bulma": {
    title: "Esenyurt Cihazla Su Sızıntısı Bulma | Akarsu Tesisat Garantisi",
    desc: "Esenyurt teknolojik cihazlarla su sızıntı tamircisi.",
    h1: "Esenyurt Cihazla Su Sızıntısı Bulma",
    subH1: "Bölgesel Uzman Servis",
    content: "Esenyurt'taki evlerinizde tavandan damlayan suların kaynağını üst katta akustik cihazlarla tarayarak çözüme kavuşturuyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "buyukcekmece-teras-su-yalitimi": {
    title: "Büyükçekmece Teras Su Yalıtımı | Akarsu Tesisat Garantisi",
    desc: "Büyükçekmece fayans üstü şeffaf su yalıtımı ve kaçak onarımı.",
    h1: "Büyükçekmece Teras Su Yalıtımı",
    subH1: "Bölgesel Uzman Servis",
    content: "Büyükçekmece'deki teraslarınızdan sızan yağmur sularını, fayans kırmadan uyguladığımız izolasyon kimyasallarıyla kesiyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "basaksehir-musluk-ve-batarya-degisimi": {
    title: "Başakşehir Musluk ve Batarya Değişimi | Akarsu Tesisat Garantisi",
    desc: "Başakşehir ankastre banyo ve mutfak bataryası montajı.",
    h1: "Başakşehir Musluk ve Batarya Değişimi",
    subH1: "Bölgesel Uzman Servis",
    content: "Başakşehir'deki arızalı ECA ve Artema bataryalarınızın tamirini yapıyor, sıfır bataryaların ise orijinal montajını gerçekleştiriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "eyupsultan-banyo-gideri-acma": {
    title: "Eyüpsultan Banyo Gideri Açma | Akarsu Tesisat Garantisi",
    desc: "Eyüpsultan tıkalı duşakabin ve yer süzgeci açma.",
    h1: "Eyüpsultan Banyo Gideri Açma",
    subH1: "Bölgesel Uzman Servis",
    content: "Eyüpsultan bölgesinde saç ve kıl nedeniyle tıkanan banyo giderlerini etrafı kirletmeden robot makineyle %100 açıyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "kagithane-kalorifer-tesisati-yenileme": {
    title: "Kağıthane Kalorifer Tesisatı Yenileme | Akarsu Tesisat Garantisi",
    desc: "Kağıthane mobil ve klasik kalorifer tesisatı boru çekimi.",
    h1: "Kağıthane Kalorifer Tesisatı Yenileme",
    subH1: "Bölgesel Uzman Servis",
    content: "Kağıthane'de ısınmayan evleriniz için mühendislik hesaplamalarına uygun yepyeni ve verimli kalorifer tesisatları kuruyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "heat"
  },
  "gaziosmanpasa-klozet-ic-takim-tamiri": {
    title: "Gaziosmanpaşa Klozet İç Takım Tamiri | Akarsu Tesisat Garantisi",
    desc: "Gaziosmanpaşa sürekli su akıtan klozet tamiri.",
    h1: "Gaziosmanpaşa Klozet İç Takım Tamiri",
    subH1: "Bölgesel Uzman Servis",
    content: "Gaziosmanpaşa'daki klozetlerinizin şamandıra ve boşaltma mekanizması arızalarını su tasarruflu yeni iç takımlarla değiştiriyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  },
  "sultangazi-logar-kapagi-bulma": {
    title: "Sultangazi Logar Kapağı Bulma | Akarsu Tesisat Garantisi",
    desc: "Sultangazi kayıp logar kapaklarını cihazla tespit.",
    h1: "Sultangazi Logar Kapağı Bulma",
    subH1: "Bölgesel Uzman Servis",
    content: "Sultangazi'de asfalt veya toprak altında kalarak kaybolan logar yerlerini sinyal gönderen detektörlerle kazısız buluyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "clog"
  },
  "esenler-su-saati-vanasi-degisimi": {
    title: "Esenler Su Saati Vanası Değişimi | Akarsu Tesisat Garantisi",
    desc: "Esenler su sayacı arıza tamiri ve basınç düşürücü montajı.",
    h1: "Esenler Su Saati Vanası Değişimi",
    subH1: "Bölgesel Uzman Servis",
    content: "Esenler'deki yüksek şebeke basıncı sorunlarına karşı su saati vananızı değiştiriyor, regülatör takarak tesisatınızı koruyoruz.",
    image: "/images/tesisat3.png",
    serviceType: "leak"
  }
};

export function generateStaticParams() {
  return Object.keys(seoPages).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageData = seoPages[slug];

  if (!pageData) {
    return { title: "Bulunamadı" };
  }

  return {
    title: pageData.title,
    description: pageData.desc,
    alternates: {
      canonical: `https://www.akarsutesisat.com/${slug}`,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.desc,
      url: `https://www.akarsutesisat.com/${slug}`,
      siteName: "Akarsu Tesisat",
      images: [
        {
          url: `https://www.akarsutesisat.com${pageData.image}`,
          width: 1200,
          height: 630,
        }
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.desc,
      images: [`https://www.akarsutesisat.com${pageData.image}`],
    }
  };
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = seoPages[slug];

  if (!pageData) {
    notFound();
  }

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": `Akarsu Tesisat - ${pageData.h1} ${pageData.subH1}`,
    "image": `https://www.akarsutesisat.com${pageData.image}`,
    "description": pageData.desc,
    "url": `https://www.akarsutesisat.com/${slug}`,
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `${pageData.subH1} için fiyat ne kadar?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fiyat, sorunun büyüklüğüne ve kullanılacak malzemeye göre değişir. Ücretsiz keşif yaparak net fiyat veriyoruz. Keşif için hemen arayın: 0541 107 19 27."
        }
      },
      {
        "@type": "Question",
        "name": `${pageData.subH1} ne kadar sürer?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Çağrınızın ardından ekibimiz 30 dakika içinde kapınıza ulaşır. Müdahale süresi sorunun büyüklüğüne göre 1-3 saat arasında değişir."
        }
      },
      {
        "@type": "Question",
        "name": `Kırmadan ${pageData.subH1.toLowerCase()} mümkün mü?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Termal kamera ve akustik dinleme cihazlarımız sayesinde fayans ve duvar kırmadan, sadece sorunu bulunan tek noktaya müdahale ediyoruz."
        }
      },
      {
        "@type": "Question",
        "name": `${pageData.h1} ${pageData.subH1.toLowerCase()} için garanti veriyor musunuz?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Tüm işçilik ve malzeme 1 yıl firmamız garantisi altındadır. Sorun tekrar çıkarsa ücretsiz geliyoruz."
        }
      }
    ]
  };

  const ServiceIcon = pageData.serviceType === "leak" ? RiDropFill : 
                      pageData.serviceType === "clog" ? RiToolsFill : RiWrenchLine;

  return (
    <>
      <Script
        id={`schema-org-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Script
        id={`schema-faq-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
        
        {/* DİNAMİK SEO HERO BÖLÜMÜ (GENİŞ & KOMPAKT) */}
        <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gray-50/50">
          <div className="absolute top-0 inset-x-0 h-[700px] bg-gradient-to-b from-blue-50/80 via-blue-50/30 to-transparent -z-10" />
          
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Sol Taraf (Dinamik Metin Alanı - 5 Kolon) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-bold mb-8 shadow-sm w-max">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Sahada Müsait & Anında Müdahale
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-gray-900 tracking-tight mb-8 leading-[1.05]">
                  {pageData.h1} <br/>
                  <span className="text-blue-600">
                    {pageData.subH1}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                  {pageData.content}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="tel:+905411071927"
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-[0_8px_30px_rgb(37,99,235,0.24)] hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group text-lg"
                  >
                    <RiPhoneFill className="text-2xl group-hover:rotate-12 transition-transform" />
                    Hemen Ara
                  </a>
                  <a
                    href="https://wa.me/905411071927"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold shadow-[0_8px_30px_rgba(37,211,102,0.24)] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 group text-lg"
                  >
                    WhatsApp&apos;tan Yaz
                  </a>
                </div>
                
                {/* Güven Rozetleri */}
                <div className="flex items-center gap-8 mt-14 pt-10 border-t border-gray-200/60">
                  <div className="flex items-center gap-3">
                    <RiShieldCheckFill className="text-3xl text-blue-600" />
                    <span className="text-base font-bold text-gray-800">Uzman Ekip</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RiTimeLine className="text-3xl text-blue-600" />
                    <span className="text-base font-bold text-gray-800">7/24 Kesintisiz</span>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf (Dinamik Geniş Görsel - 7 Kolon) */}
              <div className="lg:col-span-7 relative h-[600px] lg:h-[750px] w-full mt-12 lg:mt-0 flex items-center justify-end">
                <div className="absolute right-0 top-0 w-full lg:w-[90%] h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                  <Image 
                    src={pageData.image} 
                    alt={pageData.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 60vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                    priority 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 flex items-center gap-5">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-[1.5rem] flex items-center justify-center text-white border border-white/30 shadow-lg">
                      <ServiceIcon className="text-4xl" />
                    </div>
                    <div>
                      <h3 className="text-white text-3xl font-bold">{pageData.subH1}</h3>
                      <div className="text-blue-100 text-lg font-medium mt-1">%100 Garantili Kesin Çözüm</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ORTAK İÇERİK: SAHADAN KARELER */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">
                  <RiCameraLensFill className="text-lg" /> Referanslarımız
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">Sahadaki Başarılarımız</h2>
              </div>
              <p className="text-gray-500 font-medium max-w-sm">
                En zorlu tesisat problemlerini bile son teknoloji cihazlarımızla kırmadan dökmeden çözdük.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 relative h-64 md:h-[500px] rounded-[2rem] overflow-hidden group shadow-sm">
                <Image src="/images/tesisat4.png" alt="Çalışma 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="relative h-48 md:h-auto rounded-[2rem] overflow-hidden group shadow-sm">
                <Image src="/images/tesisat5.png" alt="Çalışma 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="relative h-48 md:h-auto rounded-[2rem] overflow-hidden group shadow-sm">
                <Image src="/images/tesisat7.jpg" alt="Çalışma 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="col-span-2 md:col-span-1 relative h-48 md:h-[234px] rounded-[2rem] overflow-hidden group shadow-sm">
                <Image src="/images/tesisat14.jpg" alt="Çalışma 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className="col-span-2 md:col-span-1 relative h-48 md:h-[234px] rounded-[2rem] overflow-hidden group shadow-sm">
                <Image src="/images/tesisat8.jpg" alt="Çalışma 5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
            </div>
          </div>
        </section>

        {/* ORTAK İÇERİK: İLETİŞİM / MAPS */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="bg-gray-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
              
              <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none" />
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Hemen Ulaşın</h3>
                <p className="text-gray-400 font-medium mb-10 text-lg">Acil tesisat desteği için bizi arayabilir veya WhatsApp üzerinden hemen yazabilirsiniz.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiMapPin2Fill className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Adres</div>
                      <div className="text-white font-medium text-lg leading-relaxed">H Cd. No:39, Uğur Mumcu Mah.<br/>Sultangazi, İstanbul</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                      <RiPhoneFill className="text-2xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Telefon</div>
                      <a href="tel:+905411071927" className="text-white font-medium text-lg hover:text-blue-400 transition-colors">0541 107 19 27</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 relative min-h-[400px] lg:min-h-full">
                <iframe 
                  src="https://maps.google.com/maps?q=H+Cd.+No:39+U%C4%9Fur+Mumcu+Sultangazi+%C4%B0stanbul&hl=tr&z=16&output=embed" 
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Akarsu Tesisat Konum"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
