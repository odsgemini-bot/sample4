
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '소개', href: '#about' },
    { name: '경력', href: '#experience' },
    { name: '기술', href: '#skills' },
    { name: '활동', href: '#activities' },
    { name: '연락처', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-orange-vivid' : 'text-white'}`}>
          ODS.DEV
        </a>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-orange-vivid ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
            {/* Mobile menu could be added here if needed */}
            <span className={isScrolled ? 'text-orange-vivid' : 'text-white'}>☰</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
