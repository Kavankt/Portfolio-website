const techStack = [
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'Tailwind', icon: '/tech/tailwind.svg' },
    { name: 'Node.js', icon: '/tech/nodejs.svg' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg' },
    { name: 'IPFS', icon: '/tech/ipfs.png' },
    { name: 'Solidity', icon: '/tech/solidity.png' },
    // Add more as you go
  ];
  
  const TechStackTab = () => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
      {techStack.map((tech, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="bg-gradient-to-br from-purple-700 to-indigo-500 p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
            <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
          </div>
          <p className="text-sm text-gray-300">{tech.name}</p>
        </div>
      ))}
    </div>
  );
  export default TechStackTab;
  