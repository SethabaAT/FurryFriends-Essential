import {React, useContext} from 'react'
import PRODUCTS from '../products/productsData'
import { CartItem } from '../../components/CartItem'
import { ShopContext } from '../../context/shop-context'

export const ShoppingCart = () => {

  const {cartItems} = useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cart-items'>
        {PRODUCTS.map((product) => {
          //diplay items that are in the cart(context)
          if(cartItems[product.id] !== 0){
            //display the products in the cart
            return <CartItem data={product} />
          }
        })}
      </div>  


    </div>
  )
}
