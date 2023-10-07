import React, {useContext, useState, useEffect} from 'react'
import {Card} from '../../components/card'
import {Button} from '../../components/button'
import {getProductByCategory} from '../../Service/service'  
import './about.css'
import { usePDF } from 'react-to-pdf';

export const About = () => {
    
    return(
         <>
        <div class="containerlel">
        <div class="company-description">
            <p>FurryFriends Company is your one-stop destination for all your pet's needs. We specialize in providing high-quality pet products for dogs, cats, rabbits, birds, and more. Our mission is to ensure that your furry companions lead a happy and healthy life.</p>
        </div>
        <div class="scrolling-pictures">
           
            <img src="logo192.pnabout" alt="Pet Product 1"/>
            


           
        </div>
        <div class="testimonials">
            
            <div class="testimonial-card">
                <h3>Happy Customer 1</h3>
                <p>"FurryFriends Company provides top-notch products for my pets. Their service is exceptional, and my pets love their products!"</p>
            </div>

            
            <div class="testimonial-card">
                <h3>Happy Customer 2</h3>
                <p>"I've been a loyal customer of FurryFriends Company for years. Their dedication to pet well-being is commendable. Highly recommended!"</p>
            </div>
        </div>
    </div>
   
    </>
      )
    
}