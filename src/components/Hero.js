import React from 'react';
import { FaSeedling, FaLeaf, FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Welcome to PT. Biola Tunggal Mandiri
          </h1>
          <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner in sustainable agriculture, delivering premium quality 
            Kemiri, Kacang Mete, and Kopi from our carefully tended farms to your table.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaSeedling className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Farming</h3>
              <p className="text-gray-600">
                Committed to environmentally friendly practices that preserve our land for future generations.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaLeaf className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-selected products that meet the highest standards of quality and freshness.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FaHeart className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Family Heritage</h3>
              <p className="text-gray-600">
                Three generations of agricultural expertise passed down through our family tradition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;