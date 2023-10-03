import db from "../config/db.js";

class Cart {
  constructor(user_id, product_id, qty) {
    this.product_id = product_id;
    this.user_id = user_id;
    this.qty = qty;
  }

  // Save to the Database
  async save() {
    const sql = `INSERT INTO cart(user_id, product_id, qty)
                     VALUES (?, ?, ?)`;

    const [newCart, _] = await db.execute(sql, [
      this.user_id,
      this.product_id,
      this.qty,
    ]);

    return newCart;
  }

  // Find all products
  static async findUserCartItems(user_id) {
    const sql = `SELECT * FROM cart WHERE user_id = ?`;

    const [cartItems, _] = await db.execute(sql, [user_id]);

    return cartItems;
  }

  // Find by id
  static async findById(user_id, product_id) {
    const sql = `SELECT * FROM cart WHERE user_id = ? AND product_id = ?`;

    const [cartItem, _] = await db.execute(sql, [user_id, product_id]);

    return cartItem;
  }

  // Update qty
  static async updateQty(user_id, product_id, qty) {
    const sql = `UPDATE cart SET qty = ? WHERE user_id = ? AND product_id = ?`;

    const [updatedQty, _] = await db.execute(sql, [qty, user_id, product_id]);

    return updatedQty;
  }

  // Add to cart qty
  static async addToCart(user_id, product_id) {
    const existingCartProduct = CartModel.findById(user_id, product_id);
    const qty = existingCartProduct.qty + 1;

    const sql = `UPDATE cart SET qty = ? WHERE user_id = ? AND product_id = ?`;

    const [updatedQty, _] = await db.execute(sql, [qty, user_id, product_id]);

    return updatedQty;
  }

  // Subtract from cart qty
  static async subtractFromCart(user_id, product_id) {
    const existingCartProduct = CartModel.findById(user_id, product_id);
    const qty = existingCartProduct.qty - 1;

    const sql = `UPDATE cart SET qty = ? WHERE user_id = ? AND product_id = ?`;

    const [updatedQty, _] = await db.execute(sql, [qty, user_id, product_id]);

    return updatedQty;
  }

  // Delete cart
  static async deleteAllItems(user_id) {
    const sql = `DELETE FROM cart WHERE user_id = ?`;

    const [deletedCart, _] = await db.execute(sql, [user_id]);

    return deletedCart;
  }

  // Delete cart item
  static async deleteCartItem(user_id, product_id) {
    const sql = `DELETE FROM cart WHERE user_id = ? AND product_id = ?`;

    const [deletedCartItem, _] = await db.execute(sql, [user_id, product_id]);

    return deletedCartItem;
  }
}

export default Cart;
