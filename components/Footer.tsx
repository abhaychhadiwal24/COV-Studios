// src/components/Footer.tsx

import Link from 'next/link';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 font-sans">
      <div className="container mx-auto py-16 px-16">
        {/* Main Footer Content - 3 Columns */}
        <div className="flex flex-wrap justify-between gap-10 mb-12">
          
          {/* Column 1: Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-5xl font-bold text-white mb-2">COV Studios</h3>
            <ul className="space-y-3 text-lg">
              <li><Link href="#work" className="hover:text-[#D4AF37] transition-colors">Our work</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Services</Link></li>
              <li><Link href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Trust</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <ul className="space-y-3 text-lg mt-12">
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Digital Architecture</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Motion Studio</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Graphic Design</Link></li>
              <li><Link href="#services" className="hover:text-[#D4AF37] transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col text-lg mt-10">
            <h3 className="text-2xl font-bold text-white mb-2">India</h3>
            <address className="not-italic text-gray-400">
              <p>Jaipur</p>
              <p>Rajasthan</p>
              <p className="pt-2">+91 8404026250</p>
              <p className="pt-2">contact@covstudios.com</p>
            </address>
          </div>

        </div>

        <hr className="border-gray-800" />

        {/* Bottom Bar: Legal & Socials */}
        <div className="flex flex-wrap justify-between items-center gap-6 pt-8 text-sm text-gray-400">
          {/* <div className="flex gap-6"> */}
            {/* <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link> */}
            {/* <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link> */}
            {/* <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link> */}
          {/* </div> */}
          
          <p>&copy; 2025 COV Studios. All rights reserved.</p>

          <div className="flex gap-6 text-2xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};