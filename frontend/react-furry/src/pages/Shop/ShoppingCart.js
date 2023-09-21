import { React, useContext } from "react";
import PRODUCTS from "../products/productsData";
import { CartItem } from "./itemDetails/CartItem";
import { ShopContext } from "../../context/shop-context";
import "./ShoppingCart.css";
import { postItemsInCart } from "../../Service/service";

import { useNavigate } from "react-router-dom";

export const ShoppingCart = () => {
  const { cartItems, getTotCartAmount, isLoggedIn, clearCart } = useContext(ShopContext);

  const totAmount = getTotCartAmount();

  const navigate = useNavigate();

  let cartItemList = [];

  const handleCheckOut = async () => {
    if (isLoggedIn === true) {
      //get the item id and its qty

      PRODUCTS.map((p) => {
        if (cartItems[p.id] !== 0) {
          cartItemList.push({
            id: p.id,
            qty: cartItems[p.id],
          });
        } else {
          console.log("cannot read em");
        }
      });

      try {
        const token = localStorage.getItem("token");
        //send the items to the database
        const res = await postItemsInCart(cartItemList, token);

        //clear the cart
        clearCart();
        
        //afterwards,  generate the invoice from here:
      } catch (error) {
        console.log("Error sending cartItems list " + error);
      }
    } else {
      //redirect to login
      console.log("not loggedin");
      navigate("/login");
    }
  };

  return (
    <div className="cart">
      {totAmount > 0 ? (
        <div>
          <h1>Your Cart Items</h1>
        </div>
      ) : null}

      <div className="cart-items">
        {PRODUCTS.map((product) => {
          //diplay items that are in the cart(context)
          if (cartItems[product.id] !== 0) {
            //display the products in the cart
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>

      {/* if the total amount is greater than 0, display subtotal */}
      {totAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: R {totAmount}</p>
          <button onClick={() => navigate("/Shop")}>Continue Shopping</button>
          <button className="checkout-button" onClick={handleCheckOut}>
            Checkout
          </button>
        </div>
      ) : (
        //else display: your cart is empty
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
