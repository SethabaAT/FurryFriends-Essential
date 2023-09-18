import React, {useContext, useState, useEffect} from 'react'
import {Card} from '../../components/card'
import {Button} from '../../components/button'
import {getProductByCategory} from '../../Service/service'

import PRODUCTS from
'../products/productsData'

export const Shop = () => {

    //get products by category
    const [cats,
        setCats] = useState([]);
    const [dogs,
        setDogs] = useState([]);
    const [birds,
        setBirds] = useState([]);
    const [rodents,
        setRodents] = useState([]);

    useEffect(() => {

        const fetchCatsProducts = async() => {
            try {
                const catsRes = await getProductByCategory('cat');
                setCats(catsRes["products"]);
            //    console.log(catsRes["products"])

            } catch (error) {
                console.log("Could not get product by category: " + error)
            }

        }
        const fetchDogsProducts = async() => {
            try {

                const dogsRes = await getProductByCategory('dog');
                setDogs(dogsRes["products"]);
                console.log(dogsRes["products"]);

            } catch (error) {
                console.log("Could not get product by category: " + error)
            }

        }
        const fetchRodentsProducts = async() => {
            try {

                const rodentsRes = await getProductByCategory('rodent');
                setRodents(rodentsRes["products"]);

            } catch (error) {
                console.log("Could not get rodents: " + error)
            }

        }
        const fetchBirdsProducts = async() => {
            try {
                const birdsRes = await getProductByCategory('rodent');
                setBirds(birdsRes["products"]);

            } catch (error) {
                console.log("Could not get rodents: " + error)
            }

        }

        //fetch the products
        fetchCatsProducts();
        fetchDogsProducts();
        fetchBirdsProducts();
        fetchRodentsProducts();
    }, []);

    //display statuses
    const [isAll, setIsAll] = useState(true); //first show all the products
    const [isCat, setIsCat] = useState(false);
    const [isDog, setIsDog] = useState(false);
    const [isRodent, setIsRodent] = useState(false);
    const [isBird, setIsBird] = useState(false);

    //set display states
    const handleAll = () =>{
        setIsRodent(false);
        setIsDog(false);
        setIsCat(false);
        setIsBird(false);
        setIsAll(true);
    }

    const handleCat =() =>{
        
        setIsRodent(false);
        setIsDog(false);
        setIsCat(true);//set cat to true
        setIsBird(false);
        setIsAll(false);

        // console.log(cats);
    }
    const handleDog  =() =>{
        setIsRodent(false);
        setIsDog(true); //set dog to true
        setIsCat(false);
        setIsBird(false);
        setIsAll(false);
        
    }

    const handleRodent  =() =>{
        setIsRodent(true); //set rodent to true
        setIsDog(false);
        setIsCat(false);
        setIsBird(false);
        setIsAll(false);
        
    }
    const handleBird  =() =>{
        setIsRodent(false);
        setIsDog(false);
        setIsCat(false);
        setIsBird(true); //set bird to true
        setIsAll(false);
        
    }

    

    

    return ( <> < div className = "cntnr" > <div className='filter-products'>
        <Button text={"All"} onClickAdd={handleAll}/>
        <Button text={"Cat"} onClickAdd={handleCat}/>
        <Button text={"Dog"} onClickAdd={handleDog}/>
        <Button text={"Bird"} onClickAdd={handleBird}/>
        <Button text={"Rodent"} onClickAdd={handleRodent}/>
    </div> 
        <h2> Available Products </h2>
        <div className="small-container">

           {/* { (isAll === true) ? 
                 PRODUCTS.map((prod) => (<Card data={prod} key={prod.id} />))
            : (isCat===true ? cats.map((prod) => (<Card data={prod} key={prod.id} />)) :
            isBird ? birds.map((prod) => (<Card data={prod} key={prod.id} />)):
            isDog ? dogs.map((prod) => (<Card data={prod} key={prod.id} />)) :
            isRodent ? rodents.map((prod) => (<Card data={prod} key={prod.id} />)) : null)} */}
            
            { (isAll === true) ? 
                 PRODUCTS.map((prod) => (<Card data={prod} key={prod.id} />))
            : null}
            {isCat ===true ? cats.map((prod) => (<Card data={prod} key={prod.id} /> )) : null}
            {isDog ===true ? dogs.map((prod) => (<Card data={prod} key={prod.id} /> )) : null}
            {isBird ===true ? birds.map((prod) => (<Card data={prod} key={prod.id} /> )) : null}
            {isRodent ===true ? rodents.map((prod) => (<Card data={prod} key={prod.id}/> )) : null}
        </div>
    </div > 
    </>)
}