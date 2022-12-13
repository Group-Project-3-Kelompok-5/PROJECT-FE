import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";

const StayList = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="px-5 py-2">
        <h1 className="text-2xl mb-4 font-semibold text-black">
          List Of Stays
        </h1>
        <div className="hidden lg:inline-flex mb-4 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancel your order</p>
          <p className="button">Rooms</p>
          <p className="button">Wifi</p>
          <p className="button">Discount Price</p>
        </div>
      </div>
      <div className="flex px-3 py-2">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
          <Image src={"/Bedroom.png"} layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col flex-grow pl-3">
          <div>
            <h4 className="text-black font-semibold ">
              Stay at this Spacious Apartment
            </h4>
            <p className="text-black">
              2 Bedroom, 1 Kitchen, 3 Bathroom, 1 Balcony, WiFi, Public Pool
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayList;
