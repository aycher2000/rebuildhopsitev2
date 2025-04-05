import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'The Evolution of Electronic Music',
      date: 'March 15, 2024',
      category: 'Music',
      image: '/images/blog-1.jpg',
      excerpt: 'Exploring how electronic music has evolved over the decades and where it\'s heading next...',
    },
    {
      id: 2,
      title: 'Studio Setup: Essential Equipment',
      date: 'March 10, 2024',
      category: 'Production',
      image: '/images/blog-2.jpg',
      excerpt: 'A comprehensive guide to setting up your home studio with essential equipment...',
    },
    {
      id: 3,
      title: 'Collaboration in Music Production',
      date: 'March 5, 2024',
      category: 'Collaboration',
      image: '/images/blog-3.jpg',
      excerpt: 'Tips and insights on successful collaboration in the music industry...',
    },
    {
      id: 4,
      title: 'Sound Design Techniques',
      date: 'February 28, 2024',
      category: 'Production',
      image: '/images/blog-4.jpg',
      excerpt: 'Advanced sound design techniques for creating unique textures and atmospheres...',
    },
    {
      id: 5,
      title: 'Live Performance Tips',
      date: 'February 20, 2024',
      category: 'Performance',
      image: '/images/blog-5.jpg',
      excerpt: 'Essential tips for delivering an unforgettable live performance...',
    },
    {
      id: 6,
      title: 'Music Industry Insights',
      date: 'February 15, 2024',
      category: 'Industry',
      image: '/images/blog-6.jpg',
      excerpt: 'Current trends and insights into the ever-changing music industry...',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        {/* Categories */}
        <div className="flex justify-center mb-12 space-x-4">
          <button className="px-4 py-2 rounded-full bg-black text-white">All</button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100">Music</button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100">Production</button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100">Performance</button>
          <button className="px-4 py-2 rounded-full hover:bg-gray-100">Industry</button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex space-x-2">
            <button className="px-4 py-2 rounded-full bg-black text-white">1</button>
            <button className="px-4 py-2 rounded-full hover:bg-gray-100">2</button>
            <button className="px-4 py-2 rounded-full hover:bg-gray-100">3</button>
            <button className="px-4 py-2 rounded-full hover:bg-gray-100">Next →</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 