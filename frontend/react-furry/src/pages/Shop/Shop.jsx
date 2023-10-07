<<<<<<< HEAD
import React, { useContext, useState, useEffect } from "react";
import { Card } from "../../components/card";
import { Button } from "../../components/button";
import { getProductByCategory } from "../../Service/service";
=======
import React, {useContext, useState, useEffect} from 'react'
import {Card} from '../../components/card'
import {Button} from '../../components/button'
import {getProductByCategory} from '../../Service/service'
import '../../style.css'

>>>>>>> newb

import PRODUCTS from "../products/productsData";
import { useParams } from "react-router";

export const Shop = () => {
  //get products by category
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [birds, setBirds] = useState([]);
  const [rodents, setRodents] = useState([]);

   //display statuses
   const [isAll, setIsAll] = useState(true); //first show all the products
   const [isCat, setIsCat] = useState(false);
   const [isDog, setIsDog] = useState(false);
   const [isRodent, setIsRodent] = useState(false);
   const [isBird, setIsBird] = useState(false);
 
   //set display states
   const handleAll = () => {
     setIsRodent(false);
     setIsDog(false);
     setIsCat(false);
     setIsBird(false);
     setIsAll(true);
   };
 
   const handleCat = () => {
     setIsRodent(false);
     setIsDog(false);
     setIsCat(true); //set cat to true
     setIsBird(false);
     setIsAll(false);
 
     // console.log(cats);
   };
   const handleDog = () => {
     setIsRodent(false);
     setIsDog(true); //set dog to true
     setIsCat(false);
     setIsBird(false);
     setIsAll(false);
   };
 
   const handleRodent = () => {
     setIsRodent(true); //set rodent to true
     setIsDog(false);
     setIsCat(false);
     setIsBird(false);
     setIsAll(false);
   };
   const handleBird = () => {
     setIsRodent(false);
     setIsDog(false);
     setIsCat(false);
     setIsBird(true); //set bird to true
     setIsAll(false);
   };

  const { s_categ } = useParams();

  useEffect(() => {
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

    if(s_categ !== null){
        
        if(s_categ === "1"){           
            handleDog();
        }
        if(s_categ === "2"){           
            handleCat();
        }
        if(s_categ === "3"){           
            handleBird();
        }
        if(s_categ === "4"){           
            handleRodent();
        }
    }

    //fetch the products
    fetchCatsProducts();
    fetchDogsProducts();
    fetchBirdsProducts();
    fetchRodentsProducts();
  }, [s_categ,]);

 

<<<<<<< HEAD
  return (
    <>
      <div className="cntnr">
        {" "}
        <div className="filter-products">
          <button onClick={handleAll}>All</button>
          <Button text={"Cat"} onClickAdd={handleCat} />
          <Button text={"Dog"} onClickAdd={handleDog} />
          <Button text={"Bird"} onClickAdd={handleBird} />
          <Button text={"Rodent"} onClickAdd={handleRodent} />
        </div>
=======
    return ( <> 
    < div className = "cntnr" > <div className='filter-products'>
        <button className="fbuttons" onClick={handleAll} >All</button>
        <Button text={"Cat"} classN={"fbuttons"} onClickAdd={handleCat}/>
        <Button text={"Dog"} classN={"fbuttons"} onClickAdd={handleDog}/>
        <Button text={"Bird"} classN={"fbuttons"} onClickAdd={handleBird}/>
        <Button text={"Rodent"} classN={"fbuttons"} onClickAdd={handleRodent}/>
    </div> 
>>>>>>> newb
        <h2> Available Products </h2>
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
        </div>
      </div>
    </>
  );
};
