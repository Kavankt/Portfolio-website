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
  { name: 'Vercel', icon: '/tech/vercel.svg' }
];

const TechStackTab = () => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
    {techStack.map((tech, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-2 group"
      >
        <div className="bg-[#111827] p-5 rounded-xl transition duration-300">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-10 w-10 object-contain transition duration-300 group-hover:drop-shadow-[0_0_10px_#00ffff]"
          />
        </div>
        <p className="text-sm text-gray-300 group-hover:text-cyan-400 transition">
          {tech.name}
        </p>
      </div>
    ))}
  </div>
);

export default TechStackTab;
