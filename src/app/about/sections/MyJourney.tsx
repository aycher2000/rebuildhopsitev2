const MyJourney = () => {
  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Started experimenting with music production and DJing',
    },
    {
      year: '2012',
      title: 'First Release',
      description: 'Released my first EP, marking the beginning of my professional journey',
    },
    {
      year: '2015',
      title: 'Major Breakthrough',
      description: 'Collaborated with established artists and gained recognition in the industry',
    },
    {
      year: '2018',
      title: 'International Recognition',
      description: 'Started performing at major festivals and events worldwide',
    },
    {
      year: '2023',
      title: 'Current Chapter',
      description: 'Continuing to evolve and push creative boundaries in music production',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-8">My Journey</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
              <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-gray-200"></div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{milestone.year}</h3>
                <h4 className="text-lg font-medium text-gray-700">{milestone.title}</h4>
                <p className="mt-2 text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyJourney; 