import { Request, Response } from "express";
import { globalErrorHandler } from "../../src/middleware/errorHandler";
import { CustomError } from "../../src/types/customErrors";

describe("Global Error Handler Tests", () => {
  it("should handle CustomError correctly", () => {
    const err = new CustomError("Test Error", 400);
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    globalErrorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Test Error" });
    expect(next).not.toHaveBeenCalled();
  });

  it("should handle non-CustomError correctly", () => {
    const err = new Error("Test Error");
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    globalErrorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
    expect(next).not.toHaveBeenCalled();
  });
});
