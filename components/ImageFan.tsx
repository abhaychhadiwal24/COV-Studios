// src/components/ImageFan.tsx

"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface ImageFanProps {
  images: string[];
}

export const ImageFan = ({ images }: ImageFanProps) => {
  // --- This is the new ref for the component's container ---
  const containerRef = useRef(null);
  
  const imageSet = images.length % 2 === 0 ? images.slice(0, -1) : images;
  const totalCards = imageSet.length;
  const centerIndex = Math.floor(totalCards / 2);
  
  const [imageOrder, setImageOrder] = useState(() => Array.from(imageSet.keys()));
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimating = useRef(false);

  const getCardStyle = (stackPosition: number) => {
    const offsetFromCenter = stackPosition - centerIndex;
    const isCenterCard = offsetFromCenter === 0;
    const x = isCenterCard ? 0 : offsetFromCenter * 80;
    const y = isCenterCard ? 0 : Math.abs(offsetFromCenter) * 30;
    const rotation = isCenterCard ? 0 : offsetFromCenter * 15;
    const scale = isCenterCard ? 1.15 : 1;
    const zIndex = totalCards - Math.abs(offsetFromCenter);
    return {
      transform: `translateX(${x}px) translateY(${y}px) scale(${scale}) rotate(${rotation}deg)`,
      zIndex,
    };
  };

  const handleClick = (clickedOriginalIndex: number) => {
    // ... handleClick logic remains the same
    if (isAnimating.current) return;
    const currentTopCardOriginalIndex = imageOrder[centerIndex];
    if (clickedOriginalIndex === currentTopCardOriginalIndex) return;
    isAnimating.current = true;
    const clickedStackPosition = imageOrder.indexOf(clickedOriginalIndex);
    const shiftAmount = centerIndex - clickedStackPosition;
    const newOrder = imageOrder.map((_, i) => imageOrder[(i - shiftAmount + totalCards) % totalCards]);
    const exitDirection = clickedStackPosition < centerIndex ? '120%' : '-120%';
    const tl = gsap.timeline({
      onComplete: () => {
        setImageOrder(newOrder);
        isAnimating.current = false;
        gsap.set(imageRefs.current, { clearProps: "all" });
      },
    });
    tl.to(imageRefs.current[currentTopCardOriginalIndex], {
      x: exitDirection,
      y: '+=50',
      rotation: exitDirection.startsWith('-') ? -25 : 25,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.in',
    });
    newOrder.forEach((originalIndex, newStackPosition) => {
      if (originalIndex !== currentTopCardOriginalIndex) {
        const element = imageRefs.current[originalIndex];
        tl.to(element, {
          ...getCardStyle(newStackPosition),
          duration: 0.7,
          ease: 'power3.out',
        }, "<0.1");
      }
    });
  };

  // --- The useEffect hook is now updated with GSAP context ---
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial staggered entrance animation
      gsap.from(imageRefs.current, {
        y: 200,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, containerRef); // Scope the context to this component

    // This cleanup function is the key!
    return () => ctx.revert();
  }, []);

  return (
    // Add the new ref to the container
    <div ref={containerRef} className="relative w-full h-96 flex justify-center items-center mt-10">
      {imageSet.map((src, originalIndex) => {
        const stackPosition = imageOrder.indexOf(originalIndex);
        return (
          <div
            key={originalIndex}
            ref={el => { imageRefs.current[originalIndex] = el; }}
            className="absolute w-44 h-60 rounded-lg overflow-hidden shadow-2xl cursor-pointer origin-bottom"
            style={getCardStyle(stackPosition)}
            onClick={() => handleClick(originalIndex)}
          >
            <Image
              src={src}
              alt={`Fan image ${originalIndex + 1}`}
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>
        );
      })}
    </div>
  );
};