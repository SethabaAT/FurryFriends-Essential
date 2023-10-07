import { React, useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import "./Cart.css";
import {
  addToCart,
  removeFromCart,
  subtractFromCart,
} from "../../../Service/service";

export const CartItem = (props) => {
  const { qty } = props.pqty;
  const { id, name, price, image, discount } = props.data;
  const {
    cartState,
    toggleCartState,
    token,
    remove_From_Cart,
    cartItems,
    updateCartItemCount,
  } = useContext(ShopContext);

  const handleAddToCart = async (id) => {
    try {
      const res = await addToCart(id, token);
      toggleCartState();
      console.log(res);
    } catch (er) {
      console.error("coulndt add to cart", er);
    }
  };

  const handleSubtract = async (id) => {
    try {
      const res = await subtractFromCart(id, token);
      toggleCartState();
      console.log(res);
    } catch (er) {
      console.error("coulndt add to cart", er);
    }
  };

  return (
    <div className="cart-item">
      <img src={image} />
      <div className="item-details">
        <h3>{name}</h3>
        <p>qty: {props.pqty}</p>
        <p>
          R {price > discount ? discount : price}
          {price > discount ? (
            <span className="prev">
              <del>R {price}</del>
            </span>
          ) : null}
        </p>
      </div>

      <div className="handleItemCount">
        <button className="cart-btn" onClick={() => handleSubtract(id)}>
          -
        </button>
        <input
          className="cart-inpt"
          value={props.pqty}
          min={1}
          type="number"
          onChange={(e) => updateCartItemCount(e.target.value, id)}
        />
        <button className="cart-btn" onClick={() => handleAddToCart(id)}>
          +
        </button>
      </div>
    </div>
  );
};
