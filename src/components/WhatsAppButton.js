import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show tooltip after button appears
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo! Saya tertarik dengan produk PT. Biola Tunggal Mandiri. Mohon informasi lebih lanjut."
    );
    window.open(`https://wa.me/6282129686224?text=${message}`, '_blank');
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group relative"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          {/* Hover effect ring */}
          <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-xl p-6 w-80 transform transition-all duration-300">
            <button
              onClick={closeTooltip}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <FaTimes className="text-base" />
            </button>
            
            <div className="pr-8">
              <h4 className="font-bold text-green-800 mb-3 text-lg">Need Help?</h4>
              <p className="text-base text-gray-600 mb-4">
                Chat with us on WhatsApp for quick assistance with:
              </p>
              <div className="mt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                >
                  Start Chat
                </button>
              </div>
            </div>
            
            {/* Tooltip arrow */}
            <div className="absolute bottom-0 right-8 transform translate-y-1">
              <div className="w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
            </div>
          </div>
        )}
      </div>

      {/* Alternative contact options for mobile */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <div className="flex flex-col space-y-2">
          {/* Call button */}
          <a
            href="tel:+622187654321"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
          
          {/* Email button */}
          <a
            href="mailto:info@biolatunggalmandiri.com"
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;