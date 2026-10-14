"use client";

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const clientList = ["Startups", "Content Creators", "Small Businesses", "Enterprises"];

const AboutSection = () => {
    const sectionRef = useRef(null);
    const clientsContainerRef = useRef(null);
    const clientTextRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // The timeline is now configured to repeat and has a slight delay between loops
            const clientTl = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.5,
                scrollTrigger: {
                    trigger: clientsContainerRef.current,
                    start: "top 80%",
                    toggleActions: "play pause resume pause",
                }
            });

            // Loop through each client ref to build the overlapping animation sequence
            clientTextRefs.current.forEach((clientRef, index) => {
                const isFirst = index === 0;

                clientTl
                    // 1. Animate IN from the bottom
                    .fromTo(clientRef,
                        { yPercent: 100, autoAlpha: 0 },
                        { yPercent: 0, autoAlpha: 1, duration: 0.5, ease: 'power2.out' },
                        // This is the key: The first item waits, subsequent items overlap
                        isFirst ? "+=0.5" : "-=0.4"
                    )
                    // 2. Animate OUT to the top after a 300ms hold
                    .to(clientRef, {
                        yPercent: -100,
                        autoAlpha: 0,
                        duration: 0.5,
                        ease: 'power2.in',
                        delay: 0.3 // The 300ms hold
                    });
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id='about' className="relative h-screen w-full flex flex-col items-center bg-[#FBFADC] py-20">
            {/* Trusted Partner */}
            <div className='bg-green-400 p-2 rounded-full absolute top-30'>
                <p className='text-black font-bold'>Trusted Partner</p>
            </div>
            {/* Trusted By */}
            <div ref={clientsContainerRef} className="text-center my-10 absolute top-35 flex flex-col gap-5">
                <p className='text-5xl text-black font-extrabold'>Delivering to Forward-Thinking</p>
                {/* Client List Animation */}
                <div className='relative h-32 w-[1400px] overflow-hidden'>
                    {clientList.map((client, index) => (
                        <p
                            key={client}
                            ref={el => { clientTextRefs.current[index] = el }}
                            className='absolute inset-0 text-grad font-bold text-9xl text-center'
                        >
                            {client}
                        </p>
                    ))}
                </div>
                <p className='text-5xl text-black font-extrabold'>Around the World</p>
            </div>
            {/* CTA Button */}
            <Link href="/contact" className='absolute top-150 mt-4 px-8 py-4 bg-yellow-400 text-black font-bold rounded-full text-lg hover:bg-yellow-500 transition-colors'>
                Get in Touch
            </Link>
        </section>
    )
}

export default AboutSection;