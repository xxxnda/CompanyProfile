import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductGallery from './components/ProductGallery';
import Shipping from './components/Shipping';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <ProductGallery />
      <Shipping />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;