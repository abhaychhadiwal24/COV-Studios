import React from 'react'

const page = () => {
  return (
    <section data-nav-theme="light" className='h-screen bg-[#b5a498] relative flex flex-col items-center'>
      
      {/* Heading */}
      <div className='text-black absolute top-30 flex flex-col items-center gap-10'>
        <p className='text-7xl font-extrabold'>Let's <span className='text-white'>start</span> a conversation!</p>
        <p className='text-black opacity-60 text-3xl'>Choose how you prefer to connect with us</p>
      </div>

      {/* Contact Information */}
      <div className='h-[150px] w-auto px-10 bg-white rounded-2xl absolute top-90 flex flex-col justify-center'>
        <p className='text-4xl text-black opacity-50'>Call us</p>
        <p className='text-black text-6xl font-extrabold'>+91 8404026250</p>
      </div>

      <div className='h-[150px] w-auto px-10 bg-white rounded-2xl absolute top-140 flex flex-col justify-center'>
        <p className='text-4xl text-black opacity-50'>Email us</p>
        <p className='text-black text-6xl font-extrabold'>contact@covstudios.com</p>
      </div>
    </section>
  )
}

export default page
