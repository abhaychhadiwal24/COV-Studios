"use client"; // Required for hooks in Next.js App Router

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const LeadingPartner = () => {
  const sectionRef = useRef(null);
  const outerButtonRef = useRef(null);
  const innerCircleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // GSAP context for safe cleanup
    let ctx = gsap.context(() => {
      // Create a timeline that is controlled by the scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%", // Animation starts when the top of the section hits the top of the viewport
          end: "bottom bottom", // Animation ends when the bottom of the section hits the bottom of the viewport
          scrub: 1, // Smoothly links the animation to the scrollbar (1 second of smoothing)
        },
      });

      // 1. Animate the inner circle moving to the right
      // The container is 1000px, circle is 350px, and margin is 40px on each side.
      // Move distance = 1000 - 350 - 40 (left) - 40 (right) = 570px
      tl.to(innerCircleRef.current, {
        x: 570, // Move 570px to the right
        ease: "power1.inOut",
      });

      // 2. Animate the outer container's background color change
      // The "<" position parameter makes it start at the same time as the previous animation
      tl.to(outerButtonRef.current, {
        backgroundColor: "turquoise",
        ease: "power1.inOut",
      }, "<");

      // 3. Animate the growth arrow appearing inside the circle
      // The "<+0.2" parameter starts this 0.2s after the beginning of the previous animation
      tl.fromTo(arrowRef.current,
        { opacity: 0, scale: 0.5 }, // Start state
        { opacity: 1, scale: 1, ease: "back.out(1.7)" }, // End state
        "<+0.2"
      );

    }, sectionRef); // Scope the context

    // Cleanup function
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className='h-[850px] bg-[#FBFADC] relative flex flex-col items-center pt-20'>

      {/* Heading */}
      <div className='text-8xl font-extrabold text-center mb-24'>
        <p className='text-black'>India's <span className='text-yellow-600'>Leading</span> Digital</p>
        <p className='text-black'>Support Partner</p>
      </div>

      {/* Scrolling Button */}
      <div ref={outerButtonRef} className='h-[400px] w-[1000px] rounded-full bg-[#f0ded1] p-[28px_40px]'>
        <div ref={innerCircleRef} className='h-[350px] w-[350px] rounded-full bg-white flex items-center justify-center'>
          {/* Growth Arrow SVG - Initially hidden */}
          <div ref={arrowRef} className="opacity-0">
            <Link href="/contact">
              <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};