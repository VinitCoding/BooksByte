import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import banner_img from '../assets/search_banner.svg'
import CardStrucutre from './Card';
import axios from 'axios';
import toast, { ToastBar } from 'react-hot-toast';
import { ChaoticOrbit } from 'ldrs/react'
import 'ldrs/react/ChaoticOrbit.css'
import noDataImg from '../assets/no_data_img.svg'
import initialStateImg from '../assets/initial_state_img.svg'

const Search = () => {
  const [search, setSearch] = useState("")
  const [bookData, setBookData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  const onEntered = async () => {
    setLoading(true);
    try {
      let time;
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB4kKo1SoKnHyxQ96NSAfk6HUDkpxntWIo&maxResults=40`)
      const totalItems = response.data.totalItems
      if (totalItems === 0) {
        time = setTimeout(() => {
          setLoading(false);
        }, 1000);
        setNoData(true)
      } else {
        setNoData(false)
        setBookData(response.data.items)
        time = setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      return () => { clearTimeout(time) }
    } catch (error) {
      console.log('Error while fetching data from API', error)
      toast.error('Something went wrong')
    }
    // console.log(bookData);

  }
  return (
    <>
      <div className='bg-brown-600'>
        {/* Banner image */}
        <div className="w-full mt-1 bg-center bg-no-repeat bg-cover h-[400px] flex md:flex-col flex-col justify-center text-center md:gap-10 gap-4" style={{ backgroundImage: `url(${banner_img})` }}>
          <h2 className='text-6xl font-semibold text-white' id='content_txt'>SEARCH</h2>
          <div className='flex justify-center gap-2 px-3 md:gap-10 md:px-0'>
            <input type="text" className='w-[390px] h-[45px] border-none rounded-lg focus:outline-none p-3 text-gray-600' placeholder='Enter book name that you want to search...' value={search} onChange={e => setSearch(e.target.value)} />
            <button className='px-5 py-2 border-[2px] rounded-xl text-2xl text-white' onClick={onEntered} ><AiOutlineSearch /></button>
          </div>
        </div>
        {/* Card content */}
        {
          !loading && bookData && !noData && <CardStrucutre book={bookData} />
        }

        {/* Loading State */}
        {
          loading && (
            <div className='flex flex-col items-center justify-center gap-2 h-[40dvh]'>
              <ChaoticOrbit
                size="35"
                speed="1.5"
                color="#F4EFE6"
              />

              <h2 className='text-2xl font-semibold text-[#F4EFE6] animate-pulse'>Searching for books...</h2>
              <p className='text-sm text-[#FEF3C7]'>Please wait while we find the best books for you.</p>
            </div>
          )
        }

        {/* No Data State */}
        {
          noData && !loading && (
            <div className='flex flex-col items-center justify-center gap-4 bg-[#FBF9F4] py-5'>
              <img src={noDataImg} alt="no data found" className='w-1/5'/>
              <h2 className='text-2xl font-semibold text-[#483028]'>No books found</h2>
              <h3 className='text-sm text-[#483028]'>We couldn't find any books matching your search.</h3>
              <h3 className='text-sm text-[#483028]'>Try a different name, check the spelling, or use a more general keyword.</h3>
            </div>
          )
        }

        {/* Initial State */}
        {
          !loading && !bookData && !noData && (
            <div className='flex flex-col items-center justify-center gap-2 bg-white px-6 py-4 h-auto text-center'>
              <img src={initialStateImg} alt="Stack of books" className='lg:w-1/5 md:w-1/2 sm:w-1/2'/>
              <h2 className='text-3xl font-bold text-[#1B2B4A]'>Start exploring books</h2>
              <p className='max-w-xl text-base leading-8 text-[#7B8798]'>
                Search for any book name to discover the best books to learn, grow and explore new topics.
              </p>
            </div>
          )
        }

      </div>
    </>
  )
}

export default Search