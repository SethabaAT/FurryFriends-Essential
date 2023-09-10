import React from 'react'
import { Card } from '../components/card'
import { Button } from '../components/button'
import { Link } from 'react-router-dom'

import banner from '../images/display/bannerImg.png'

import PRODUCTS from './products/productsData'

//temporary db
// const products = [
//     {
//       id: 1,
//       name: "Tin can",
//       price: 199,
//       image: require("../images/products/prod2.png")
//     },
//     {
//       id: 2,
//       name: "Tin can",
//       price: 199,
//       image: require("../images/products/prod2.png")
//     },
//     {
//       id: 3,
//       name: "Tin can",
//       price: 199,
//       image: require("../images/products/prod2.png")
//     },
//     {
//       id: 4,
//       name: "Tin can",
//       price: 199,
//       image: require("../images/products/prod2.png")
//     },
//     {
//         id: 5,
//         name: "Tin can",
//         price: 199,
//         image: require("../images/products/prod2.png")
//       },
//   ]

export const Home = () => {
    
  return (
    <> 
        <div className="container">
                <div id="Right">
                    <h3>
                        Tails are wagging
                        <br/> and pets are bragging!<br/>
                    </h3>
                    <Link to="/shop"><Button text={"SHOP NOW"} classN={"def-btn"} /> </Link>
                </div>
                <div id = "Left">
                    <img src={banner} alt="Image showing happy animal" />

                </div>
            {/* </div> */}
        </div>       
        <section className="cards">
            {/* <!-- for discounted products --> */}
        
            <div className="cntnr">
                <h2>Discounted Products</h2>
                <div className="small-container">
                
                {PRODUCTS.map( (prod) => (
                    <Card data={prod}/>
                ))}
                    
                </div>
            </div>

            {/* <!-- for categories --> */}
            <div className="cntnr">
                <h2>Featured Categories</h2>
                <div className="small-container">
                
                    <div className="card category">
                        <div className="card-contents">
                            <a href=""><h3>Dogs</h3><img src="images/display/cat-icon.png" alt=""/></a>                        
                        </div>
                    </div>

                    <div className="card category">
                        <div className="card-contents">
                            <a href=""><h3>Dogs</h3><img src="../../images/display/cat-icon.png" alt=""/></a>
                        </div>
                    </div>

                    <div className="card category">
                        <div className="card-contents">
                            <a href=""><h3>Dogs</h3><img src="images/display/cat-icon.png" alt=""/></a>
                        </div>
                    </div>

                    <div className="card category">
                        <div className="card-contents">
                            <a href=""><h3>Dogs</h3><img src="images/display/cat-icon.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

    </>
  )
}
