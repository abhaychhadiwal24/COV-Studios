// src/components/TestimonialCollage.tsx

"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { layoutData } from './layoutData';

gsap.registerPlugin(ScrollTrigger);

export const TestimonialCollage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isSectionActive, setIsSectionActive] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!sectionRef.current || !textContainerRef.current || mediaRefs.current.some(ref => !ref)) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          onEnter: () => setIsSectionActive(true),
          onLeaveBack: () => setIsSectionActive(false),
        },
      });

      // Phase 1: Reveal Media
      mediaRefs.current.forEach((mediaDiv, i) => {
        if (mediaDiv) {
          tl.fromTo(
            mediaDiv,
            { autoAlpha: 0, scale: 0.8, y: 50 },
            { autoAlpha: 1, scale: 1, y: 0, ease: "back.out(1.7)", duration: 0.6 },
            i * 0.05
          );
        }
      });

      // Phase 2: Animate Text and Spotlight
      tl.fromTo(
        textContainerRef.current,
        { autoAlpha: 0, scale: 0.9 },
        { autoAlpha: 1, scale: 1, ease: "power2.out", duration: 1, delay: 0.5 },
        "<"
      );
      
      tl.to(
        textContainerRef.current,
        { '--blur-amount': '8px', duration: 1, ease: "power2.out" },
        ">-0.8"
      );

      // --- GLOW EFFECT CHANGES START HERE ---

      // 1. Initial reveal of the glow
      tl.fromTo(
        spotlightRef.current,
        { autoAlpha: 0, scale: 0.5 },
        { autoAlpha: 0.6, scale: 1, ease: "power2.out", duration: 1.2 },
        ">-0.5"
      );

      // 2. Add a continuous, gentle "breathing" animation
      tl.to(spotlightRef.current, {
        scale: 1.2,
        autoAlpha: 0.8,
        duration: 3,
        repeat: -1, // Repeat indefinitely
        yoyo: true,  // Animate back and forth
        ease: "power1.inOut"
      });
      
      // --- GLOW EFFECT CHANGES END HERE ---

    }, sectionRef);

    return () => ctx.revert(); 
    
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#131313] py-10 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {layoutData.map((item, index) => (
          <div
            key={index}
            ref={el => { mediaRefs.current[index] = el; }}
            className="absolute rounded-lg overflow-hidden opacity-0"
            style={item.style}
          >
            {item.type === 'image' ? (
              <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="30vw" />
            ) : (
              <video
                src={item.src}
                autoPlay={isSectionActive}
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div
        ref={textContainerRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-8 bg-black/50 text-center backdrop-blur-[var(--blur-amount,0px)] opacity-0"
        style={{ 
          '--blur-amount': '0px',
          // --- SOFT EDGES CHANGE START HERE ---
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
          // --- SOFT EDGES CHANGE END HERE ---
        } as React.CSSProperties}
      >
        <h2 ref={textRef} className="text-5xl md:text-7xl font-extrabold text-grad bg-white">
          Build on Proven Trust
        </h2>
        <div
          ref={spotlightRef}
          // --- GLOW EFFECT CSS CHANGE START HERE ---
          className="absolute inset-0 rounded-xl filter blur-3xl -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0)_70%)]"
          // --- GLOW EFFECT CSS CHANGE END HERE ---
        ></div>
      </div>
    </section>
  );
};