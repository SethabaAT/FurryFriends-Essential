import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/nav/navbar";
import { Footer } from "./components/footer";

import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Home } from "./pages/home";
import { Shop } from "../src/pages/Shop/Shop";
import { ShoppingCart } from "./pages/Shop/ShoppingCart";
import { ShopContextProvider } from "./context/shop-context";
import { RemoveProducts } from "./pages/admin/removeProducts";
import { AddProducts } from "./pages/admin/addProducts";
import { UpdateProduct } from "./pages/admin/updateProducts";
import { Admin } from "./pages/admin/admin";
import { ItemDetails } from "./pages/Shop/itemDetails/itemDetails";
import { Switch } from "@mui/material";
import { Invoice } from "./pages/Shop/Invoice";
import Payment from "./pages/Shop/Payment";
import { About } from "./pages/admin/about";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<Admin />} />

            <Route path="/removeProducts" element={<RemoveProducts />} />
            <Route path="/addProducts" element={<AddProducts />} />
            <Route path="/updateProducts" element={<UpdateProduct />} />

            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/removeProducts" element={<RemoveProducts />} />
            <Route path="/addProducts" element={<AddProducts />} />
            <Route path="/updateProducts" element={<UpdateProduct />} />
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/register" element={<Register />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/ItemDetails/:id" element={<ItemDetails />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
