import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProduct, addReview } from "../../../Service/service";
import { ShopContext } from "../../../context/shop-context";
import { ReviewForm } from "../../../components/review-form";


import "./Review.css";

export const Review = () => {
    const { token } = useContext(ShopContext);
    const navigate = useNavigate();

    //get the id from the url parameter
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    // Handle review sub,it
    const handleReviewSubmit = async (reviewText) => {
        try {
            const response = await addReview(id, reviewText, token);
            console.log("Review submitted successfully!", response);
            navigate("/Orders", { replace: true });
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    //get the product using the id
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProduct(id);
                setProduct(res);
            } catch (e) {
                console.error("Error fetching product:", e);
            }
        };

        fetchProduct();
    }, []);
    return (
        <div className="review-page">
            <div className="review-image">
                <img src={product.image} alt="Product Image" />
                <ReviewForm onSubmit={handleReviewSubmit} />
            </div>
        </div>
    );
};
