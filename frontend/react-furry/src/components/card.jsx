import React from 'react'
import { Button } from './button'

export const Card = ({prodName,prodPrice,prodImg,prodKey}) => {
  return (
    <div className='card' key = {prodKey}>
        <div class="card-contents">
            <a href=""><img src={prodImg} alt=""/></a>
            <h5>{prodName}</h5>
            <p class="price">{prodPrice} <span class="prev"></span></p>
            <Button text={"Add to cart"} classN={"btn"}/>
        </div>
    </div>
  )
}
