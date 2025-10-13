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
      "Hello! I am interested in the export products of PT. Biola Tunggal Mandiri. Please provide more information about pricing, specifications, and export procedures."
    );
    window.open(`https://wa.me/6281111818690?text=${message}`, '_blank');
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
              <h4 className="font-bold text-green-800 mb-3 text-lg">Export Inquiry?</h4>
              <p className="text-base text-gray-600 mb-4">
                Contact us on WhatsApp for immediate assistance with:
              </p>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Export pricing & minimum orders</li>
                <li>• Product specifications & certificates</li>
                <li>• Shipping & logistics support</li>
              </ul>
              <div className="mt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get Export Quote
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
    </>
  );
};

export default WhatsAppButton;