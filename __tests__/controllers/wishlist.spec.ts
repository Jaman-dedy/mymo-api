import supertest from "supertest";
import app from "../../src/index";
import { Product } from "../../src/types";

describe("Wishlist Controller Tests", () => {
  let products: Product[] = [];

  const clearWishlist = () => {
    products = [];
  };

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

  it("should return 400 if productId is missing in addToWishlist", async () => {
    const response = await supertest(app)
      .post("/api/wishlist/add")
      .auth("admin", "password123")
      .send({});

    expect(response.status).toBe(400);

    expect(response.body).toEqual({ error: "ProductId is required" });
  });

  it("should return 200 with an empty wishlist message", async () => {
    clearWishlist();

    const response = await supertest(app)
      .get("/api/wishlist")
      .auth("admin", "password123");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      message: "Wishlist is empty",
      wishlistItems: [],
    });
  });

  it("should return a 404 if productId is not provided in removeFromWishlist", async () => {
    const response = await supertest(app)
      .delete("/api/wishlist/remove")
      .auth("admin", "password123");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });

  it("should return a 404 if productId is not in the wishlist in removeFromWishlist", async () => {
    const response = await supertest(app)
      .delete("/api/wishlist/remove/non-existent-product-id")
      .auth("admin", "password123");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "Product not found in the wishlist",
    });
  });
});
