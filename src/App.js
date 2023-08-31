import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import './App.css';



function App() {
  const [cartItems, setCartItems] = useState([]);

  

  const removeFromCart = (productId) => {
    // Remove the product with the given ID from the cartItems state
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div className="app-container">
      
    <NavBar cartItemCount={cartItems.length} />
    <Routes>
      <Route path="/login" element= {<Login />}/>
      <Route path="/signup" element= {<Signup />}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route path="/product/:productId" element={<ProductDetails />} /> 
      <Route path="/" element={<ProductList />} />
    </Routes>
    
      <Footer /> 
      </div>

 
  );
}

export default App;
