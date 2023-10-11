import db from "../config/db.js";

class Invoice {
  constructor(order_id, invoice_location) {
    this.order_id = order_id;
    this.invoice_location = invoice_location;
  }

  // Save to the Database
  async save() {
    const sql = `INSERT INTO invoice(order_id, invoice_location)
                    VALUES (?, ?)`;

    await db.execute(sql, [this.order_id, this.invoice_location]);
  }

  // Find all products
  static async findUserInvoices(userId) {
    const sql = `SELECT * FROM invoice WHERE order_id IN (SELECT shopping_order.id FROM shopping_order WHERE user_id = ?)`;
    const [rows, _] = await db.execute(sql, [userId]);
    return rows;
  }

  // Find by id
  static async findById(id) {
    const sql = `SELECT * FROM invoice WHERE id = ?`;
    const [rows, _] = await db.execute(sql, [id]);
    return rows;
  }

  // Get Invoice lines
  static async getInvoiceLines(order_id) {
    const sql = `SELECT product.name, product.discount, order_item.qty
    FROM product
    INNER JOIN order_item ON product.id = order_item.product_id
    WHERE order_item.order_id = ?;`;
    const [rows, _] = await db.execute(sql, [order_id]);
    return rows;
  }
}

export default Invoice;
