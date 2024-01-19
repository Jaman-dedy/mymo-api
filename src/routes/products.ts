import express, { Router } from "express";
import { getProductsByCategory } from "../controllers/productsController";

const router: Router = express.Router();

router.get("/:category", getProductsByCategory);

export default router;
