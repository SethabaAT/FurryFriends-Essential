import React, { useContext, useState, useEffect } from "react";
import { Card } from "../../components/card";
import { Button } from "../../components/button";
import { ShopContext } from "../../context/shop-context";
import {
  getDiscountedProducts,
  getProductByCategory,
  getProducts,
} from "../../Service/service";

import { useParams } from "react-router";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Shop = () => {
  //get the products state to update the products if one is added or deleted
  const { productsState } = useContext(ShopContext);

  //get products by category
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [birds, setBirds] = useState([]);
  const [rodents, setRodents] = useState([]);
  const [PRODUCTS, setProducts] = useState([]);
  const [discountProducts, setDiscount] = useState([]);
  const [priceLH, setPriceLH] = useState([]);
  const [priceHL, setPriceHL] = useState([]);

  //display statuses
  const [isAll, setIsAll] = useState(true); //first show all the products
  const [isCat, setIsCat] = useState(false);
  const [isDog, setIsDog] = useState(false);
  const [isRodent, setIsRodent] = useState(false);
  const [isBird, setIsBird] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [isPriceLH, setIsPriceLH] = useState(false); //low to high
  const [isPriceHL, setIsPriceHL] = useState(false); //hight to low

  //set display states
  const handleAll = () => {
    setIsDiscount(false);
    setIsRodent(false);
    setIsDog(false);
    setIsCat(false);
    setIsBird(false);
    setIsAll(true);
    setIsPriceLH(false);
  };


  const sortProductsByPrice = () =>{
    const sortP = [...PRODUCTS].sort((a, b) =>
      a.price !== a.discount ? a.discount - b.price : a.price - b.price
    );

    return sortP;
  }
  const handlePriceLH = () => {
    
    setPriceLH(sortProductsByPrice);

    setIsPriceLH(true);
    setIsPriceHL(false);
    setIsDiscount(false);
    setIsRodent(false);
    setIsDog(false);
    setIsCat(false);
    setIsBird(false);
    setIsAll(false);
  };
  const handlePriceHL = () => {
   const lowToHigh = sortProductsByPrice();
    setPriceHL(lowToHigh.reverse());//reverse the lowto high list

    setIsPriceHL(true);
    setIsPriceLH(false);
    setIsDiscount(false);
    setIsRodent(false);
    setIsDog(false);
    setIsCat(false);
    setIsBird(false);
    setIsAll(false);
  };

  const handleDiscount = () => {
    setIsPriceHL(false);
    setIsDiscount(true);
    setIsRodent(false);
    setIsDog(false);
    setIsCat(false);
    setIsBird(false);
    setIsAll(false);
    setIsPriceLH(false);
  };

  const handleCat = () => {
    setIsPriceHL(false);
    setIsRodent(false);
    setIsDog(false);
    setIsCat(true); //set cat to true
    setIsBird(false);
    setIsAll(false);
    setIsDiscount(false);
    setIsPriceLH(false);
    // console.log(cats);
  };
  const handleDog = () => {
    setIsPriceHL(false);
    setIsPriceLH(false);
    setIsDiscount(false);
    setIsRodent(false);
    setIsDog(true); //set dog to true
    setIsCat(false);
    setIsBird(false);
    setIsAll(false);
    setIsDiscount(false);
  };

  const handleRodent = () => {
    setIsPriceHL(false);
    setIsPriceLH(false);
    setIsDiscount(false);
    setIsRodent(true); //set rodent to true
    setIsDog(false);
    setIsCat(false);
    setIsBird(false);
    setIsAll(false);
  };
  const handleBird = () => {
    setIsPriceHL(false);
    setIsPriceLH(false);
    setIsDiscount(false);
    setIsRodent(false);
    setIsDog(false);
    setIsCat(false);
    setIsBird(true); //set bird to true
    setIsAll(false);
  };

  const { s_categ } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dbProducts = await getProducts();
        setProducts(dbProducts);
      } catch (err) {
        console.error("Could not retrieve products", err);
      }
    };

    const fetchOnDiscount = async () => {
      try {
        const dProducts = await getDiscountedProducts();
        setDiscount(dProducts);
      } catch (err) {
        console.error("Could not retrieve products", err);
      }
    };

    const fetchCatsProducts = async () => {
      try {
        const catsRes = await getProductByCategory("cat");
        setCats(catsRes);
        //    console.log(catsRes["products"])
      } catch (error) {
        console.log("Could not get product by category: " + error);
      }
    };
    const fetchDogsProducts = async () => {
      try {
        const dogsRes = await getProductByCategory("dog");
        setDogs(dogsRes);
      } catch (error) {
        console.log("Could not get product by category: " + error);
      }
    };
    const fetchRodentsProducts = async () => {
      try {
        const rodentsRes = await getProductByCategory("rodent");
        setRodents(rodentsRes);
      } catch (error) {
        console.log("Could not get rodents: " + error);
      }
    };
    const fetchBirdsProducts = async () => {
      try {
        const birdsRes = await getProductByCategory("bird");
        setBirds(birdsRes);
      } catch (error) {
        console.log("Could not get rodents: " + error);
      }
    };

    if (s_categ !== null) {
      if (s_categ === "1") {
        handleDog();
      }
      if (s_categ === "2") {
        handleCat();
      }
      if (s_categ === "3") {
        handleBird();
      }
      if (s_categ === "4") {
        handleRodent();
      }
    }

    //fetch the products
    fetchProducts();
    fetchOnDiscount();
    fetchCatsProducts();
    fetchDogsProducts();
    fetchBirdsProducts();
    fetchRodentsProducts();
  }, [s_categ, productsState]);

  return (
    <>
      <div className="cntnr shop-ctr">
        <div className=" filter-products">
          <h2>Filter</h2>
          <div>
            <div className="fil-div">
              <button type="button" className="fbuttons" onClick={handleAll}>
                All
              </button>
            </div>
            <div className="fil-div">
              <Button text={"Cat"} classN={"fbuttons"} onClickAdd={handleCat} />
            </div>
            <div className="fil-div">
              <Button text={"Dog"} classN={"fbuttons"} onClickAdd={handleDog} />
            </div>
            <div className="fil-div">
              <Button
                text={"Bird"}
                classN={"fbuttons"}
                onClickAdd={handleBird}
              />
            </div>
            <div className="fil-div">
              <Button
                text={"Rodent"}
                classN={"fbuttons"}
                onClickAdd={handleRodent}
              />
            </div>
            <div className="fil-div">
              <Button
                text={"Discount Deals"}
                classN={"fbuttons"}
                onClickAdd={handleDiscount}
              />
            </div>
            <div className="fil-div">
              <button className="fbuttons" onClick={handlePriceLH}>
                Price
                <ArrowUpwardIcon fontSize="14" />
              </button>
            </div>
            <div className="fil-div">
              <button className="fbuttons" onClick={handlePriceHL}>
                Price
                <ArrowDownwardIcon fontSize="14" />
              </button>
            </div>
          </div>
        </div>

        <div className="shp-contents">
          <h2>
            {" "}
            {isAll === true ? <>By Available Products </> : null}
            {isDiscount === true ? <>By Discount Deals</> : null}
            {isCat === true ? <>By Cat Products </> : null}
            {isDog === true ? <>By Dog Products</> : null}
            {isBird === true ? <>By Bird Products</> : null}
            {isRodent === true ? <>Rodent Products</> : null}
            {isPriceHL === true
              ? <>By Price(High to Low)</>
              : null}
            {isPriceLH === true
              ? <>By Price(Low to High)</>
              : null}{" "}
          </h2>
          <div className="small-container">
            {isAll === true
              ? PRODUCTS.map((prod) => <Card data={prod} key={prod.id} />)
              : null}
            {isCat === true
              ? cats.map((prod) => <Card data={prod} key={prod.id} />)
              : null}
            {isDog === true
              ? dogs.map((prod) => <Card data={prod} key={prod.id} />)
              : null}
            {isBird === true
              ? birds.map((prod) => <Card data={prod} key={prod.id} />)
              : null}
            {isRodent === true
              ? rodents.map((prod) => <Card data={prod} key={prod.id} />)
              : null}
            {isDiscount === true
              ? discountProducts.map((prod) => (
                  <Card data={prod} key={prod.id} />
                ))
              : null}
            {isPriceLH === true
              ? priceLH.map((prod) => <Card data={prod} key={prod.id} />)
              : null}
            {isPriceHL === true
              ? priceHL.map((prod) => <Card data={prod} key={prod.id} />)
              : null}
          </div>
        </div>
      </div>
    </>
  );
};
