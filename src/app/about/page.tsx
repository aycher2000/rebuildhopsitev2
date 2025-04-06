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
                short: "The Journey of a Turntablist: A Story from the Outside Looking In",
                full: (
                  <div className="space-y-6">
                    <p>
                      DJ H.O.P. didn't come from palm trees and postcard beaches. No, his San Diego wasn't the glossy version tourists dream about. It was real, raw—an environment where you either found your lane or get ran over. As a kid, he didn't have a path carved out for him. But the moment he caught <span className="text-[#00ffff] font-bold">Herbie Hancock's "Rockit" on TV—backed by the legendary Grandmixer DXT</span>—something shifted. DXT wasn't just playing records. He was playing sound. And that sound lodged itself deep in an 11-year-old's bones. From that day on, everything changed.
                    </p>

                    <p>
                      No silver spoon. No trust fund of gear. Just a hand-me-down stereo system from his grandfather—who wasn't thrilled when it became a makeshift scratch lab. With a tape deck and an unrelenting drive, he turned junk turntables into instruments and Radio Shack mixers into tools of transformation. There were no tutorials. No mentors. Just grit, repetition, and raw hunger.
                    </p>

                    <p>
                      Everything leveled up in <span className="text-[#00ffff] font-bold">1991</span>. Two Technics 1200s, scored for $300 from a mobile DJ company that was ditching vinyl. It was a cosmic hand-off—from one era to the next. Add a Gemini PMX2200, and suddenly the static became signal. His foundation was set.
                    </p>

                    <p>
                      But iron sharpens iron. And in the early days, he found his steel—<span className="text-[#00ffff] font-bold">DJ Illogic and DJ Syko</span>. Illogic brought the East Coast discipline. Syko? That chaotic West Coast fire. In Syko's whirlwind of a room, mixtapes were born, samples flew back and forth, and boundaries got pushed until they cracked. These weren't just collaborations. These were battles. These were brotherhoods.
                    </p>

                    <p>
                      Through Syko, the door opened to <span className="text-[#00ffff] font-bold">ICONS</span>—a San Diego crew that didn't just rap, they executed. <span className="text-[#00ffff] font-bold">Frosty and Etch-U-Sketch</span> weren't gimmicks; they were surgical. They demanded skill, consistency, and authenticity, and H.O.P. delivered.
                    </p>

                    <p>
                      Then came the airwaves. <span className="text-[#00ffff] font-bold">DJ Demon</span>, a working DJ with a garage full of gear and generosity, offered space to build. And then there was <span className="text-[#00ffff] font-bold">Mike Naughty</span>—an SDSU student with a plug at 92.3 The Beat. That connection got him behind the mic at KCR college radio. There, on <span className="text-[#00ffff] font-bold">Distorted Frequencies</span>, his name began to travel. One show led to another introduction, this time to <span className="text-[#00ffff] font-bold">DJ Cutting Edge</span>—L.A. technical royalty with zero ego. That connection spiraled into conversations with the team behind <span className="text-[#00ffff] font-bold">The Wake Up Show</span>—the holy grail of hip-hop radio, hosted by <span className="text-[#00ffff] font-bold">Sway and King Tech</span>. For a kid who built his empire with cassettes and daydreams, this was legacy-level territory.
                    </p>

                    <p>
                      In this era, H.O.P. collaborated with <span className="text-[#00ffff] font-bold">Mike Czech</span>, future host of the nationally syndicated <span className="text-[#00ffff] font-bold">Scratch and Sniff</span>. Together, they dropped two mixtapes that quietly caught fire—not through promo or playlist placements—but by being that good. Hand to hand. Word of mouth. Real heads knew.
                    </p>

                    <p>
                      But the universe had more chapters in store. Next stop: The Bay.
                    </p>

                    <p>
                      <span className="text-[#00ffff] font-bold">Oakland</span>. Haight Street. A second-story window. The sound of someone cutting wax floating through the air. That's when he knew—he was home. The Bay was a different beast. There he linked with DJs like <span className="text-[#00ffff] font-bold">Oliver Orzal</span>, who taught him the science of set structure, and <span className="text-[#00ffff] font-bold">Spair</span>, whose impossibly clean cuts pushed his technical limits. He watched <span className="text-[#00ffff] font-bold">Teeko</span> evolve from DJ to production mad scientist right before his eyes.
                    </p>

                    <p>
                      Through them, the network expanded. <span className="text-[#00ffff] font-bold">Q-Bert. D-Styles. DJ Flare</span>. Names spoken in hushed tones among turntablists. Legends. And now, they weren't just names—they were collaborators, sparring partners, peers.
                    </p>

                    <p>
                      But the most profound connection? That came through <span className="text-[#00ffff] font-bold">The Genie</span>.
                    </p>

                    <p>
                      A guitarist by trade, The Genie defied genres. He looped live, re-mixed in real time, and shreds like a seasoned jazz musician in a cyberpunk jam session. He wasn't a scratch influence, per se—but he was a mirror. A reminder of what it means to innovate fearlessly. More than that, The Genie became family. When things got chaotic, he was the one you wanted in the room. A brother in creativity. A rock when things got loud.
                    </p>

                    <p>
                      Then came <span className="text-[#00ffff] font-bold">Hawaii</span>.
                    </p>

                    <p>
                      It wasn't a retreat. It was a realignment.
                    </p>

                    <p>
                      On those islands, surrounded by silence and soul, he started listening—not just to records, but to himself. The pace slowed. The noise dimmed. The work got deeper. His production began to breathe. The scratch wasn't just a skill anymore—it was a spirit. His craft turned inward. What came out? Something richer. More human. More him.
                    </p>

                    <p>
                      Now, years later, he's still at it.
                    </p>

                    <p>
                      Same fire. New flame.
                    </p>

                    <p>
                      He's seen it all—radio booths, bedroom labs, block parties, studio backrooms. He's paid dues, stayed indie, took the long road every single time. And through it all, he never sold out. Never watered it down. Because for him, it was never about fame.
                    </p>

                    <p>
                      It was about that sound he heard at 11.
                    </p>

                    <p>
                      That scratch that turned into a compass.
                    </p>

                    <p>
                      That culture that became a calling.
                    </p>

                    <p>
                      And now? He's the one others look to. Quietly shaping the next wave, mentoring in his own way, passing down the craft like a sacred language. He doesn't chase the spotlight.
                    </p>

                    <p className="text-[#00ffff] font-bold">
                      He chases truth—one cut at a time.
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
                short: "Artist Q&A: The Mind Behind the Music & Art",
                full: (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#00ffff] mb-6">Artist Q&A: The Mind Behind the Music & Art</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: How did you get into turntablism?</p>
                        <p>A: My beginning sounds like many other DJs from my generation. I was 11 years old when I saw Herbie Hancock perform "Rockit" with Grandmixer DST live on television, and I was hooked. Three years later, I had one crappy turntable and a tape deck. I was so into scratching that when I first heard "La Di Da Di" by Slick Rick, I didn't like it—because there was no scratching! Haha.</p>
                      </div>

                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: What inspires your artwork?</p>
                        <p>A: I'm inspired by the competitive nature of hip-hop culture. Whether it's DJing, production, or visual art, you have to stay sharp and keep pushing your craft forward—because in hip-hop, if you're not evolving, you're getting left behind.</p>
                      </div>

                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: What can people expect from this site?</p>
                        <p>A: This is a showcase of my work—beats, songs, and artwork. A place to explore what I create, whether it's music production, mixtapes, scratching, or visual art.</p>
                      </div>

                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: Who are some of your biggest influences?</p>
                        <p>A: From a turntablist perspective: Cash Money, Jazzy Jeff, DJ Quest, Daddy Rich, DJ Aladdin, Joe Cooley, Magic Mike, Mr. Mixx (2 Live Crew), and Mix Master Mike shaped how I see scratching as an art form. Later, I drew influence from turntablists I became friends with and practiced with along the way—DJ Syko, Illogic, Dj Demon, Cutting Edge. When I moved to the Bay Area, it was Teeko, Max Kane, Flare, D-Styles, and of course, I gotta give it up to Qbert for having the best practice space imaginable.</p>
                        <p className="mt-2">Don't get mad at me if I didn't mention you. It's not easy to remember every single person you came up with on the spot. Especially when you fried as many brain cells as I did 😎.</p>
                        <p className="mt-2">Artistically, I draw inspiration from graffiti culture, 90s hip-hop aesthetics, and abstract expressionism.</p>
                      </div>

                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: Do you have a favorite project you've worked on?</p>
                        <p>A: It's hard to choose just one. If I had to pick, it would be the record I put out solo in 2004: "40 oz Breaks". It was a DJ tool vinyl with beats and skipless samples to scratch with. I had a hand in the entire process—from concept to pressing the vinyl—and nothing feels more official than holding a record you made in your hands. Honorable mentions: I was part of a hip-hop group out of San Diego called Icons. We pushed as far as we could, but timing and location weren't in our favor. The internet wasn't what it is today, and being in San Diego meant living in the entertainment shadow of Los Angeles. Anyone who makes it out of my city eventually moves to LA.</p>
                      </div>

                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: What's your creative process like?</p>
                        <p>A: It depends on the project. I can freestyle a lot of my work, but when doing a scratch hook for someone's record, I dig into my mental library. Sometimes the artist gives me a concept, and I run with it. Other times, I create my part first, then have the rapper write to the concept I put together. If I'm making music, I start with a bass groove or a drum break and build from there. If I'm working on artwork, I begin with a rough sketch or digital concept. Creativity is all about feeling the moment.</p>
                      </div>

                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: Do you prefer working alone or collaborating?</p>
                        <p>A: I love collaborating when the chemistry is right. Some of my best work comes from bouncing ideas off other creatives. But at the same time, there's something powerful about working solo and having full creative control.</p>
                      </div>

                      <div>
                        <p className="text-[#00ffff] font-bold mb-2">Q: What's next for you?</p>
                        <p>A: I'm clean and sober now, and it feels like a new beginning—I have my full mental capabilities back. I'm reconnecting with people I came up with in the extended crew. I've been lucky to surround myself with homies who never stop doing great work. The next project will be a hip hop mix-tape, classic H.O.P. style.. I will frequently update this and other projects that I call "Hate Generators" lol..</p>
                      </div>
                    </div>
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