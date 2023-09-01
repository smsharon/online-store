
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the product ID from the URL

const ProductDetails = ({handleClick}) => {
    const { productId } = useParams(); // Get the product ID from the URL parameter
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        // Fetch detailed product information using the product ID
        fetch(`http://localhost:8002/products/${productId}`)
            .then((res) => res.json())
            .then((data) => setProductDetails(data));
    }, [productId]);

    if (!productDetails) {
        return <p>Loading...</p>; // Show loading message while fetching data
    }
    const specificationsList = productDetails.specifications.split(';');


    return (
        <div className="product-details-container">
            
            <div className="product-details-image">
               <img src={productDetails.image} alt="product" />
            </div>
            <div className="product-details-content">
               <h2>{productDetails.name}</h2>
               <p>Price: Ksh{productDetails.price}</p>
               <p>Brand: {productDetails.brand}</p>
               <p>Description: {productDetails.description}</p>
             <div>
                <p>Specifications:</p>
                <ul>
                    {specificationsList.map((spec, index) => (
                        <li key={index}>{spec.trim()}</li>
                    ))}
                </ul>
             </div>
              <div className="button-container">
               <button onClick={handleClick}>Add to Cart</button>
               <button>Buy Now</button>
              </div>

            </div>
            
        </div>
    );
}

export default ProductDetails;
