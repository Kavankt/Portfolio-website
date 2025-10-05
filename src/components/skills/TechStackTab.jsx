
const techStack = [
  { name: 'HTML', icon: '/tech/html.svg' },
  { name: 'CSS', icon: '/tech/css.svg' },
   { name: 'Java', icon: '/tech/java.svg' },  
  { name: 'JavaScript', icon: '/tech/javascript.svg' },
  { name: 'ReactJS', icon: '/tech/reactjs.svg' },
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'C', icon: '/tech/c.svg' },
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
      {techStack.map((tech, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-4 group transition-transform duration-300"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-16 w-16 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#00ffff]"
          />
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-cyan-500">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default TechStackTab;
