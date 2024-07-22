import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { useCart } from '../CartContext';

const Navbar = ({scrollToCategory}) => {
  
  const {toggleCart} = useCart();

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center">
      <ul className="flex space-x-4 text-white">
          <li onClick={() => scrollToCategory('men')} className="p-2 cursor-pointer text-xl text-pink-500">Men</li>
          <li onClick={() => scrollToCategory('women')} className="p-2 cursor-pointer text-xl text-pink-500">Women</li>
          <li onClick={() => scrollToCategory('children')} className="p-2 cursor-pointer text-xl text-pink-500">Children</li>
        </ul>
        <div className="ml-auto flex items-center">
          <div className="w-full max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 w-full rounded bg-gray-700 text-white"
            />
          </div>
          <button onClick={toggleCart} className="ml-4 text-pink-500">
            <FaShoppingCart size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;