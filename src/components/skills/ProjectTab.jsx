const projects = [
    {
      title: 'SAFEZONE Volunteer Management Service',
      description: 'Designed for use during emergencies...',
      img: '/images/safezone.png'
    },
    {
      title: 'ERP System',
      description: 'CRM, Inventory, Billing and more...',
      img: '/images/erp.png'
    },
  ];
  
  const ProjectTab = () => (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((proj, i) => (
        <div key={i} className="bg-[#1b1b2f] rounded-xl shadow-lg p-4">
          <img src={proj.img} alt={proj.title} className="rounded-md mb-4" />
          <h3 className="text-xl font-bold text-white">{proj.title}</h3>
          <p className="text-sm text-gray-300">{proj.description}</p>
          <button className="mt-4 text-purple-400 hover:underline">Details →</button>
        </div>
      ))}
    </div>
  );
  export default ProjectTab;
  