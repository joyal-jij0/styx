import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const categories = ['Men', 'Women', 'Children'];

  const categorizedProducts = categories.reduce((acc, category) => {
    acc[category] = products.filter(product => product.category === category);
    return acc;
  }, {});

  return (
    <div className="container mx-auto p-4">
      {categories.map(category => (
        <div key={category}>
          <h2 className="text-5xl flex justify-center text-pink-500 font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {categorizedProducts[category].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;