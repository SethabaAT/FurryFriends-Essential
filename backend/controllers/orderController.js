import Order from "../models/Order.js";
import crypto from "crypto";
import Product from "../models/Product.js";

const generateOrderId = () => {
  const hash = crypto.randomBytes(16).toString("hex"); // Generates a 32-character hexadecimal string
  return hash;
};

// A function for adding order to the database
export const createOrder = async (req, res, next) => {
  try {
    // From the request
    const data = req.body;
    const user_id = req.user_id;

    // Generate a random id
    const order_id = generateOrderId();
    let total = 0;
    const order = new Order(order_id, user_id, new Date(), total);
    await order.save();

    for (const { id, qty } of data) {
      console.log(`product id: ${id}, qty: ${qty}`);

      await order.addOrderItem(order_id, id, qty);
      let product = await Product.findById(id);
      console.log(product);

      total += product.discount * qty;
    }

    // After adding all the order items, update the total
    await Order.updateTotal(order_id, total);
  } catch (error) {
    console.log("Error in adding the order", error);
    next(error);
  }
};

// Get all
export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.log("Error in getting all orders", error);
    next(error);
  }
};

// Get by id
export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    console.log("Error in getting order by id", error);
    next(error);
  }
};
