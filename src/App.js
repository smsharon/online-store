import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import './App.css';



function App() {

  return (
    <div >
     
      <NavBar /> 
      <ProductList />
      <Footer /> 
    </div>
  );
}

export default App;
