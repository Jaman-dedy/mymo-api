// src/routes/products.ts
import express, { Router } from "express";
import { getProductsByCategory } from "../controllers/productsController";

const router: Router = express.Router();

// Endpoint to fetch products by category
router.get("/:category", getProductsByCategory);

export default router;
