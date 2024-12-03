import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Product } from './types/Product';

function App() {

  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    const uniqueProduct = { ...product, uniqueId: `${product.id}-${Date.now()}` };
    setCart(prevCart => [...prevCart, uniqueProduct]);
  };

  const removeFromCart = (uniqueId: string) => {
    setCart(prevCart => prevCart.filter(item => item.uniqueId !== uniqueId));
  };

  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
