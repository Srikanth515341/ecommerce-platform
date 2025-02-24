import React from 'react';
import { useCart } from './CartContext'; // Import useCart hook

const CheckoutPage = () => {
  const { cart } = useCart(); // Access cart data
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0); // Calculate total price

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add products to your cart.</p>
      ) : (
        <div>
          <h2>Review Your Order</h2>
          <div>
            {cart.map((product) => (
              <div key={product.id} style={{ marginBottom: '10px' }}>
                <span>{product.name} - ${product.price}</span>
              </div>
            ))}
          </div>
          <h3>Total Price: ${totalPrice}</h3>
          <button>Complete Purchase</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
