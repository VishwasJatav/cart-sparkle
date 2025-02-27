
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Shop from '@/pages/Shop';
import Product from '@/pages/Product';
import Cart from '@/pages/Cart';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import './App.css';

function App() {
  // Preload images on app load for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      const importAll = (r) => r.keys().map(r);
      // Would normally preload key images here
    };
    
    preloadImages();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
