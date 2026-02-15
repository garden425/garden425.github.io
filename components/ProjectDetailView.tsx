
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onClose }) => {
  const accentColor = project.accentColor || '#1a1a1a';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-[110] bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <span className="text-xl font-black tracking-tighter text-gray-900">KIM</span>
            <div className="hidden md:flex space-x-8 text-[11px] font-bold text-gray-400">
              <span className="cursor-pointer hover:text-gray-900">ME</span>
              <span className="cursor-pointer text-gray-900">Projects</span>
              <span className="cursor-pointer hover:text-gray-900">Tools</span>
              <span className="cursor-pointer hover:text-gray-900">Contact</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="group flex items-center space-x-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span>Close</span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-12 pb-32 px-6 min-h-[600px] flex items-center">
        {/* Background Image positioned behind text */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={project.imageUrl} 
            className="w-full h-full object-cover opacity-20 blur-[10px] scale-105"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-80" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* Header Top: Tags & Title */}
          <div className="mb-20">
            <div className="flex space-x-3 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black text-gray-500 border border-gray-200 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-sm uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4 flex flex-wrap items-baseline">
              {project.title}
              {project.titleAccent && (
                <span 
                  className="ml-4 font-serif-display italic drop-shadow-sm"
                  style={{ color: accentColor }}
                >
                  {project.titleAccent}
                </span>
              )}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-bold tracking-tight max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          {/* Header Bottom: Overview & Role */}
          <div className="grid md:grid-cols-2 gap-12 border-t border-gray-200/50 pt-16 bg-white/30 backdrop-blur-sm rounded-xl p-8 md:p-0 md:bg-transparent md:backdrop-blur-none">
            <div>
              <h2 className="text-2xl font-black mb-6 tracking-tight">Overview</h2>
              <p className="text-gray-500 leading-relaxed font-medium whitespace-pre-wrap">
                {project.overview}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 tracking-tight">Role</h2>
              <div className="space-y-1">
                <p className="font-black text-gray-900 text-lg mb-2">{project.role}</p>
                {project.roleList?.map(item => (
                  <p key={item} className="text-gray-400 font-medium">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section - Red Theme (#FF5C4D) */}
      <section className="py-32 px-6 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-black text-3xl mb-4 block text-[#FF5C4D]">Problem</span>
            <h2 className="text-5xl font-black mb-10 tracking-tight text-gray-900">{project.problemTitle || '기존의 문제점'}</h2>
            <div className="max-w-4xl">
              <p className="text-gray-600 text-lg leading-relaxed mb-16 font-medium whitespace-pre-wrap">
                {project.problemText}
              </p>
              
              <div className="space-y-8">
                {project.problemBullets?.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-5">
                    <div 
                      className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#FF5C4D] flex items-center justify-center text-[#FF5C4D] font-black text-xs mt-1"
                    >✕</div>
                    <p className="text-gray-500 font-medium leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Display Section (Grayish Background) */}
      <section className="py-32 px-6 bg-[#f8f7f5]">
        <div className="max-w-6xl mx-auto">
          <div className="relative group">
            <img 
              src={project.mockupUrl || project.imageUrl} 
              alt="Mockups" 
              className="rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-3xl border border-gray-900/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Solution Section - Blue Theme (#3B82F6) */}
      <section className="py-32 px-6 bg-white mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-black text-3xl mb-4 block text-[#3B82F6]">Solution</span>
            <h2 className="text-5xl font-black mb-10 tracking-tight text-gray-900">{project.solutionTitle || '해결 방향 및 결과'}</h2>
            <div className="max-w-4xl">
              <p className="text-gray-600 text-lg leading-relaxed mb-16 font-medium whitespace-pre-wrap">
                {project.solutionText}
              </p>
              
              <div className="space-y-10">
                {project.solutionBullets?.map((bullet, idx) => (
                  <div key={idx} className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#3B82F6] flex items-center justify-center text-[#3B82F6] font-black text-xs mt-1">✓</div>
                    <p className="text-gray-500 font-medium leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100 text-center">
        <p className="text-gray-300 font-black text-[10px] uppercase tracking-[0.5em]">
          2026 KIM PORTFOLIO. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetailView;
