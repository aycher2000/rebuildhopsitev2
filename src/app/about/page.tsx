'use client';

import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
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
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ffff]/20 rounded-full filter blur-3xl animate-pulse z-[2]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ffff]/20 rounded-full filter blur-3xl animate-pulse delay-1000 z-[2]" />

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-20">
          {/* Header */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading text-center mb-1 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ffff] via-white to-[#00ffff] animate-gradient">
            About
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
            {/* My Journey Section */}
            <div id="my-journey" className="bg-black/40 backdrop-blur-sm rounded-lg border border-[#00ffff]/30 p-6 sm:p-8 hover:border-[#00ffff]/50 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-heading text-[#00ffff] mb-4">My Journey</h2>
              <div className="space-y-6">
                <div className="h-[500px] relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/zman.JPG"
                    alt="DJ HOP"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-6 text-white/80">
                  <p>
                    DJ H.O.P's journey began in San Diego—not the postcard version with waves and palm trees, but the kind of environment where you either found your lane or got swallowed up. His path became clear the day he saw <span className="text-[#00ffff] font-bold">Herbie Hancock perform "Rockit" on TV with Grandmixer DXT</span>. At just 11 years old, watching DXT transform vinyl into an instrument planted something deep within him—a sound that would never leave.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">Early Days</h3>
                  <p>
                    Starting with nothing but his grandfather's old stereo system—much to his grandfather's dismay—H.O.P turned it into his personal scratch lab. With a tape deck and whatever turntable he could get his hands on, he began his journey.
                  </p>
                  <p className="text-[#00ffff] font-bold">Raw. Loud. Real practice.</p>
                  <p>
                    Eventually, he scraped together enough for a busted mixer from Radio Shack and started building his setup from the ground up. No mentors. No tutorials. Just pure hunger and endless repetition until it started to sound like something.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">First Real Setup</h3>
                  <p>
                    <span className="text-[#00ffff] font-bold">1991 marked a pivotal moment</span> when he scored two Technics 1200s for just $300 from a mobile DJ company transitioning to CDs. Their loss was his gain. Paired with a Gemini PMX2200 mixer, that setup catapulted his skills to new heights.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">Finding His Day Ones</h3>
                  <p>
                    No one makes it alone. H.O.P found his first real mentors in <span className="text-[#00ffff] font-bold">DJ Illogic and DJ Syko</span>—two DJs who sharpened him like steel.
                  </p>
                  <p>
                    Illogic schooled him on East Coast techniques while Syko brought that raw West Coast flavor. In Syko's chaotic room, they created magic—trading samples, building mix tapes, and pushing each other past limits they didn't even know existed.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">The ICONS Chapter</h3>
                  <p>
                    Through <span className="text-[#00ffff] font-bold">Syko</span>, he linked up with <span className="text-[#00ffff] font-bold">ICONS</span>, a respected San Diego crew featuring lyrical monsters Frosty and Etch-U-Sketch. These weren't gimmick rappers—they were technicians. In an era before likes and algorithms, you earned your name through skill and consistency. That crew kept him sharp, demanding the best, and he delivered.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">Airwaves & Access</h3>
                  <p>
                    His first real break came through DJ Demon, who opened his garage studio to H.O.P. That space became a crucible for creativity. But it was <span className="text-[#00ffff] font-bold">Mike Naughty</span>, an SDSU student with an internship at 92.3 The Beat, who put him on air.
                  </p>
                  <p>
                    At KCR college radio, he became one of four DJs on <span className="text-[#00ffff] font-bold">Distorted Frequencies</span>. That show became his launchpad, connecting him to <span className="text-[#00ffff] font-bold">DJ Cutting Edge</span> out of L.A.—a technical beast with no ego—and through him, to the legendary <span className="text-[#00ffff] font-bold">Wake Up Show</span> with <span className="text-[#00ffff] font-bold">Sway</span> and <span className="text-[#00ffff] font-bold">King Tech</span>. For a kid who came up with just a tape deck and a dream, this was everything.
                  </p>
                  <p>
                    Around this time, he also started collaborating with <span className="text-[#00ffff] font-bold">Mike Czech</span>—who'd go on to host the syndicated <span className="text-[#00ffff] font-bold">Scratch and Sniff</span> show. Together, they dropped two mixtapes that traveled further than they did. No big promo. Just good work, moving hand to hand.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">Bay Area Shift</h3>
                  <p>
                    His move to <span className="text-[#00ffff] font-bold">Oakland</span> changed everything. The Bay felt different—real. You could hear someone scratching out of a second-story window on Haight Street and know you were in the right place.
                  </p>
                  <p>
                    There, he linked with DJs who challenged his entire approach. <span className="text-[#00ffff] font-bold">Oliver Orzal</span>, an EDM head, taught him about set structure and live energy. Then there was <span className="text-[#00ffff] font-bold">Spair</span>, whose cuts were so clean they almost felt lazy—and <span className="text-[#00ffff] font-bold">Teeko</span>, who was evolving from DJ to full-blown producer in real time.
                  </p>
                  <p>
                    Through them, he crossed paths with legends like <span className="text-[#00ffff] font-bold">Q-Bert, D-Styles, and DJ Flare</span>—names that command respect in scratch circles worldwide.
                  </p>
                  <p>
                    Among these connections, one stood out: <span className="text-[#00ffff] font-bold">The Genie</span>, a guitarist from San Francisco with a mind wired for innovation. While others followed trends, The Genie was pushing boundaries, layering live remixes in real time. More than just a collaborator, he became a solid friend through the chaos—one of those rare people you need in the room when things get real.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">Hawaii: A Different Frequency</h3>
                  <p>
                    In the 2000s, life pulled him to <span className="text-[#00ffff] font-bold">Hawaii</span>. He didn't go looking for peace, but he found it. The island rhythm slowed everything down. He stopped just listening to music and started listening to himself.
                  </p>
                  <p>
                    Hawaii wasn't a vacation—it was a reset. He still rocked shows, but the energy changed. Stripped of distractions and surrounded by raw nature, he tapped into something deeper. His production gained soul. His style got more intentional. The spiritual side of creativity—the part you can't fake—started coming through in his work.
                  </p>

                  <h3 className="text-xl font-heading text-[#00ffff]">Where He Is Now</h3>
                  <p>
                    Today, H.O.P remains that kid chasing a sound—but with decades of experience under his belt. He's paid dues, taken hits, stayed independent. Never sold out. Never watered it down.
                  </p>
                  <p>
                    Hip-hop gave him direction. It took him from bedroom sessions to radio waves, from basements to block parties to backstages. What started as an obsession became a way of life.
                  </p>
                  <p>
                    The turntables might rest, but that scratch—that sound he heard at 11—still lives in everything he creates.
                  </p>
                  <p>
                    The gear changes. The platforms evolve.
                  </p>
                  <p>
                    But his commitment to real expression never wavers.
                  </p>
                  <p className="text-[#00ffff] font-bold text-xl">
                    He's not here for the spotlight. He's here to create.
                    To pass it down.
                    And to keep the culture moving forward—one cut at a time.
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Section */}
            <div id="blog" className="bg-black/40 backdrop-blur-sm rounded-lg border border-[#00ffff]/30 p-6 sm:p-8 hover:border-[#00ffff]/50 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-heading text-[#00ffff] mb-4">Blog</h2>
              <div className="space-y-6">
                <article className="border-l-2 border-[#00ffff]/30 pl-4 hover:border-[#00ffff] transition-all duration-300">
                  <h3 className="text-xl font-heading text-white mb-2">The Evolution of Turntablism</h3>
                  <p className="text-white/60 text-sm mb-2">Posted on April 15, 2024</p>
                  <p className="text-white/80">
                    Exploring the journey from vinyl manipulation to digital integration, and how traditional techniques remain relevant in modern DJing.
                  </p>
                </article>
                <article className="border-l-2 border-[#00ffff]/30 pl-4 hover:border-[#00ffff] transition-all duration-300">
                  <h3 className="text-xl font-heading text-white mb-2">The Art of Sample Flipping</h3>
                  <p className="text-white/60 text-sm mb-2">Posted on March 28, 2024</p>
                  <p className="text-white/80">
                    Breaking down the creative process behind sample selection, manipulation, and integration in modern beat production.
                  </p>
                </article>
                <article className="border-l-2 border-[#00ffff]/30 pl-4 hover:border-[#00ffff] transition-all duration-300">
                  <h3 className="text-xl font-heading text-white mb-2">Battle DJing: Then and Now</h3>
                  <p className="text-white/60 text-sm mb-2">Posted on March 10, 2024</p>
                  <p className="text-white/80">
                    Reflecting on the evolution of DJ battles, from vinyl-only showdowns to the integration of modern technology.
                  </p>
                </article>
              </div>
            </div>

            {/* Interview Section */}
            <div id="interview" className="bg-black/40 backdrop-blur-sm rounded-lg border border-[#00ffff]/30 p-6 sm:p-8 hover:border-[#00ffff]/50 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-heading text-[#00ffff] mb-4">Interview</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  From the early days of scratching on borrowed turntables to becoming a respected figure in the turntablism scene, his journey has been driven by an unwavering passion for the art of DJing.
                </p>
                <p>
                  Starting in San Diego's underground hip-hop scene, he honed his skills through countless battles and performances. The competitive spirit of the DJ battle circuit shaped his technical precision and creative approach to turntablism.
                </p>
                <p>
                  Today, he continues to push the boundaries of what's possible on the turntables, blending traditional techniques with modern innovation. Whether it's producing original tracks or collaborating with other artists, his goal remains the same: to elevate the art of turntablism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 