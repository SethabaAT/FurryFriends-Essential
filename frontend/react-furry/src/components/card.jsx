import {React, useContext} from 'react'
import { Button } from './button'
import { ShopContext } from '../context/shop-context';

export const Card = (props) => {
  const {id,name,price,image} = props.data;
  //useContext is a hook that comes with react
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  const getCartItemAmount = () => {
    return (cartItemAmount > 0 && <>({cartItemAmount})</>)
  }
  const Amount =getCartItemAmount();

  return (
    <div className='card' key = {id}>
        <div class="card-contents">
            <a href=""><img src={image} alt=""/></a>
            <h5>{name}</h5>
            <p class="price">{price} <span class="prev"></span></p>
            <Button text={"Add to cart"} itemAmount={cartItemAmount > 0 && <>({cartItemAmount})</>} classN={"btn"} onClickAdd={() => addToCart(id)}/>
        </div>
    </div>
  )
}
