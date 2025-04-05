const Interviews = () => {
  const interviews = [
    {
      title: 'The Creative Process',
      publication: 'Music Monthly',
      date: 'March 2023',
      excerpt: 'An in-depth look at how I approach music production and creativity...',
      link: '#',
    },
    {
      title: 'Breaking Boundaries',
      publication: 'DJ World',
      date: 'January 2023',
      excerpt: 'Exploring the fusion of different genres in my latest album...',
      link: '#',
    },
    {
      title: 'The Future of Electronic Music',
      publication: 'Sound Waves',
      date: 'November 2022',
      excerpt: 'My thoughts on where electronic music is heading and my role in it...',
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8">Featured Interviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviews.map((interview, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{interview.title}</h3>
              <div className="text-sm text-gray-500 mb-4">
                <span>{interview.publication}</span>
                <span className="mx-2">•</span>
                <span>{interview.date}</span>
              </div>
              <p className="text-gray-600 mb-4">{interview.excerpt}</p>
              <a
                href={interview.link}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interviews; 