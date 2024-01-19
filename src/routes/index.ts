// src/routes/index.ts
import express from "express";
import productsRouter from "./products";
import wishlistRouter from "./wishlist";

const router = express.Router();

router.use("/products", productsRouter);
router.use("/wishlist", wishlistRouter);

export default router;
