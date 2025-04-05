import Image from 'next/image';
import FuturisticButton from '@/components/FuturisticButton';

type Platform = 'bandcamp' | 'youtube' | 'apple';

const releases = [
  {
    id: 1,
    title: 'STFUYMCA',
    year: '2024',
    type: 'Track - Intro (Cuts by DJ H.O.P)',
    description: 'Featured track from the Bossasaurus album',
    platform: 'bandcamp',
    streamingLinks: {
      bandcamp: 'https://bossasaurus.bandcamp.com/album/stfuymca',
      bandcampEmbed: 'https://bandcamp.com/EmbeddedPlayer/album=3673844050/size=small/bgcol=333333/linkcol=e32c14/artwork=none/track=3646414286/transparent=true/'
    }
  },
  {
    id: 2,
    title: 'STFUYMCA',
    year: '2024',
    type: 'Track - Aesop Rock None Shall Pass Remix(Cuts by DJ H.O.P)',
    description: 'Featured track from the Bossasaurus album',
    platform: 'bandcamp',
    streamingLinks: {
      bandcamp: 'https://bossasaurus.bandcamp.com/album/stfuymca',
      bandcampEmbed: 'https://bandcamp.com/EmbeddedPlayer/album=3673844050/size=small/bgcol=333333/linkcol=e32c14/artwork=none/track=1065144499/transparent=true/'
    }
  },
  {
    id: 3,
    title: 'STFUYMCA',
    year: '2024',
    type: 'Track - Wu Tang Clan Daytona 500 Remix (Cuts by DJ H.O.P)',
    description: 'Featured track from the Bossasaurus album',
    platform: 'bandcamp',
    streamingLinks: {
      bandcamp: 'https://bossasaurus.bandcamp.com/album/stfuymca',
      bandcampEmbed: 'https://bandcamp.com/EmbeddedPlayer/album=3673844050/size=small/bgcol=333333/linkcol=e32c14/artwork=none/track=16049382/transparent=true/'
    }
  },
  {
    id: 4,
    title: 'STFUYMCA',
    year: '2024',
    type: 'Track - Tech N9ne Ima Tell Remix (Cuts by DJ H.O.P)',
    description: 'Featured track from the Bossasaurus album',
    platform: 'bandcamp',
    streamingLinks: {
      bandcamp: 'https://bossasaurus.bandcamp.com/album/stfuymca',
      bandcampEmbed: 'https://bandcamp.com/EmbeddedPlayer/album=3673844050/size=small/bgcol=333333/linkcol=e32c14/artwork=none/track=4092220770/transparent=true/'
    }
  },
  {
    id: 5,
    title: 'STFUYMCA',
    year: '2024',
    type: 'Track - A Tribe Called Quest 1NCE Again Remix (Cuts by DJ H.O.P)',
    description: 'Featured track from the Bossasaurus album',
    platform: 'bandcamp',
    streamingLinks: {
      bandcamp: 'https://bossasaurus.bandcamp.com/album/stfuymca',
      bandcampEmbed: 'https://bandcamp.com/EmbeddedPlayer/album=3673844050/size=small/bgcol=333333/linkcol=e32c14/artwork=none/track=2581326354/transparent=true/'
    }
  },
  {
    id: 6,
    title: 'DJ H.O.P',
    year: '1997',
    type: 'Video - Showin Much Flex',
    description: 'Icons Capture the Flag',
    platform: 'youtube',
    streamingLinks: {
      youtube: 'https://www.youtube.com/embed/XFX21vK9Hbw?si=QaSXmbsH5anDzysx'
    }
  },
  {
    id: 7,
    title: 'Aych 2 Oh',
    year: '2014',
    type: 'Single (Produced by DJ H.O.P)',
    description: 'Original track released on Apple Music',
    platform: 'apple',
    streamingLinks: {
      appleMusic: 'https://embed.music.apple.com/us/album/aych-2-oh/884962011?i=884962165'
    }
  },
  {
    id: 8,
    title: 'DJ H.O.P',
    year: '1997',
    type: 'Video - Foolz W No Rhyme Skills',
    description: 'Icons Capture the Flag',
    platform: 'youtube',
    streamingLinks: {
      youtube: 'https://www.youtube.com/embed/1oAwvFcS8bg?si=UuCw_72ZyK2-Yh82'
    }
  }
];

