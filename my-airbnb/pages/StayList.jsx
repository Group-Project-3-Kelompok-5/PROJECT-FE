import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import StarRating from "../components/StarRating";

const StayList = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="px-5 py-2">
        <h1 className="text-2xl mb-4 font-semibold text-black">
          List Of Stays
        </h1>
        <div className="hidden lg:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="buttons">Cancel your order</p>
          <p className="buttons">Rooms</p>
          <p className="buttons">Wifi</p>
          <p className="buttons">Discount Price</p>
        </div>
      </div>
      <div className="flex bg-white">
        <div className="flex flex-col px-3 py-2 w-screen lg:w-[50%] h-full lg:px-5 rounded-xl">
          <div className="w-[98%] mb-5 flex pr-5 bg-gray-100 rounded-2xl">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
              <Image
                src={"/Bedroom.png"}
                className="rounded-xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col flex-grow pl-5">
              <div>
                <h4 className="text-black font-semibold text-md ">
                  Stay at this Spacious Apartment
                </h4>
                <p className="text-black text-sm">
                  2 Bedroom, 1 Kitchen, 3 Bathroom, 1 Balcony, WiFi, Public Pool
                </p>
                <div className="flex items-end justify-end justify-bottom lg:mt-[120px]">
                  <StarRating width={50} />
                  <p className="text-black pl-2 text-sm">20$ / Night</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[98%] flex pr-5 bg-gray-100 rounded-2xl">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
              <Image
                src={"/Bedroom.png"}
                className="rounded-xl"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col flex-grow pl-5">
              <div>
                <h4 className="text-black font-semibold text-md ">
                  Stay at this Spacious Apartment
                </h4>
                <p className="text-black text-sm">
                  2 Bedroom, 1 Kitchen, 3 Bathroom, 1 Balcony, WiFi, Public Pool
                </p>
                <div className="flex items-end justify-end justify-bottom lg:mt-[120px]">
                  <StarRating width={50} />
                  <p className="text-black pl-2 text-sm">20$ / Night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-flex w-[50%] bg-white">
          <Image
            src={"/Maps.png"}
            className="w-screen h-screen object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default StayList;
