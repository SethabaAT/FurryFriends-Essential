import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, addToCart } from "../../../Service/service";
import { ShopContext } from "../../../context/shop-context";

import "./itemDetails.css";

export const ItemDetails = () => {

  //get the id from the url parameter
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
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

  const handleUpdate = () => {
    navigate(`/updateProducts`);
  };

  const handleDelete = () => {
    navigate(`/removeProducts`);
  };

  const cartItemAmount = cartItems[id];

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
            <button className="remove-button" onClick={handleDelete}>Remove</button>
            <button className="update-button" onClick={handleUpdate}>Update</button>
          </div>
        )}
        {userType === 0 && (
          <button className="add-to-cart-button" onClick={() => handleAddToCart(id)}>
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        )}
      </div>
    </div>
  );
};
