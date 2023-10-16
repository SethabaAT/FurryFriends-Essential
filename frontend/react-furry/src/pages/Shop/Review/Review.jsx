import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct, addToCart } from "../../../Service/service";
import { ShopContext } from "../../../context/shop-context";
import { ReviewForm } from "../../../components/review-form";

import "./Review.css";

export const Review = () => {

    //get the id from the url parameter
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    // Handle review sub,it
    const handleReviewSubmit = (reviewText) => {

    };

    //get the product using the id
    useEffect(() => {
        //fetch the produt

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
