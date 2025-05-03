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
    {/* Mobile-first: single-column flex; md+ switches to grid */}
    <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-6">
      {techStack.map((tech, i) => (
        <div
          key={i}
          className="w-full max-w-xs flex flex-col items-center gap-4 group"
        >
          <div className="bg-[#111827] p-6 rounded-xl transition duration-300">
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-12 w-12 object-contain transition duration-300 group-hover:drop-shadow-[0_0_10px_#00ffff]"
            />
          </div>
          <p className="text-base text-gray-300 group-hover:text-cyan-400 transition">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default TechStackTab;
