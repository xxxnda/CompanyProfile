import React, { useState, useEffect } from 'react';
import {  FaGlobe, FaShippingFast, FaCertificate } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/assets/images/header.png',
      title: 'Premium Indonesian Agricultural Products',
      subtitle: 'Export Quality • International Standards • Sustainable Farming',
      description: 'Leading supplier of premium Candlenut, Cashew Nut, Coffee, and Areca Nut for global markets'
    },
    {
      id: 2,
      image: '/assets/images/header (2).png',
      title: 'Trusted Export Partner Worldwide',
      subtitle: 'ISO Certified • Quality Assured • Reliable Delivery',
      description: 'Serving international traders with consistent quality and professional service since 2025'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Professional Slideshow Header */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/assets/icon/1.png'; // Fallback image
                }}
              />
              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-transparent">
                <div className="flex items-center h-full">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-4 font-medium text-green-100">
                        {slide.subtitle}
                      </p>
                      <p className="text-base md:text-lg mb-8 text-green-50 leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://wa.me/6281111818690?text=Hello,%20I%20am%20interested%20in%20your%20export%20products."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                          Request Export Quote
                        </a>
                        <a
                          href="#products"
                          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
                        >
                          View Products
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Professional Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Why Choose PT. Biola Tunggal Mandiri?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in sustainable agriculture, delivering premium quality Candlenut, Cashew Nut, Coffee, and Areca Nut from our carefully tended farms to your business.
            </p>
          </div>
          
          {/* Feature highlights */}
          {/* Enhanced Professional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            <div className="lg:col-span-2 text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaGlobe className="text-5xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-3">Export Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                International quality standards with ISO certification and global shipping capabilities to serve traders worldwide.
              </p>
            </div>
            
            <div className="lg:col-span-2 text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaCertificate className="text-5xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-3">Certified Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                All products meet international export standards with proper certification for seamless customs clearance.
              </p>
            </div>
            
            <div className="lg:col-span-2 text-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <FaShippingFast className="text-5xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-3">Reliable Logistics</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional packaging and reliable shipping partnerships ensure your products arrive safely and on time.
              </p>
            </div>
          </div>
          
          {/* Professional Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-green-800 to-green-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">2+</div>
                <div className="text-green-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
                <div className="text-green-100">Export Partners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-green-100">Quality Guaranteed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-green-100">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;