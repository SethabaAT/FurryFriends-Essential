import {React, useContext} from 'react'
import PRODUCTS from '../products/productsData'
import {CartItem} from './itemDetails/CartItem'
import {ShopContext} from '../../context/shop-context'

import {useNavigate} from 'react-router-dom'

export const ShoppingCart = () => {

    const {cartItems, getTotCartAmount} = useContext(ShopContext);

    const totAmount = getTotCartAmount();

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cart-items'>
                {
                    PRODUCTS.map((product) => {
                        //diplay items that are in the cart(context)
                        if (cartItems[product.id] !== 0) {
                            //display the products in the cart
                            return <CartItem data={product}/>
                        }
                    })
                }
            </div>

            {/* if the total amount is greater than 0, display subtotal */}
            {
                totAmount > 0
                    ? <div className="chechout">
                            <p>Subtotal: R {totAmount}</p>
                            <button onClick={() => navigate("/")}>Continue Shopping</button>
                            <button>Checkout</button>
                        </div>

                    //else display: your cart is empty
                    : <h1>Your Cart is Empty</h1>
            }

        </div>
    )
}
