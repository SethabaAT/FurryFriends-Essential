import { Link } from "react-router-dom";
import { React, useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const { userType } = useContext(ShopContext);
  return (
    // <!-- add footer -->
    <footer>
      <div>
        <div className="Footer_Title">
          <h4>Get Connected with us on social networks</h4>
        </div>
        <div className="social_icons">
          <a href="#">
            <FontAwesomeIcon style={{ color: "white" }} icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon style={{ color: "white" }} icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="main_container">
        <div className="footer_card">
          <h3>
            <i>FurryFriends Essential</i>
          </h3>
          <p>
            Discover the perfect pet gear for your furry friends! Explore our
            e-commerce store for a wide range of high-quality pet equipment and
            accessories to ensure your pets live their happiest and healthiest
            lives. Shop now and make your pets' lives more enjoyable!
          </p>
        </div>

        <div className="footer_card">
          <h3>
            <i>Products</i>
          </h3>
          <ul className="no-bullets">
            <Link to={`/shop/${1}`}>
              <li>Dogs</li>
            </Link>
            <Link to={`/shop/${2}`}>
              <li>Cats</li>
            </Link>
            <Link to={`/shop/${3}`}>
              <li>Birds</li>
            </Link>
            <Link to={`/shop/${4}`}>
              <li>Rodent</li>
            </Link>
          </ul>
        </div>

        <div className="footer_card">
          <h3>
            <i>Contact</i>
          </h3>
          <a href="#">
            <FontAwesomeIcon style={{ color: "black" }} icon={faHome} />
          </a>{" "}
          Johannesburg, GP 2005, SA
          <br />
          <br />
          <a href="#">
            <FontAwesomeIcon style={{ color: "black" }} icon={faEnvelope} />
          </a>{" "}
          support@ffEssentials.com
          <br />
          <br />
          <a href="#">
            <FontAwesomeIcon style={{ color: "black" }} icon={faPhone} />
          </a>{" "}
          +27 82 455 6532
        </div>
      </div>
    </footer>
  );
};
