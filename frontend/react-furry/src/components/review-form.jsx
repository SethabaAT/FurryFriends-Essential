import React, { useState } from "react";

export const ReviewForm = ({ onSubmit }) => {
    const [reviewText, setReviewText] = useState("");

    const handleInputChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(reviewText);
        setReviewText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={reviewText}
                onChange={handleInputChange}
                placeholder="Write your review here..."
                required
                className="review-message"
            />
            <button type="submit" className="btn-review">Submit Review</button>
        </form>
    );
};

