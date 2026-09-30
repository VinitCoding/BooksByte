import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='lg:flex md:flex sm:flex xs:flex justify-between items-center bg-[#FCF9F3] border-t-[1px] border-gray-300 py-4 px-6'>
      <p className='text-lg font-bold'>Books<span className='text-[#426182]'>Byte</span></p>
      <p className='text-sm text-gray-500'>© 2026 BooksByte. All rights reserved - Developed by <a href="https://www.artfolio.tech/vinitgite" target='_blank' className='font-semibold hover:text-[#426182] hover:underline transition-all duration-200 ease-in-out'>Vinit Gite</a></p>
    </footer>
  )
}

export default Footer