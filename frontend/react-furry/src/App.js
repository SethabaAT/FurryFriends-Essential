
import {BrowserRouter as Router, Routes, Route, Switch, Link} from 'react-router-dom'
import {Navbar} from './components/nav/navbar'
import { Footer } from "./components/footer";

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from "./pages/home";
import { ShoppingCart } from './pages/Shop/ShoppingCart';
import { ShopContextProvider } from './context/shop-context';

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider >
        <Router>

          <Navbar/>
          
          <Routes>          
            <Route path="/" element= {<Home/>}/>          
            <Route path="/login"  element={<Login />}/>         
            <Route path="/register" element={<Register />} />          
            <Route path='/ShoppingCart' element={<ShoppingCart />} />          
          </Routes>

          <Footer />

        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
