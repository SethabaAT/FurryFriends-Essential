import { React, useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import "./Cart.css";
import {
  addToCart,
  removeFromCart,
  updateProduct,
  subtractFromCart,
} from "../../../Service/service";


export const CartItem = (props) => {
  const { qty } = props.pqty;
  const { id, name, price, image, discount } = props.data;
  const {
    cartState,
    toggleCartState,
    token,    
  } = useContext(ShopContext);

  const handleRemove = async (id) => {
    try {
        const res = await removeFromCart(id, token);
        toggleCartState();
        console.log(res);
      } catch (er) {
        console.error("coulndt add to cart", er);
      }
  };

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

  const updateCartItemCount = async (id,quantity) => {
    try {
        const res = await updateProduct(id,parseInt(quantity), token);
        toggleCartState();
        console.log(res);
      } catch (er) {
        console.error("coulndt add to cart", er);
      }

  };

  return (
    <>
    <tr>
        <td><img src={image} width={40} height={40} className="cartproduct-image" /></td>
              <td>{name}</td>
              <td><button className="delete-from-cart" onClick={() => handleRemove(id)}>Remove</button></td>
              <td><div className="handleItemCount">
         <button className="updateCart" onClick={() => handleSubtract(id)}>
           -
         </button>
         <input
           className="cart-inpt"
           value={props.pqty}
           min={1}
           type="number"
           onChange={(e) => updateCartItemCount(id,e.target.value)}
         />
         <button className="updateCart" onClick={() => handleAddToCart(id)}>
           +
         </button>
       </div></td>
              <td>   R {price > discount ? discount : price}
           {price > discount ? (
             <span style={{fontSize:12}}>
               <del> R {price}</del>
             </span>
           ) : null}</td>
              <td>R {(price * props.pqty).toFixed(2)}</td>
            </tr>
    </>
  );
};
