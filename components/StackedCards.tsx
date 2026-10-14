"use client"

import { useState } from 'react'; // Import useState
import { ServiceCard } from './ServiceCard';

// Your data array remains the same
const cardsData = [
  {
    heading: 'Web Development',
    options: [
      'Search Engine Optimization',
      'New-gen Animations',
      '3D Graphics',
      'E-commerce Solutions',
      'Content Management Systems',
    ],
    backgroundColor: 'bg-yellow-700',
    imageSrc: '/our_work-section/img2.3.jpeg',
  },
  {
    heading: 'Motion Studio',
    options: [
      'Cinematic Storytelling',
      'Seamless Transitions',
      'Custom Visual Effects',
    ],
    backgroundColor: 'bg-green-500',
    imageSrc: '/our_work-section/img2.3.jpeg',
  },
  {
    heading: 'Graphic Designing',
    options: [
      'Search Engine Optimization',
      'New-gen Animations',
      '3D Graphics',
      'E-commerce Solutions',
      'Content Management Systems',
    ],
    backgroundColor: 'bg-blue-500',
    imageSrc: '/our_work-section/img2.3.jpeg',
  },
  {
    heading: 'Digital Marketing',
    options: [
      'Search Engine Optimization',
      'New-gen Animations',
      '3D Graphics',
      'E-commerce Solutions',
      'Content Management Systems',
    ],
    backgroundColor: 'bg-yellow-500',
    imageSrc: '/our_work-section/img2.3.jpeg',
  },
  // ... other card data objects
];

const StackedCards = () => {
  // 1. Add state to track the active card's index
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const cardOffset = 120; // You can adjust this value for more or less overlap
  const totalCards = cardsData.length;

  return (
    <div className='flex items-center justify-center min-h-screen '>
      <div className='relative w-[600px] h-[750px]'>
        {cardsData.map((card, index) => {
          const isCardActive = activeCardIndex === index;
          const topOffset = (totalCards - 1 - index) * cardOffset;

          return (
            <ServiceCard
              key={card.heading}
              // Pass all the card data
              {...card} 
              
              // 2. Pass down state and handlers as props
              index={index}
              isActive={isCardActive}
              top={`${topOffset}px`}
              totalCards={cardsData.length}
              onClick={() => setActiveCardIndex(isCardActive ? null : index)}
              onClose={() => setActiveCardIndex(null)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StackedCards;