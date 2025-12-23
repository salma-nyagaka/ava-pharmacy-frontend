import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Prescription from './pages/Prescription';
import Doctor from './pages/Doctor';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.css';

type PageType = 'home' | 'categories' | 'products' | 'product-detail' | 'prescription' | 'doctor' | 'cart' | 'checkout' | 'chat' | 'login' | 'lab' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [cartCount, setCartCount] = useState(3);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} onNavigate={handleNavigate} />

      <main className="main-content">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'categories' && <Categories onNavigate={handleNavigate} />}
        {currentPage === 'products' && <Products onNavigate={handleNavigate} />}
        {currentPage === 'product-detail' && <ProductDetail onNavigate={handleNavigate} />}
        {currentPage === 'prescription' && <Prescription onNavigate={handleNavigate} />}
        {currentPage === 'doctor' && <Doctor onNavigate={handleNavigate} />}
        {currentPage === 'cart' && <Cart onNavigate={handleNavigate} />}
        {currentPage === 'checkout' && <Checkout onNavigate={handleNavigate} />}
        {currentPage === 'login' && (
          <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ color: 'var(--primary)' }}>Sign In (Coming Soon)</h2>
          </div>
        )}
        {currentPage === 'lab' && (
          <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ color: 'var(--primary)' }}>Lab Tests (Coming Soon)</h2>
          </div>
        )}
        {currentPage === 'chat' && (
          <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ color: 'var(--primary)' }}>Chat Consultation (Coming Soon)</h2>
          </div>
        )}
        {currentPage === 'about' && <About onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
