import React from 'react';
import { useCart } from '../CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, toggleCart, openSummary, products } = useCart();

  if (!isCartOpen) return null;

  const cartItems = Object.keys(cart).map((productId) => {
    const quantity = cart[productId];
    const product = products.find((product) => product.id === parseInt(productId));
    return { ...product, quantity };
  });

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button onClick={toggleCart} className="absolute top-4 right-4 text-black text-xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is currently empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item, item.quantity - 1)}
                    className="px-2 py-1 rounded-md w-8 bg-slate-200"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                    className="px-2 py-1 rounded-md w-8 bg-slate-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-lg font-semibold">Total:</h3>
              <p className="text-lg font-semibold">₹{totalAmount}</p>
            </div>
            <button
              onClick={openSummary}
              className="w-full bg-green-500 text-white py-2 rounded mt-4"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;