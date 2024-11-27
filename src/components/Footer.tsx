import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white py-12 ">
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 md:ml-16">
          <h2 className="text-4xl font-bold mb-4">Do you have any questions?</h2>
          <p className="text-gray-400 mb-6">
            Feel free to send us your questions or request a free consultation.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600">
            SEND A MESSAGE
          </button>
        </div>
        
      </div>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 md:px-8 mt-12 border-t border-gray-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:ml-16">
          {/* Left Side */}
          <div className="text-left" id='contact'>
            {/* <ul className="flex space-x-6 mb-4 md:mb-0">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contacts
                </a>
              </li>
            </ul> */}
            <div className="text-gray-400">
              <p>PHONE</p>
              <p>+971585605980, +971 585857795</p>
              <p className="mt-4">support@techmonkey.us</p>
              <p>info@logoipsum.com</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center md:text-right mt-8 md:mt-0 md:mr-16">
            <div className="text-yellow-500 font-bold text-2xl">TECHMONKEYS</div>
            <p className="text-gray-400 mt-2">
              At Tech Monkey, we specialize in delivering a range of innovative solutions tailored to meet your business needs
            </p>
            <p className="text-gray-600 mt-4">&copy; 2024 — Copyright</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
