import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['projects', 'certificates', 'techstacks'];

  return (
    <div
      role="tablist"
      className="flex flex-col md:flex-row items-stretch justify-center gap-4 mb-10"
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        // Base styling for all tabs
        const base = [
          'w-full md:min-w-[160px]',       // full‑width on mobile, min width on md+
          'px-4 sm:px-6',                  // mobile → sm padding
          'py-3 sm:py-4',                  // smaller mobile height
          'rounded-3xl',
          'text-base sm:text-lg md:text-xl',
          'font-semibold uppercase tracking-wide',
          'transition-all duration-300 transform-gpu',
          'border-2 border-white backdrop-blur-md',
          'shadow-[0_0_15px_rgba(255,255,255,0.3)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400',
          'text-center',
        ].join(' ');

        // Active state
        const activeStyles = [
          'bg-gradient-to-br from-purple-600/60 via-pink-500/60 to-indigo-700/60',
          'bg-[length:200%] animate-gradient-flow',
          'text-white scale-105',
          'shadow-[0_0_20px_rgba(255,255,255,0.7)]',
        ].join(' ');

        // Inactive hover only on md+
        const hoverMd = [
          'bg-black/30 text-gray-300',
          'md:hover:bg-gradient-to-br md:hover:from-purple-600/60 md:hover:via-pink-500/60 md:hover:to-indigo-700/60',
          'md:hover:bg-[length:200%] md:hover:animate-gradient-flow md:hover:text-white md:hover:scale-105',
        ].join(' ');

        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveTab(tab)}
            className={`${base} ${isActive ? activeStyles : hoverMd}`}
            type="button"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
