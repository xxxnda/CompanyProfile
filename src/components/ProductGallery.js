import React, { useState } from 'react';

const ProductGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      category: 'Kemiri',
      image: '/assets/images/kemiri%20(1).png',
      title: 'Premium Kemiri Grade A',
      description: 'Hand-selected kemiri nuts with exceptional quality'
    },
    {
      id: 2,
      category: 'Kemiri',
      image: '/assets/images/kemiri%20(2).png',
      title: 'Organic Kemiri',
      description: 'Organically grown kemiri from sustainable farms'
    },
    {
      id: 3,
      category: 'Kemiri',
      image: '/assets/images/kemiri%20(3).png',
      title: 'Traditional Kemiri',
      description: 'Traditionally processed kemiri with authentic flavor'
    },
    {
      id: 4,
      category: 'Kacang Mete',
      image: '/assets/images/mete%20(1).png',
      title: 'Premium Cashews',
      description: 'Grade A cashew nuts with superior taste'
    },
    {
      id: 5,
      category: 'Kacang Mete',
      image: '/assets/images/mete%20(2).png',
      title: 'Roasted Cashews',
      description: 'Perfectly roasted cashews with rich flavor'
    },
    {
      id: 6,
      category: 'Kacang Mete',
      image: '/assets/images/mete%20(3).png',
      title: 'Export Quality Cashews',
      description: 'International standard cashew nuts'
    },
    {
      id: 7,
      category: 'Kopi',
      image: '/assets/images/kopi%20(1).png',
      title: 'Arabica Coffee Beans',
      description: 'Premium arabica beans with rich aroma'
    },
    {
      id: 8,
      category: 'Kopi',
      image: '/assets/images/kopi%20(2).png',
      title: 'Single Origin Coffee',
      description: 'Specialty single origin coffee beans'
    },
    {
      id: 9,
      category: 'Kopi',
      image: '/assets/images/kopi%20(3).png',
      title: 'Traditional Roast',
      description: 'Traditionally roasted coffee with authentic taste'
    }
  ];

  const filterCategories = ['All', 'Kemiri', 'Kacang Mete', 'Kopi'];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Product Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our complete range of premium agricultural products. 
            Filter by category to see specific product varieties.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-green-600 hover:bg-green-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="h-64 bg-green-50 overflow-hidden relative">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/assets/icon/1.png'; // Fallback image
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-green-900 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <a 
                  href={`https://wa.me/6282129686224?text=Halo,%20saya%20tertarik%20dengan%20${item.title}%20dari%20PT.%20Biola%20Tunggal%20Mandiri`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">No products found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;