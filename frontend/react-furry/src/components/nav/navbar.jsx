import React from 'react'
import {GiShoppingCart} from 'react-icons/gi'

import './navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '../button'

import logo from '../../images/display/Logo.png'
import {Badge} from '@mui/material'

const adminMenu = (
    <> 
        <li><Link to="/admin">HOME</Link></li>
        <li><Link to="/addProducts">ADD</Link></li>
        <li><Link to="/updateProducts">UPDATE</Link></li>
        <li><Link to="/removeProducts">DELETE</Link></li>
    </>);

const DefaultUserMenu = 
    (<>
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
    </>);

const userMenu = 
    (<>
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
        <li>
            <Link to="">ORDERS</Link>
        </li>
    </>);

export const Navbar = ({isLoggedIn, setIsLoggedIn, userType, setUserType}) => {

     //go to the login page
     const navigate = useNavigate();

    const handleLogout = () => {
        console.log("logged out");
        //clear local storage
        localStorage.clear();

        //set the user type to default
        setUserType(-1);
        setIsLoggedIn(false);

        navigate("/");
    };

    //get user type const userType = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem("token");
    return (
        <div className='navbar'>

            <Link to="/">
                <div className="nav-logo">
                    <h4>
                        <span className='logo-1'>Ferry</span>
                        <span>Friends
                        </span>
                        Essentials</h4>
                    {/* <img src={logo} alt="Image Logo"/> */}
                </div>
            </Link>
            
            {/* //hide searchbar if user is admin */}
            {userType === 1 ? null : 
            <div class="search-bar">
                <form action="/search" method="get">
                    <input type="text" name="q" placeholder="Search" />  
                </form>
            </div>}
           
            <div className="menu">
                <ul className="myNav">
                     {/* check the type of user */}
                    { userType === 1 ? adminMenu : ( userType === 0 ? userMenu : DefaultUserMenu)}
                    {
                        (token == null && isLoggedIn == false)
                            ? (
                                <li><Button
                                    classN={"def-btn"}
                                    text={"Sign In"}
                                    onClickAdd={() => navigate("/login")}/></li>

                            ):(
                                <li><Button classN={"def-btn"} text={"Sign Out"} onClickAdd={handleLogout}/></li>
                            )
                            
                    }
                </ul>
            </div>
        </div>
    )
}
