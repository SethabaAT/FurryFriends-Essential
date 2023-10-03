import Product from "../models/Product.js";

// A function for adding products to the database
export const addProduct = async (req, res, next) => {
  try {
    const { name, category, description, price, qty, image, discount } =
      req.body;

    const category_id = category;
    // Create a new Product
    const product = new Product(
      name,
      category_id,
      description,
      price,
      qty,
      image,
      discount
    );

    console.log("Added product: ", product);

    await product.save();
    res.status(201).json({ message: "Product Added" });
  } catch (error) {
    console.error("Error in adding the product", error);
    next(error);
  }
};

// A function for getting all the products from the database
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error in retrieving the products", error);
    next(error);
  }
};

// A function that gets all the products by id
export const getProductByID = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const product = await Product.findById(parseInt(id));

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting products=", error);
    next(error);
  }
};

// A function that gets all the products by id
export const getProductByCategory = async (req, res, next) => {
  try {
    const category = req.params.category;
    const products = await Product.findByCategory(category);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting products", error);
    next(error);
  }
};

// A function that get discounted products
export const getDiscountedProducts = async (req, res, next) => {
  try {
    const products = await Product.findDiscountedProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting product(s)", error);
    next(error);
  }
};

// A fucntion for removing the products from the database
export const removeProduct = async (req, res, next) => {
  try {
    // Get the id from the request parameters
    const id = parseInt(req.params.id);
    await Product.destroy(parseInt(id));
    res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    console.error("Error removing product", error);
    next(error);
  }
};

// A function for updating an existing product
export const updateProduct = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id); // from the request parameters
    const updatedProductData = req.body; // From the request body

    console.log("Updated data: ", updatedProductData);

    // Update the product using the Product class's update method
    await Product.update(id, updatedProductData);
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product", error);
    next(error);
  }
};
