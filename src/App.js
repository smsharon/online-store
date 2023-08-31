import React, {useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import './App.css';


function App() {
  const [ cart, setCart ] = useState([])
  const [ cartItems, setCartItems ] = useState(cart);

  console.log(cart)

     //add to cart click event
     const handleClick = (item) => {
      console.log(item)
      alert('Added to cart successfully')
      // setCart([...cart, item])


      fetch('http://localhost:8002/cart', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
      .then((res)=> res.json())
      .then((data)=> console.log(data))
      .catch((error)=> console.log("error 404",error))
    }

    useEffect(()=> {
      fetch('http://localhost:8002/cart')
      .then((res)=> res.json())
      .then((data)=> setCart(data))
    }, [])

  console.log(cart)

    // Remove the product with the given ID from the cartItems state
  const onDeleteCart = (productId) => {
    fetch(`http://localhost:8002/cart/${productId}`, {
      method: 'DELETE',
    })
    // .then((res)=> res.json())
    // .then((data)=> setCartItems(data.cart))
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
console.log(updatedCart);
  };




  return (
    <div className="app-container">
      
    <NavBar  />
    <Routes>
      <Route path="/login" element= {<Login />}/>
      <Route path="/signup" element= {<Signup />}/>
      <Route path="/cart" element={<Cart cart={cart} onDelete={onDeleteCart}/>} />
      <Route path="/" element= {<ProductList handleClick={handleClick}/>}/>
    </Routes>
    
      <Footer /> 
      </div>

 
  );
}

export default App;
