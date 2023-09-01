import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import image from "./Images/banner1.jpg"; 
import './ProductList.css';


const ProductList = ({handleClick, searchTerm}) => {
    const [todayDeals, setTodayDeals] = useState([]);
    const [flashSales, setFlashSales] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    
    const filterProducts = (products) => {
        return products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      };
    


    //today deals data from server
    useEffect(() => {
        fetch('http://localhost:8002/products')
            .then((res) => res.json())
            .then((data) => setTodayDeals(data));
    }, []);

    //flash sales from server
    useEffect(() => {
        fetch('http://localhost:8002/mostpopular')
            .then((res) => res.json())
            .then((data) => setFlashSales(data));
    }, []);

    //most popular data from server
    useEffect(() => {
        fetch('http://localhost:8002/todaydeals')
            .then((res) => res.json())
            .then((data) => setMostPopular(data));
    }, []);


    return (
        <div>
            <div className="header">
            
            <div id="bannerImage">
                <img src={image} alt="banner" />
            </div>
        </div>
        <div id="shopping-list">
            <div>
                <h3>Today's Deals</h3>
                <div className="cards-container">
                {filterProducts(todayDeals).map((i) => (
                    <div key={i.id} className="cards">
                        <Link to={`/product/${i.id}`} className="product-link">
                        <img src={i.image} alt="product" />
                        <p>{i.name}</p>
                        <p>Ksh {i.price}</p>

                        </Link>

                        <button onClick={() => handleClick(i)}>Add to Cart</button>


                    </div>
                ))}
                </div>
            </div>
            <div className='flash'>
                <h3>Flash Sales</h3>                    

                <div className="cards-container">


                {filterProducts(flashSales).map((j) => (
                    <div key={j.id} className="cards">
                        <Link to={`/product/${j.id}`} className="product-link">
                        <img src={j.image} alt="product" />
                        <p>{j.name}</p>
                        <p>Ksh {j.price}</p>
                        </Link>
                        <button onClick={() => handleClick(j)}>Add to Cart</button>
                    </div>
                ))}
                </div>
            </div>
            <div>
                <h3>Most Popular</h3>
                <div className="cards-container">
                {filterProducts(mostPopular).map((k) => (
                    <div key={k.id} className="cards">
                        <Link to={`/product/${k.id}`} className="product-link">
                        <img src={k.image} alt="product" />
                        <p>{k.name}</p>
                        <p>Ksh {k.price}</p>
                        </Link>
                        <button onClick={() => handleClick(k)}>Add to Cart</button>
                    </div>
                ))}
                {searchTerm && filterProducts.length === 0 && (
              <p>No products found.</p>
            )}
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductList;
