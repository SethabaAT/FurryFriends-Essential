import React from 'react'
import {GiShoppingCart} from 'react-icons/gi'

import './navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '../button'

import logo from '../../images/display/Logo.png'
import { Badge } from '@mui/material'

export const Navbar = ({isLoggedIn, setIsLoggedIn, userType, setUserType}) => {
    const handleLogout = () => {
        console.log("logged out");
        //clear local storage
         localStorage.clear();
         setUserType(-1);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };

    //go to the login page
    const singInNavigate = useNavigate();

    //get user type
    // const userType = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='navbar'>

            <Link to="/">
                <div className="nav-logo">
                    <h4><span className='logo-1'>Ferry</span> <span>Friends </span> Essentials</h4>
                    {/* <img src={logo} alt="Image Logo"/> */}
                </div>
            </Link>

            {/* check the type of user */}

            {
                ((userType) === -1)
                    ? (
                        <div className="menu">
                        <ul className="myNav">
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
                                <Link to="/ShoppingCart"><GiShoppingCart size={22}/></Link>
                            </li>

                            {
                                isLoggedIn
                                    ? (
                                        <li><Button classN={"def-btn"} text={"Sign Out"} onClickAdd={handleLogout}/></li>
                                    )
                                    : (
                                        <li><Button
                                            classN={"def-btn"}
                                            text={"Sign In"}
                                            onClickAdd={() => singInNavigate("/login")}/></li>

                                    )
                            }
                        </ul>
                    </div>
                    )
                    :  <div className="menu">
                    <ul className="myNav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        

                        {
                            isLoggedIn
                                ? (
                                    <li><Button classN={"def-btn"} text={"Sign Out"} onClickAdd={handleLogout}/></li>
                                )
                                : (
                                    <li><Button
                                        classN={"def-btn"}
                                        text={"Sign In"}
                                        onClickAdd={() => singInNavigate("/login")}/></li>

                                )
                        }
                    </ul>
                </div>
            }

        </div>
    )
}
