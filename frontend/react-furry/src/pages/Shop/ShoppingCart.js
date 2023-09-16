import {React, useContext} from 'react'
import PRODUCTS from '../products/productsData'
import {CartItem} from './itemDetails/CartItem'
import {ShopContext} from '../../context/shop-context'
import './ShoppingCart.css'

import {useNavigate} from 'react-router-dom'

export const ShoppingCart = () => {

    const {cartItems, getTotCartAmount} = useContext(ShopContext);

    const totAmount = getTotCartAmount();
    let count = 0;
    const navigate = useNavigate();

    return (
        <div className='cart'>
            {totAmount > 0
                ? <div>
                        <h1>Your Cart Items</h1>
                    </div>
                : null}

            <div className='cart-items'>
                {PRODUCTS.map((product) => {
                     console.log(cartItems)
                    //diplay items that are in the cart(context)
                    if (cartItems[product.id] !== 0) {
                        console.log("Product amount "+cartItems[product.name]+ " "+ ++count)
                        //display the products in the cart
                        return <CartItem data={product} key={product.id}/>
                    }
                })
}
            </div>

            {/* if the total amount is greater than 0, display subtotal */}
            {totAmount > 0
                ? <div className="checkout">
                        <p>Subtotal: R {totAmount}</p>
                        <button onClick={() => navigate("/Shop")}>Continue Shopping</button>
                        <button className='checkout-button'>Checkout</button>
                    </div>

                //else display: your cart is empty
                : <h1>Your Cart is Empty</h1>
}

        </div>
    )
}
