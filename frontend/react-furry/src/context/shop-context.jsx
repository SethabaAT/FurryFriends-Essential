import React, {createContext, useState} from 'react'
import PRODUCTS from '../pages/products/productsData';

//uses an context-api
export const ShopContext = createContext(null); //stores data states

//handles adding more products into the cart
const getDefaultCart = () => {
    let cart = {}; //empty cart
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0; //cart begins with 0 elements for each product in "PRODUCTS"
    }

    return cart;
};

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    //a fuction for adding an item to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));
    }

    //a function for removing an item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }));
    }

    //a function to edit cart amount
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Number(newAmount)
        }));
    }

    //gets the totalAmount in the cart
    const getTotCartAmount = () => {
        let totAmount = 0;
        //loop through cartItems object and check if an item is in the cart
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                //get the price of the item
                let itemInfo = PRODUCTS.find((prod) => prod.id === Number(item));
                totAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totAmount;
    }

    //context value for outside access
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotCartAmount
    }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;

}
