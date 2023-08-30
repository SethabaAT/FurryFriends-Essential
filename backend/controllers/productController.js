import Product from "../models/Product.js";

// A function for adding products to the database
export const addProduct = async (req, res, next) => {
  try {
    let { name, categoryId, description, price, qty, imageURL, discount } =
      req.body;

    // Create a new Product
    let product = new Product(
      name,
      categoryId,
      description,
      price,
      qty,
      imageURL,
      discount
    );

    product = await product.save();
    res.status(201).json({ message: "Product Created" });
  } catch (error) {
    console.log("Error in adding the product", error);
    next(error);
  }
};

// A function for getting all the products from the database
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    console.log("Error in retrieving the products", error);
    next(error);
  }
};

// A function that gets all the products by id
export const getProductByCategory = async (req, res, next) => {
  try {
    let category = req.params.category;
    const products = await Product.findByCategory(category);
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// A fucntion for removing the products from the database
export const removeProduct = async (req, res, next) => {};

// A function for updating an existing product
export const updateProduct = async (req, res, next) => {};
