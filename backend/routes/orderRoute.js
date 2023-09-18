import express from "express";
import { isUser } from "../middleware/authorization.js";
import {
  createOrder,
  getAllOrders,
  getOrderById,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/cartItems").post(isUser, createOrder);
router.route("/getOrders").get(isUser, getAllOrders);
router.route("/getOrder/:id").get(isUser, getOrderById);

export default router;
