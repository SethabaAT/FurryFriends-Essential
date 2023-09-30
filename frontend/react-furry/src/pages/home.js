import React, { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import PRODUCTS from "./products/productsData";
import { getDiscountedProducts } from "../Service/service";

const banner = "/images/display/bannerImg.png";
const fishImg = "/images/display/fish-category.png";
const dogImg = "/images/display/dog-category.png";
const catImg = "/images/display/cat-category.png";
const catIcon = "images/display/cat-icon.png";

export const Home = () => {
  const [discountedProducts, setDiscounted] = useState([]);

  //get discounted products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getDiscountedProducts();
        console.log("products\n" + res);
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
            <Button text={"SHOP NOW"} classN={"def-btn"} />{" "}
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
            <div className="card category">
              <div className="card-contents">
                <a href="">
                  <img src={dogImg} alt="" />
                </a>
              </div>
            </div>

            <div className="card category">
              <div className="card-contents">
                <a href="">
                  <img src={catImg} alt="" />
                </a>
              </div>
            </div>

            <div className="card category">
              <div className="card-contents">
                <a href="">
                  <img src={fishImg} alt="" />
                </a>
              </div>
            </div>

            <div className="card category">
              <div className="card-contents">
                <a href="">
                  <h3>Dogs</h3>
                  <img src={catIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
