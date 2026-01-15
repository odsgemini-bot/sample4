
import React from 'react';

const activities = [
  {
    title: '시스템 고도화 프로젝트',
    category: 'Architecture',
    desc: '기존의 레거시 시스템을 최신 스택으로 전환하여 안정성을 40% 향상시켰습니다.'
  },
  {
    title: '데이터 자동화 툴 개발',
    category: 'Optimization',
    desc: '엑셀 기반의 복잡한 보고 시스템을 자동화하여 업무 시간을 대폭 단축했습니다.'
  },
  {
    title: '코드 리뷰 & 멘토링',
    category: 'Quality Control',
    desc: '팀의 코드 품질을 높이기 위해 지속적으로 기술을 공유하고 꼼꼼하게 리뷰합니다.'
  }
];

const Activities: React.FC = () => {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h3 className="text-sm font-black text-orange-vivid tracking-widest uppercase mb-4">Performance</h3>
          <h2 className="text-4xl font-black">성과 및 주요 활동</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {activities.map((act, index) => (
            <div key={index} className="p-8 border-b-4 border-gray-100 hover:border-orange-vivid transition-all duration-300 reveal shadow-sm hover:shadow-xl">
              <span className="inline-block px-3 py-1 bg-orange-vivid/10 text-orange-vivid text-xs font-bold rounded-full mb-4 uppercase">
                {act.category}
              </span>
              <h4 className="text-2xl font-bold mb-4">{act.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
