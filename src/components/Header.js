import React from 'react';
import { FaWhatsapp, FaGlobe, FaCertificate, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-100">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <FaCertificate className="mr-2 text-green-600" />
              <span>ISO Certified Export Quality</span>
            </div>
            <div className="flex items-center">
              <FaGlobe className="mr-2 text-blue-600" />
              <span>International Shipping Available</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <FaPhone className="mr-2 text-green-600" />
              <span>+62 811 1181 8690</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Pt.biolatunggalmandiri@gmail.com</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center h-20">
          {/* Professional Logo Section */}
          <div className="flex items-center">
            <div className="relative">
              <img 
                src="/assets/icon/1.png" 
                alt="PT. Biola Tunggal Mandiri Logo" 
                className="h-16 w-16 mr-4 rounded-lg shadow-md border-2 border-green-100"
              />
              
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800 tracking-wide">
                PT. Biola Tunggal Mandiri
              </h1>
              <p className="text-sm font-medium text-gray-600 hidden sm:block">
                Premium Agricultural Exports • Since 2025
              </p>
            </div>
          </div>
          
          {/* Professional Action Buttons */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://wa.me/6281111818690?text=Halo,%20saya%20tertarik%20dengan%20produk%20ekspor%20Anda.%20Mohon%20kirimkan%20katalog%20dan%20daftar%20harga."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              <FaWhatsapp className="mr-2 text-lg" />
              <span className="hidden sm:inline">Get Export Quote</span>
              <span className="sm:hidden">Quote</span>
            </a>
            

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;