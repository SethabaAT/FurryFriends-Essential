import {React, useContext} from 'react'
import { Button } from './button'
import { ShopContext } from '../context/shop-context';

export const Card = ({prodName,prodPrice,prodImg,prodKey}) => {

    //useContext is a hook that comes with react
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='card' key = {prodKey}>
        <div class="card-contents">
            <a href=""><img src={prodImg} alt=""/></a>
            <h5>{prodName}</h5>
            <p class="price">{prodPrice} <span class="prev"></span></p>
            <Button text={"Add to cart"} classN={"btn"} onClickAdd={() => addToCart(prodKey)}/>
        </div>
    </div>
  )
}
