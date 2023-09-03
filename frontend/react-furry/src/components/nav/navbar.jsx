import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'

import './navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { Button } from '../button'

import logo from '../../images/display/Logo.png'

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
const handleLogout = () => {
        console.log("logged out");
        setIsLoggedIn(false);
        };
//go to the login page
const singInNavigate = useNavigate();

  return (
    <div className='navbar'>
        
        <div className="nav-logo"> 
            <h4>Ferry Friends</h4> 
            <img src={logo}  alt="Image Logo"/>
        </div>
        <div className="search-bar">
                <form action="/search" method="get">
                    <input type="text" name="q" placeholder="Search" />   
                </form>
        </div>
        {/* <div className="search-menu">          */}
            <div className="menu">
                <ul className="myNav">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Content</a></li>
                    <li><Link to="/ShoppingCart"><GiShoppingCart size={30}/></Link></li>
                    {isLoggedIn ? (
                        <li><Button classN={"btn"} text={"Sign Out"} onClickAdd={handleLogout} /></li>
                    ) : (
                        <li><Button classN={"btn"} text={"Sign In"} onClickAdd={() => singInNavigate("/login")} /></li>
                    )}
                </ul> 
            </div>
            
        {/* </div> */}
       
</div>
  )
}
