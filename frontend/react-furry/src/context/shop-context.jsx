import React, { createContext, useEffect, useState } from "react";
import PRODUCTS from "../pages/products/productsData";

import { getCartItems, addToCart, removeFromCart } from "../Service/service";

//uses an context-api
export const ShopContext = createContext(null); //stores data states

//handles adding more products into the cart
const getDefaultCart = () => {
  let cart = {}; //empty cart
  for (let i = 1; i < PRODUCTS.length * 2; i++) {
    cart[i] = 0; //cart begins with 0 elements for each product in "PRODUCTS"
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  // const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartItems, setCartItems] = useState([]);
  const [cartState, setCartState] = useState(false);
  const [totCart, changeTotCart] = useState(0);

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [invoiceList, setInvoiceList] = useState([]);

  //the token
  const [token, setToken] = useState(null);

  //login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(-1);
  const [fullNames, setFullNames] = useState("");

  /*useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const c_items = await getCartItems();
        //set the cart items state
        setCartItems(c_items);
      } catch (error) {
        console.error("could not get cart items", error);
      }
    };

    fetchCartItems();
  }, [cartItems]);*/

  const toggleCartState = () => {
    setCartState((prev) => !prev);
  };

  //a fuction for adding an item to cart
  const add_To_Cart = async (itemId) => {
    /* setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    })); */

    try {
      const res = await addToCart(itemId, token);

      console.log(res.message);
    } catch (error) {
      console.error("Could not add to cart(context)", error);
    }
  };

  //a function for removing an item from cart
  const remove_From_Cart = async (itemId) => {
    /* setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    })); */

    try {
      const res = await removeFromCart(itemId, token);

      console.log(res.message);
    } catch (error) {
      console.error("Could not remove from cart(context)", error);
    }
  };

  //a function to edit cart amount
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - prev[itemId] + Number(newAmount),
    }));
  };

  //gets the totalAmount in the cart
  const getTotCartAmount = () => {
    let totAmount = 0;
    //loop through cartItems object and check if an item is in the cart
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        //get the price of the item
        let itemInfo = PRODUCTS.find((prod) => prod.id === Number(item));
        if (itemInfo.price > itemInfo.discount) {
          totAmount += cartItems[item] * itemInfo.discount;
        } else {
          totAmount += cartItems[item] * itemInfo.price;
        }
      }
    }

    return totAmount;
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  //context value for outside access
  const contextValue = {
    cartItems,
    cartState,
    toggleCartState,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    userType,
    setUserType,
    fullNames,
    setFullNames,
    totCart,
    changeTotCart,
    getTotCartAmount,
    clearCart,
    shouldRedirect,
    setShouldRedirect,
    invoiceList,
    setInvoiceList,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
