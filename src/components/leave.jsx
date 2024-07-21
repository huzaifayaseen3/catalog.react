import React from 'react';
import { useParams } from 'react-router-dom';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';

const ProductDetails = ({ products, addToCart }) => {
  const { productId } = useParams();
  const product = getProductById(products, productId);

  if (!product) {
    return <NotFound />;
  }

  return (
    <ProductInfo product={product} addToCart={addToCart} />
  );
};

const getProductById = (products, id) => {
  return products.find((p) => p.id === parseInt(id));
};

const NotFound = () => {
  return (
    <div className="error-message">
      <h2>Product not found</h2>
      <p>Sorry, the product you're looking for doesn't exist. Please try searching again.</p>
      <p>
        <a href="/products">Back to product list</a>
      </p>
    </div>
  );
};

const ProductInfo = ({ product, addToCart }) => {
  return (
    <div className="product-details animated-container">
      <ProductTitle title={product.title} />
      <ProductImage src={product.thumbnail} alt={product.title} aria-label={`Image of ${product.title}`} />
      <ProductDescription description={product.description} />
      <ProductPrice price={product.price} />
      <ProductActions addToCart={addToCart} product={product} />
    </div>
  );
};

const ProductTitle = ({ title }) => {
  return <h2>{title}</h2>;
};

const ProductImage = ({ src, alt, ariaLabel }) => {
  return <img src={src} alt={alt} aria-label={ariaLabel} />;
};

const ProductDescription = ({ description }) => {
  return <p>{description}</p>;
};

const ProductPrice = ({ price }) => {
  return <p>${price}</p>;
};

const ProductActions = ({ addToCart, product }) => {
  return (
    <button onClick={() => addToCart(product)}>{addToCartButtonText}</button>
  );
};

const addToCartButtonText = 'Add to Cart'; // Make this a configurable prop or translated string

export default ProductDetails;
