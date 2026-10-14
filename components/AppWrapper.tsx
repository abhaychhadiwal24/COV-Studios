"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// This component will wrap your page content
export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Get the current URL path

  useEffect(() => {
    // This function sets up all the GSAP ScrollTriggers
    const setupTriggers = () => {
      // Color-changing nav trigger
      const lightSections = gsap.utils.toArray<HTMLElement>('section[data-nav-theme="light"]');
      lightSections.forEach(section => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 80px",
          end: "bottom 80px",
          toggleClass: {
            targets: "#main-nav",
            className: "navbar-light"
          }
        });
      });

      // Glass effect nav trigger
      ScrollTrigger.create({
        start: "top -10px",
        end: 99999,
        toggleClass: {
          targets: "#main-nav",
          className: "navbar-scrolled"
        }
      });
    };

    // Run the setup
    setupTriggers();

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers when the component unmounts or path changes
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathname]); // <-- Re-run the effect every time the pathname changes!

  return <>{children}</>;
};