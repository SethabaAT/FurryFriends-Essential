import Product from "../models/Product.js";

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

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (error) {
    console.log("Error in retrieving the products", error);
    next(error);
  }
};

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

export const removeProduct = async (req, res, next) => {};

export const updateProduct = async (req, res, next) => {};
