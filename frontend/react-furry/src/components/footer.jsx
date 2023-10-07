import { Link } from 'react-router-dom';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



export const Footer = () => {
  return (
    // <!-- add footer -->
        <footer>

          <div>
            <div className="Footer_Title">
              <h4>Get Connected with us on social networks</h4>
            </div>
            <div className="social_icons">
              <a href="#"><FontAwesomeIcon style={{color: 'white'}}  icon={faFacebook} /></a>
              <a href="#"><FontAwesomeIcon style={{color: 'white'}} icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon style={{color: 'white'}} icon={faTwitter} /></a>
            </div>
          </div>

          <div className="main_container">
            <div className="footer_card">

            <h3><i>FurryFriends Essential</i></h3>
              <p>Discover the perfect pet gear for your furry friends! Explore our e-commerce store for a wide range of high-quality pet equipment and accessories to ensure your pets live their happiest and healthiest lives</p>
            </div>

            <div className="footer_card">
            <h3><i>Products</i></h3>
              <ul className="no-bullets">
                
              <Link to={`/shop/${1}`}><li>Dogs</li></Link>
              <Link to={`/shop/${2}`}><li>Cats</li></Link>
              <Link to={`/shop/${3}`}><li>Birds</li></Link>
              <Link to={`/shop/${4}`}><li>Rodent</li></Link>

              
              </ul>
            </div>


            <div className="footer_card">
            <h3><i>Contact</i></h3>
              <a href="#"><FontAwesomeIcon style={{color: 'black'}} icon={faHome} /></a> Johannesburg, GP 2005, SA
              <br />
              <br />
              <a href="#"><FontAwesomeIcon style={{color: 'black'}} icon={faEnvelope} /></a> support@ffEssentials.com
              <br />
              <br />
              <a href="#"><FontAwesomeIcon style={{color: 'black'}} icon={faPhone} /></a> +27 82 455 6532
            </div>
          </div>

        </footer>
  )
}

/**
 * <div className="cntnr">
            <div className="small-container">
                <div className="card footer">
                    <h4>Company Info</h4>
                    <p><a href="">About Us</a></p>
                    <p><a href="">FAQs</a></p>
                    <p><a href="">Delivery Costs</a></p>
                    <p><a href="">Return Policy</a></p>
                    <p><a href="">Privacy Policy</a></p>
                </div>
                <div className="card footer">
                    <h4>Contact Info</h4>
                    <p><a href="mailto:support@ffEssentials.com">support@ffEssentials.com</a></p>
                    <p>WhatsApp: (+27)71 234 5678</p>
                    <p>Phone: (+27)87 111 2200</p>
                    <a href=""><i className="fa-brands fa-facebook icon"></i></a>
                    <a href=""><i className="fa-brands fa-instagram icon"></i></a>
                    <a href=""><i className="fa-brands fa-twitter icon"></i></a>

                    /* <a href=''><FontAwesomeIcon icon="fa-brands fa-facebook icon" /></a> */
                    
                    //</div>
                    //</div>
                //</div>