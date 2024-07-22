import React, { createContext, useState, useContext } from 'react';
import products from './products';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSummaryOpen, setSummaryOpen] = useState(false);

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
    })
  };

  const updateQuantity = (product, quantity) => {
    if (quantity <= 0) {
      removeFromCart(product);
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: quantity,
      }));
    }
  };

  const getQuantity = (product) => {
    return cart[product.id] || 0;
  };

  const clearCart = () => {
    setCart({});
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const openSummary = () => {
    setSummaryOpen(true);
    setCartOpen(false);
  };

  const closeSummary = () => {
    setSummaryOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getQuantity,
        clearCart,
        isCartOpen,
        toggleCart,
        isSummaryOpen,
        openSummary,
        closeSummary,
        products
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);