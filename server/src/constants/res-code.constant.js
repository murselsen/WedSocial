export const HTTP_STATUS_CODES = {
  // Başarı Kodları
  OK: 200, // Başarılı
  CREATED: 201, // Oluşturuldu
  ACCEPTED: 202, // Kabul edildi
  NO_CONTENT: 204, // İçerik yok

  // Yönlendirme Kodları
  MOVED_PERMANENTLY: 301, // Kalıcı olarak taşındı
  FOUND: 302, // Bulundu
  NOT_MODIFIED: 304, // Değiştirilmedi

  // İstemci Hata Kodları
  BAD_REQUEST: 400, // Geçersiz istek
  UNAUTHORIZED: 401, // Yetkisiz
  FORBIDDEN: 403, // Yasak
  NOT_FOUND: 404, // Bulunamadı
  CONFLICT: 409, // Çakışma
  UNPROCESSABLE_ENTITY: 422, // İşlenemeyen Varlık
  TOO_MANY_REQUESTS: 429, // Çok Fazla İstek

  // Sunucu Hata Kodları
  INTERNAL_SERVER_ERROR: 500, // İç Sunucu Hatası
  NOT_IMPLEMENTED: 501, // Uygulanmadı
  BAD_GATEWAY: 502, // Geçersiz Ağ Geçidi
  SERVICE_UNAVAILABLE: 503, // Hizmet Kullanılamıyor
  GATEWAY_TIMEOUT: 504, // Ağ Geçidi Zaman Aşımı
};

export const API_RESPONSE = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  ERROR: "ERROR",
};

export const ERROR_MESSAGES = {
  INVALID_REQUEST: "Invalid request", // Geçersiz istek
  UNAUTHORIZED: "Unauthorized access", // Yetkisiz erişim
  FORBIDDEN: "Forbidden access", // Yasak erişim
  NOT_FOUND: "Resource not found", // Kaynak bulunamadı
  INTERNAL_ERROR: "Internal server error", // İç sunucu hatası
  VALIDATION_ERROR: "Validation error", // Doğrulama hatası
};

