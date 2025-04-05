import Image from 'next/image';
import Link from 'next/link';

const PortfolioPage = () => {
  const releases = [
    {
      id: 1,
      title: 'Echoes of Tomorrow',
      year: '2024',
      type: 'Album',
      image: '/images/portfolio-1.jpg',
      description: 'A groundbreaking album exploring the fusion of electronic and organic sounds',
    },
    {
      id: 2,
      title: 'Midnight Dreams',
      year: '2023',
      type: 'Single',
      image: '/images/portfolio-2.jpg',
      description: 'Chart-topping single featuring innovative sound design',
    },
    {
      id: 3,
      title: 'Urban Rhythms',
      year: '2023',
      type: 'EP',
      image: '/images/portfolio-3.jpg',
      description: 'Four-track EP inspired by city life and modern beats',
    },
    {
      id: 4,
      title: 'Digital Horizon',
      year: '2022',
      type: 'Album',
      image: '/images/portfolio-4.jpg',
      description: 'Full-length album exploring the boundaries of electronic music',
    },
    {
      id: 5,
      title: 'Summer Vibes',
      year: '2022',
      type: 'Single',
      image: '/images/portfolio-5.jpg',
      description: 'Summer anthem with tropical influences',
    },
    {
      id: 6,
      title: 'Neon Nights',
      year: '2021',
      type: 'EP',
      image: '/images/portfolio-6.jpg',
      description: 'Three-track EP inspired by city nightlife',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Portfolio</h1>
        
        {/* Filter Section */}
        <div className="flex justify-center mb-12 space-x-4">
          <button className="px-4 py-2 rounded-full bg-black text-white">All</button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100">Albums</button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100">EPs</button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100">Singles</button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release) => (
            <div key={release.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={release.image}
                  alt={release.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{release.title}</h3>
                  <span className="text-sm text-gray-500">{release.year}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{release.type}</p>
                <p className="text-gray-600 mb-4">{release.description}</p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Listen
                  </Link>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage; 