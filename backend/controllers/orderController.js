import Order from "../models/Order.js";
import crypto from "crypto";

const generateOrderId = () => {
  const hash = crypto.randomBytes(16).toString("hex"); // Generates a 32-character hexadecimal string
  return hash;
};

// A function for adding order to the database
export const createOrder = async (req, res, next) => {
  try {
    let data = req.body;
    console.log("Cart Items", data);

    let user_id = req.user_id;
    console.log("User ID", user_id);

    const order_id = generateOrderId();
    console.log("Order ID", order_id);

    const order = new Order(order_id, user_id, new Date(), 0);
    order.save();

    for (const { id, qty } of data) {
      console.log(`product id: ${id}, qty: ${qty}`);

      await order.addOrderItem(order_id, id, qty);
    }
  } catch (error) {
    console.log("Error in adding the order", error);
    next(error);
  }
};
