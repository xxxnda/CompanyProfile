import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Wijaya',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      feedback: 'PT. Biola Tunggal Mandiri has been our trusted supplier for over 5 years. Their kemiri quality is consistently excellent, and it has become a key ingredient in our signature dishes.',
      rating: 5,
      product: 'Kemiri'
    },
    {
      id: 2,
      name: 'Ahmad Rahman',
      role: 'Export Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      feedback: 'The cashew nuts from PT. Biola Tunggal Mandiri meet international standards. Our overseas clients are always satisfied with the quality and consistency of their products.',
      rating: 5,
      product: 'Kacang Mete'
    },
    {
      id: 3,
      name: 'Maria Santos',
      role: 'Coffee Shop Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      feedback: 'Their coffee beans have transformed our business. The rich flavor and aroma of their single origin coffee keeps our customers coming back for more.',
      rating: 5,
      product: 'Kopi'
    },
    {
      id: 4,
      name: 'Budi Santoso',
      role: 'Food Distributor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      feedback: 'Working with PT. Biola Tunggal Mandiri has been a pleasure. They provide reliable delivery, competitive pricing, and most importantly, products that our customers love.',
      rating: 5,
      product: 'All Products'
    },
    {
      id: 5,
      name: 'Linda Chen',
      role: 'Retail Chain Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80',
      feedback: 'The sustainability practices of PT. Biola Tunggal Mandiri align perfectly with our company values. Their products are not only high quality but also environmentally responsible.',
      rating: 5,
      product: 'Sustainable Products'
    },
    {
      id: 6,
      name: 'Robert Johnson',
      role: 'International Buyer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      feedback: 'PT. Biola Tunggal Mandiri exceeds international quality standards. Their attention to detail and commitment to excellence makes them our preferred supplier in Indonesia.',
      rating: 5,
      product: 'Export Quality'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get visible testimonials for different screen sizes
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say 
            about our products and service quality.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Desktop View - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-green-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex mt-2">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.feedback}</p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {testimonial.product}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 card */}
          <div className="md:hidden">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-4">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-green-800">{testimonials[currentSlide].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentSlide].role}</p>
                  <div className="flex mt-2">
                    {renderStars(testimonials[currentSlide].rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonials[currentSlide].feedback}</p>
              
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonials[currentSlide].product}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-green-600 hover:text-green-800"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-green-600 hover:text-green-800"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-green-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Ready to experience the quality that our customers love?
          </p>
          <a 
            href="https://wa.me/6282129686224?text=Halo,%20saya%20tertarik%20untuk%20menjadi%20customer%20PT.%20Biola%20Tunggal%20Mandiri"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Become Our Customer Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;