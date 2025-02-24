import React from 'react';
import { useCart } from './CartContext'; // Import useCart hook

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Access cart and removeFromCart

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>{product.name} - ${product.price}</span>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
