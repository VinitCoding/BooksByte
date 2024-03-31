import React from 'react'
import { Link } from 'react-router-dom'
import confetti_image from '../assets/confetti.gif'

const SuccessPage = () => {
    return (
        <div className='relative flex flex-col items-center justify-center '>
            <img src={confetti_image} className='w-full'/>
            <div className='flex flex-col absolute top-[10%] left-[35%] items-center'>
            <p className='mt-48 text-4xl'>Congrats payment successfull...</p>
            <Link to="/" className='px-5 py-3 mt-5 text-lg text-white bg-blue-600 rounded w-fit hover:bg-blue-800'>Go to home page</Link>
            </div>
        </div>
    )
}

export default SuccessPage