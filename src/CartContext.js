import React, { createContext, useState, useContext } from 'react';
import products from './products'; // Import your products data

// Create Context
const CartContext = createContext();

// Create Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: (prevCart[product.id] || 0) + quantity,
    }));
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[product.id];
      return newCart;
    });
  };

  const getQuantity = (product) => {
    return cart[product.id] || 0;
  };

  const updateQuantity = (product, quantity) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: quantity,
    }));
  };

  const clearCart = () => {
    setCart({});
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getQuantity, updateQuantity, clearCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook for using the Cart Context
export const useCart = () => useContext(CartContext);