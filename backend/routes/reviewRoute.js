import express from "express";
import { isUser } from "../middleware/authorization.js";
import {
  addReview,
  getProductReviews,
  removeReview,
  getReview,
  updateReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.route("/addReview/:id").post(isUser, addReview);
router.route("/getReview/:id").get(isUser, getReview);
router.route("/removeReview/:id").delete(isUser, removeReview);
router.route("/updateReview/:id").put(isUser, updateReview);
router.route("/getProductReviews/:id").get(getProductReviews);

export default router;
