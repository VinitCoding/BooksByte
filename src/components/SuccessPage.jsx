import React from 'react'
import { Link } from 'react-router-dom'
import confetti_image from '../assets/confetti.gif'

const SuccessPage = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-[85dvh]' style={{ backgroundImage: `url(${confetti_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <p className='text-4xl text-center leading-loose'>Congrats payment successfull...</p>
            <Link to="/" className='px-5 py-3 mt-5 text-lg text-white bg-[#426182] rounded w-fit hover:bg-blue-800 transition-all duration-150 ease-in-out'>Go to home page</Link>
        </div>
    )
}

export default SuccessPage