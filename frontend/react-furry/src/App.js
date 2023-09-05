import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {Navbar} from "./components/nav/navbar";
import {Footer} from "./components/footer";

import {Login} from "./pages/login/login";
import {Register} from "./pages/register/register";
import {Home} from "./pages/home";
import { Shop } from "../src/pages/Shop/Shop";
import {ShoppingCart} from "./pages/Shop/ShoppingCart";
import {ShopContextProvider} from "./context/shop-context";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route
                            path="/login"
                            element={<Login setIsLoggedIn = {
                                setIsLoggedIn
                            } />
}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/ShoppingCart" element={<ShoppingCart />}/>
                    </Routes>

                    <Footer/>
                </Router>
            </ShopContextProvider>
        </div>
    );
};

export default App;