export const ERROR_CODES = {
  // --- GENEL SUNUCU HATALARI (SERVER) ---
  SERVER: {
    INTERNAL_ERROR: {
      status: 500,
      code: "SERVER_INTERNAL_ERROR",
    }, // Beklenmeyen sunucu hatası (500)
    DB_CONNECTION: {
      status: 500,
      code: "SERVER_DB_CONNECTION_ERROR",
    }, // Veritabanı bağlantı hatası
    TIMEOUT: {
      status: 504,
      code: "SERVER_TIMEOUT_ERROR",
    }, // İstek zaman aşımı
    MAINTENANCE: {
      status: 503,
      code: "SERVER_UNDER_MAINTENANCE",
    }, // Sunucu bakım modunda
  },

  ROUTE: {
    NOT_FOUND: {
      status: 404,
      code: "ROUTE_NOT_FOUND",
    }, // İstenen API rotası bulunamadı
  },

  // --- KİMLİK DOĞRULAMA (AUTH) ---
  AUTH: {
    AUTHORIZATION_HEADER_MISSING: {
      status: 401,
      code: "AUTH_AUTHORIZATION_HEADER_MISSING",
    }, // Authorization header eksik
    AUTHORIZATION_HEADER_FORMAT_INVALID: {
      status: 401,
      code: "AUTH_AUTHORIZATION_HEADER_FORMAT_INVALID",
    }, // Authorization header formatı geçersiz
    TOKEN_MISSING: {
      status: 401,
      code: "AUTH_TOKEN_MISSING",
    }, // Header'da token bulunamadı
    TOKEN_INVALID: {
      status: 401,
      code: "AUTH_TOKEN_INVALID",
    }, // Token geçersiz veya manipüle edilmiş
    TOKEN_EXPIRED: {
      status: 401,
      code: "AUTH_TOKEN_EXPIRED",
    }, // Token süresi doldu
    REFRESH_EXPIRED: {
      status: 401,
      code: "AUTH_REFRESH_TOKEN_EXPIRED",
    }, // Refresh token süresi doldu
    REFRESH_INVALID: {
      status: 401,
      code: "AUTH_REFRESH_TOKEN_INVALID",
    }, // Refresh token geçersiz
    LOGIN_FAILED: {
      status: 401,
      code: "AUTH_LOGIN_FAILED",
    }, // Giriş başarısız (yanlış kullanıcı adı/şifre)
    ACCESS_DENIED: {
      status: 403,
      code: "AUTH_ACCESS_DENIED",
    }, // Yetki yetersiz (403 Forbidden - Rol hatası)
    NOT_VERIFIED: {
      status: 403,
      code: "AUTH_USER_NOT_VERIFIED",
    }, // Kullanıcı doğrulanmamış (email/sms)
    ACCOUNT_LOCKED: {
      status: 403,
      code: "AUTH_ACCOUNT_LOCKED",
    }, // Çok fazla başarısız deneme sonucu hesap kilitlendi
    ACCOUNT_DISABLED: {
      status: 403,
      code: "AUTH_ACCOUNT_DISABLED",
    }, // Hesap yönetici tarafından pasife alınmış
  },

  // --- KULLANICI İŞLEMLERİ (USER) ---
  USER: {
    NOT_FOUND: {
      status: 404,
      code: "USER_NOT_FOUND",
    }, // İstenen kullanıcı veritabanında bulunamadı
    ALREADY_EXISTS: {
      status: 409,
      code: "USER_ALREADY_EXISTS",
    }, // Kayıt sırasında email veya telefon çakışması
    UNAUTHORIZED: {
      status: 401,
      code: "USER_UNAUTHORIZED_ACCESS",
    }, // Kullanıcının bu kaynağa erişim izni yok
    CREATE_FAILED: {
      status: 400,
      code: "USER_CREATION_FAILED",
    },
    HASHING_FAILED: {
      status: 500,
      code: "USER_HASHING_FAILED",
    },
    UPDATE_FAILED: {
      status: 400,
      code: "USER_UPDATE_FAILED",
    }, // Profil güncelleme işlemi başarısız oldu
    PASSWORD_MISMATCH: {
      status: 400,
      code: "USER_PASSWORD_MISMATCH",
    }, // Mevcut şifre yanlış (Şifre değiştirme ekranı)
  },

  // --- GİRDİ KONTROLLERİ (VALIDATION) ---
  VALIDATION: {
    INVALID_INPUT: {
      status: 400,
      code: "VALIDATION_INVALID_INPUT",
    }, // Genel validasyon hatası (Body/Query)
    MISSING_FIELDS: {
      status: 400,
      code: "VALIDATION_MISSING_FIELDS",
    }, // Zorunlu alanlar eksik gönderildi
    INVALID_EMAIL: {
      status: 400,
      code: "VALIDATION_INVALID_EMAIL",
    }, // Email formatı geçersiz
    WEAK_PASSWORD: {
      status: 400,
      code: "VALIDATION_WEAK_PASSWORD",
    }, // Şifre güvenlik kurallarına uymuyor (kısa/basit)
    INVALID_ID: {
      status: 400,
      code: "VALIDATION_INVALID_ID_FORMAT",
    }, // MongoDB ObjectId formatı hatalı
  },

  SESSION: {
    NOT_FOUND: {
      status: 404,
      code: "SESSION_NOT_FOUND",
    }, // İstenen oturum bulunamadı
  },

  // --- İŞ MANTIĞI: ETKİNLİK/DÜĞÜN (BUSINESS LOGIC) ---
  EVENT: {
    NOT_FOUND: {
      status: 404,
      code: "EVENT_NOT_FOUND",
    }, // İstenen düğün/etkinlik bulunamadı
    ALREADY_EXISTS: {
      status: 409,
      code: "EVENT_ALREADY_EXISTS",
    }, // Bu ID ile bir etkinlik zaten mevcut
    SLUG_CONFLICT: {
      status: 409,
      code: "EVENT_SLUG_ALREADY_TAKEN",
    }, // URL slug (örn: /ahmet-ayse) başkası tarafından alınmış
    CLOSED: {
      status: 400,
      code: "EVENT_RSVP_CLOSED",
    }, // LCV (Katılım bildirimi) süresi dolmuş
    DATE_PASSED: {
      status: 400,
      code: "EVENT_DATE_PASSED",
    }, // Etkinlik tarihi geçmiş, işlem yapılamaz
    INACTIVE: {
      status: 400,
      code: "EVENT_IS_INACTIVE",
    }, // Etkinlik yayından kaldırılmış veya iptal edilmiş
  },

  // --- İŞ MANTIĞI: MİSAFİR & LCV (GUEST) ---
  GUEST: {
    NOT_FOUND: {
      status: 404,
      code: "GUEST_NOT_FOUND",
    }, // Misafir kaydı bulunamadı
    ALREADY_RSVP: {
      status: 400,
      code: "GUEST_ALREADY_RSVPED",
    }, // Misafir daha önce katılım durumu bildirmiş
    LIMIT_REACHED: {
      status: 400,
      code: "GUEST_LIMIT_REACHED",
    }, // Maksimum misafir kontenjanı doldu
    INVALID_CODE: {
      status: 400,
      code: "GUEST_INVALID_ACCESS_CODE",
    }, // Özel davet kodu hatalı
  },

  // --- MEDYA & DOSYA YÜKLEME (MEDIA) ---
  MEDIA: {
    UPLOAD_FAILED: {
      status: 500,
      code: "MEDIA_UPLOAD_FAILED",
    }, // Cloudinary/S3 yükleme işlemi başarısız
    TOO_LARGE: {
      status: 400,
      code: "MEDIA_FILE_TOO_LARGE",
    }, // Dosya boyutu izin verilen limiti aşıyor
    INVALID_TYPE: {
      status: 400,
      code: "MEDIA_INVALID_FILE_TYPE",
    }, // Desteklenmeyen dosya formatı (örn: .exe)
    QUOTA_EXCEEDED: {
      status: 400,
      code: "MEDIA_QUOTA_EXCEEDED",
    }, // Kullanıcının depolama kotası doldu
    NOT_FOUND: {
      status: 404,
      code: "MEDIA_NOT_FOUND",
    }, // İstenen medya dosyası bulunamadı
  },

  // --- SOSYAL AKIŞ & MODERASYON (TIMELINE) ---
  TIMELINE: {
    POST_NOT_FOUND: {
      status: 404,
      code: "TIMELINE_POST_NOT_FOUND",
    }, // İstenen gönderi bulunamadı
    DUPLICATE_CONTENT: {
      status: 400,
      code: "TIMELINE_DUPLICATE_CONTENT",
    }, // Aynı içerik daha önce paylaşılmış
    PROHIBITED_CONTENT: {
      status: 400,
      code: "TIMELINE_PROHIBITED_CONTENT",
    }, // İçerik moderasyon kurallarına takıldı (yasaklı)
    COMMENT_DISABLED: {
      status: 400,
      code: "TIMELINE_COMMENT_DISABLED",
    }, // Bu gönderiye yorum yapma özelliği kapalı
  },

  // --- HIZ SINIRI & GÜVENLİK (RATE LIMIT) ---
  RATE_LIMIT: {
    TOO_MANY_REQUESTS: {
      status: 429,
      code: "RATE_LIMIT_EXCEEDED",
    }, // Çok fazla istek (429 Too Many Requests)
    IP_BLOCKED: {
      status: 403,
      code: "RATE_LIMIT_IP_BLOCKED",
    }, // IP adresi güvenlik nedeniyle engellendi
  },

  // Utility Codes
  UTIL: {
    INVALID_TOKEN_GENERATION: {
      status: 500,
      code: "UTIL_INVALID_TOKEN_GENERATION",
    }, // Token oluşturulamadı
    INVALID_TOKEN_VERIFICATION: {
      status: 401,
      code: "UTIL_INVALID_TOKEN_VERIFICATION",
    }, // Token doğrulama başarısız
  },
};
