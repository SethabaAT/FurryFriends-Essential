import React from 'react'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    // <!-- add footer -->
    <footer>
        <div class="cntnr">
            <div class="small-container">
                <div class="card footer">
                    <h4>Company Info</h4>
                    <p><a href="">About Us</a></p>
                    <p><a href="">FAQs</a></p>
                    <p><a href="">Delivery Costs</a></p>
                    <p><a href="">Return Policy</a></p>
                    <p><a href="">Privacy Policy</a></p>
                </div>
                <div class="card footer">
                    <h4>Contact Info</h4>
                    <p><a href="mailto:support@ffEssentials.com">support@ffEssentials.com</a></p>
                    <p>WhatsApp: (+27)71 234 5678</p>
                    <p>Phone: (+27)87 111 2200</p>
                    <a href=""><i class="fa-brands fa-facebook icon"></i></a>
                    <a href=""><i class="fa-brands fa-instagram icon"></i></a>
                    <a href=""><i class="fa-brands fa-twitter icon"></i></a>

                    {/* <a href=''><FontAwesomeIcon icon="fa-brands fa-facebook icon" /></a> */}
                    
                </div>
            </div>
        </div>
    </footer>
  )
}
