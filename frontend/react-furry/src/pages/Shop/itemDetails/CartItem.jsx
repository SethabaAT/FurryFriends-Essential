import {React, useContext} from 'react'
import {ShopContext} from '../../../context/shop-context';
import './Cart.css'

export const CartItem = (props) => {

    const {id, name, price, image, discount} = props.data;
    const {addToCart, removeFromCart, cartItems, updateCartItemCount} = useContext(ShopContext);
    return (
        <div className='cart-item'>
            <img src={image}/>
            <div className="item-details">
                <h3>
                    {name}
                </h3>
                <p>
                    R {price > discount
                        ? discount
                        : price}
                    {price > discount
                        ? <span className="prev">
                                <del>
                                    R {price}</del>
                            </span>
                        : null}
                </p>
            </div>

            <div className="handleItemCount">
                <button className='cart-btn' onClick={() => removeFromCart(id)}>-</button>
                <input
                    className='cart-inpt'
                    value={cartItems[id]}
                    min={1}
                    type='number'
                    onChange={(e) => updateCartItemCount((e.target.value), id)}/>
                <button className='cart-btn' onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    )
}
