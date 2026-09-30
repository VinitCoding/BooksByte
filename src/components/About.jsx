import React from 'react'
import content_img_2 from '../assets/content_img_2.svg'
const About = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-16 xl:gap-20 px-5 sm:px-8 lg:px-12 py-8 lg:py-10 bg-[#F4EFE6] w-full'>

      {/* Image */}
      <img src={content_img_2} alt="BooksByte illustration" className='w-full max-w-[280px] sm:max-w-xs lg:max-w-md h-auto pt-2 lg:pt-5 shrink-0' />

      {/* Text */}
      <div className='flex flex-col gap-3 lg:gap-4 w-full lg:max-w-xl text-center lg:text-start'>
        <h3 className='text-2xl sm:text-3xl lg:text-4xl leading-relaxed'>Welcome to <span className='text-[#436182] font-semibold'>BooksByte!</span> your digital haven for book lovers!</h3>
        <h4 className='text-lg sm:text-xl lg:text-[28px] text-[#53433E]'>With our curated collection, finding your next favorite read is a breeze.</h4>
        <h4 className='text-lg sm:text-xl lg:text-[28px] text-[#53433E]'>Join us on a journey through the world of literature, one byte at a time.</h4>
      </div>
    </div>
  )
}

export default About