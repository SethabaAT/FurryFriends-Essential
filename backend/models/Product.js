import db from "../config/db.js";

class Product {
  constructor(name, category_id, description, price, qty, image, discount) {
    this.name = name;
    this.category_id = category_id;
    this.description = description;
    this.price = price;
    this.qty = qty;
    this.image = image;
    this.discount = discount;
  }

  // Save to the Database
  async save() {
    const sql = `INSERT INTO product(name, category_id, description, price, qty, image, discount)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const [newProduct, _] = await db.execute(sql, [
      this.name,
      this.category_id,
      this.description,
      this.price,
      this.qty,
      this.image,
      this.discount,
    ]);
    return newProduct;
  }

  // Update
  static async update(id, productData) {
    // Check if the product with the given ID exists
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      throw new Error("Product not found");
    }

    // Update only the fields provided in productData
    if (productData.name) {
      existingProduct.name = productData.name;
    }
    if (productData.category_id) {
      existingProduct.category_id = productData.category_id;
    }
    if (productData.description) {
      existingProduct.description = productData.description;
    }
    if (productData.price) {
      existingProduct.price = productData.price;
    }
    if (productData.qty) {
      existingProduct.qty = productData.qty;
    }
    if (productData.image) {
      existingProduct.image = productData.image;
    }
    if (productData.discount) {
      existingProduct.discount = productData.discount;
    }

    // Perform the SQL update
    const sql = `UPDATE product
                   SET name = ?, category_id = ?, description = ?, price = ?, qty = ?, image = ?, discount = ?
                   WHERE id = ?`;

    await db.execute(sql, [
      existingProduct.name,
      existingProduct.category_id,
      existingProduct.description,
      existingProduct.price,
      existingProduct.qty,
      existingProduct.image,
      existingProduct.discount,
      id,
    ]);
    return existingProduct;
  }

  // Remove
  static async destroy(id) {
    const sql = "DELETE FROM product where id=?";
    await db.execute(sql, [id]);
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
    let sql = `SELECT * FROM product JOIN category ON product.category_id = category.id WHERE category.name = ?`;

    const [productRows, _] = await db.execute(sql, [category]);

    return productRows;
  }

  // Find product by category
  static async findById(id) {
    let sql = "SELECT * FROM product WHERE id=?";
    const [[product] = []] = await db.execute(sql, [id]);

    return product;
  }
}

export default Product;
