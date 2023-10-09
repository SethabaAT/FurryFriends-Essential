import React, { createContext, useState } from "react";

//uses an context-api
export const ShopContext = createContext(null); //stores data states

//handles adding more products into the cart

export const ShopContextProvider = (props) => {
  // const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartItems, setCartItems] = useState([]);
  const [cartState, setCartState] = useState(false);
  const [totCart, changeTotCart] = useState(0);
  const [productsState, setProductState] = useState(false);

  const [shouldRedirect, setShouldRedirect] = useState(false);

  //the token
  const [token, setToken] = useState(null);

  //login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(-1);

  const toggleCartState = () => {
    setCartState((prev) => !prev);
  };

  const toggleProductsState = () => {
    setProductState((prev) => !prev);
  };
  //context value for outside access
  const contextValue = {
    cartItems,
    cartState,
    toggleCartState,
    productsState,
    toggleProductsState,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    userType,
    setUserType,
    totCart,
    changeTotCart,
    shouldRedirect,
    setShouldRedirect,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
