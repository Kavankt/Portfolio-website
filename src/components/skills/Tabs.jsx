import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['projects', 'certificates','techstacks'];

  return (
    <div className="flex justify-center gap-10 mb-10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        // Base styling for all tabs
        const baseClasses = [
          'w-80',
          'h-32',
          'rounded-3xl',
          'text-xl',
          'font-semibold',
          'uppercase',
          'tracking-wide',
          'transition-all',
          'duration-300',
          'transform-gpu',
          'border-2',
          'border-white',
          'backdrop-blur-md',
          'shadow-[0_0_15px_rgba(255,255,255,0.3)]',       // subtle default glow
          'hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]', // stronger glow on hover
          'hover:-rotate-3',                              // tilt on hover
        ].join(' ');

        // Extra for the active tab
        const activeClasses = [
          'bg-gradient-to-br',
          'from-purple-600',
          'via-pink-500',
          'to-indigo-700',
          'bg-[length:200%]',
          'animate-gradient-flow',
          'text-white',
          'scale-110',
          'shadow-[0_0_20px_rgba(255,255,255,0.7)]',      // full glow on active
        ].join(' ');

        // Hover-gradient for inactive tabs
        const inactiveHoverClasses = [
          'bg-black/30',
          'text-gray-300',
          'hover:bg-gradient-to-br',
          'hover:from-purple-700',
          'hover:via-pink-500',
          'hover:to-indigo-700',
          'hover:bg-[length:200%]',
          'hover:animate-gradient-flow',
          'hover:text-white',
          'hover:scale-105',
        ].join(' ');

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveHoverClasses}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
