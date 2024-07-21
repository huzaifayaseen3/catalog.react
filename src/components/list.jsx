import React from 'react';
import { Link } from 'eact-router-dom';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';
import ProductCard from './pamphlet';

const ProductListHeader = () => {
  return (
    <div className="wow animate__animated animate__rubberBand">
      <h2>Products List</h2>
    </div>
  );
};

const ViewCartLink = () => {
  return (
    <div className="wow animate__animated animate__backInUp">
      <Link to="/cart" className="view-cart">Go to Cart</Link>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list-container">
      <ProductListHeader />
      <ViewCartLink />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
