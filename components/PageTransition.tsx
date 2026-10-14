// src/components/PageTransition.tsx

"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';

// Define the animation variants
const variants = {
  // state for sliding IN from the RIGHT
  inFromRight: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
    }
  },
  // state for sliding IN from the LEFT
  inFromLeft: {
    x: '-100%',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
    }
  },
  // state for being IN the center
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
    }
  },
  // state for sliding OUT to the LEFT
  outToLeft: {
    x: '-100%',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
    }
  },
  // state for sliding OUT to the RIGHT
  outToRight: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
    }
  },
}as const;

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    prevPathnameRef.current = pathname;
  }, [pathname]);

  // Determine animation direction based on navigation
  const isNavigatingToContact = pathname === '/contact' && prevPathnameRef.current === '/';
  const isNavigatingHome = pathname === '/' && prevPathnameRef.current === '/contact';

  let initialVariant = "center";
  let animateVariant = "center";
  let exitVariant = "center";

  if (isNavigatingToContact) {
    // Home -> Contact
    initialVariant = "inFromRight";
    exitVariant = "outToLeft";
  } else if (isNavigatingHome) {
    // Contact -> Home
    initialVariant = "inFromLeft";
    exitVariant = "outToRight";
  }

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname} // This is crucial! Framer Motion detects changes to this key.
        initial={initialVariant}
        animate={animateVariant}
        exit={exitVariant}
        variants={variants}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};