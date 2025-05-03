import React from 'react';

const techStack = [
  { name: 'HTML', icon: '/tech/html.svg' },
  { name: 'CSS', icon: '/tech/css.svg' },
  { name: 'JavaScript', icon: '/tech/javascript.svg' },
  { name: 'ReactJS', icon: '/tech/reactjs.svg' },
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'C', icon: '/tech/c.svg' },
  { name: 'C++', icon: '/tech/cpp.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'Next.js', icon: '/tech/next.svg' },
  { name: 'Tailwind', icon: '/tech/tailwind.svg' },
  { name: 'MySQL', icon: '/tech/mysql.svg' },
  { name: 'MongoDB', icon: '/tech/mongo.svg' },
  { name: 'GitHub', icon: '/tech/github.svg' },
  { name: 'Docker', icon: '/tech/docker.svg' },
  { name: 'Flask', icon: '/tech/flask.svg' },
  { name: 'Firebase', icon: '/tech/firebase.svg' },
  { name: 'Jest', icon: '/tech/jest.svg' },
  { name: 'Vercel', icon: '/tech/vercel.svg' },
];

const TechStackTab = () => (
  <div className="py-8">
    {/* 
      - grid-cols-2 on all small screens
      - md:grid-cols-4 for tablets
      - lg:grid-cols-6 for desktops 
    */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
      {techStack.map((tech, i) => (
        <div
          key={i}
          className="w-full max-w-xs flex flex-col items-center gap-6 group"
        >
          <div className="bg-[#111827] p-8 rounded-2xl transition duration-300">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-16 w-16 object-contain transition duration-300 group-hover:drop-shadow-[0_0_20px_#00ffff]"
            />
          </div>
          <p className="text-xl text-gray-300 group-hover:text-cyan-400 transition">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default TechStackTab;
