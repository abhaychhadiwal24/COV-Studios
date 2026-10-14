// src/components/layoutData.ts

export interface CollageItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  style: React.CSSProperties;
}

// A much larger blueprint for a fuller collage effect
export const layoutData: CollageItem[] = [
  // zIndex: 1 (Furthest Back)
  { type: 'image', src: '/testimonials/img1.1.jpeg', alt: 'Client', style: { top: '5%', left: '0%', width: '38%', height: '60%', zIndex: 1 } },
  { type: 'image', src: '/testimonials/img2.5.jpeg', alt: 'Client', style: { top: '10%', left: '80%', width: '25%', height: '25%', zIndex: 1 } },
  { type: 'image', src: '/testimonials/img1.1.jpeg', alt: 'Client', style: { top: '70%', left: '2%', width: '40%', height: '60%', zIndex: 1 } },
  { type: 'image', src: '/testimonials/img2.5.jpeg', alt: 'Client', style: { top: '75%', left: '85%', width: '42%', height: '20%', zIndex: 1 } },
  { type: 'image', src: '/testimonials/img1.9.jpeg', alt: 'Client', style: { top: '40%', left: '0%', width: '60%', height: '50%', zIndex: 1 } },
  { type: 'image', src: '/testimonials/img1.3.jpeg', alt: 'Client', style: { top: '5%', left: '45%', width: '80%', height: '85%', zIndex: 1 } },
  { type: 'image', src: '/testimonials/img1.4.jpeg', alt: 'Client', style: { top: '80%', left: '65%', width: '85%', height: '15%', zIndex: 1 } },

  // zIndex: 2 (Middle Layer)
  { type: 'image', src: '/testimonials/img1.5.jpeg', alt: 'Client', style: { top: '15%', left: '25%', width: '50%', height: '50%', zIndex: 3 } },
  { type: 'image', src: '/testimonials/img1.6.jpeg', alt: 'Client', style: { top: '5%', left: '60%', width: '40%', height: '48%', zIndex: 3 } },
  { type: 'image', src: '/testimonials/img1.7.jpeg', alt: 'Client', style: { top: '65%', left: '25%', width: '25%', height: '25%', zIndex: 3 } },
  { type: 'image', src: '/testimonials/img1.8.jpeg', alt: 'Client', style: { top: '60%', left: '50%', width: '40%', height: '40%', zIndex: 3 } },
  { type: 'image', src: '/testimonials/img1.9.jpeg', alt: 'Client', style: { top: '35%', left: '70%', width: '20%', height: '20%', zIndex: 3 } },
  { type: 'image', src: '/testimonials/img1.10.jpeg', alt: 'Client', style: { top: '45%', left: '45%', width: '30%', height: '30%', zIndex: 3 } },

  // zIndex: 3 (Front Layer, closer to the text)
  { type: 'image', src: '/testimonials/img2.1.jpeg', alt: 'Client', style: { top: '45%', left: '20%', width: '20%', height: '20%', zIndex: 4 } },
  { type: 'image', src: '/testimonials/img2.2.jpeg', alt: 'Client', style: { top: '30%', left: '55%', width: '20%', height: '30%', zIndex: 4 } },
  { type: 'image', src: '/testimonials/img2.3.jpeg', alt: 'Client', style: { top: '25%', left: '48%', width: '20%', height: '26%', zIndex: 4 } },
  { type: 'image', src: '/testimonials/img2.4.jpeg', alt: 'Client', style: { top: '65%', left: '70%', width: '12%', height: '18%', zIndex: 4 } },
  
  // Additional filler items
  { type: 'image', src: '/testimonials/img2.10.jpeg', alt: 'Client', style: { top: '0%', left: '20%', width: '60%', height: '65%', zIndex: 2 } },
  { type: 'image', src: '/testimonials/img2.5.jpeg', alt: 'Client', style: { top: '85%', left: '45%', width: '20%', height: '25%', zIndex: 2 } },
  { type: 'image', src: '/testimonials/img2.6.jpeg', alt: 'Client', style: { top: '35%', left: '90%', width: '50%', height: '55%', zIndex: 2 } },
  { type: 'image', src: '/testimonials/img2.7.jpeg', alt: 'Client', style: { top: '60%', left: '0%', width: '70%', height: '75%', zIndex: 2 } },
  { type: 'image', src: '/testimonials/img2.8.jpeg', alt: 'Client', style: { top: '0%', left: '85%', width: '20%', height: '15%', zIndex: 2 } },
  { type: 'image', src: '/testimonials/img2.9.jpeg', alt: 'Client', style: { top: '90%', left: '20%', width: '40%', height: '10%', zIndex: 2 } },
];