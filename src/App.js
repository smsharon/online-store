import React, {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import './App.css';




function App() {
  const [ cart, setCart ] = useState([])
  
  const [searchTerm, setSearchTerm] = useState('');

  const [ cartItems, setCartItems ] = useState([]);

  console.log(cart)

     //add to cart click event
     const handleClick = (item) => {
      console.log(item)
      console.log(cart)

      //post cart data to server
      fetch('http://localhost:8002/cart', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
      .then((res)=> res.json())
      .then((data)=> console.log(data))
    }

    //fetch cart data from server
    useEffect(()=> {
      fetch('http://localhost:8002/cart')
      .then((res)=> res.json())
      .then((data)=> setCart(data))
    }, [])

  console.log(cart)

    // Remove the product with the ID from the cartItems state
  const onDeleteCart = (productId) => {
    fetch(`http://localhost:8002/cart/${productId}`, {
      method: 'DELETE',
    })
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      console.log(updatedCart);
  
  };


  return (
    <div className="app-container">
      
    <NavBar setSearchTerm={setSearchTerm}  />
    <Routes>
      <Route path="/login" element= {<Login />}/>
      <Route path="/signup" element= {<Signup />}/>
      <Route path="/cart" element={<Cart cart={cart} onDelete={onDeleteCart}/>} />
      <Route path="/" element= {<ProductList handleClick={handleClick} searchTerm={searchTerm} />}/>
      <Route path="/product/:productId" element={<ProductDetails />} /> 
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
    
      <Footer /> 
      </div>

 
  );
}

export default App;
