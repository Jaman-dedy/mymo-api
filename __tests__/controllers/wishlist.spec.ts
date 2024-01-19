import supertest from "supertest";
import app from "../../src/index";

describe("Wishlist Controller Tests", () => {
  it("should add a product to the wishlist", async () => {
    const response = await supertest(app)
      .post("/api/wishlist/add")
      .send({ productId: "someProductId" })
      .auth("admin", "password123");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Product added to the wishlist");
    expect(response.body.wishlist.products).toContain("someProductId");
  });

  it("should get all wishlist items", async () => {
    const response = await supertest(app)
      .get("/api/wishlist")
      .auth("admin", "password123");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("wishlistItems");
  });

  it("should remove a product from the wishlist", async () => {
    await supertest(app)
      .post("/api/wishlist/add")
      .send({ productId: "someProductId" })
      .auth("admin", "password123");

    const response = await supertest(app)
      .delete("/api/wishlist/remove/someProductId")
      .auth("admin", "password123");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Product removed from the wishlist");
    expect(response.body.wishlist.products).not.toContain("someProductId");
  });
});
