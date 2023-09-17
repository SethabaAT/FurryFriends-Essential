import express from "express";
import {
  addProduct,
  getAllProducts,
  removeProduct,
  updateProduct,
  getProductByCategory,
  getProductByID,
  getDiscountedProducts,
} from "../controllers/productController.js";
import { isAdmin } from "../middleware/authorization.js";

// Set End points
const router = express.Router();
router.route("/addProduct").post(isAdmin, addProduct);
router.route("/removeProduct/:id").delete(isAdmin, removeProduct);
router.route("/updateProduct/:id").put(isAdmin, updateProduct);
router.route("/getProductById/:id").get(getProductByID);
router.route("/getAllProducts").get(getAllProducts);
router.route("/getDiscountedProducts").get(getDiscountedProducts);
router.route("/getProductByCategory/:category").get(getProductByCategory);

export default router;
