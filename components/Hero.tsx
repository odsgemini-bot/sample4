
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-vivid opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-vivid opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <p className="text-orange-vivid font-bold tracking-[0.3em] uppercase mb-4 animate-pulse">
          DILIGENT DEVELOPER
        </p>
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
          오두성
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-12 tracking-wide text-gray-300">
          "<span className="text-white font-bold italic">열심히 개발하자</span>"
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-4 bg-orange-vivid text-white font-bold rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            나에 대해 알아보기
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            연락하기
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
