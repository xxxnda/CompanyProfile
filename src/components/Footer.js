import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/icon/1.png" 
                alt="PT. Biola Tunggal Mandiri Logo" 
                className="h-16 w-16 mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold">PT. Biola Tunggal Mandiri</h3>
                <p className="text-green-200">Agricultural Excellence Since 2025</p>
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Committed to sustainable agriculture and delivering premium quality Candlenut, Cashew Nut, Coffee, and Areca Nut. We bridge traditional farming methods with modern quality standards, ensuring our products meet both local and international expectations.
            </p>
            
            {/* Sustainability Message */}
            <div className="bg-green-700 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-green-100">Our Commitment</h4>
              <p className="text-sm text-green-200">
                "Preserving our earth for future generations through sustainable farming practices while delivering uncompromising quality."
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-100">
                    Jl. Buyut Kaswa, Ranji Kulon, Kasokandel District<br />
                    Majalengka Regency, West Java 45453<br />
                    Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="text-green-400 mr-3" />
                <div>
                  <p className="text-green-100">6281111818690</p>
                  <p className="text-sm text-green-200">Mon-Fri: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 mr-3" />
                <div>
                  <a 
                    href="mailto:Pt.biolatunggalmandiri@gmail.com" 
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    Pt.biolatunggalmandiri@gmail.com
                  </a>
                  <p className="text-sm text-green-200">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaWhatsapp className="text-green-400 mr-3" />
                <div>
                  <a 
                    href="https://wa.me/6281111818690" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-white transition-colors duration-200"
                  >
                    +62 811 1181 8690  
                  </a>
                  <p className="text-sm text-green-200">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            
            {/* Quick Actions */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-green-200">Quick Actions</h4>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/6281111818690?text=Halo,%20saya%20ingin%20melakukan%20pemesanan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  • Place an Order
                </a>
                <a 
                  href="https://wa.me/6281111818690?text=Halo,%20saya%20ingin%20meminta%20penawaran%20harga."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  • Request Price Quote
                </a>
                <a 
                  href="https://wa.me/6281111818690?text=Halo,%20saya%20tertarik%20untuk%20kerjasama."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  • Partnership Inquiry
                </a>
                <a 
                  href="https://wa.me/6281111818690?text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20produk%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-100 hover:text-white transition-colors duration-200 text-sm"
                >
                  • Product Information
                </a>
              </div>
            </div>

            {/* Social Media */}
            
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-green-200 text-sm">
                © 2025 PT. Biola Tunggal Mandiri. All rights reserved.
              </p>
              <p className="text-green-300 text-xs mt-1">
                Committed to sustainable agriculture and quality excellence.
              </p>
            </div>
            
            {/* Certification/Quality Badges */}
            <div className="flex items-center space-x-4 text-green-200 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>Organic Farming</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>Export Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;