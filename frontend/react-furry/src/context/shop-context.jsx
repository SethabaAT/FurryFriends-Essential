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
  const [invoiceList, setInvoiceList] = useState([]);

  //the token
  const [token, setToken] = useState(null);

  //login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(-1);
  const [fullNames, setFullNames] = useState("");

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
    fullNames,
    setFullNames,
    totCart,
    changeTotCart,
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
