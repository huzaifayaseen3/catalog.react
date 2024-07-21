import React from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import 'animate.css/animate.css';
import 'wowjs/css/libs/animate.css';

const Cart = ({ cart }) => {
  return (
    <div className="cart wow animate__animated animate__flipInY">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
