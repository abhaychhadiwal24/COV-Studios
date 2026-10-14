"use client"; // Add this if you're using the Next.js App Router

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from './Marquee';


gsap.registerPlugin(ScrollTrigger);

export const OurWorkSection = () => {
    const sectionRef = useRef(null);
    const darkCoverRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Create a timeline that will be triggered by scrolling
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%", // Start animation when 60% of the section is visible
                    toggleActions: "play none none none", // Play the animation once and don't reverse
                }
            });

            // Sequence the animations
            tl
                // 1. Animate the dark cover in after a 300ms delay
                .from(darkCoverRef.current, {
                    autoAlpha: 0, // Fades in opacity and visibility
                    duration: 0.8,
                    ease: 'power2.inOut',
                    delay: 0.3
                })
                // 2. Animate the text in 200ms after the cover starts appearing
                .from(textRef.current, {
                    autoAlpha: 0,
                    y: 50, // A slight upward movement for a nicer effect
                    duration: 0.8,
                    delay: 0.6,
                    ease: 'power2.out'
                }, "<0.2"); // The "<0.2" starts this 0.2s after the previous animation began

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id='work' className='bg-white relative'>

            {/* First Marquee */}
            <Marquee
                images={[
                    "/our_work-section/img1.1.jpeg",
                    "/our_work-section/img1.2.jpeg",
                    "/our_work-section/img1.3.jpeg",
                    "/our_work-section/img1.4.jpeg",
                    "/our_work-section/img1.5.jpeg",
                    "/our_work-section/img1.6.jpeg",
                    "/our_work-section/img1.7.jpeg",
                    "/our_work-section/img1.8.jpeg",
                    "/our_work-section/img1.9.jpeg",
                    "/our_work-section/img1.10.jpeg",
                ]}
                speed={20}
                direction='left'
            />

            {/* Second Marquee */}
            <Marquee
                images={[
                    "/our_work-section/img2.1.jpeg",
                    "/our_work-section/img2.2.jpeg",
                    "/our_work-section/img2.3.jpeg",
                    "/our_work-section/img2.4.jpeg",
                    "/our_work-section/img2.5.jpeg",
                    "/our_work-section/img2.6.jpeg",
                    "/our_work-section/img2.7.jpeg",
                    "/our_work-section/img2.8.jpeg",
                    "/our_work-section/img2.9.jpeg",
                    "/our_work-section/img2.10.jpeg",
                ]}
                speed={20}
                direction='right'
            />

            {/* Third Marquee */}
            <Marquee
                images={[
                    "/our_work-section/img2.1.jpeg",
                    "/our_work-section/img2.2.jpeg",
                    "/our_work-section/img2.3.jpeg",
                    "/our_work-section/img2.4.jpeg",
                    "/our_work-section/img2.5.jpeg",
                    "/our_work-section/img2.6.jpeg",
                    "/our_work-section/img2.7.jpeg",
                    "/our_work-section/img2.8.jpeg",
                    "/our_work-section/img2.9.jpeg",
                    "/our_work-section/img2.10.jpeg",
                ]}
                speed={20}
                direction='left'
            />

            {/* Fourth Marquee */}
            <Marquee
                images={[
                    "/our_work-section/img2.1.jpeg",
                    "/our_work-section/img2.2.jpeg",
                    "/our_work-section/img2.3.jpeg",
                    "/our_work-section/img2.4.jpeg",
                    "/our_work-section/img2.5.jpeg",
                    "/our_work-section/img2.6.jpeg",
                    "/our_work-section/img2.7.jpeg",
                    "/our_work-section/img2.8.jpeg",
                    "/our_work-section/img2.9.jpeg",
                    "/our_work-section/img2.10.jpeg",
                ]}
                speed={20}
                direction='right'
            />

            {/* Dark cover - Added ref */}
            <div ref={darkCoverRef} className='h-full w-full bg-black opacity-80 z-20 absolute top-0 left-0' />

            {/* Text - Added ref */}
            <div ref={textRef} className='h-full w-full absolute top-0 left-0 z-30 flex justify-center items-center'>
                <div className='flex flex-col gap-10'>
                    <p className='text-grad text-start text-9xl font-bold'>Our Work <span className='text-grad-2 opacity-50 text-[50px] align-text-top'>300+</span></p>
                    <p className='w-7xl text-2xl text-center text-[#FBFADC] opacity-70'>
                        We help visionary startups, creators, and brands scale with confidence.
                        As a leading digital agency, we specialize in strategy, design, and growth solutions
                        that transform businesses into trusted market leaders.
                        We empower ambitious founders and enterprises to
                        build authority, grow sustainably, and leave a lasting legacy <br />making the path to success clear, premium, and achievable.
                    </p>
                </div>
            </div>
        </section>
    );
};