import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <header>
            <h1>ViHjelperDeg AS</h1>
            <p>Din IT-partner</p>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <footer>
            <p>Kontakt oss: support@vihjelperdeg.no | +47 123 45 678</p>
            <p>Adresse: Teknologiveien 12, 0484 Oslo</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
