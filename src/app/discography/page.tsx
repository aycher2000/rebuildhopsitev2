import Image from 'next/image';
import FuturisticButton from '@/components/FuturisticButton';

type Release = {
  id: number;
  title: string;
  year: string;
  format: string;
  description: string;
  image: string;
};

const releases: Release[] = [
  {
    id: 1,
    title: '40oz Breaks',
    year: '2004',
    format: '12" Vinyl',
    description: 'DJ H.O.P. - 40oz Breaks - 12" Vinyl 2004',
    image: '/images/40oz.jpg'
  },
  {
    id: 2,
    title: 'Like Never Before',
    year: '1998',
    format: '12" Vinyl',
    description: 'Icons - Like Never Before - 1998',
    image: '/images/lnb.jpg'
  },
  {
    id: 3,
    title: 'Fantastic 4',
    year: '1998',
    format: '12" Vinyl EP',
    description: 'Icons - Fantastic 4 ep vinyl - 1998',
    image: '/images/fan4.jpeg'
  },
  {
    id: 4,
    title: 'Capture the Flag',
    year: '2001',
    format: 'CD',
    description: 'Icons - Capture the Flag - 2001',
    image: '/images/ctf.jpg'
  },
  {
    id: 5,
    title: 'Needles Mics Cans',
    year: '2003',
    format: 'CD',
    description: 'Icons - Needles Mics Cans - 2003',
    image: '/images/nmcl.jpg'
  },
  {
    id: 6,
    title: 'STFUYMCA',
    year: '2011',
    format: 'CD Mixtape',
    description: 'Bossasaurus - STFUYMCA Mixtape on CD - 2011',
    image: '/images/bossa.jpg'
  }
];

export default function DiscographyPage() {
  return (
    <div className="min-h-screen futuristic-bg text-white relative overflow-hidden pb-20">
      {/* Background image */}
      <Image
        src="/images/backround.png"
        alt="Background"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />
      
      {/* Grid overlay */}
      <div className="grid-overlay" />
      
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-20">
          {/* Header */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading text-center mb-1 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary animate-gradient">
            Discography
          </h1>
          <p className="text-base sm:text-xl text-center text-white/80 mb-8 sm:mb-16">
            Physical Releases & Vinyl Collection
          </p>

          {/* Release Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {releases.map((release) => (
              <div 
                key={release.id}
                className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/30 hover:border-primary/70 transition-all duration-300 w-full"
              >
                <div className="aspect-square relative overflow-hidden p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={release.image}
                      alt={release.title}
                      fill
                      className="object-contain object-center hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div className="w-full h-[1px] bg-white/10 mb-3"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base sm:text-lg font-heading text-primary">{release.title}</h3>
                    <span className="text-xs text-white/60">{release.year}</span>
                  </div>
                  <p className="text-xs text-white/60 mb-2">{release.format}</p>
                  <p className="text-xs sm:text-sm text-white/80">{release.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 