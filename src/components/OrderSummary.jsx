import React from 'react';
import { useCart } from '../CartContext';

const OrderSummary = () => {
  const { cart, clearCart, isSummaryOpen, closeSummary, products } = useCart();

  if (!isSummaryOpen) return null;

  const cartItems = Object.keys(cart).map((productId) => {
    const quantity = cart[productId];
    const product = products.find((product) => product.id === parseInt(productId));
    return { ...product, quantity };
  });

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    clearCart();
    closeSummary();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button onClick={closeSummary} className="absolute top-4 right-4 text-black text-xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <div className="flex items-center">
                <span className="mx-2">{item.quantity}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-lg font-semibold">Total:</h3>
            <p className="text-lg font-semibold">₹{totalAmount}</p>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-500 text-white py-2 rounded mt-4"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;