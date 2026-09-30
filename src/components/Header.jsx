import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
  }
  return (
    <nav className='flex justify-start items-center gap-3 p-3 bg-[#FCF9F3] border-b-[1px] border-gray-300'>
        <img src={logo} alt="logo" className='w-15 hover:cursor-pointer' onClick={handleHome} />
        <p className='text-lg font-bold'>Books<span className='text-[#426182]'>Byte</span></p>
    </nav>
  )
}

export default Header