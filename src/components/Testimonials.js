import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Indrawati',
      role: 'Restaurant Owner',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      feedback: 'The candlenuts from PT. Biola Tunggal Mandiri are absolutely amazing! My traditional Indonesian dishes taste so much better, and customers always ask what makes my sambals and sauces so flavorful. Been using them for 3 years now.',
      rating: 5,
      product: 'Candlenut'
    },
    {
      id: 2,
      name: 'Ahmad Wijaya',
      role: 'Nuts Distributor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      feedback: 'Initially, I was hesitant about ordering in bulk, but after trying their cashew nuts, I was immediately impressed! Fair pricing, consistent quality, and most importantly, their customer service is incredibly friendly.',
      rating: 4,
      product: 'Cashew Nuts'
    },
    {
      id: 3,
      name: 'Rina Sari',
      role: 'Coffee Shop Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      feedback: 'As a coffee enthusiast, I am very selective about coffee beans. Thank goodness I found PT. Biola Tunggal Mandiri! Their beans are fresh with an incredible aroma. My customers often ask about my coffee supplier.',
      rating: 5,
      product: 'Coffee Beans'
    },
    {
      id: 4,
      name: 'Joko Sutrisno',
      role: 'Food Distributor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      feedback: 'Working with PT. Biola Tunggal Mandiri has been extremely satisfying. Delivery is always on time, packaging is neat, and what makes me comfortable is they are always communicative about order updates. Highly recommended!',
      rating: 5,
      product: 'All Products'
    },
    {
      id: 5,
      name: 'Maria Lestari',
      role: 'Retail Store Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1161&q=80',
      feedback: 'When I first ordered, I was worried about the quality. But it turns out their products exceeded my expectations! Even customers often ask when we will restock. Their team is also very patient in explaining product details.',
      rating: 4,
      product: 'Organic Products'
    },
    {
      id: 6,
      name: 'David Santoso',
      role: 'Export Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      feedback: 'For exports, quality standards must be very high. PT. Biola Tunggal Mandiri understands this need well. Complete documentation, proper certificates, and their products always pass international buyer quality checks.',
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
            Don't just take our word for it. Listen to real experiences from our loyal customers 
            who have experienced the quality of our products and services firsthand.
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
            Ready to experience the quality that makes our customers satisfied?
          </p>
          <a 
            href="https://wa.me/6281111818690?text=Hello,%20I%20am%20interested%20in%20becoming%20a%20customer%20of%20PT.%20Biola%20Tunggal%20Mandiri.%20Could%20you%20explain%20your%20products%20and%20services?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;