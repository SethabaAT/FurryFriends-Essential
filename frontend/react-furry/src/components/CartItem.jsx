import {React , useContext } from 'react'
import { ShopContext } from '../context/shop-context';

export const CartItem = (props) => {

    const {id,name,price,image} = props.data;
    const {addToCart,removeFromCart, cartItems, updateCartItemCount} = useContext(ShopContext);
  return (
      <div className='cart-item'>
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
          <input value={cartItems[id]} onChange={ (e) => updateCartItemCount(Number(e.target.value),id)}/>
          <button  className='cart-btn' onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
  )
}
