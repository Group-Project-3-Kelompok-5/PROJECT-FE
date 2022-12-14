import React from 'react'
import StarRating from './StarRating'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Image from 'next/image'

const orig = `https://limagroup.my.id/`
const SmallCard = ({title, deskripsi, address, images, price, ids}) => {
  return (
    <div>
        <div className="w-[98%] mb-5 flex pr-5 bg-gray-100 rounded-2xl">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
              <img src={orig + images[0]} alt="" />
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
                  <StarRating width={50} />
                  <p className="text-black pl-2 text-sm">Rp.{price} / Night</p>
                  <Link href={{
                    pathname: '/homestay-detail',
                    query: ids
                  }} className='text-black'>Detail</Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SmallCard