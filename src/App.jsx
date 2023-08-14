import React from "react";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";

const App = () => {
  const user = true
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/success">
          <Success />
        </Route> */}
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </Router>
  );
};

export default App;