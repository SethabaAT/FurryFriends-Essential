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

  // Add order items
  async addOrderItem(order_id, product_id, qty) {
    const sql = `INSERT INTO order_item(order_id, product_id, qty)
                  VALUES (?, ?, ?)`;

    await db.execute(sql, [order_id, product_id, qty]);
  }
}

export default Order;
