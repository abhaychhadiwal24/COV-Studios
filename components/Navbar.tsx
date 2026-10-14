// src/components/Navbar.tsx

import Link from "next/link";
import MenuButton from "./MenuButton";

const Navbar = () => {
  return (
    // Add id="main-nav" to target with GSAP
    // The base text color is set to white here
    <nav id="main-nav" className="fixed top-0 left-0 w-full z-[100] text-white">
      <div className='py-2 px-10 flex justify-between items-center'>

        <img src="/navbar/final_logo.png" alt="Logo" className=" size-15" />

        <Link href="/" className="text-3xl font-bold">
          C O V
        </Link>

        {/* 'border-current' will automatically match the text color (white or black) */}
        <Link href="/contact" className='border-2 border-current px-4 py-2 rounded-full font-bold hover:bg-white hover:text-black hover:border-black'>
          Contact
        </Link>
        
      </div>
    </nav>
  )
}

export default Navbar;