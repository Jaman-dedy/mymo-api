import { Request, Response } from "express";
import { loadData } from "../dataLoader";
import { Product } from "../types/index";

export const getProductsByCategory = (req: Request, res: Response): void => {
  try {
    const { category } = req.params;
    let products: Product[] = [];

    const coffinProducts: Product[] = loadData("coffin");
    const urnProducts: Product[] = loadData("urn");
    const flowerProducts: Product[] = loadData("flower");

    switch (category) {
      case "coffin":
        products = coffinProducts;
        break;
      case "urn":
        products = urnProducts;
        break;
      case "flower":
        products = flowerProducts;
        break;
      default:
        res.status(404).json({ error: "Category not found" });
        return;
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
