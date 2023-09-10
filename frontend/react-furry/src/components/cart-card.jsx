import React from 'react'
import {ShopContext} from '../../../context/shop-context';

export const CartCard = (props) => {

    const {id, price, image,desc, name} = props.data;
    const {addToCart, removeFromCart, cartItems, updateCartItemCount} = useContext(ShopContext);

  return (
    <>
        <img src={image}/>
            <div className="description">
                <p>
                    {name}
                </p>
                <p>
                    R {price}
                </p>
            </div>

            <div className="handleItemCount">
                <button className='cart-btn' onClick={() => removeFromCart(id)}>-</button>
                <input className='cart-inpt'
                    value={cartItems[id]}
                    min={1}
                    type='number'
                    onChange={(e) => updateCartItemCount((e.target.value), id)}/>
                <button className='cart-btn' onClick={() => addToCart(id)}>+</button>
            </div>
    </>
  )
}
