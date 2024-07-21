import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/list';
import ProductDetails from './components/feature';
import Cart from './components/One';
import Checkout from './components/leave';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => setProducts(data.products))
        .catch(error => console.error('Error fetching products:', error));
    }, <p>Loading...</p>);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Routes>
      <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
      <Route path="/product/:productId" element={<ProductDetails products={products} addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
      <Route path="/checkout" element={<Checkout cart={cart} />} />
    </Routes>
  );
}

export default App;
