import express from "express";
import {
  addProduct,
  getAllProducts,
  removeProduct,
  updateProduct,
  getProductByCategory,
} from "../controllers/productController.js";
import { isAdmin } from "../middleware/authorization.js";

// Set End points
const router = express.Router();
router.route("/addProduct").post(isAdmin, addProduct);
router.route("/getAllProducts").get(isAdmin, getAllProducts);
router.route("/removeProduct/:productId").delete(isAdmin, removeProduct);
router.route("/updateProduct/:productId").put(isAdmin, updateProduct);
router
  .route("/getProductByCategory/:category")
  .get(isAdmin, getProductByCategory);

export default router;
