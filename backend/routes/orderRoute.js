import express from "express";
import { isUser } from "../middleware/authorization.js";
import {
  createOrder,
  getUserOrders,
  getOrderById,
  getOrderItems,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/createOrder").post(isUser, createOrder);
router.route("/getUserOrders").get(isUser, getUserOrders);
router.route("/getOrder/:id").get(isUser, getOrderById);
router.route("/getOrderItems/:id").get(isUser, getOrderItems);

export default router;
