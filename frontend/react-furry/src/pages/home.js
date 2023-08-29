import React from 'react'
import { Card } from '../components/card'
import { Button } from '../components/button'
import { Link } from 'react-router-dom'

import prod1 from '../images/products/All-Breed-Puppy.png'

export const Home = () => {

    
  return (
    <> 
        <div class="container">
                <div id="Right">
                    <h3>
                        Tails are wagging
                        <br/> and pets are bragging!<br/>
                    </h3>
                    <Link to="/register"><Button text={"Sign Up"} /> </Link>
                </div>
                <div id = "Left">
                    <img src="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2018/10/puppy-quotes-768x512.jpg" alt="Image showing happy animal"/>

                </div>
            {/* </div> */}
        </div>       
        <section class="cards">
            {/* <!-- for discounted products --> */}
        
            <div className="cntnr">
                <h2>Discounted Products</h2>
                <div className="small-container">
                
                    {/* <div className="card discount">
                        <div className="card-contents">
                            <a href=""><img src={prod1} alt=""/></a>
                            <h5>Valp Puppy</h5>
                            <p className="price">R 699<sup>00</sup> <span className="prev"><del>R 699<sup>00</sup></del></span></p>
                        </div>
                    </div> */}

                    <Card prodImg={prod1} prodName={"Valp pup"} prodPrice={"R 999"}/>
                    <Card prodImg={prod1} prodName={"Valp pup"} prodPrice={"R 999"}/>
                    <Card prodImg={prod1} prodName={"Valp pup"} prodPrice={"R 999"}/>
                    <Card prodImg={prod1} prodName={"Valp pup"} prodPrice={"R 999"}/>

                    {/* <div className="card discount">
                        <div className="card-contents">
                            <a href=""><img src="../../images/products/All-Breed-Puppy.png" alt=""/></a>
                            <h5>Valp Puppy</h5>
                            <p className="price">R 699<sup>00</sup> <span className="prev"><del>R 699<sup>00</sup></del></span></p>
                        </div>
                    </div>

                    <div className="card discount">
                        <div className="card-contents">
                            <a href=""><img src="images/products/All-Breed-Puppy.png" alt=""/></a>
                            <h5>Valp Puppy</h5>
                            <p className="price">R 699<sup>00</sup> <span className="prev"><del>R 699<sup>00</sup></del></span></p>
                        </div>
                    </div> */}
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

                    <div class="card category">
                        <div class="card-contents">
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
