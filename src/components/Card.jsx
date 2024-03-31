import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,

} from "@material-tailwind/react";
import Modal from './Modal';


const CardStrucutre = ({ book }) => {
  const [show, setShow] = useState(false)
  const [bookItem, setItem] = useState();
  return (
    <>
      {
        book.map((item, index, ) => {
          const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
          const  amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount

          if (thumbnail !== undefined && amount !== undefined) {
            return (
              <> 
              <Card className='w-[200px] mx-auto mt-14 mb-10 hover:cursor-pointer hover:transform hover:scale-[0.97] hover:transition hover:ease-in-out hover:duration-500 hover:bg-brown-100 relative' key={index} onClick={() => {setShow(true), setItem(item)}} title='Click to see more about it'>
                <CardHeader>
                  <img src={thumbnail} alt="book_image" className='h-[210px] w-auto' />
                </CardHeader>
                <CardBody className='text-center'>
                  <h3 className=''>{item.volumeInfo.title}</h3>
                  <p className='absolute bottom-[10px] left-[10px] right-[10px] p-1 text-white rounded bg-brown-600'>&#8377; {amount}</p>
                </CardBody>
              </Card>
                <Modal show={show} item={bookItem} key={index + 1} onClose={() => setShow(false)} />
              </>

            )
          }
        })
      }


    </>
  )
}

export default CardStrucutre