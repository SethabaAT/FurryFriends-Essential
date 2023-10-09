import React, { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Link } from "react-router-dom";

import { getDiscountedProducts } from "../Service/service";

const banner = "/images/display/bannerImg.png";
const fishImg = "/images/display/bird.jpg";
const dogImg = "/images/display/dog-category.png";
const catImg = "/images/display/cat-category.png";
const catIcon = "images/display/rabbit.jpg";

export const Home = () => {
  const [discountedProducts, setDiscounted] = useState([]);

  //get discounted products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getDiscountedProducts();

        setDiscounted(res);
      } catch (error) {
        console.log("Could not get discounted products: " + error);
      }
    };

    //fetch the products
    fetchProducts();
  }, []);

  return (
    <>
      <hr />
      <div className="container">
        <div id="Right">
          <h3>
            Tails are wagging
            <br /> and pets are bragging!
            <br />
          </h3>
          <Link to="/shop">
            <Button text={"SHOP NOW"} classN={"def-btn shpNow"} />{" "}
          </Link>
        </div>
        <div id="Left">
          <img src={banner} alt="Image showing happy animal" />
        </div>
        {/* </div> */}
      </div>
      <section className="cards">
        {/* <!-- for discounted products --> */}

        <div className="cntnr">
          <h2>Discount Deals</h2>
          <div className="small-container">
            {discountedProducts.map((prod) => (
              <Card data={prod} key={prod.id} />
            ))}
          </div>
        </div>

        {/* <!-- for categories --> */}
        <div className="cntnr">
          <h2>Featured Categories</h2>
          <div className="small-container">
            <div className="card_sup category">
              <div className="support-icon-image">
              <Link to={`/Shop/${1}`}>
                  <img src={dogImg} className="zoom-image" alt="" />
                  </Link>
              </div>
            </div>

            <div className="card_sup category">
              <div className="support-icon-image">
                {/* Cat */}
                <Link to={`/shop/${2}`}>
                
                  <img src={catImg} className="zoom-image" alt="" />
                </Link>
              </div>
            </div>

            <div className="card_sup category">
              <div className="support-icon-image">
                {/* bird */}
              <Link to={`/shop/${3}`}>
                  <img src={fishImg} className="zoom-image" alt="" />
                </Link>
              </div>
            </div>

            <div className="card_sup category">
              <div className="support-icon-image">
                {/* rodent */}
                <Link to={`/shop/${4}`}>
                  <img src={catIcon} className="zoom-image" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