export default function MusicPage() {
  const filterByPlatform = (platform: Platform) => {
    const filtered = releases.filter(release => release.platform === platform);
    return filtered.length > 0 ? filtered : null;
  };

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
      
      <div className="relative z-10 h-screen flex flex-col">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          {/* Header */}
          <h1 className="text-5xl md:text-7xl font-heading text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary animate-gradient">
            Releases
          </h1>
          <p className="text-xl text-center text-white/80 mb-8">
            Explore tracks and albums F/ DJ H.O.P
          </p>

          {/* Platform Navigation */}
          <div className="sticky top-4 z-30 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-8">
            <div className="flex flex-wrap justify-center gap-6">
              <FuturisticButton href="#bandcamp" variant="primary" className="min-w-[120px]">
                BANDCAMP
              </FuturisticButton>
              <FuturisticButton href="#youtube" variant="primary" className="min-w-[120px]">
                YOUTUBE
              </FuturisticButton>
              <FuturisticButton href="#apple" variant="primary" className="min-w-[120px]">
                ITUNES
              </FuturisticButton>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="sticky top-24 z-30 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-16">
            <div className="flex flex-wrap justify-center gap-6">
              <FuturisticButton href="/" variant="secondary" className="min-w-[120px]">
                HOME
              </FuturisticButton>
              <FuturisticButton href="/about" variant="secondary" className="min-w-[120px]">
                ABOUT
              </FuturisticButton>
              <FuturisticButton href="/contact" variant="secondary" className="min-w-[120px]">
                CONTACT
              </FuturisticButton>
              <FuturisticButton href="/discography" variant="secondary" className="min-w-[120px]">
                DISCOGRAPHY
              </FuturisticButton>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            {/* Release List */}
            <div className="space-y-12">
              {/* Bandcamp Section */}
              <section id="bandcamp" className="space-y-6">
                <h2 className="text-3xl font-heading text-primary">Bandcamp Releases</h2>
                {filterByPlatform('bandcamp')?.map((release) => (
                  <div 
                    key={release.id} 
                    className="bg-black/40 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 p-6"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-heading text-primary">{release.title}</h3>
                        <span className="text-sm text-white/60">{release.year}</span>
                      </div>
                      <p className="text-sm text-white/60">{release.type}</p>
                      
                      <div className="w-full h-[42px] bg-[#333333] rounded overflow-hidden">
                        <iframe 
                          src={release.streamingLinks.bandcampEmbed}
                          seamless
                          className="w-full h-full border-0"
                          title={release.title}
                        >
                          <a href={release.streamingLinks.bandcamp}>{release.title}</a>
                        </iframe>
                      </div>

                      <p className="text-white/80">{release.description}</p>
                      
                      <div className="flex justify-end">
                        <FuturisticButton href="#" variant="primary">
                          Share
                        </FuturisticButton>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              {/* YouTube Section */}
              <section id="youtube" className="space-y-6">
                <h2 className="text-3xl font-heading text-primary">Videos</h2>
                {filterByPlatform('youtube')?.map((release) => (
                  <div 
                    key={release.id} 
                    className="bg-black/40 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 p-6"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-heading text-primary">{release.title}</h3>
                        <span className="text-sm text-white/60">{release.year}</span>
                      </div>
                      <p className="text-sm text-white/60">{release.type}</p>
                      
                      <div className="w-full aspect-video bg-[#333333] rounded overflow-hidden">
                        <iframe 
                          src={release.streamingLinks.youtube}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full border-0"
                          title={release.title}
                        />
                      </div>

                      <p className="text-white/80">{release.description}</p>
                      
                      <div className="flex justify-end">
                        <FuturisticButton href="#" variant="primary">
                          Share
                        </FuturisticButton>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              {/* Apple Music Section */}
              <section id="apple" className="space-y-6">
                <h2 className="text-3xl font-heading text-primary">iTunes Releases</h2>
                {filterByPlatform('apple')?.map((release) => (
                  <div 
                    key={release.id} 
                    className="bg-black/40 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 p-6"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-heading text-primary">{release.title}</h3>
                        <span className="text-sm text-white/60">{release.year}</span>
                      </div>
                      <p className="text-sm text-white/60">{release.type}</p>
                      
                      <div className="w-full h-[150px] bg-[#333333] rounded overflow-hidden">
                        <iframe 
                          src={release.streamingLinks.appleMusic}
                          allow="autoplay *; encrypted-media *;"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                          className="w-full h-full border-0"
                          title={release.title}
                        />
                      </div>

                      <p className="text-white/80">{release.description}</p>
                      
                      <div className="flex justify-end">
                        <FuturisticButton href="#" variant="primary">
                          Share
                        </FuturisticButton>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 