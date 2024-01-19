// src/routes/index.ts
import express from "express";
import productsRouter from "./products";

const router = express.Router();

// Use the products router for product-related routes
router.use("/products", productsRouter);

// Export the router
export default router;
