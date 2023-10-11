import { React, useContext } from "react";
import { Button } from "./button";
import { ShopContext } from "../context/shop-context";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../Service/service";


export const Card = (props) => {
  const { id, name, price, image, discount } = props.data;
  //useContext is a hook that comes with react
  const { token, toggleCartState, userType } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = async (id) => {
    try {
      if (token !== null) {
        const res = await addToCart(id, token);
        toggleCartState();

      } else {
        navigate("/Login");
      }
    } catch (er) {
      console.error("couldn't add to cart", er);
    }
  };

  //const cartItemAmount = cartItems[id];

  return (
    <div className="card">
      <div className="card-contents">
       {price > discount ? <div className="Sale">
          Furry Sale          
        </div> : null}
        <Link to={`/ItemDetails/${id}`}>
          <img src={image} className="zoom-image" alt="Item image" />
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
        {userType !== 1 && (
          <Button
            text={"Add to cart"}
            classN={"add-to-cart-button"}
            onClickAdd={() => handleAddToCart(id)}
          />
        )}
      </div>

    </div>
  );
};
