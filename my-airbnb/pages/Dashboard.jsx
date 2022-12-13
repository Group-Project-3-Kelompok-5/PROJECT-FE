import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-blend-color-burn	bg-black ">
          <Image
            src="/BannerFIX.jpg"
            layout="fill"
            className="w-full object-fill brightness-50"
          />
          <div className="absolute top-1/2 w-full text-center z-12">
            <p className="text-white text-md md:text-xl xl:text-2xl mb-4">
              Discover your next Travel
            </p>
            <button className="text-white bg-black px-10 py-4 rounded-full shadow-md font-bold hover:shadow-xl active:scale-90 transition duration-200">
              Find a new Heaven
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-32 mx-auto px-5 bg-white">
        <div className="pt-6">
          <h2 className="text-3xl md:text-4xl text-black font-semibold pb-5">
            Explore Nearby
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Jakarta.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-black">Jakarta</h2>
              <h3 className="text-gray-600">1 Hour Drive</h3>
            </div>
          </div>
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Bali.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-black">Bali</h2>
              <h3 className="text-gray-600">1 Day Drive</h3>
            </div>
          </div>
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Bandung.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="text-black font-semibold">Bandung</h2>
              <h3>5 Hour Drive</h3>
            </div>
          </div>
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Paslam.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="text-black font-semibold">Pasar Lama</h2>
              <h3>2 Hour Drive</h3>
            </div>
          </div>
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Semarang.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-black">Semarang</h2>
              <h3>15 Hour Drive</h3>
            </div>
          </div>
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Yogya.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-black">Yogyakarta</h2>
              <h3>1 Hour Drive</h3>
            </div>
          </div>
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Blok-M.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-black">Blok M</h2>
              <h3>2 Hour Drive</h3>
            </div>
          </div>
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition duraton-200 ease out">
            <div>
              <img src="/Tangsel.png" alt="" />
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-black">Tanggerang Selatan</h2>
              <h3>1 Hour Drive</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
