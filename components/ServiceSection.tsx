import Link from "next/link"
import StackedCards from "./StackedCards"

const ServiceSection = () => {
  return (
    <section id='services' className='bg-[#FBFADC] flex items-center justify-center'>
        <div className='flex flex-row items-center justify-center mx-10 gap-20'>

          {/* Text */}
          <div className='flex flex-col flex-1'>
            <p className='text-[100px] font-bold text-grad-3 text-start'>Services</p>
            <p className='text-[21px] text-start text-[#182842] opacity-80 max-w-2xl '>
              With expertise in web development, ads, content, and social media, we give startups the firepower they need to dominate online.
              Backed by 150+ satisfied clients, a strike team of specialists, and years of proven excellence, we partner with ambitious brands
              from idea to impact — building growth, trust, and legacy faster than anyone thought possible.
            </p>
            <Link href="/contact" className='w-[180px] mt-4 px-8 py-4 bg-yellow-400 text-black font-bold rounded-full text-lg hover:bg-yellow-500 transition-colors'>
                Get in Touch
            </Link>
          </div>

          {/* Cards */}
          <div className='flex-1 pt-20'>
            <StackedCards />
          </div>

        </div>
      </section>
  )
}

export default ServiceSection
