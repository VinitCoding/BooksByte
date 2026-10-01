import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import Stripe from './Stripe';


const CardStrucutre = ({ book }) => {
  const [show, setShow] = useState(false)
  const [bookItem, setItem] = useState();
  const books = book.filter((item) => {
    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
    const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount
    return thumbnail !== undefined && amount !== undefined
  })

  return (
    <>
      <div className='grid grid-cols-1 place-items-center gap-x-6 gap-y-14 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 md:grid-cols-3 lg:px-10 xl:grid-cols-4'>
        {books.map((item, index) => {
          const thumbnail = item.volumeInfo.imageLinks.smallThumbnail
          const amount = item.saleInfo.listPrice.amount

          return (
            <Card
              className='relative lg:w-52 md:w-56 sm:w-60 w-96 cursor-pointer transition duration-500 ease-in-out hover:scale-[0.97] hover:bg-brown-100'
              key={item.id || index}
              onClick={() => { setShow(true); setItem(item) }}
              title='Click to see more about it'
            >
              <CardHeader className='flex justify-center shadow-none'>
                <img src={thumbnail} alt="book_image" className='h-[210px] w-auto object-contain' />
              </CardHeader>
              <CardBody className='pb-14 text-center'>
                <h3 className='line-clamp-2'>{item.volumeInfo.title}</h3>
                <p className='absolute bottom-[10px] left-[10px] right-[10px] rounded bg-brown-600 p-1 text-white text-wrap'>&#8377; {amount}</p>
              </CardBody>
            </Card>
          )
        })}
      </div>
      <Dialog open={show} handler={() => setShow(false)} size="lg" className="max-h-[500px] overflow-y-auto">
        {bookItem && (
          <>
            <DialogHeader className="items-start justify-between gap-4">
              <span>{bookItem.volumeInfo.title}</span>
              <button type="button" onClick={() => setShow(false)} aria-label="Close">
                <AiOutlineClose className="text-[17px] hover:font-semibold" />
              </button>
            </DialogHeader>
            <DialogBody className="pt-0 text-[18px] font-normal text-gray-800">
              <div className="mt-[15px] flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center">
                <img
                  src={bookItem.volumeInfo.imageLinks?.smallThumbnail}
                  alt="book image"
                  className="h-[200px] w-[150px]"
                />
                <div>
                  <h3 className="mt-[10px] text-green-400">{bookItem.volumeInfo.authors}</h3>
                  <h4 className="text-blue-900">
                    {bookItem.volumeInfo.publisher}
                    <span className="pl-1">{bookItem.volumeInfo.publishedDate}</span>
                  </h4>
                  <div className="mt-4 flex flex-wrap justify-center items-center gap-10">
                    <a href={bookItem.volumeInfo.previewLink} target="_blank" rel="noreferrer" title="Click to see more ">
                      <button type="button" className="rounded-md border-none bg-light-blue-600 px-4 py-1 text-[18px] text-white outline-none">More</button>
                    </a>
                    <Stripe bookAmount={bookItem.saleInfo.listPrice?.amount} title={bookItem.volumeInfo.title} />
                  </div>
                </div>
              </div>
              <h4 className="mt-[2rem] text-justify text-[18px]">
                {bookItem.volumeInfo.description}
              </h4>
            </DialogBody>
          </>
        )}
      </Dialog>
    </>
  )
}

export default CardStrucutre