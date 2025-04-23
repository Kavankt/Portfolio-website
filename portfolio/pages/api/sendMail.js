// components/CertificateTab.jsx
const certificates = [
  {
    title: 'Intro to Machine Learning',
    image: '/certificates/ml.png',
  },
  {
    title: 'Pandas',
    image: '/certificates/pandas.png',
  },
  {
    title: 'Python',
    image: '/certificates/python.png',
  },
  {
    title: 'Data Analysis with Python',
    image: '/certificates/data_analysis.png',
  },
  {
    title: 'Employability Skills',
    image: '/certificates/employability_skills.png',
  },
  {
    title: 'Cloud Community Day 2024',
    image: '/certificates/cloud_community.png',
  },
];

const CertificateTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-8">
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-cyan-500/50 transform hover:scale-105 transition duration-300"
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto object-cover"
          />
          <div className="bg-[#0f172a] text-center py-2">
            <p className="text-sm text-gray-300">{cert.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateTab;
