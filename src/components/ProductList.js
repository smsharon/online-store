import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import image from "./Images/banner1.jpg"; 
import './ProductList.css';


const ProductList = ({handleClick}) => {
    const [todayDeals, setTodayDeals] = useState([]);
    const [flashSales, setFlashSales] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);


    //today deals data from server
    useEffect(() => {
        fetch('http://localhost:8002/todaydeals')
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
        fetch('http://localhost:8002/products')
            .then((res) => res.json())
            .then((data) => setMostPopular(data));
    }, []);


    return (
        <div>
            <div className="header">
            <div id="categories">
                <ul>
                    <h3>CATEGORIES</h3>
                    <li>Phones & Tablets</li>
                    <li>Fashion & Accessories</li>
                    <li>Health & Beauty</li>
                    <li>Bags & Shoes</li>
                    <li>Home & Office</li>
                    <li>Furniture</li>
                    <li>Gifts and Toys</li>
                    <li>Sports and Outdoors</li>
                    <li>Baby Products</li>
                    <li>Pet Supplies</li>
                </ul>
            </div>
            <div id="bannerImage">
                <img src={image} alt="banner" />
            </div>
        </div>
        <div id="shopping-list">
            <div>
                <h3>Today's Deals</h3>
                <div className="cards-container">
                {todayDeals.map((i) => (
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
            <div>
                <h3>Flash Sales</h3>                    

                <div className="cards-container">


                {flashSales.map((j) => (
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
                {mostPopular.map((k) => (
                    <div key={k.id} className="cards">
                        <Link to={`/product/${k.id}`} className="product-link">
                        <img src={k.image} alt="product" />
                        <p>{k.name}</p>
                        <p>Ksh {k.price}</p>
                        </Link>
                        <button onClick={() => handleClick(k)}>Add to Cart</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProductList;
