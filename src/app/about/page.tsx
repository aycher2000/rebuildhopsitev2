'use client';

import InfoCard from '@/components/ui/InfoCard';

export default function AboutPage() {
  return (
    <div className="min-h-screen futuristic-bg text-white relative overflow-hidden pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-heading text-[#00ffff] mb-4">
            About DJ H.O.P
          </h1>
          <p className="text-base sm:text-xl text-center text-white/80 mb-8 sm:mb-16">
            The Story Behind the Cuts
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
            <a 
              href="#my-journey" 
              className="px-4 py-2 rounded-md text-base font-medium border border-[#00ffff]/30 backdrop-blur-sm text-white hover:text-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300"
            >
              My Journey
            </a>
            <a 
              href="#blog" 
              className="px-4 py-2 rounded-md text-base font-medium border border-[#00ffff]/30 backdrop-blur-sm text-white hover:text-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300"
            >
              Blog
            </a>
            <a 
              href="#interview" 
              className="px-4 py-2 rounded-md text-base font-medium border border-[#00ffff]/30 backdrop-blur-sm text-white hover:text-[#00ffff] hover:bg-[#00ffff]/10 transition-all duration-300"
            >
              Interview
            </a>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 sm:space-y-12">
            <InfoCard
              id="my-journey"
              title="My Journey"
              content={{
                short: "My journey in turntablism",
                full: (
                  <div className="space-y-4">
                    <p>
                      In the heart of San Diego's underground hip-hop scene, a young DJ named <span className="text-[#00ffff] font-bold">Hop</span> began his journey into the world of turntablism. What started as a fascination with the raw energy of hip-hop culture quickly evolved into a deep passion for the art of DJing.
                    </p>
                    <p>
                      Under the mentorship of local legends like <span className="text-[#00ffff] font-bold">DJ Artistic</span> and <span className="text-[#00ffff] font-bold">DJ Genie</span>, Hop honed his skills, spending countless hours perfecting his craft. The Genie, a close friend and fellow DJ, played a pivotal role in shaping Hop's unique style, blending technical precision with creative expression.
                    </p>
                    <p>
                      As his reputation grew, Hop became a fixture in San Diego's vibrant music scene, known for his innovative techniques and electrifying performances. His journey took him from local battles to international stages, but his roots in San Diego's underground culture remained at the core of his artistry.
                    </p>
                    <p>
                      Today, Hop continues to push the boundaries of turntablism, combining traditional techniques with modern innovation. His journey is a testament to the power of passion, dedication, and the transformative nature of music.
                    </p>
                  </div>
                )
              }}
            />

            <InfoCard
              id="blog"
              title="Blog"
              content={{
                short: "Latest thoughts and updates",
                full: (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">The Evolution of Turntablism</h3>
                      <p>Exploring how the art form has evolved from its roots in hip-hop to its current place in modern music...</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">The Art of Sample Flipping</h3>
                      <p>Breaking down the creative process behind transforming classic records into fresh beats...</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Battle DJing: Then and Now</h3>
                      <p>Reflecting on how DJ battles have changed over the years and what they mean for the culture...</p>
                    </div>
                  </div>
                )
              }}
            />

            <InfoCard
              id="interview"
              title="Interview"
              content={{
                short: "Recent media coverage",
                full: (
                  <div className="space-y-4">
                    <p>
                      In a recent interview, Hop shared insights into his creative process and the future of turntablism. He discussed the importance of preserving the art form's roots while embracing new technologies and techniques.
                    </p>
                    <p>
                      "Turntablism is more than just a skill - it's a language," Hop explained. "It's about telling stories through sound and connecting with people on a deeper level."
                    </p>
                    <p>
                      The interview also touched on Hop's upcoming projects and his vision for the future of the scene in San Diego and beyond.
                    </p>
                  </div>
                )
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 