import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
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
    </Routes>
    </div>
  );
}

export default App;
