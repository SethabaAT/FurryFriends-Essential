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
import { ShopContext, ShopContextProvider } from "./context/shop-context";
import { RemoveProducts } from "./pages/admin/removeProducts";
import { AddProducts } from "./pages/admin/addProducts";
import { UpdateProduct } from "./pages/admin/updateProducts";
import { Admin } from "./pages/admin/admin";
import { ItemDetails } from "./pages/Shop/itemDetails/itemDetails";
import { Invoice } from "../src/pages/Shop/Invoice";
import { Payment } from "../src/pages/Shop/Payment";
import { About } from "./pages/admin/about";
import { Invoices } from "./pages/Shop/Invoices/Invoices";
import { Orders } from "./pages/Shop/Orders/Orders";
import { Review } from "./pages/Shop/Review/Review";

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
            <Route path="/removeProducts/:id" element={<RemoveProducts />} />
            <Route path="/addProducts" element={<AddProducts />} />
            <Route path="/updateProducts/:id" element={<UpdateProduct />} />
            <Route path="/updateProducts" element={<UpdateProduct />} />

            <Route path="/register" element={<Register />} />

            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Invoices" element={<Invoices />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Review/:id" element={<Review />} />
            <Route path="/about" element={<About />} />

            <Route path="/shop/:s_categ" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/ItemDetails/:id" element={<ItemDetails />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
          </Routes>

          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
