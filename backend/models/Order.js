import db from "../config/db.js";

class Order {
  constructor(id, user_id, order_date, total) {
    this.id = id;
    this.user_id = user_id;
    this.order_date = order_date;
    this.total = total;
  }

  // Save to the Database
  async save() {
    const sql = `INSERT INTO shopping_order(id, user_id, order_date, total)
                     VALUES (?, ?, ?, ?)`;

    const [newOrder, _] = await db.execute(sql, [
      this.id,
      this.user_id,
      this.order_date,
      this.total,
    ]);

    return newOrder;
  }

  // Update order total
  static async updateTotal(order_id, total) {
    const sql = `UPDATE shopping_order
                  SET total = ?
                  WHERE id = ?`;

    await db.execute(sql, [total, order_id]);
  }

  // Add order items
  async addOrderItem(order_id, product_id, qty) {
    const sql = `INSERT INTO order_item(order_id, product_id, qty)
                  VALUES (?, ?, ?)`;

    await db.execute(sql, [order_id, product_id, qty]);
  }

  // Find all products
  static async findAll() {
    let sql = "SELECT * FROM shopping_order";

    const [orderRows, _] = await db.execute(sql);

    if (orderRows.length === 0) {
      return null; // Product not found
    }

    return orderRows;
  }

  // Find by id
  static async findById(id) {
    let sql = "SELECT * FROM shopping_order WHERE id = ?";

    const [orderRows, _] = await db.execute(sql, [id]);

    if (orderRows.length === 0) {
      return null; // Product not found
    }

    return orderRows[0];
  }
}

export default Order;
