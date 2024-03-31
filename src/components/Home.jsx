import React from 'react'
import content_img_1 from '../assets/content_img_1.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/search')
  }
  return (
    <div className='flex flex-col justify-between px-4 bg-white lg:px-14 md:px-5 md:flex-row lg:flex-row'>
      <div className='flex flex-col my-auto place-items-center md:place-items-start'>
        <h2 className='text-[40px] text-[#3F3E3E] md:text-start text-center '>Discover books at BooksByte</h2>
        <p className='text-[20px] text-[#8C8C8C] leading-8 lg:w-[600px] md:text-start text-justify'>"Welcome to BookByte – your gateway to limitless reading experiences! Dive into our extensive library filled with classics and modern favorites. Start your reading journey today and explore boundless imagination, all at your fingertips."</p>
        <button className='px-4 py-2 mt-3 mb-5 text-base font-medium text-white bg-blue-500 rounded-md w-fit' onClick={handleClick}>Click to explore...</button>
      </div>
      <img src={content_img_1} alt="bg_img" className='w-auto md:h-[350px]'/>
    </div>
  )
}

export default Home