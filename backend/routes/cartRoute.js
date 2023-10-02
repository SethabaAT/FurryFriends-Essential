import express from "express";
import { isUser } from "../middleware/authorization.js";
import {
  addToCart,
  subtractFromCart,
  deleteAllCartItems,
  deleteCartItem,
  getUserCartItems,
  updateQty,
} from "../controllers/cartController.js";

const router = express.Router();

router.route("/addToCart/:id").post(isUser, addToCart);
router.route("/subtractFromCart/:id").put(isUser, subtractFromCart);
router.route("/removeFromCart/:id").delete(isUser, deleteCartItem);
router.route("/updateCart").put(isUser, updateQty);
router.route("/clearCart").delete(isUser, deleteAllCartItems);
router.route("/getCartItems").get(isUser, getUserCartItems);

export default router;
