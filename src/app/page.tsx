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
        {/* Logo */}
        <div className="mb-4 relative w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-2 border-primary/30 animate-flip">
          <Image
            src="/images/logo.webp"
            alt="DJ HOP Logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary animate-gradient">
          DJ HOP
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white/80 font-light tracking-wider">
          Turntablist | Producer | Artist
        </p>
        
        {/* Navigation buttons */}
        <div className="flex gap-6 justify-center">
          <FuturisticButton href="/music" variant="primary">
            Explore Music
          </FuturisticButton>
          <FuturisticButton href="/contact" variant="secondary">
            Book Now
          </FuturisticButton>
        </div>
      </div>
    </div>
  );
}
