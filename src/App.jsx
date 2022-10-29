import Home from "./Pages/Home";
import Productlist from "./Pages/Productlist";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";



const App = () => {
   const user = useSelector((state) => state.user.currentUser);
  return <div>
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="products" element={<Productlist/>}/>
        <Route path="products/:category" element={<Productlist/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart/>} />
        {/* <Route path="login" element={<Login/>} /> */}
        <Route path="login" element={user ? <Home /> : <Login />} />
        {/* <Route path="login"> element={user ? redirect("/") : redirect("/login")} /> */}
        <Route path="register" element={<Register/>} />
        <Route path="success" element={<Success />} />
        
      </Routes>
      </BrowserRouter>
  </div>;
};

export default App;