import Order from "../models/Order.js";
import crypto from "crypto";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import Invoice from "../models/Invoice.js";

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
    total = await addOrderItems(order, order_id, total, data);

    // After adding all the order items, update the total
    await Order.updateTotal(order_id, total);
    await Cart.deleteAllItems(user_id);
    const invoiceDetails = await createInvoice(
      order_id,
      "invoices/invoice.pdf",
      data
    );

    console.log(invoiceDetails);

    res
      .status(201)
      .json({ message: "Order Succesfully Added", invoice: invoiceDetails });
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

// get invoices
export const getInvoices = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const invoices = await Invoice.findUserInvoices(user_id);
    res.status(200).json(invoices);
  } catch (error) {
    console.log("Error in getting invoices", error);
    next(error);
  }
};

// Get invoice
export const getInvoice = async (req, res, next) => {
  try {
    const [invoice, _] = await Invoice.findById(req.params.id);

    // If the invoice does not exist
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    console.log(invoice.order_id);
    // Get lines from the database
    let lines = await Invoice.getInvoiceLines(invoice.order_id);
    console.log("lines", lines);
    // Get invoice datails for each product
    let invoice_details = [];

    // note that we use dicount and not price
    for (const { id, name, qty, discount, image } of lines) {
      var invoice_line = {
        product_id: id,
        product_name: name,
        product_qty: qty,
        product_price: discount,
        product_image: image,
        total: qty * discount,
      };
      invoice_details.push(invoice_line);
    }

    res.status(200).json(invoice_details);
  } catch (error) {
    console.log("Error in getting invoice", error);
    next(error);
  }
};

// Utility functions
// Generate the order id since I will use it immediately after creation
const generateOrderId = () => {
  const hash = crypto.randomBytes(16).toString("hex");
  return hash;
};

// Add order items
const addOrderItems = async (order, order_id, total, data) => {
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

  return total;
};

// Create Invoice
const createInvoice = async (order_id, invoice_location, data) => {
  try {
    const invoice = new Invoice(order_id, invoice_location);
    await invoice.save();

    // Get invoice datails for each product
    let invoice_details = [];

    for (const { product_id, qty } of data) {
      let product = await Product.findById(product_id);

      // Note that the lines are using dicount not price
      var invoice_line = {
        product_name: product.name,
        product_qty: qty,
        product_price: product.discount,
        total: qty * product.discount,
      };
      invoice_details.push(invoice_line);
    }

    return invoice_details;
  } catch (error) {
    console.log("Error in adding invoice", error);
    return null;
  }
};
