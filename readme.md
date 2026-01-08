💍 Dijital Düğün & QR Etkinlik Platformu: Yeni Nesil Kutlama Deneyimi

WedSocial, klasik kağıt davetiyelerin statik yapısını kıran ve düğün organizasyonlarını interaktif bir "Phygital" (Fiziksel + Dijital) deneyime dönüştüren kapsamlı bir Full Stack web uygulamasıdır.

Geleneksel yöntemlerin aksine, bu platform misafirlere "Uygulama İndirmeden" (App-less) sürtünmesiz bir katılım imkanı sunar. Masalarda bulunan özel tasarımlı mika QR kodlarını okutan davetliler, saniyeler içinde düğünün dijital ekosistemine dahil olur, anılarını paylaşır ve çiftle etkileşime geçer. Bu proje, sadece bir davetiye değil, düğün öncesi, sırası ve sonrasını kapsayan bütünleşik bir iletişim çözümüdür.

🚀 Detaylı Özellikler ve Kullanım Senaryoları

Platform, etkinliğin her aşaması için özelleştirilmiş üç ana modülden oluşur:

1. Düğün Öncesi: Akıllı Davetiye & LCV Yönetimi

Misafirlerin ilk temas noktası olan bu modül, sıradan bir web sayfasından çok daha fazlasını sunar:

Gelişmiş LCV (RSVP) Sistemi: Misafirler sadece "Geliyorum" demekle kalmaz, yetişkin/çocuk sayısını belirtebilir, özel beslenme tercihlerini (vejetaryen, alerji vb.) not düşebilir. Çiftler bu verileri panelden anlık raporlar halinde izleyebilir.

Kişiselleştirilebilir Landing Page: Her çift için özel üretilen URL (slug), çiftin hikayesini anlatan bölümler, etkinliğe kalan zamanı gösteren dinamik sayaç ve tek tıkla yol tarifi alan Google Maps entegrasyonu içerir.

Tema ve Tasarım Motoru: Çiftler, düğün konseptlerine (Bohem, Modern, Vintage vb.) uygun renk paletlerini, yazı tiplerini ve arka plan müziklerini yönetim panelinden seçerek davetiyelerini tamamen özelleştirebilirler.

2. Düğün Anı: Masaüstü QR Deneyimi

Etkinlik başladığında sistem bir "Sosyal Medya" platformuna dönüşür:

Canlı Fotoğraf Duvarı (Social Feed): Misafirlerin çektiği fotoğraflar, anlık olarak tüm kullanıcıların akışına düşer. Instagram hikaye mantığıyla çalışan bu sistem, düğünün farklı açılardan çekilmiş en doğal anlarını bir araya getirir.

Yüksek Performanslı Medya Yükleme: Misafirler, telefonlarının kamerasını kullanarak yüksek çözünürlüklü fotoğraf ve kısa videolar yükleyebilir. Sistem, yükleme sırasında görseli tarayıcıda sıkıştırarak (client-side compression) hem veri tasarrufu sağlar hem de hızı artırır.

İnteraktif Etkileşimler: Paylaşılan her fotoğraf beğeni alabilir ve yorumlanabilir. Ayrıca misafirler, çifte özel dijital "Anı Defteri"ne notlar bırakabilir.

DJ ile Doğrudan İletişim: "Şarkı İste" modülü sayesinde misafirler, istek parçalarını doğrudan DJ veya orkestra şefinin ekranına düşürebilir, böylece eğlencenin nabzı hiç düşmez.

3. Yönetim ve Moderasyon

Arka planda çalışan güçlü yönetim araçları:

Moderasyon Paneli: Yüklenen içerikler, istenmeyen sürprizleri önlemek adına önce bir moderasyon havuzuna düşer. Sağdıç veya organizasyon ekibi tarafından onaylanan içerikler yayına alınır.

Projeksiyon (Slayt) Modu: Salondaki dev ekranlara veya projeksiyon cihazlarına yansıtılmak üzere tasarlanmış, sadece onaylı ve yüksek kaliteli fotoğrafların döndüğü otomatik, animasyonlu bir slayt gösterisi modudur.

Detaylı Analitik: Düğün sonunda toplam etkileşim, en çok fotoğraf yükleyen misafirler ve LCV katılım oranları gibi veriler grafiklerle sunulur.

🛠️ Teknik Mimari ve Veritabanı Yapısı

Proje, ölçeklenebilirlik ve performans gözetilerek MERN Stack (MongoDB, Express, React, Node.js) mimarisi üzerine inşa edilmiştir.

Kullanılan Teknolojiler ve Gerekçeleri

Frontend: Next.js & React: Sunucu taraflı işleme (SSR) sayesinde davetiye sayfalarının SEO uyumlu olması ve hızlı yüklenmesi sağlanır.

UI Framework: TailwindCSS: Mobil öncelikli (mobile-first) tasarım anlayışıyla, her ekran boyutunda kusursuz görünen arayüzler için kullanılmıştır.

Real-time: Socket.io: Fotoğraf akışının ve moderasyon onaylarının sayfa yenilemeye gerek kalmadan (WebSocket) anlık olarak tüm cihazlara iletilmesini sağlar.

Cloud Storage: Cloudinary / AWS S3: Medya dosyalarının güvenli saklanması, otomatik format dönüşümü ve CDN üzerinden hızlı sunulması için entegre edilmiştir.

Veritabanı Tasarımı (MongoDB)

Veri bütünlüğünü sağlamak adına ilişkisel olmayan ancak yapılandırılmış 4 ana koleksiyon kullanılır:

Users: Platformu kullanan çiftler ve sistem yöneticileri. (Auth & Yetkilendirme)

Events: Düğün konfigürasyonları, aktif özellikler (feature flags) ve tema ayarları.

Guests: Her etkinliğe bağlı LCV kayıtları. Büyük etkinliklerde performansı korumak için Event dokümanından ayrı tutulmuştur.

TimelineItems: Polimorfik yapıya sahip koleksiyon; fotoğraf, metin mesajı veya şarkı isteği gibi farklı içerik türlerini tek çatı altında toplar.


🗺️ Geliştirme Yol Haritası (Roadmap)

Projenin canlıya alınması için planlanan geliştirme aşamaları şunlardır:

[x] Faz 1: Çekirdek Yapı: API iskeletinin kurulması, JWT tabanlı kimlik doğrulama (Auth) ve veritabanı bağlantıları.

[ ] Faz 2: Etkinlik Sihirbazı: Çiftlerin kendi düğünlerini oluşturabileceği adım adım (step-by-step) form yapısı.

[ ] Faz 3: Mobil Arayüz: QR kod ile erişilen misafir arayüzünün responsive kodlanması.

[ ] Faz 4: Medya Motoru: Fotoğraf yükleme, tarayıcı tabanlı sıkıştırma ve Cloudinary entegrasyonu.

[ ] Faz 5: Real-time Entegrasyon: Socket.io ile canlı akışın ve bildirimlerin sağlanması.

[ ] Faz 6: Final Özellikler: Moderasyon paneli, projeksiyon modu ve güvenlik testleri.

Geliştirici: Mürsel | Lisans: MIT
