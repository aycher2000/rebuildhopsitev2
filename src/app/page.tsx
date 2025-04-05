import Image from 'next/image';
import FuturisticButton from '@/components/FuturisticButton';

export default function Home() {
  return (
    <div className="min-h-screen futuristic-bg text-white relative overflow-hidden flex flex-col items-center justify-center px-4">
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
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse z-[2]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse delay-1000 z-[2]" />

      {/* Main content */}
      <div className="relative z-10 text-center mt-[-5vh]">
        {/* Title section with logo */}
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Logo */}
          <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/30 animate-flip">
            <Image
              src="/images/logo.webp"
              alt="DJ HOP Logo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary animate-gradient">
            DJ HOP
          </h1>
        </div>

        <p className="text-xl md:text-2xl mb-10 text-white/80 font-light tracking-wider">
          Turntablist | Producer | Artist
        </p>
        
        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
          <FuturisticButton href="/music" variant="primary" className="w-full sm:w-auto">
            Explore Music
          </FuturisticButton>
          <FuturisticButton href="/contact" variant="secondary" className="w-full sm:w-auto">
            Book Now
          </FuturisticButton>
        </div>
      </div>
    </div>
  );
}
