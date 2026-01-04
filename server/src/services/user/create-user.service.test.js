// create user method tests

import { jest, describe, test, expect, beforeEach } from "@jest/globals";

// Mock'ları import'tan ÖNCE tanımla (ESM için zorunlu)
jest.unstable_mockModule("../../db/models/user.model.js", () => ({
  default: { create: jest.fn() },
}));

jest.unstable_mockModule("./is-email-taken.service.js", () => ({
  default: jest.fn(),
}));

jest.unstable_mockModule("./is-username-taken.service.js", () => ({
  default: jest.fn(),
}));

jest.unstable_mockModule("../../utils/index.js", () => ({
  passwordHash: jest.fn(),
}));

// Mock'lardan sonra dinamik import
const { default: User } = await import("../../db/models/user.model.js");
const { default: isEmailTaken } = await import("./is-email-taken.service.js");
const { default: isUsernameTaken } = await import(
  "./is-username-taken.service.js"
);
const { passwordHash } = await import("../../utils/index.js");
const { default: createUser } = await import("./create-user.service.js");

describe("CreateUser Service", () => {
  const mockPayload = {
    email: "test@example.com",
    username: "testuser",
    password: "password123",
  };

  const mockCreatedUser = {
    _id: "user123",
    email: "test@example.com",
    username: "testuser",
    password: "password123",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("yeni kullanıcı başarıyla oluşturulmalı", async () => {
    // Her test için yeni payload oluştur (mutation'dan kaçınmak için)
    const payload = { ...mockPayload };

    isEmailTaken.mockResolvedValue(false); // dönen değeri "false" belirlendi.
    isUsernameTaken.mockResolvedValue(false); // dönen değeri "false" belirlendi.
    passwordHash.mockResolvedValue("hashedPassword123"); // hashlenmiş şifre  döndürülecek.

    // User modelinin create methodunun dönen değeri belirlendi.
    User.create.mockResolvedValue(mockCreatedUser);

    // Action
    const result = await createUser(payload);
    // Assert = Doğrulama
    expect(isEmailTaken).toHaveBeenCalledWith(payload.email);
    expect(isUsernameTaken).toHaveBeenCalledWith(payload.username);
    expect(passwordHash).toHaveBeenCalledWith("password123");
    expect(User.create).toHaveBeenCalled();
    expect(result).toEqual(mockCreatedUser);
  });

  test("email zaten kullanımdaysa 409 hatası fırlatmalı", async () => {
    isEmailTaken.mockResolvedValue(true);

    await expect(createUser(mockPayload)).rejects.toThrow(
      "Email is already in use"
    );
    expect(User.create).not.toHaveBeenCalled();
  });

  test("username zaten kullanımdaysa 409 hatası fırlatmalı", async () => {
    isEmailTaken.mockResolvedValue(false);
    isUsernameTaken.mockResolvedValue(true);

    await expect(createUser(mockPayload)).rejects.toThrow(
      "Username is already in use"
    );
    expect(User.create).not.toHaveBeenCalled();
  });

  test("şifre hashlenemezse 500 hatası fırlatmalı", async () => {
    isEmailTaken.mockResolvedValue(false); // email kullanılmıyor
    isUsernameTaken.mockResolvedValue(false); // username kullanılmıyor

    passwordHash.mockResolvedValue(null); // şifre hashlenemiyor

    await expect(createUser(mockPayload)).rejects.toThrow(
      "Error hashing password"
    );
    expect(User.create).not.toHaveBeenCalled();
  });

  test("kullanıcı oluşturulamazsa 500 hatası fırlatmalı", async () => {
    isEmailTaken.mockResolvedValue(false); // email kullanılmıyor
    isUsernameTaken.mockResolvedValue(false); // username kullanılmıyor
    passwordHash.mockResolvedValue("hashedPassword123"); // hashlenmiş şifre döndürülecek
    User.create.mockResolvedValue(null); // kullanıcı oluşturulamadı

    await expect(createUser(mockPayload)).rejects.toThrow(
      "Error creating user"
    );
  });
});
