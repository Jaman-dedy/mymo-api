import { Request, Response } from "express";
import { Wishlist } from "../types";

const wishlist: Wishlist = {
  products: [],
};

export const addToWishlist = (req: Request, res: Response): void => {
  try {
    const { productId } = req.body;

    if (!productId) {
      res.status(400).json({ error: "ProductId is required" });
      return;
    }

    if (wishlist.products.includes(productId)) {
      res.status(400).json({ error: "Product is already in the wishlist" });
      return;
    }
    wishlist.products.push(productId);

    res
      .status(200)
      .json({ message: "Product added to the wishlist", wishlist });
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllWishlistItems = (_req: Request, res: Response): void => {
  try {
    if (wishlist.products.length === 0) {
      res.status(200).json({ message: "Wishlist is empty", wishlistItems: [] });
      return;
    }
    res.status(200).json({ wishlistItems: wishlist.products });
  } catch (error) {
    console.error("Error getting wishlist items:", error);
  }
};

export const removeFromWishlist = (req: Request, res: Response): void => {
  try {
    const { productId } = req.params;

    if (!productId) {
      res.status(404).json({ error: "ProductId is required" });
      return;
    }
    const index = wishlist.products.indexOf(productId);
    if (index === -1) {
      res.status(404).json({ error: "Product not found in the wishlist" });
      return;
    }

    wishlist.products.splice(index, 1);

    res
      .status(200)
      .json({ message: "Product removed from the wishlist", wishlist });
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
  }
};
