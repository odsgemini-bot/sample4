
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-orange-vivid text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 reveal">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              함께 멋진 미래를<br/>만들어볼까요?
            </h2>
            <p className="text-orange-100 text-xl font-light mb-8 max-w-md">
              열심히 그리고 꼼꼼하게, 최상의 결과를 약속드립니다. 언제든 편하게 연락 주세요.
            </p>
          </div>
          
          <div className="lg:w-1/2 w-full reveal">
            <div className="bg-white p-10 rounded-3xl text-gray-900 shadow-2xl">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-orange-vivid/10 rounded-full flex items-center justify-center text-orange-vivid">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</p>
                    <a href="mailto:oh.neodavinci@gmail.com" className="text-xl font-bold hover:text-orange-vivid transition-colors">oh.neodavinci@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-orange-vivid/10 rounded-full flex items-center justify-center text-orange-vivid">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                    <a href="tel:01068225256" className="text-xl font-bold hover:text-orange-vivid transition-colors">010-6822-5256</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-gray-100">
                <p className="text-gray-400 text-sm">
                  * 현재 프리랜서 프로젝트 및 협업 기회를 환영합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
