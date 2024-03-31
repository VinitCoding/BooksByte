import React from 'react'
import content_img_2 from '../assets/content_img_2.svg'
const About = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center lg:space-x-[150px] md:space-x-[50px] py-7 md:px-12 px-5 bg-[#DEF1FF]'>
        <img src={content_img_2} alt="img_2" className='w-[350px] pt-5'/>
        <p className='lg:my-auto md:my-auto my-5 md:text-[25px] text-[20px] md:leading-[50px] tracking-wide'>
        Welcome to <span className='text-blue-500'>BooksByte!</span> your digital haven for book lovers! <br />With our curated collection, finding your next favorite read is a breeze. <br />Join us on a journey through the world of literature, one byte at a time.
        </p>
    </div>
  )
}

export default About