import React, { useState } from 'react';
import { ExternalLink, Code2, Layers, Cpu, Sparkles, ArrowRight, CheckCircle2, Eye } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'software', label: 'Software Development' },
    { id: 'web', label: 'Web Development' },
    { id: 'creative', label: 'Problem Solving' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'software':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'web':
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 'ai':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'creative':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            VERIFIED TECHNICAL IMPLEMENTATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Real repositories authored and maintained on GitHub — detailing problem statements, solution architectures, tech stacks, individual contributions, and documentation links.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-sky-400 hover:bg-slate-800/80 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5 flex flex-col justify-between hover:border-sky-500/40 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div className="space-y-4">
                
                {/* Top Strip: Category & Status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-xs font-mono font-medium text-sky-400 dark:text-sky-400 light:text-sky-600">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                    {project.status}
                  </span>
                </div>

                {/* Title & Overview */}
                <div>
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">
                    {project.overview}
                  </p>
                </div>

                {/* Problem Statement & Solution Architecture */}
                <div className="p-3.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      Problem Statement:
                    </div>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="pt-1 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400">
                      Solution Architecture:
                    </div>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      {project.solutionArchitecture}
                    </p>
                  </div>
                </div>

                {/* Individual Contribution */}
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">Individual Contribution:</strong>{' '}
                  {project.individualContribution}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-1.5">
                  {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 dark:text-sky-400 light:text-sky-600 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Full Architecture & Docs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 text-white hover:bg-sky-500 text-xs font-medium transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository & Docs</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
