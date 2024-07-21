import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs'; // Correct import for WOW
import 'animate.css/animate.min.css'; // Switched to minified version

const ProductCard = ({ product, addToCart }) => {
    useEffect(() => {
        // Initialize WOW for animations when component mounts
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const handleAddToCart = () => {
        // Ensure addToCart function is defined before calling it
        if (addToCart && typeof addToCart === 'function') {
            addToCart(product);
        } else {
            console.error('addToCart function is not defined or not a function.');
        }
    };

    return (
        <div className="product-card wow animate__animated animate__rubberBand">
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
    );
};

export default ProductCard;

