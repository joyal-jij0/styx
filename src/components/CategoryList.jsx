import React from 'react';

const CategoryList = () => {
  const categories = ['Men', 'Women', 'Children'];

  return (
    <ul className="hidden md:flex space-x-4">
      {categories.map((category, index) => (
        <li
          key={index}
          className="p-2 cursor-pointer text-xl text-pink-500"
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;