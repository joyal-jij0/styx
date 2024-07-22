import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CategoryList from './CategoryList';
import Cart from './Cart'; // 

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center">
        <CategoryList />
        <div className="ml-auto flex items-center">
          <div className="w-full max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 w-full rounded bg-gray-700 text-white"
            />
          </div>
          <button onClick={toggleCart} className="ml-4 text-white">
            <FaShoppingCart size={24} />
          </button>
        </div>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
};

export default Navbar;