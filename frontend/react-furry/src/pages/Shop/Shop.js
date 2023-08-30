import React, { useContext } from 'react'
import { Card } from '../../components/card'
import products from '../products/productsData'


export const Shop = () => {
  return (
    <div className="cntnr">
                <h2>Available Products</h2>
                <div className="small-container">
                
                {products.map( (prod) => (
                    <Card key={prod.id} prodImg={prod.image} prodName={prod.name} prodPrice={prod.price}/>
                ))}
                    
                </div>
            </div>

  )
}
