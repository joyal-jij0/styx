import React from 'react';
import ProductCard from './ProductCard';
import products from '../products';

const ProductList = () => {
  const categorizedProducts = {
    men: products.filter((product) => product.category === 'Men'),
    women: products.filter((product) => product.category === 'Women'),
    children: products.filter((product) => product.category === 'Children'),
  };

  return (
    <div className="p-4">
      <div id="men" className="mb-8">
        <h2 className="text-5xl flex justify-center text-pink-500 font-bold mb-8">Men</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categorizedProducts.men.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div id="women" className="mb-8">
        <h2 className="text-5xl flex justify-center text-pink-500 font-bold mb-8">Women</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categorizedProducts.women.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div id="children" className="mb-8">
        <h2 className="text-5xl flex justify-center text-pink-500 font-bold mb-8">Children</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categorizedProducts.children.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;