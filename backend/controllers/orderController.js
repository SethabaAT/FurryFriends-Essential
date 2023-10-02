import Order from "../models/Order.js";
import crypto from "crypto";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

// Generate the order id since I will use it immediately after creation
const generateOrderId = () => {
  const hash = crypto.randomBytes(16).toString("hex");
  return hash;
};

// A function for adding order to the database
export const createOrder = async (req, res, next) => {
  try {
    // From the request
    const user_id = req.user_id;
    const data = await Cart.findUserCartItems(user_id);

    // Generate a random id
    const order_id = generateOrderId();
    let total = 0;
    const order = new Order(order_id, user_id, new Date(), total);
    await order.save(); // Save the order (note the total is zero at creation)
    console.log("New order", order._id);

    // Add order items to the order we just created'
    console.log(data);
    for (const { product_id, qty } of data) {
      await order.addOrderItem(order_id, product_id, qty); // Note that this id here is product id

      // Get the product by id and update the quantity
      let product = await Product.findById(product_id);
      total += product.discount * qty;

      // Update the product qty in the databse
      let updatedProduct = new Product(
        product.name,
        product.category_id,
        product.description,
        product.price,
        product.qty - qty,
        product.image,
        product.discount
      );
      await Product.update(product_id, updatedProduct);
    }

    // After adding all the order items, update the total
    await Order.updateTotal(order_id, total);

    res.status(201).json({ message: "Order Succesfully Added" });
  } catch (error) {
    console.log("Error in adding the order", error);
    next(error);
  }
};

// Get all
export const getUserOrders = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const orders = await Order.findUserOrders(user_id);
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

    // If the order does not exist
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.log("Error in getting order by id", error);
    next(error);
  }
};

// Get order items
export const getOrderItems = async (req, res, next) => {
  try {
    const orderItems = await Order.findOrderItems(req.params.id);
    res.status(200).json(orderItems);
  } catch (error) {
    console.log("Error in getting order items", error);
    next(error);
  }
};
