const certificates = [
    {
      title: 'IBM - Python for Data Science',
      description: 'Completed a foundational Python course focused on data science, AI, and development.',
      img: '/certificates/ibm-python.png'
    },
    {
      title: 'NSS Participation',
      description: 'Actively participated in the National Service Scheme promoting social responsibility.',
      img: '/certificates/nss.png'
    },
    // Add more as needed
  ];
  
  const CertificatesTab = () => (
    <div className="grid md:grid-cols-3 gap-6">
      {certificates.map((cert, i) => (
        <div key={i} className="bg-[#1b1b2f] rounded-xl shadow-lg p-4">
          <img src={cert.img} alt={cert.title} className="rounded-md mb-4 h-40 object-cover w-full" />
          <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
          <p className="text-sm text-gray-300">{cert.description}</p>
          <button className="mt-4 text-indigo-400 hover:underline">See More →</button>
        </div>
      ))}
    </div>
  );
  export default CertificatesTab;
  