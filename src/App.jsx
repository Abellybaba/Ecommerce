import Home from "./Pages/Home";
import Productlist from "./Pages/Productlist";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";



const App = () => {
  return <div>
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="products" element={<Productlist/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
  </div>;
};

export default App;