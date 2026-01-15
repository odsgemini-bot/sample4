
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 font-medium mb-4 md:mb-0">
          © {new Date().getFullYear()} 오두성. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm font-bold text-gray-400">
          <p>DILIGENT DEVELOPMENT</p>
          <span className="text-orange-vivid">|</span>
          <p>METICULOUS DESIGN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
