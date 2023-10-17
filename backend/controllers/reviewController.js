import Review from "../models/Review.js";

// Add review
export const addReview = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const product_id = req.params.id;
    const message = req.body.message;

    console.log(user_id, product_id, message);

    const existingReview = await Review.findById(user_id, product_id);

    if (existingReview.length > 0) {
      await Review.updateMessage(user_id, product_id, message);
    } else {
      const review = new Review(user_id, product_id, message);
      console.log(review);
      await review.save();
    }

    res.status(201).json({ message: "Review added" });
  } catch (error) {
    console.log("Error in adding review", error);
    next(error);
  }
};

// Get product reviews
export const getProductReviews = async (req, res, next) => {
  try {
    const product_id = req.params.id;
    const reviews = await Review.findProductReviews(product_id);

    res.status(200).json(reviews);
  } catch (error) {
    console.log("Error in getting product reviews", error);
    next(error);
  }
};

// Remove review
export const removeReview = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const product_id = req.params.id;

    await Review.removeReview(user_id, product_id);

    res.status(200).json({ message: "Review removed" });
  } catch (error) {
    console.log("Error in removing review", error);
    next(error);
  }
};

// Update review
export const updateReview = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const product_id = req.params.id;
    const message = req.body.message;

    await Review.updateMessage(user_id, product_id, message);

    res.status(200).json({ message: "Review updated" });
  } catch (error) {
    console.log("Error in updating review", error);
    next(error);
  }
};

// Get user reviews
export const getReview = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const product_id = req.params.id;
    const reviews = await Review.findById(user_id, product_id);

    res.status(200).json(reviews);
  } catch (error) {
    console.log("Error in getting user reviews", error);
    next(error);
  }
};
