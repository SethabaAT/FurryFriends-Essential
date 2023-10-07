import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct, addToCart } from "../../../Service/service";
import { ShopContext } from "../../../context/shop-context";

import "./itemDetails.css";

export const ItemDetails = () => {

  //get the id from the url parameter
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  //shopping context
  const { cartItems, toggleCartState,token } = useContext(ShopContext);


  const handleAddToCart = async (id) =>{
    try{
      const res = await addToCart(id,token);
      toggleCartState();
      console.log(res);
    }catch(er){
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
        <button className="add-to-cart-button" onClick={() => handleAddToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}{" "}
        </button>
      </div>
    </div>
  );
};
