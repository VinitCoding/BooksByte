import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import banner_img from '../assets/search_banner.svg'
import CardStrucutre from './Card';
import axios from 'axios';
import toast, { ToastBar } from 'react-hot-toast';
import Modal from './Modal';

const Search = () => {
  const [search, setSearch] = useState("")
  const [bookData, setBookData] = useState([])
  const onEntered = async() => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB4kKo1SoKnHyxQ96NSAfk6HUDkpxntWIo&maxResults=40`)
    console.log(response.data);
    setBookData(response.data.items)
    // console.log(bookData);
    
  }
  return (
    <div className='bg-brown-600'>
        {/* Banner image */}
            <div className="w-full mt-1 bg-center bg-no-repeat bg-cover h-[475px] flex md:flex-col flex-col justify-center text-center md:gap-10 gap-4" style={{ backgroundImage: `url(${banner_img})` }}>
                <h2 className='text-6xl font-semibold text-white' id='content_txt'>SEARCH</h2>
                <div className='flex justify-center gap-2 px-3 md:gap-10 md:px-0'>
                    <input type="text" className='w-[390px] h-[45px] border-none rounded-lg focus:outline-none p-3 text-gray-600' placeholder='Enter book name that you want to search...' value={search} onChange={e => setSearch(e.target.value)} />
                    <button className='px-5 py-2 border-[2px] rounded-xl text-2xl text-white' onClick={onEntered} ><AiOutlineSearch /></button>
                </div>
            </div>
        {/* Card content */}
            <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 '>
            {
               <CardStrucutre book={bookData}/>
            }
            <ToastBar toast={{
              duration: 1500
            }}/>
            
            </div>
    </div>
  )
}

export default Search