import db from "../config/db.js";

class Product {
  constructor(name, categoryId, description, price, qty, imageURL, discount) {
    this.name = name;
    this.categoryId = categoryId;
    this.description = description;
    this.price = price;
    this.qty = qty;
    this.imageURL = imageURL;
    this.discount = discount;
  }

  // Save to the Database
  async save() {
    let sql = `INSERT INTO product(name, categoryId, description, price, qty, imageURL, discount)
                 VALUES('${this.name}','${this.categoryId}','${this.description}','${this.price}','${this.qty}','${this.imageURL}','${this.discount}')`;

    const [newProduct, _] = await db.execute(sql);
    return newProduct;
  }

  // Find all products
  static async findAll() {
    let sql = "SELECT * FROM product";

    const [productRows, _] = await db.execute(sql);

    if (productRows.length === 0) {
      return null; // Product not found
    }

    return productRows;
  }

  // Find product by category name
  static async findByCategory(category) {
    let sql = `SELECT * FROM product JOIN category ON product.categoryId = category.id WHERE category.name = ?`;

    const [productRows, _] = await db.execute(sql, [category]);

    return productRows;
  }
}

export default Product;
