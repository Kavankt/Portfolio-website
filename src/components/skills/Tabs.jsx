import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['projects', 'certificates', 'techstacks'];

  return (
    <div
      role="tablist"
      className="
        flex flex-col sm:flex-row items-center justify-center 
        gap-2 sm:gap-4 mb-10 
        overflow-x-auto no-scrollbar
        px-2
      "
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        // Base styling for all tabs
        const base = [
          'w-full sm:flex-1 sm:min-w-[120px]', // full width on mobile, flexible on desktop
          'px-4 sm:px-6',                 // horizontal padding
          'py-3 sm:py-4',                 // vertical padding
          'rounded-3xl',
          'text-base sm:text-lg md:text-xl',
          'font-semibold uppercase tracking-wide',
          'transition-all duration-300 transform-gpu',
          'border-2 border-white backdrop-blur-md',
          'shadow-[0_0_15px_rgba(255,255,255,0.3)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400',
          'text-center whitespace-nowrap',
        ].join(' ');

        // Active state
        const activeStyles = [
          'bg-gradient-to-br from-purple-600/60 via-pink-500/60 to-indigo-700/60',
          'bg-[length:200%] animate-gradient-flow',
          'text-white scale-105',
          'shadow-[0_0_20px_rgba(255,255,255,0.7)]',
        ].join(' ');

        // Inactive with subtle hover
        const hoverStyles = [
          'bg-black/30 text-gray-300',
          'hover:bg-gradient-to-br hover:from-purple-600/60 hover:via-pink-500/60 hover:to-indigo-700/60',
          'hover:bg-[length:200%] hover:animate-gradient-flow hover:text-white hover:scale-105',
        ].join(' ');

        return (
          <button
            key={tab}
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveTab(tab)}
            className={`${base} ${isActive ? activeStyles : hoverStyles}`}
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