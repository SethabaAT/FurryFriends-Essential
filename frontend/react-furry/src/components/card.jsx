import {React, useContext} from 'react'
import { Button } from './button'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

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
        <div className="card-contents">
            <Link to="/ItemDetails"><img src={image} alt=""/></Link>
            <h5>{name}</h5>
            <p className="price">R {price} <span className="prev"></span></p>
            <Button text={"Add to cart"} itemAmount={cartItemAmount > 0 && <>({cartItemAmount})</>} classN={"btn"} onClickAdd={() => addToCart(id)}/>
        </div>
    </div>
  )
}
