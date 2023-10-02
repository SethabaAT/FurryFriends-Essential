import Cart from "../models/Cart.js";

// Add to cart
export const addToCart = async (req, res, next) => {
  try {
    // From the request
    const { product_id } = req.body;
    const user_id = req.user_id;

    // Check if the product is already in the cart
    const existingCartProduct = await Cart.findById(user_id, product_id);

    // If it is, update the quantity
    if (existingCartProduct.length > 0) {
      const qty = existingCartProduct[0].qty + 1;
      await Cart.updateQty(user_id, product_id, qty);
    } else {
      // If not, add it to the cart
      const cart = new Cart(user_id, product_id, 1);
      await cart.save();
    }

    res.status(201).json({ message: "Product added to cart" });
  } catch (error) {
    console.log("Error in adding to cart", error);
    next(error);
  }
};

// Get all
export const getUserCartItems = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const cartItems = await Cart.findUserCartItems(user_id);
    res.status(200).json(cartItems);
  } catch (error) {
    console.log("Error in getting all cart items", error);
    next(error);
  }
};

// Update qty
export const updateQty = async (req, res, next) => {
  try {
    const { product_id, qty } = req.body;
    const user_id = req.user_id;

    await Cart.updateQty(user_id, product_id, qty);

    res.status(200).json({ message: "Cart Updated" });
  } catch (error) {
    console.log("Error in updating cart", error);
    next(error);
  }
};

// Delete
export const deleteCartItem = async (req, res, next) => {
  try {
    const { product_id } = req.body;
    const user_id = req.user_id;

    await Cart.deleteCartItem(user_id, product_id);

    res.status(200).json({ message: "Cart Item Deleted" });
  } catch (error) {
    console.log("Error in deleting cart item", error);
    next(error);
  }
};

// Delete all cart items
export const deleteAllCartItems = async (req, res, next) => {
  try {
    const user_id = req.user_id;

    await Cart.deleteAllCartItems(user_id);

    res.status(200).json({ message: "Cart Deleted" });
  } catch (error) {
    console.log("Error in deleting cart", error);
    next(error);
  }
};

// Subtract from cart
export const subtractFromCart = async (req, res, next) => {
  try {
    const { product_id } = req.body;
    const user_id = req.user_id;

    // Check if the product is already in the cart
    const existingCartProduct = await Cart.findById(user_id, product_id);

    // If it is, update the quantity
    if (existingCartProduct.length > 0) {
      const qty = existingCartProduct[0].qty - 1;
      await Cart.updateQty(user_id, product_id, qty);
    } else {
      // If not, add it to the cart
      const cart = new Cart(user_id, product_id, 1);
      await cart.save();
    }

    res.status(201).json({ message: "Product added to cart" });
  } catch (error) {
    console.log("Error in adding to cart", error);
    next(error);
  }
};
