import {React, useContext} from 'react'
import {ShopContext} from '../../../context/shop-context';
import './Cart.css'

export const CartItem = (props) => {

    const {id, name, price, image, discount} = props.data;
    const {add_To_Cart, remove_From_Cart, cartItems, updateCartItemCount} = useContext(ShopContext);
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
                <button className='cart-btn' onClick={() => remove_From_Cart(id)}>-</button>
                <input
                    className='cart-inpt'
                    value={cartItems[id]}
                    min={1}
                    type='number'
                    onChange={(e) => updateCartItemCount((e.target.value), id)}/>
                <button className='cart-btn' onClick={() => add_To_Cart(id)}>+</button>
            </div>
        </div>
    )
}
