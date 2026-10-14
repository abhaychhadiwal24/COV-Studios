"use client"

import { useState } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  backgroundColor: string;
  imageSrc: string;
  heading: string;
  options: string[];
  index: number;
  isActive: boolean;
  top: string;
  totalCards: number;
  onClick: () => void;
  onClose: () => void;
}

const INITIAL_OPTIONS_LIMIT = 3;

export const ServiceCard = ({
  backgroundColor,
  imageSrc,
  heading,
  options,
  index,
  isActive,
  top,
  totalCards,
  onClick,
  onClose,
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const canExpand = options.length > INITIAL_OPTIONS_LIMIT;
  const remainingOptionsCount = options.length - INITIAL_OPTIONS_LIMIT;
  const displayedOptions =
    isExpanded || !canExpand ? options : options.slice(0, INITIAL_OPTIONS_LIMIT);

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };
  
  // --- THIS IS THE FIX ---
  // Create a new handler for the expand button
  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 1. Stop the click from bubbling up to the parent card
    setIsExpanded(true);  // 2. Perform the desired action
  };

  return (
    <div
      onClick={onClick}
      className={`w-full flex flex-row gap-2 rounded-3xl p-2 absolute cursor-pointer
                 transition-all duration-500 ease-in-out ${backgroundColor}
                 ${isActive ? '' : 'hover:-translate-y-4'}`}
      style={{
        top,
        zIndex: isActive ? 100 : totalCards - index,
        transform: isActive ? `translateY(-${top}) scale(1.05)` : 'scale(1)',
      }}
    >
      {/* Image */}
      <div className='flex-1'>
        <Image src={imageSrc} alt={heading} className='rounded-3xl' width={250} height={120} />
      </div>

      {/* Text Content */}
      <div className='flex flex-col gap-10 flex-1'>
        <p className='text-black text-5xl font-extrabold font-center'>{heading}</p>
        
        <div className='flex flex-col gap-3'>
          {displayedOptions.map((option) => (
            <p key={option} className='bg-[#FBFADC] text-[#131313] px-2 py-1 rounded-full text-[14px] font-bold w-fit'>
              {option}
            </p>
          ))}
          
          {canExpand && !isExpanded && (
            <p
              // Use the new handler function here
              onClick={handleExpandClick}
              className='text-black font-bold cursor-pointer hover:underline w-fit'
            >
              +{remainingOptionsCount} more
            </p>
          )}
        </div>
      </div>

      {isActive && (
        <button
          onClick={handleCloseClick}
          className="absolute bottom-2 left-2 z-[101] w-7 h-7 flex items-center justify-center 
                     bg-red-500 text-white font-bold text-lg rounded-full 
                     hover:bg-red-600 transition-colors"
          aria-label="Close card"
        >
          &times;
        </button>
      )}
    </div>
  );
};