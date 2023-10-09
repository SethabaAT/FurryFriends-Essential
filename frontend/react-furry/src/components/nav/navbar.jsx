import React, { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { ShopContext } from "../../context/shop-context";

import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { getCartItems } from "../../Service/service";
const logo = "/images/display/Logo.png";

export const Navbar = () => {
  const {
    setIsLoggedIn,
    userType,
    setUserType,
    totCart,
    changeTotCart,
    token,
    cartState,
    setToken,
  } = useContext(ShopContext);
  const [cartItems, setCartItems] = useState([]);
  //go to the login page
  const navigate = useNavigate();

  let tot = 0;

  useEffect(() => {
    if (token !== null && userType !== 1) {
      const fetchCartItems = async () => {
        try {
          const c_items = await getCartItems(token);
          setCartItems(c_items);
          getCartQty(c_items);
        } catch (error) {
          //set the cart items state

          console.error("could not get cart items", error);
        }
      };

      fetchCartItems();
    } else {
      console.log("No token, please login");
    }
  }, [cartItems, cartState, token]);

  const getCartQty = (itms) => {
    itms.map((itm) => (tot += itm.qty));

    changeTotCart(tot);
  };

  //different nav bars for users
  const userMenu = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <a href="#">ABOUT</a>
      </li>
      <li>
        <Link to="/Shop">SHOP</Link>
      </li>
      <li>
        <Link to="">ORDERS</Link>
      </li>
      <li>
        <Link to="/ShoppingCart">
          <Badge badgeContent={totCart}>
            {" "}
            <ShoppingCartIcon fontSize="16" />
          </Badge>
        </Link>
      </li>
    </>
  );
  const adminMenu = (
    <>
      <li>
        <Link to="/admin">HOME</Link>
      </li>
      <li>
        <Link to="/Shop">SHOP</Link>
      </li>
      <li>
        <Link to="/addProducts">ADD</Link>
      </li>
      <li>
        <Link to="/updateProducts">UPDATE</Link>
      </li>
      <li>
        <Link to="/removeProducts">DELETE</Link>
      </li>
    </>
  );

  const DefaultUserMenu = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <a href="/about">ABOUT</a>
      </li>
      <li>
        <Link to="/Shop">SHOP</Link>
      </li>
      <li>
        <Link to="/ShoppingCart">
          <Badge badgeContent={"0"}>
            {" "}
            <ShoppingCartIcon fontSize="16" />
          </Badge>
        </Link>
      </li>
    </>
  );

  const handleLogout = () => {
    console.log("logged out");
    //clear local storage
    localStorage.clear();

    //set the user type to default
    setUserType(-1);
    setToken(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <h4>
            <span className="logo-1">Ferry</span>
            <span>Friends</span>
            Essentials
          </h4>
          {/* <img src={logo} alt="Image Logo"/> */}
        </div>
      </Link>

      {/* hide searchbar if user is admin */}
      {userType === 1 ? null : (
        <div className="search-bar">
          <form action="/search" method="get">
            <input type="text" name="q" placeholder="Search" />
          </form>
        </div>
      )}

      <div className="menu">
        <ul className="myNav">
          {/* check the type of user */}
          {userType === 1
            ? adminMenu
            : userType === 0 && token !== null
            ? userMenu
            : DefaultUserMenu}

          {token === null && userType === -1 ? (
            <li>
              <Button
                classN={"def-btn li-btn"}
                text={"Sign In"}
                onClickAdd={() => navigate("/login")}
              />
            </li>
          ) : (
            <>
              <li>
                <Button
                  classN={"def-btn li-btn"}
                  text={"Sign Out"}
                  onClickAdd={handleLogout}
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
