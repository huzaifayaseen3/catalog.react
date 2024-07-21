import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs'; // Correct import for WOW
import 'animate.css/animate.min.css'; // Switched to minified version

const ProductCard = ({ product, addToCart }) => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const handleAddToCart = () => {
        addToCart(product);
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

