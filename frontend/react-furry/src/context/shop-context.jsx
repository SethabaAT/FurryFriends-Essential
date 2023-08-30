import React, { createContext, useState } from 'react'
import PRODUCTS from '../pages/products/productsData';


//uses an context-api
export const ShopContext = createContext(null); //stores data states

//handles adding more products into the cart
const getDefaultCart = () =>{
    let cart = {}; //empty cart
    for(let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0; //cart begins with 0 elements for each product in "PRODUCTS"
    }

    return cart;
};

export const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]+1}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]-1}));
    }

    //context value for outside access
    const contextValue = {cartItems, addToCart, removeFromCart}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
 
}
