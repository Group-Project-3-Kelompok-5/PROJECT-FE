import React from 'react'
import Image from 'next/image'

const homeDetail = ({harga, lokasi, title, deskripsi, komentar, gambar}) => {
    console.log(gambar)
  return (
    <div className='w-full h-screen bg-white'>
        <div className='w-[1000px] mx-auto pt-[100px]'>
            <h2 className='text-6xl text-black font-medium'>{title}</h2>
            <div className='flex my-10'>
                <div>
                    <Image className='mr-4 rounded-xl' src={'/userBanner.jpg'} width={615} height={300}/>
                </div>
                <div>
                <Image className='mb-2 rounded-xl' src={'/userBanner.jpg'} width={300} height={100}/>
                <Image className='mt-2 rounded-xl' src={'/userBanner.jpg'} width={300} height={100}/>
                </div>
            </div>
            <h3 className='text-black font-semibold text-2xl capitalize w-[350px]'>{deskripsi}</h3>
            <div className='w-[450px] h-[200px] border-2 ml-auto'>
                <h3 className='text-black font-medium text-2xl pl-10'>Rp.{harga} / Night</h3>
                <div className='flex mt-10 px-10'>
                    <div className="w-1/2 border-2 mr-2">
                      <select name="cars" id="cars" className="bg-white w-full text-black">
                        <option className='text-black' value="01">Check In</option>
                        <option className='text-black' value="02">02</option>
                        <option className='text-black' value="03">03</option>
                        <option className='text-black' value="04">04</option>
                        <option className='text-black' value="05">05</option>
                        <option className='text-black' value="06">06</option>
                        <option className='text-black' value="07">07</option>
                        <option className='text-black' value="08">08</option>
                        <option className='text-black' value="09">09</option>
                        <option className='text-black' value="10">10</option>
                        <option className='text-black' value="11">11</option>
                        <option className='text-black' value="12">12</option>
                      </select>
                    </div>
                    <div className="w-1/2 border-2 ml-2">
                      <select name="cars" id="cars" className="bg-white w-full text-black">
                        <option className='text-black' value="01">01</option>
                        <option className='text-black' value="02">02</option>
                        <option className='text-black' value="03">03</option>
                        <option className='text-black' value="04">04</option>
                        <option className='text-black' value="05">05</option>
                        <option className='text-black' value="06">06</option>
                        <option className='text-black' value="07">07</option>
                        <option className='text-black' value="08">08</option>
                        <option className='text-black' value="09">09</option>
                        <option className='text-black' value="10">10</option>
                        <option className='text-black' value="11">11</option>
                        <option className='text-black' value="12">12</option>
                      </select>
                    </div>
                </div>
                <button className='bg-black p-3 rounded-xl font-bold mt-10 ml-[260px]'>Check Availablity</button>
            </div>
        </div>
    </div>
  )
}

export default homeDetail