import db from "../config/db.js";

class Review {
  constructor(user_id, product_id, message) {
    this.product_id = product_id;
    this.user_id = user_id;
    this.message = message;
  }

  // Save to the Database
  async save() {
    const sql = `INSERT INTO review(user_id, product_id, message)
                         VALUES (?, ?, ?)`;

    const [newReview, _] = await db.execute(sql, [
      this.user_id,
      this.product_id,
      this.message,
    ]);

    return newReview;
  }

  // Find product reviews
  static async findProductReviews(product_id) {
    const sql = `SELECT firstName, secondName, message FROM furryfriends.review
                  JOIN user 
                  ON review.user_id = id
                  WHERE product_id = ?`;

    const [reviews, _] = await db.execute(sql, [product_id]);

    return reviews;
  }

  // Find by id
  static async findById(user_id, product_id) {
    const sql = `SELECT * FROM review WHERE user_id = ? AND product_id = ?`;

    const [review, _] = await db.execute(sql, [user_id, product_id]);

    return review;
  }

  // Update review message
  static async updateMessage(user_id, product_id, message) {
    const sql = `UPDATE review SET message = ? WHERE user_id = ? AND product_id = ?`;

    const [updatedMessage, _] = await db.execute(sql, [
      message,
      user_id,
      product_id,
    ]);

    return updatedMessage;
  }

  // Remove review
  static async removeReview(user_id, product_id) {
    const sql = `DELETE FROM review WHERE user_id = ? AND product_id = ?`;

    const [removedReview, _] = await db.execute(sql, [user_id, product_id]);

    return removedReview;
  }
}

export default Review;
