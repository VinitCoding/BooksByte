import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import Stripe from './Stripe';


const Modal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
    const  amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
    return (
        <div className='min-h-[100vh] w-full fixed left-0 top-0 bottom-0 right-0 bg-brown-400 bg-opacity-10 flex items-center justify-center shadow-none rounded-md ' >
            <div className='bg-white w-[700px] max-h-[500px] p-[24px] relative box-border overflow-hidden text-[20px] overflow-y-scroll'>
                <button className='absolute top-[1rem] right-[1rem]'><AiOutlineClose className='text-[17px] hover:font-semibold' onClick={onClose}/></button>
                <div className='mt-[15px] flex justify-center'>
                    <img src={thumbnail} alt="book image" className='mr-[15px] w-[150px] h-[200px]' />
                    <div>
                        <h1>{item.volumeInfo.title}</h1>
                        <h3 className='mt-[10px] text-green-400'>{item.volumeInfo.authors}</h3>
                        <h4 className='text-blue-900'>{item.volumeInfo.publisher}<span className='pl-1'>{item.volumeInfo.
                            publishedDate}</span></h4><br />
                        <div className='flex gap-10'>
                        <a href={item.volumeInfo.previewLink} target='_blank' title='Click to see more '><button className='px-4 py-1 text-white border-none rounded-md outline-none bg-light-blue-600 text-[18px]'>More</button></a>
                        <Stripe bookAmount={amount} title={item.volumeInfo.title}/>
                        </div>
                    </div>
                </div>
                <h4 className='mt-[2rem] text-justify text-[18px]'>
                    {item.volumeInfo.description}
                </h4>
            </div>
        </div>
    )
}

export default Modal