import { React, useContext } from "react";
import { Button } from "./button";
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";
import { addToCart } from "../Service/service";

export const Card = (props) => {
  const { id, name, price, image, discount } = props.data;
  //useContext is a hook that comes with react
  const { token } = useContext(ShopContext);

  const handleAddToCart = async (id) =>{
    try{
      const res = await addToCart(id,token);
      console.log(res);
    }catch(er){
      console.error("coulndt add to cart", er)
    }
  }

  //const cartItemAmount = cartItems[id];

  return (
    <div className="card">
      <div className="card-contents">
        <Link to={`/ItemDetails/${id}`}>
          <img src={image} alt="Item image" />
        </Link>
        <h5>{name}</h5>

        <p className="price">
          R {price > discount ? discount : price}
          {price > discount ? (
            <span className="prev">
              <del>R {price}</del>
            </span>
          ) : null}{" "}
        </p>
        <Button
          text={"Add to cart"}
          classN={"add-to-cart-button"}
          // itemAmount={cartItemAmount > 0 && <>({cartItemAmount})</>}
          onClickAdd={() => handleAddToCart(id)}
        />
      </div>
    </div>
  );
};
