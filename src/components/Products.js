import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Candlenut',
      title: 'Premium Candlenut',
      description: 'High-quality candlenuts, perfect for culinary and industrial use. Rich in healthy oils and nutrients, our candlenuts are carefully harvested and processed to maintain their natural flavor and aroma.',
      image: '/assets/images/kemiri%20(1).png',
      features: ['Organically grown', 'Hand-selected', 'Rich in nutrients', 'Traditional processing']
    },
    {
      id: 2,
      name: 'Cashew Nut',
      title: 'Premium Cashew Nut',
      description: 'Expertly processed cashew nuts with exceptional taste and quality. Our cashews are carefully roasted to perfection, providing a delicious and nutritious snack for any occasion.',
      image: '/assets/images/mete%20(1).png',
      features: ['Premium grade', 'Perfectly roasted', 'No additives', 'Export quality']
    },
    {
      id: 3,
      name: 'Coffee',
      title: 'Artisan Coffee Beans',
      description: 'Specialty coffee beans grown in optimal conditions with traditional methods. Our coffee delivers a rich, full-bodied flavor that coffee enthusiasts appreciate and love.',
      image: '/assets/images/kopi%20(1).png',
      features: ['Single origin', 'Arabica beans', 'Traditional roasting', 'Rich flavor profile']
    },
    {
      id: 4,
      name: 'Areca Nut',
      title: 'Premium Areca Nut',
      description: 'High-quality areca nuts sourced from the finest plantations. Our areca nuts are carefully selected and processed to ensure optimal quality for traditional and commercial use.',
      image: '/assets/images/pinang%20(1).png',
      features: ['Premium grade', 'Sun-dried', 'Natural processing', 'Traditional quality']
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            EXPORT QUALITY PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Our Premium Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium Indonesian agricultural products, 
            each meeting international export standards and representing generations of farming expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 relative"
            >
              {/* Export Quality Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  EXPORT GRADE
                </div>
              </div>
              
              {/* Product Image */}
              <div className="relative h-72 bg-gradient-to-br from-green-50 to-gray-50 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/assets/icon/1.png'; // Fallback image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              </div>
              
              {/* Product Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                    {product.name.toUpperCase()}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700 ml-1">Premium</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-green-800 mb-3 leading-tight">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{product.description}</p>
                
                {/* Professional Features Grid */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-green-700 mb-3 uppercase tracking-wide flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    Quality Certifications
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full mr-3 shadow-sm"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Professional Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <a 
                    href={`https://wa.me/6281111818690?text=Hello,%20I%20am%20interested%20in%20importing%20${product.name}%20from%20PT.%20Biola%20Tunggal%20Mandiri.%20Please%20provide%20export%20pricing%20and%20specifications.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Request Export Quote
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Professional Export Information Section */}
        <div className="mt-20 bg-gradient-to-r from-green-800 via-green-700 to-green-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Global Export
              </h3>
              <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                All products meet international standards with proper documentation for seamless export procedures.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">ISO Certified</h4>
                <p className="text-green-100">International quality management standards compliance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Export Documentation</h4>
                <p className="text-green-100">Complete certificates and permits for international trade</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Global Shipping</h4>
                <p className="text-green-100">Reliable logistics partners for worldwide delivery</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://wa.me/6281111818690?text=Hello,%20I%20would%20like%20to%20discuss%20bulk%20export%20orders%20and%20partnership%20opportunities%20with%20PT.%20Biola%20Tunggal%20Mandiri."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Discuss Export Partnership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;