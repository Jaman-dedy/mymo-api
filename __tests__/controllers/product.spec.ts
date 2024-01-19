import supertest from "supertest";
import server from "../../src/index";

describe("Product Controller Tests", () => {
  afterAll((done) => {
    server.close(() => done());
    done();
  });
  it("should get products by category", async () => {
    const response = await supertest(server)
      .get("/api/products/flower")
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
