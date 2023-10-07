import { React, useContext, useState, useEffect } from "react";
import PRODUCTS from "../products/productsData";
import { CartItem } from "./itemDetails/CartItem";
import { ShopContext } from "../../context/shop-context";
import "./ShoppingCart.css";
import { postItemsInCart, getCartItems } from "../../Service/service";

import { useNavigate } from "react-router-dom";

export const ShoppingCart = () => {
  const { isLoggedIn, token, cartState } = useContext(ShopContext);
  const [cartItems, setCartItems] = useState([]);
  //const totAmount = getTotCartAmount();

  const navigate = useNavigate();

  let cartItemList = [];
  let totAmount = 0;

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
        //send the items to the database
        const res = await postItemsInCart(cartItemList, token);

        //clear the cart

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

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const c_items = await getCartItems(token);
        if (c_items.message === "Something went wrong...") {
          console.error("db error");
        }
        //set the cart items state
        setCartItems(c_items);
      } catch (error) {
        console.error("could not get cart items", error);
      }
    };

    fetchCartItems();
  }, [CartItem, cartState]);

  return (
    <>
      {" "}
      {token === null ? (
        navigate("/Login")
      ) : (
        <div className="cart">
          {cartItems !== null ? (
            <div>
              <h1>Your Cart Items</h1>
            </div>
          ) : null}

          {/* <div className="cart-items">
        {cartItems !== null
          ? PRODUCTS.map((product) => {
              const matches = cartItems.find(
                (itm) => itm.product_id === product.id
              );

              if (matches) {
                console.log("matches");
                totAmount += (product.price === product.discount ? product.price * matches.qty : product.discount * matches.qty)
                return <CartItem data={product} pqty={matches.qty}  key={product.id} />;
              }
            })
          : 
            null}
      </div>  */}
        {cartItems !== null ?
          <div>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Remove</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems !== null
                  ? PRODUCTS.map((product) => {
                      const matches = cartItems.find(
                        (itm) => itm.product_id === product.id
                      );

                      if (matches) {
                        console.log("matches");
                        totAmount +=
                          product.price === product.discount
                            ? product.price * matches.qty
                            : product.discount * matches.qty;
                        return (
                          <CartItem
                            data={product}
                            pqty={matches.qty}
                            key={product.id}
                          />
                        );
                      }
                    })
                  : null}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total:</td>
                  <td>R {totAmount.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div> : null}

          {/* if the total amount is greater than 0, display subtotal */}
          {cartItems !== null ? (
            <div className="checkout">
              <p>Subtotal: R {totAmount.toFixed(2)}</p>
              <button onClick={() => navigate("/Shop")}>
                Continue Shopping
              </button>
              <button className="checkout-button" onClick={handleCheckOut}>
                Checkout
              </button>
            </div>
          ) : (
            //else display: your cart is empty
            <h1>Your Cart is Empty</h1>
          )}
        </div>
      )}
    </>
  );
};
