import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Kemiri',
      title: 'Premium Candlenut',
      description: 'High-quality kemiri nuts, perfect for traditional Indonesian cooking. Rich in healthy oils and nutrients, our kemiri is carefully harvested and processed to maintain its natural flavor and aroma.',
      image: '/assets/images/kemiri%20(1).png',
      features: ['Organic grown', 'Hand-selected', 'Rich in nutrients', 'Traditional processing']
    },
    {
      id: 2,
      name: 'Kacang Mete',
      title: 'Premium Cashew Nuts',
      description: 'Expertly processed cashew nuts with exceptional taste and quality. Our cashews are carefully roasted to perfection, providing a delicious and nutritious snack for any occasion.',
      image: '/assets/images/mete%20(1).png',
      features: ['Premium grade', 'Perfectly roasted', 'No additives', 'Export quality']
    },
    {
      id: 3,
      name: 'Kopi',
      title: 'Artisan Coffee Beans',
      description: 'Specialty coffee beans grown in optimal conditions with traditional methods. Our coffee delivers a rich, full-bodied flavor that coffee enthusiasts appreciate and love.',
      image: '/assets/images/kopi%20(1).png',
      features: ['Single origin', 'Arabica beans', 'Traditional roasting', 'Rich flavor profile']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of agricultural products, 
            each representing generations of farming expertise and dedication to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Product Image */}
              <div className="h-64 bg-green-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/assets/icon/1.png'; // Fallback image
                  }}
                />
              </div>
              
              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-700 mb-2 uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <a 
                  href={`https://wa.me/6282129686224?text=Halo,%20saya%20tertarik%20dengan%20produk%20${product.name}%20dari%20PT.%20Biola%20Tunggal%20Mandiri`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 inline-block text-center"
                >
                  Inquire About {product.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;