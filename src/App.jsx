import React from 'react';
import Navbar from './components/navbar.jsx';
import ProductList from './components/ProductList.jsx';
import VideoSection from './components/Video.jsx';
import { CartProvider } from './CartContext.js';
import products from './products.js';
import Cart from './components/Cart.jsx';
import OrderSummary from './components/OrderSummary.jsx';

function App() {
  return (
      <div className='bg-gray-900'>
        <CartProvider>
        <Navbar/>
        <VideoSection/>
        
        <div className="container mx-auto p-4">
          <ProductList products={products} />
        </div>
        <Cart/>
        <OrderSummary/>
      </CartProvider>
    </div>

  );
}

export default App;
