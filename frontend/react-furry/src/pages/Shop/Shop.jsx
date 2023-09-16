import React, {useContext} from 'react'
import {Card} from '../../components/card'

import PRODUCTS from
'../products/productsData'

export const Shop = () => {
    return (
        <> < div className = "cntnr" >
             <h2>Available Products</h2>
          
        <div className="small-container">

            {PRODUCTS.map((prod) => (<Card data={prod} key={prod.id}/>))}

        </div>
    </div>
</>
    )
}
