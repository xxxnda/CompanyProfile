import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="/assets/icon/1.png" 
              alt="PT. Biola Tunggal Mandiri Logo" 
              className="h-16 w-16 mr-4"
            />
            <div>
              <h1 className="text-xl font-bold text-green-800">PT. Biola Tunggal Mandiri</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Agricultural Excellence Since 2025</p>
            </div>
          </div>
          
          {/* WhatsApp Contact Button */}
          <div className="flex items-center">
            <a 
              href="https://wa.me/6282129686224?text=Halo,%20saya%20tertarik%20dengan%20produk%20PT.%20Biola%20Tunggal%20Mandiri"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors duration-200 shadow-md"
            >
              <FaWhatsapp className="mr-2 text-lg" />
              <span className="hidden sm:inline">Contact WhatsApp</span>
              <span className="sm:hidden">WA</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;