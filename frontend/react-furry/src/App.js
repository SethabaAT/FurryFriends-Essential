
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import {Navbar} from './components/nav/navbar'
import { Footer } from "./components/footer";

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from "./pages/home";

const App = () => {
  return (
    <div className="App">

      <Router>

        <Navbar/>

        <Routes>
          {/* home route */}
          <Route path="/" element= {<Home/>}/>

          {/* login */}
          <Route path="/login"  element={<Login />}/>


          {/* Register  route*/}
          <Route path="/register" element={<Register />} />
          
          
        </Routes>

        <Footer />

      </Router>
     
    </div>
  );
}

export default App;
