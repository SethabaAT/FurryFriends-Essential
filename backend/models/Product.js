import db from "../config/db.js";

class Product {
  constructor(name, category, description, price, qty, image, discount) {
    this.name = name;
    this.category = category;
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

    const category_id = await Product.findCategoryIdByName(this.category);
    const [newProduct, _] = await db.execute(sql, [
      this.name,
      category_id,
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

    // Perform the SQL update
    const sql = `UPDATE product
                   SET name = ?, category_id = ?, description = ?, price = ?, qty = ?, image = ?, discount = ?
                   WHERE id = ?`;

    const category_id = await Product.findCategoryIdByName(
      productData.category
    );

    await db.execute(sql, [
      productData.name,
      category_id,
      productData.description,
      productData.price,
      productData.qty,
      productData.image,
      productData.discount,
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

  // Find category by name
  static async findCategoryIdByName(name) {
    let sql = "SELECT * FROM category WHERE name=?";
    const [[category] = []] = await db.execute(sql, [name]);

    return category.id;
  }
}

export default Product;
