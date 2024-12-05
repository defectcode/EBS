// src/pages/Cart.tsx
import React from 'react';
import { useCart } from '../components/context/CartContext';
import '../style.css'


const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) return <p>Your cart is empty!</p>;

  return (
    <div className="cart">
    <h1>Your Shopping Cart</h1>
    <table className="cart-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>{item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
            <td>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="cart-total">
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
    </div>
  </div>
  

  );
};

export default Cart;
