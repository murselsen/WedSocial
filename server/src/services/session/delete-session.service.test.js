import { jest } from "@jest/globals";
import createError from "http-errors";
import mongoose from "mongoose";

// Session modelini mock'la
const mockFindByIdAndDelete = jest.fn();
jest.unstable_mockModule("../../db/models/session.model.js", () => ({
  default: {
    findByIdAndDelete: mockFindByIdAndDelete,
  },
}));

// Mock'lardan sonra modülü import et
const { default: deleteSession } = await import("./delete-session.service.js");

describe("deleteSession Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Başarılı senaryolar", () => {
    it("geçerli bir sessionId ile session'ı silmeli", async () => {
      // Arrange
      const validSessionId = new mongoose.Types.ObjectId().toString();
      mockFindByIdAndDelete.mockResolvedValue({ _id: validSessionId });

      // Act
      const result = await deleteSession(validSessionId);

      // Assert
      expect(mockFindByIdAndDelete).toHaveBeenCalledWith(validSessionId);
      expect(mockFindByIdAndDelete).toHaveBeenCalledTimes(1);
      expect(result).toBe(true);
    });
  });

  describe("Hata senaryoları", () => {
    it("sessionId verilmezse 400 hatası fırlatmalı", async () => {
      // Act & Assert
      await expect(deleteSession()).rejects.toThrow();
      await expect(deleteSession(null)).rejects.toMatchObject({
        status: 400,
        message: expect.stringContaining("Invalid session ID"),
      });
    });

    it("boş string sessionId ile 400 hatası fırlatmalı", async () => {
      // Act & Assert
      await expect(deleteSession("")).rejects.toMatchObject({
        status: 400,
        message: expect.stringContaining("Invalid session ID"),
      });
    });

    it("geçersiz ObjectId formatı ile 400 hatası fırlatmalı", async () => {
      // Act & Assert
      await expect(deleteSession("invalid-id")).rejects.toMatchObject({
        status: 400,
        message: expect.stringContaining("Invalid session ID format"),
      });
    });

    it("çok kısa ObjectId ile 400 hatası fırlatmalı", async () => {
      // Act & Assert
      await expect(deleteSession("123")).rejects.toMatchObject({
        status: 400,
        message: expect.stringContaining("Invalid session ID format"),
      });
    });
  });

  describe("Edge case'ler", () => {
    it("undefined sessionId ile hata fırlatmalı", async () => {
      await expect(deleteSession(undefined)).rejects.toThrow();
    });

    it("veritabanında session bulunamasa bile hata fırlatmamalı", async () => {
      // Arrange
      const validSessionId = new mongoose.Types.ObjectId().toString();
      mockFindByIdAndDelete.mockResolvedValue(null); // Session bulunamadı

      // Act
      const result = await deleteSession(validSessionId);

      // Assert
      expect(result).toBe(true);
      expect(mockFindByIdAndDelete).toHaveBeenCalledWith(validSessionId);
    });
  });
});
