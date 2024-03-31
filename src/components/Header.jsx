import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/')
  }
  return (
    <nav className='flex justify-between mx-[50px]'>
        <img src={logo} alt="logo" className='w-[150px] hover:cursor-pointer' onClick={handleHome} />
    </nav>
  )
}

export default Header