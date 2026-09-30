import React from 'react'
import content_img_1 from '../assets/content_img_1.svg'
import { useNavigate } from 'react-router-dom'
import bg_overlay from '../assets/bg-overlay.svg'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/search')
  }
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 xl:gap-24 px-5 sm:px-8 lg:px-12 py-8 lg:py-10 bg-[#FBF8F2] w-full relative overflow-hidden'>
      {/* Title */}
      <div className='flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-6 w-full lg:w-1/2 xl:max-w-xl z-10'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl text-center lg:text-start leading-tight'>Discover books at BooksByte</h2>
        <h3 className='text-base sm:text-lg lg:text-xl text-[#8C8C8C] leading-7 lg:leading-8 w-full max-w-xl text-start italic border-s-2 border-[#426182] pl-5'>"Welcome to BookByte – your gateway to limitless reading experiences! Dive into our extensive library filled with classics and modern favorites. Start your reading journey today and explore boundless imagination, all at your fingertips."</h3>
        <button className='px-4 py-2 mt-1 mb-2 text-base font-medium text-white bg-[#426182] rounded-md w-fit' onClick={handleClick}>Click to explore...</button>
      </div>

      {/* Image */}
      <img src={content_img_1} alt="Books illustration" className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto rounded-xl z-10'/>

      {/* Overlay Image */}
      <img src={bg_overlay} alt="" className='absolute -top-10 left-40 w-full h-full z-0 hidden xl:block pointer-events-none'/>
    </div>
  )
}

export default Home