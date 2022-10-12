import Home from "./Pages/Home";
import Productlist from "./Pages/Productlist";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



const App = () => {
  return (
 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="products" element={<Productlist/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;