import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct, addToCart, getProductReviews } from "../../../Service/service";
import { ShopContext } from "../../../context/shop-context";

import "./itemDetails.css";

export const ItemDetails = () => {

  //get the id from the url parameter
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  //shopping context
  const { cartItems, toggleCartState, token, userType } = useContext(ShopContext);


  const handleAddToCart = async (id) => {
    try {
      const res = await addToCart(id, token);
      toggleCartState();
      console.log(res);
    } catch (er) {
      console.error("coulndt add to cart", er)
    }
  }

  const cartItemAmount = cartItems[id];

  //get the product using the id
  useEffect(() => {
    //fetch the produt

    const fetchProduct = async () => {
      try {
        const res = await getProduct(id);
        setProduct(res);

        // Fetch product reviews and update the reviews state
        const reviewsRes = await getProductReviews(id);
        setReviews(reviewsRes);
      } catch (e) {
        console.error("Error fetching product:", e);
      }
    };

    fetchProduct();
  }, [id]);
  return (
    <>
      <div className="product-page">
        <div className="product-image">
          <img src={product.image} alt="Product Image" />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">R {product.price}</p>
          {userType === 1 && (
            <div className="admin-buttons">
              <Link to={`/removeProducts/${id}`}>
                <button className="remove-button" >Remove</button>
              </Link>

              <Link to={`/updateProducts/${id}`}>
                <button className="update-button" >Update</button>
              </Link>
            </div>
          )}
          {userType !== 1 && (
            <button className="add-to-cart-button" onClick={() => handleAddToCart(id)}>
              Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
          )}
        </div>



      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <div className="review-list">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <p><strong>{review.firstName} {review.secondName}</strong></p>
              <p className="message">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
