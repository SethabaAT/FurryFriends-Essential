import express from "express";
import {
  addProduct,
  getAllProducts,
  removeProduct,
  updateProduct,
  getProductByCategory,
} from "../controllers/productController.js";

// Set End points
const router = express.Router();
router.route("/addProduct").post(addProduct);
router.route("/getAllProducts").get(getAllProducts);
router.route("/getProductByCategory/:category").get(getProductByCategory);
router.route("/removeProduct").delete(removeProduct);
router.route("/updateProduct").put(updateProduct);

export default router;
