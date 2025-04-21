'use client';

import React from 'react';
import InfoCard from '@/components/ui/InfoCard';

export default function Home() {
  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '40px 20px',
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <h1 style={{ marginBottom: '40px', fontSize: '24px', fontWeight: 'bold' }}>InfoCard Example</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <InfoCard
          id="my-journey"
          title="My Journey"
          content={{
            short: "My journey in music",
            full: (
              <div>
                <p style={{ marginBottom: '16px' }}>
                  My journey into the world of electronic music began in the late 90s when I first encountered the hypnotic beats of underground warehouse parties. Those early experiences shaped my understanding of how music can transform spaces and connect people.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Growing up in a musical household, I was always drawn to rhythm and sound. My parents' eclectic record collection exposed me to everything from jazz and soul to early hip-hop. By the time I was a teenager, I had already started experimenting with turntables and rudimentary production software.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  The turning point came in 2005 when I produced my first EP. What started as a passion project quickly gained attention in local clubs, giving me the confidence to pursue music production full-time. Since then, I've released over 20 EPs and 3 full-length albums, collaborating with artists from around the globe.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Today, my sound has evolved to incorporate influences from techno, house, and ambient music. I continue to push boundaries, seeking new ways to create immersive sonic experiences for listeners and dancers alike.
                </p>
              </div>
            )
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <InfoCard
          id="blog"
          title="Blog"
          content={{
            short: "Latest thoughts and updates",
            full: (
              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '18px' }}>
                  New Studio Setup: Finding Balance Between Analog and Digital
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  After months of planning and research, I've finally completed my new studio setup. This space represents a careful balance between analog warmth and digital precision - something I've been striving to achieve in both my workspace and my productions.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  The centerpiece is a vintage mixing console I restored over the winter. There's something magical about running digital compositions through analog circuits, adding depth and character that's hard to replicate with plugins alone. Paired with modern monitoring and a streamlined digital workflow, I feel I've created an environment that brings out the best of both worlds.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  This hybrid approach has already influenced my recent productions. Tracks for the upcoming EP have a warmth and presence I've been chasing for years. I'm excited to share these new sounds in the coming months and to host fellow producers in a space designed for creativity and sonic exploration.
                </p>
                <h3 style={{ fontWeight: 'bold', marginBottom: '12px', marginTop: '24px', fontSize: '18px' }}>
                  Reflections on a Decade of Touring
                </h3>
                <p style={{ marginBottom: '16px' }}>
                  Last weekend marked ten years since my first international gig. Looking back on a decade of airports, hotels, and club systems has me feeling nostalgic and grateful for every opportunity to share music with audiences around the world.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  The evolution of my touring experience mirrors the evolution of my sound. From those early days of nervous energy and overpacked bags to the current ritual of focused preparation and mindful performance, each stage has taught valuable lessons about art and life.
                </p>
              </div>
            )
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <InfoCard
          id="interview"
          title="Interview"
          content={{
            short: "Recent media coverage",
            full: (
              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '12px', fontSize: '18px' }}>
                  Electronic Sound Magazine - June 2023
                </h3>
                <p style={{ marginBottom: '8px', fontStyle: 'italic' }}>
                  Interviewer: Your recent album has been described as "bridging the gap between dance floor functionality and home listening introspection." Was this duality intentional?
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Absolutely. I've always been fascinated by music that can transform depending on the context in which it's heard. The same track might energize a crowd at 2AM but also provide a thoughtful soundtrack for someone's morning commute. That versatility is something I consciously build into my compositions.
                </p>
                <p style={{ marginBottom: '8px', fontStyle: 'italic' }}>
                  Interviewer: Your production techniques have evolved significantly over the years. What's been the most important development in your approach?
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Learning to trust simplicity. Early in my career, I overcomplicated everything, adding layer upon layer in search of complexity. Now, I understand that power often lies in restraint - in knowing exactly what elements are essential and having the confidence to let them breathe. This applies to both sound design and arrangement.
                </p>
                <p style={{ marginBottom: '8px', fontStyle: 'italic' }}>
                  Interviewer: What advice would you give to emerging producers trying to find their voice?
                </p>
                <p style={{ marginBottom: '16px' }}>
                  Be patient with yourself and resist the temptation to follow trends. Your unique perspective is your greatest asset. Also, finish tracks even when they don't meet your expectations - completed works, even flawed ones, teach more than a hundred perfect 8-bar loops.
                </p>
              </div>
            )
          }}
        />
      </div>
    </div>
  );
}