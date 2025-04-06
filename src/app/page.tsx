import Image from 'next/image';
import FuturisticButton from '@/components/FuturisticButton';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chrishopbarton/',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'X',
    url: 'https://x.com/DJHOP619',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 4L12 14M12 14L7 19M12 14L19 19M12 14L5 4" />
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:djhop@hoponthecut.com',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M22 7L12 14L2 7" />
      </svg>
    )
  }
];

const featuredReleases = [
  {
    title: 'STFUYMCA',
    description: 'Wu Tang Clan Daytona 500 Remix (Cuts by DJ H.O.P)',
    type: 'Track',
    year: '2024',
    platform: 'bandcamp',
    embed: 'https://bandcamp.com/EmbeddedPlayer/album=3673844050/size=small/bgcol=333333/linkcol=e32c14/artwork=none/track=16049382/transparent=true/'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen futuristic-bg text-white relative overflow-hidden">
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
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
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

            <p className="text-xl md:text-2xl mb-6 text-white/80 font-light tracking-wider">
              Turntablist | Producer | Artist
            </p>

            {/* Navigation buttons moved up */}
            <div className="flex flex-row gap-6 justify-center px-4 mb-8">
              <FuturisticButton href="/music" variant="primary" className="text-[11px] sm:text-base py-1.5 sm:py-3 px-4 sm:px-6">
                Music
              </FuturisticButton>
              <FuturisticButton href="/discography" variant="secondary" className="text-[11px] sm:text-base py-1.5 sm:py-3 px-4 sm:px-6">
                Discog
              </FuturisticButton>
              <FuturisticButton href="/contact" variant="secondary" className="text-[11px] sm:text-base py-1.5 sm:py-3 px-4 sm:px-6">
                Book
              </FuturisticButton>
            </div>

            {/* Radio Image */}
            <div className="max-w-xl mx-auto mb-12 relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/images/radio.jpg"
                alt="DJ HOP Radio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Enhanced story text */}
            <div className="story-section max-w-2xl mx-auto space-y-8 mb-12">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed border-l-2 border-primary/30 pl-4 hover:border-primary/60 transition-colors duration-300">
                DJ H.O.P emerged from the raw side of San Diego—no roadmap, just a stereo system and a dream. That dream ignited when he witnessed Grandmixer DXT cutting vinyl like an instrument at age 11, a sound that would never leave him.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed border-l-2 border-primary/30 pl-4 hover:border-primary/60 transition-colors duration-300">
                With no gear and no guidance, he built his first setup from scraps in 1988. Every scratch was learned the hard way—no tutorials, just pure obsession. The game changed when he finally acquired two Technics 1200s.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed border-l-2 border-primary/30 pl-4 hover:border-primary/60 transition-colors duration-300">
                Along the journey, he found his tribe—<span className="text-primary">Illogic, Syko, the ICONS crew</span>—iron sharpening iron. They traded tapes, pushed boundaries, and earned their names the old way: through raw skill.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed border-l-2 border-primary/30 pl-4 hover:border-primary/60 transition-colors duration-300">
                Radio became his gateway. From garage studios to KCR college radio to connections with <span className="text-primary">The Wake Up Show crew</span>, he witnessed how far a mixtape and hustle could take you. In the Bay Area, his evolution hit new heights—connecting with legends like <span className="text-primary">Q-Bert, D-Styles, Teeko</span>, and more.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed border-l-2 border-primary/30 pl-4 hover:border-primary/60 transition-colors duration-300">
                Hawaii called next. What started as a move became a renaissance. The energy, the pace, the peace—it transformed his creative process. His style deepened. His focus sharpened.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed border-l-2 border-primary/30 pl-4 hover:border-primary/60 transition-colors duration-300">
                Today, he remains that same kid chasing a sound, but with decades of experience behind the decks and beats. Never selling out, never losing the soul. He creates because he has to—and passes it on because that's what culture demands.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/70 hover:text-primary transition-all duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Tracks Section */}
        <div className="w-full bg-black/40 backdrop-blur-sm border-t border-primary/20 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-heading text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
              Featured Tracks
            </h2>
            <div className="max-w-2xl mx-auto">
              {featuredReleases.map((release) => (
                <div
                  key={release.title}
                  className="bg-black/40 rounded-lg overflow-hidden border border-primary/30 p-4"
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-heading text-primary">{release.title}</h3>
                    <span className="text-sm text-white/60">{release.year}</span>
                  </div>
                  <p className="text-sm text-white/60 mb-2">{release.type}</p>
                  <p className="text-sm text-white/60 mb-4">{release.description}</p>
                  <div className="w-full h-[60px] sm:h-[42px] bg-[#333333] rounded overflow-hidden">
                    <iframe 
                      src={release.embed}
                      seamless
                      className="w-full h-full border-0"
                      title={release.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
