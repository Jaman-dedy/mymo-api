import express, { Router } from "express";
import {
  addToWishlist,
  getAllWishlistItems,
  removeFromWishlist,
} from "../controllers/wishlistController";

const router: Router = express.Router();

router.post("/add", addToWishlist);
router.get("/", getAllWishlistItems);
router.delete("/remove/:productId", removeFromWishlist);

export default router;
