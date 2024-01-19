// tests/index.spec.ts
import supertest from "supertest";
import app from "../src/index";

describe("App Endpoint Tests", () => {
  it("should return a welcome message at the root endpoint", async () => {
    const response = await supertest(app).get("/").auth("admin", "password123");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Welcome to mymeoria api");
  });

  it("should serve the Swagger UI at /api-docs endpoint", async () => {
    const response = await supertest(app)
      .get("/api-docs")
      .auth("admin", "password123")
      .redirects(1);
    expect(response.status).toBe(200);
    expect(response.type).toBe("text/html");
  });

  it("should handle non-existent routes with a 404 status", async () => {
    const response = await supertest(app)
      .get("/non-existent-route")
      .auth("admin", "password123");
    expect(response.status).toBe(404);
  });
  it("should return a 401 if the user is not authenticated", async () => {
    const response = await supertest(app).get("/non-existent-route");
    expect(response.status).toBe(401);
  });
});
