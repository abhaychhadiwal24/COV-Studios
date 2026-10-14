import { ImageFan } from "./ImageFan"

const myImages = [
    '/our_work-section/img1.2.jpeg',
    '/our_work-section/img1.3.jpeg',
    '/our_work-section/img2.3.jpeg',
    '/our_work-section/img2.4.jpeg',
    '/our_work-section/img2.9.jpeg',
];

const HeroSection = () => {
    return (
        <div className="relative min-h-screen w-full bg-black flex flex-col items-center">
            {/* Hero Text 1*/}
            <div className='text-grad text-5xl text-center font-bold px-7 py-3 absolute top-30'>
                <p >Empowering Businesses with</p>
                <p className='text-7xl'>Digital Excellence.</p>
            </div>

            <div className="absolute top-45">
                <ImageFan images={myImages} />
            </div>

            {/* Hero Text 2*/}
            <div className='absolute top-160 w-[600px]'>
                <p className='text-2xl text-center font-bold text-white'>A full-service digital agency delivering websites, creative media, and growth marketing.</p>
            </div>
        </div>
    )
}

export default HeroSection
