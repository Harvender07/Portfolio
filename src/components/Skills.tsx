import React, { useState } from 'react';
import { Code, Terminal, Sparkles, BookOpen, Layers, CheckCircle, Clock, ChevronDown, ChevronUp, PlusCircle } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [roadmapExpanded, setRoadmapExpanded] = useState<boolean>(true);

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming (Current)' },
    { id: 'interests', label: 'Development Interests' },
    { id: 'additional', label: 'Additional Skills' },
    { id: 'learning', label: 'Learning Roadmap' },
  ];

  const primarySkills = SKILLS_DATA.filter((s) => s.category !== 'learning');
  const learningSkills = SKILLS_DATA.filter((s) => s.category === 'learning');

  const filteredSkills =
    activeTab === 'all'
      ? primarySkills
      : SKILLS_DATA.filter((s) => s.category === activeTab);

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case 'programming':
        return <Code className="w-4 h-4 text-emerald-400" />;
      case 'interests':
        return <Layers className="w-4 h-4 text-sky-400" />;
      case 'additional':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'learning':
        return <BookOpen className="w-4 h-4 text-amber-400" />;
    }
  };

  const getStatusBadge = (proficiency: SkillItem['proficiency']) => {
    if (proficiency === 'Basic / Foundational') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
          <CheckCircle className="w-3 h-3" />
          Basic / Foundational
        </span>
      );
    }
    if (proficiency === 'Active Exploration') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-sky-500/10 text-sky-400 dark:text-sky-400 light:text-sky-700 border border-sky-500/30">
          <Layers className="w-3 h-3" />
          Development Interest
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/10 text-amber-400 dark:text-amber-400 light:text-amber-700 border border-amber-500/30">
        <Clock className="w-3 h-3" />
        Currently Learning
      </span>
    );
  };

  const renderSkillCard = (skill: SkillItem) => (
    <div
      key={skill.name}
      className="glass-panel rounded-2xl p-5 space-y-4 hover:-translate-y-1 transition-all flex flex-col justify-between"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              {getCategoryIcon(skill.category)}
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-100 dark:text-slate-100 light:text-slate-900">
                {skill.name}
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                {skill.category === 'interests' ? 'Interest Area' : skill.category}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-1">{getStatusBadge(skill.proficiency)}</div>

        <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* Honest Stage Bar */}
      <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 space-y-1.5">
        <div className="flex justify-between text-[11px] font-mono text-slate-500">
          <span>{skill.category === 'interests' ? 'Exploration Depth' : 'Current Proficiency'}</span>
          <span className="font-semibold text-sky-400 dark:text-sky-400 light:text-sky-600">
            {skill.proficiency === 'Basic / Foundational' ? 'Basic' : skill.proficiency === 'Active Exploration' ? 'Exploring' : 'In Progress'}
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-800 dark:bg-slate-800 light:bg-slate-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-500"
            style={{ width: `${skill.levelPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-t border-slate-900/50 dark:border-slate-900/50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            TRANSPARENT TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Technical Skills & Learning Roadmap
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            Clear distinction between current basic programming skills, core development interests, and technologies actively being added through coursework and self-study.
          </p>
        </div>

        {/* Honesty Banner */}
        <div className="mb-10 max-w-4xl mx-auto p-4 rounded-xl bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-start sm:items-center gap-3">
          <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">Honest Proficiency Standard:</span>{' '}
            My current verified technical baseline is <strong className="text-emerald-400">C++ (Basic)</strong>, <strong className="text-emerald-400">Python (Basic)</strong>, and <strong className="text-emerald-400">HTML (Basic)</strong>. Areas of interest (AI/ML, Software & Frontend Dev) and upcoming stack tools are marked separately below.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-sky-400 hover:bg-slate-800/80 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map(renderSkillCard)}
        </div>

        {/* Expandable Learning Roadmap Section (shown on "All Skills" view) */}
        {activeTab === 'all' && (
          <div className="mt-14 pt-10 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                  <PlusCircle className="w-3.5 h-3.5" />
                  Expandable Growth Track
                </div>
                <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mt-1">
                  Technologies Currently Learning & Expanding
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Modular skills slot configured for JavaScript, CSS, React, SQL, Git, APIs, Data Structures, and ML Tooling.
                </p>
              </div>

              <button
                onClick={() => setRoadmapExpanded(!roadmapExpanded)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 border border-slate-700 dark:border-slate-700 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-sky-500/40 hover:text-sky-400 transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>{roadmapExpanded ? 'Collapse Learning Track' : `Expand Learning Track (${learningSkills.length})`}</span>
                {roadmapExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {roadmapExpanded && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {learningSkills.map(renderSkillCard)}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
