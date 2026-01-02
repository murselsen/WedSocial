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
