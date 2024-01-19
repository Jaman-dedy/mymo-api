import supertest from "supertest";
import server from "../../src/index";

describe("Product Controller Tests", () => {
  it("should get products by category flower", async () => {
    const response = await supertest(server)
      .get("/api/products/flower")
      .auth("admin", "password123");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(4);
  });

  it("should get products by category coffin", async () => {
    const response = await supertest(server)
      .get("/api/products/coffin")
      .auth("admin", "password123");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
  });

  it("should get products by category urn", async () => {
    const response = await supertest(server)
      .get("/api/products/urn")
      .auth("admin", "password123");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(4);
  });

  it("should return 404 for an invalid category", async () => {
    const response = await supertest(server)
      .get("/api/products/invalid_category")
      .auth("admin", "password123");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Category not found" });
  });
});
