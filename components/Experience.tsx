
import React from 'react';

const experiences = [
  {
    period: '2004 - Present',
    title: 'Senior Software Engineer / Developer',
    company: 'Free Agent & Various Projects',
    description: '20년 동안 다양한 산업 분야에서 웹 및 시스템 개발을 수행하며 숙련된 기술력을 쌓아왔습니다.'
  },
  {
    period: 'Focus Areas',
    title: 'Full Stack Development',
    company: 'Multiple Tech Stacks',
    description: '프론트엔드부터 백엔드까지 전체 아키텍처를 이해하고 안정적인 서비스를 구축하는 데 집중합니다.'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h3 className="text-sm font-black text-orange-vivid tracking-widest uppercase mb-4">Journey</h3>
          <h2 className="text-4xl font-black">20년의 경력, 멈추지 않는 성장</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 mb-12 reveal">
              <div className="md:w-1/4 text-orange-vivid font-black text-xl">
                {exp.period}
              </div>
              <div className="md:w-3/4 border-l-2 border-gray-100 pl-8 pb-12 relative">
                <div className="absolute w-4 h-4 bg-orange-vivid rounded-full -left-[9px] top-2"></div>
                <h4 className="text-2xl font-bold mb-2">{exp.title}</h4>
                <p className="text-orange-vivid font-semibold mb-4">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
