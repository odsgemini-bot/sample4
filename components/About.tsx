
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 reveal">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-orange-vivid"></div>
                <img 
                    src="https://picsum.photos/seed/dev/600/800" 
                    alt="About Oh Duseong" 
                    className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl hidden md:block">
                    <p className="text-4xl font-black text-orange-vivid">20+</p>
                    <p className="text-gray-500 font-bold">Years of Experience</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 reveal">
            <h3 className="text-sm font-black text-orange-vivid tracking-widest uppercase mb-4">Introduce</h3>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              꼼꼼함으로 빚어내는<br/>완벽한 한 줄의 코드
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                안녕하세요. 20년 차 개발자 <span className="text-gray-900 font-bold">오두성</span>입니다. 
                저는 단순히 코드를 작성하는 사람이 아닌, 비즈니스의 가치를 디지털로 견고하게 구축하는 빌더입니다.
              </p>
              <p>
                저를 설명하는 가장 핵심적인 키워드는 <span className="bg-orange-vivid/10 text-orange-vivid font-bold px-1">'꼼꼼함'</span>입니다. 
                작은 디테일 하나가 전체 시스템의 안정성을 결정한다는 믿음으로, 빈틈없는 로직과 최적화된 설계를 추구합니다.
              </p>
              <p>
                "열심히 개발하자"는 단순한 구호가 아닙니다. 변화하는 기술 트렌드에 발맞추어 끊임없이 학습하고, 
                맡은 바 임무를 성실하게 완수하겠다는 저의 의지이자 철학입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
