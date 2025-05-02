import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['projects', 'certificates', 'techstacks'];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        // Base styling for all tabs
        const baseClasses = [
          'min-w-[160px]',        // allow shrinking but keep a minimum
          'px-6',                 // horizontal padding
          'py-6',                 // vertical padding
          'rounded-3xl',
          'text-lg md:text-xl',
          'font-semibold uppercase tracking-wide',
          'transition-all duration-300 transform-gpu',
          'border-2 border-white backdrop-blur-md',
          'shadow-[0_0_15px_rgba(255,255,255,0.3)]',
          'hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]',
          'hover:-rotate-2',
          'cursor-pointer',
          'flex-1 max-w-xs',      // let them grow but cap width
          'text-center',          // center text
        ].join(' ');

        // Active tab styles (low-opacity purple gradient)
        const activeClasses = [
          'bg-gradient-to-br from-purple-600/60 via-pink-500/60 to-indigo-700/60',
          'bg-[length:200%] animate-gradient-flow',
          'text-white scale-105',
          'shadow-[0_0_20px_rgba(255,255,255,0.7)]',
        ].join(' ');

        // Inactive tabs with purple-gradient hover (also low opacity)
        const inactiveHoverClasses = [
          'bg-black/30 text-gray-300',
          'hover:bg-gradient-to-br hover:from-purple-600/60 hover:via-pink-500/60 hover:to-indigo-700/60',
          'hover:bg-[length:200%] hover:animate-gradient-flow hover:text-white hover:scale-105',
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
