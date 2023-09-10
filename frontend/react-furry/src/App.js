import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {Navbar} from "./components/nav/navbar";
import {Footer} from "./components/footer";

import {Login} from "./pages/login/login";
import {Register} from "./pages/register/register";
import {Home} from "./pages/home";
import {Shop} from "../src/pages/Shop/Shop";
import {ShoppingCart} from "./pages/Shop/ShoppingCart";
import {ShopContextProvider} from "./context/shop-context";
import {RemoveProducts} from "./pages/admin/removeProducts";
import {AddProducts} from "./pages/admin/addProducts";
import {UpdateProduct} from "./pages/admin/updateProducts";
import {Admin} from "./pages/admin/admin";
// import {ItemDetails} from "./pages/Shop/itemDetails/ItemDetails";
import {Switch} from "@mui/material";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [userType, setUserType] = useState(-1);

    return (
        <div className="App">
            <ShopContextProvider>

                <Router>
                    <Navbar
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        userType={userType}
                        setUserType={setUserType}/>

                    <Routes>
                        <Route path="/" element={<Home />}/>

                        <Route
                            path="/login"
                            element={<Login setIsLoggedIn = {
                                setIsLoggedIn
                            }
                            setUserTypes = {setUserType} />
                            }
                        />

                        <Route path="/admin" element={<Admin />}/>
                        <Route path="/removeProducts" element={<RemoveProducts />}/>
                        <Route path="/addProducts" element={<AddProducts/>}/>
                        <Route path="/updateProducts" element={<UpdateProduct />}/>
                        
                        <Route path="/register" element={<Register />}/>

                        <Route path="/shop" element={<Shop />}/>
                        <Route path="/ShoppingCart" element={<ShoppingCart />}/>
                    </Routes>

                    <Footer/>
                </Router>
            </ShopContextProvider>
        </div>
    );
};

export default App;
