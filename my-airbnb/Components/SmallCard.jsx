import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Rating from './Rating/Rating'
import { useState } from 'react'
import Router from 'next/router'



const SmallCard = ({title, deskripsi, address, images, price, ids, rating}) => {
  const orig = 'https://storage.googleapis.com/project-3/'
  const [ratingValue, setRatingValue] = useState(undefined);
  console.log(ids)

  const handleRatingAction = (value) => {
    setRatingValue(value);
  };

  const getDetail = () => {
    Router.push({
      pathname: '/reserve-page',
      query: {
        ids: ids
      }
    })

  }

  const angkaRating = rating * 2 * 10

  return (
    <div>
        <div className="w-[98%] mb-5 flex pr-5 bg-gray-100 rounded-2xl">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image
                src={images}
                className="rounded-xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col flex-grow pl-5">
              <div>
                <h4 className="text-black font-semibold text-md ">
                  {title}
                </h4>
                <p className="text-black text-sm">
                  {deskripsi}
                </p>
                <p className='text-black'>
                    {address}
                </p>
                <div className="flex items-end justify-end justify-bottom lg:mt-[120px]">
                <Rating
                ratingInPercent={angkaRating}
                iconSize="l"
                showOutOf={true}
                enableUserInteraction={false}
                />
                  <p className="text-black pl-2 text-sm">Rp.{price} / Night</p>
                  <button onClick={getDetail}>Detail</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SmallCard