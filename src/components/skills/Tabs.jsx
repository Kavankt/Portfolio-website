const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['projects', 'techstack', 'certificates']; // Changed order here

  return (
    <div className="flex justify-center gap-10 mb-10">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-72 h-28 rounded-3xl text-xl font-semibold uppercase tracking-wide transition-all duration-300 shadow-lg backdrop-blur-md border border-white/10
            ${activeTab === tab
              ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-purple-500/60 scale-105'
              : 'bg-black/30 text-gray-300 hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 hover:text-white hover:shadow-lg hover:shadow-indigo-500/40'
            }
          `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
