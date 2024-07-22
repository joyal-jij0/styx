import React from 'react';
import Navbar from './components/navbar.jsx';
import ProductList from './components/ProductList.jsx';
import VideoSection from './components/Video.jsx';
import { CartProvider } from './CartContext.js';
import products from './products.js';

function App() {
  return (
      <div className='bg-gray-900'>
        <CartProvider>
        <Navbar/>
        <VideoSection/>
        
        <div className="container mx-auto p-4">
          <ProductList products={products} />
        </div>
      </CartProvider>
    </div>

  );
}

export default App;
