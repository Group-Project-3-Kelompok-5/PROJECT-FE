import React from "react";
import Navbar from "../../../components/Navbar";
import Image from "next/image";

const edituser = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen  bg-blend-color-burn	bg-black ">
        <Image
          src="/userBanner.jpg"
          layout="fill"
          className="w-full object-fill brightness-50"
        />
        <div className="items-center mx-auto my-auto lg:static">
          <div className="items-center my-auto">
            <div>
              <form action="">
                <div className="bg-white max-w-96 w-[630px] absolute top-1/4 right-1/3 p-6 rounded-xl shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <Image src="/logo2.svg" width={100} height={100} />
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <Image
                        src={"/Default.svg"}
                        className="align-middle mx-auto"
                        width={100}
                        height={100}
                      />
                      <h3 className="text-black font-semibold px-5 my-3 text-center">
                        John Doe
                      </h3>
                      <h4 className="text-black font-semibold px-5 my-3 text-center">
                        johndoe@gmail.com
                      </h4>
                    </div>
                    <div>
                      <p className="text-black font-bold">Email</p>
                      <input
                        type="email"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                      />
                      <p className="text-black font-bold">Username</p>
                      <input
                        type="text"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                      />
                      <p className="text-black font-bold">Password</p>
                      <input
                        type="text"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                      />
                      <p className="text-black font-bold">Address</p>
                      <input
                        type="text"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                      />
                      <button
                        type="submit"
                        className="bg-black w-full text-white py-2 rounded-xl mt-5 font-bold"
                      >
                        Update Data
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default edituser;
