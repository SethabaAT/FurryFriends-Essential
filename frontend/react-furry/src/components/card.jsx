import {React, useContext} from 'react'
import { Button } from './button'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  const {id,name,price,image} = props.data;
  //useContext is a hook that comes with react
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
 
  

  return (    
   
    <div className="card" >
        <div className="card-contents" >
            <Link to={`/ItemDetails/${id}`}><img src={image} alt="Item image"/></Link>
            <h5>{name}</h5>
            
            <p className="price">R {price} <span className="prev"></span></p>
            <Button text={"Add to cart"} classN={'add-to-cart-button'}  itemAmount={cartItemAmount > 0 && <>({cartItemAmount})</>}  onClickAdd={() => addToCart(id)}/>
        </div>
    </div>
  )
}
