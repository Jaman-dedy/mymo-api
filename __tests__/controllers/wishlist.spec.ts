import supertest from "supertest";
import app from "../../src/index";
import { Wishlist } from "../../src/types";

describe("Wishlist Controller Tests", () => {
  const wishlist: Wishlist = {
    products: [],
  };

  beforeEach(() => {
    wishlist.products = [];
  });

  it("should add a product to the wishlist", async () => {
    const productIdToAdd = "someProductId";

    const response = await supertest(app)
      .post("/api/wishlist/add")
      .auth("admin", "password123")
      .send({ productId: productIdToAdd })
      .expect(200);

    expect(response.body.message).toBe("Product added to the wishlist");
    expect(response.body.wishlist.products).toEqual([{ id: productIdToAdd }]);
  });

  it("should return an error if productId is not provided", async () => {
    const response = await supertest(app)
      .post("/api/wishlist/add")
      .auth("admin", "password123")
      .send({})
      .expect(400);

    expect(response.body.error).toBe("ProductId is required");
  });

  it("should return an error if the product is already in the wishlist", async () => {
    const productIdToAdd = "someProductId";

    wishlist.products.push({ id: productIdToAdd });

    const response = await supertest(app)
      .post("/api/wishlist/add")
      .auth("admin", "password123")
      .send({ productId: productIdToAdd })
      .expect(400);

    expect(response.body.error).toBe("Product is already in the wishlist");
  });

  it("should get all wishlist items when the wishlist is not empty", async () => {
    const productId1 = "someProductId1";
    const productId2 = "someProductId2";

    // Add products to the wishlist
    wishlist.products.push({ id: productId1 }, { id: productId2 });

    const response = await supertest(app)
      .get("/api/wishlist")
      .auth("admin", "password123")
      .expect(200);

    expect(response.body.wishlistItems).toHaveLength(0);
  });

  it("should return an empty array when the wishlist is empty", async () => {
    const response = await supertest(app)
      .get("/api/wishlist")
      .auth("admin", "password123")
      .expect(200);

    expect(response.body.wishlistItems).toHaveLength(0);
  });

  it("should remove a product from the wishlist", async () => {
    const productIdToRemove = "someProductId";

    wishlist.products.push({ id: productIdToRemove });

    const response = await supertest(app)
      .delete(`/api/wishlist/remove/${productIdToRemove}`)
      .auth("admin", "password123")
      .expect(200);

    expect(response.body.message).toBe("Product removed from the wishlist");
    expect(response.body.wishlist.products).toHaveLength(0);
  });

  it("should return an error if the product is not found in the wishlist", async () => {
    const response = await supertest(app)
      .delete("/api/wishlist/remove/nonExistentProductId")
      .auth("admin", "password123")
      .expect(404);

    expect(response.body.error).toBe("Product not found in the wishlist");
  });
});
