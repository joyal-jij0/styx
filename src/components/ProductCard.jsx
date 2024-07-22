import React from 'react';
import { useCart } from '../CartContext';

export default function ProductCard({ product }){
  const { addToCart, removeFromCart, getQuantity } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  const handleIncreaseQuantity = () => {
    addToCart(product, 1);
  };

  const handleDecreaseQuantity = () => {
    if (getQuantity(product) > 1) {
      addToCart(product, -1);
    } else {
      handleRemoveFromCart();
    }
  };

  const quantity = getQuantity(product);
  const isInCart = quantity > 0;

  return (
    <div className="rounded-lg p-4 bg-gray-800">
      <img src={product.image} alt={product.name} className=" object-cover rounded-xs mb-4" />
      <h3 className="text-lg font-bold mb-2 text-pink-500">{product.name}</h3>
      <p className="text-slate-200 mb-4 ">₹{product.price}</p>
      {isInCart ? (
        <div className="flex items-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={handleRemoveFromCart}
          >
            Remove
          </button>
          <div className="flex items-center mx-4">
            <button
              className="bg-slate-100 text-black px-2 py-1 w-8 rounded-md"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className="mx-4 text-slate-200 text-2xl">{quantity}</span>
            <button
              // className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg"
              className="bg-slate-100 text-black px-2 py-1 w-8 rounded-md"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
