
import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 reveal">
            <h3 className="text-sm font-black text-orange-vivid tracking-widest uppercase mb-4">Expertise</h3>
            <h2 className="text-4xl font-black mb-6">보유 기술</h2>
            <p className="text-gray-400 leading-relaxed">
              20년간 다져진 탄탄한 개발 역량과 업무 효율을 극대화하는 데이터 관리 능력을 갖추고 있습니다.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="bg-gray-800 p-10 rounded-2xl reveal group hover:bg-orange-vivid transition-all duration-500">
              <div className="w-16 h-16 bg-orange-vivid/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg className="w-8 h-8 text-orange-vivid group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-2xl font-black mb-4">개발 (Development)</h4>
              <p className="text-gray-400 group-hover:text-white/90">
                웹, 앱, 시스템 인터페이스 등 전방위적 개발 역량. 
                깔끔하고 유지보수가 용이한 코드를 지향합니다.
              </p>
            </div>
            
            <div className="bg-gray-800 p-10 rounded-2xl reveal group hover:bg-orange-vivid transition-all duration-500">
              <div className="w-16 h-16 bg-orange-vivid/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20">
                <svg className="w-8 h-8 text-orange-vivid group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-black mb-4">엑셀 (Excel)</h4>
              <p className="text-gray-400 group-hover:text-white/90">
                고급 함수 및 VBA를 활용한 데이터 자동화 및 분석 역량. 
                실무 효율성을 극대화하는 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
