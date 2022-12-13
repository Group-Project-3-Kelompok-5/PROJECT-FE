import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const handleRegister = async () => {
    await axios
      .post("https://limagroup.my.id/user", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "Register berhasil",
        });
        router.push("/");
      })
      .catch((err) =>
        Toast.fire({
          icon: "error",
          title: "Register gagal",
        })
      );
  };

  return (
    <div className=" h-screen bg-slate-800 items-center flex flex-col sm:flex-row md:flex-row">
      <div className=" bg-gray-100 h-screen relative md:w-1/2 lg:w-1/2 hidden lg:block">
        <Image
          src="/BanerLogin.jpg"
          className="hidden lg:block object-cover h-full w-full brightness-50"
          width={1920}
          height={1080}
        />
        <div className="absolute lg:top-1/3 w-full sm:top-5">
          <Image
            src="/hyrule.png"
            className="object-contain text-center items-center mx-auto"
            width={100}
            height={100}
          />
          <h2 className="text-white text-5xl font-bold text-center">
            Hyrule Travel
          </h2>
          <h3 className="text-white text-4xl font-bold text-center w-[500px] mx-auto mt-5">
            Find A New Place Where CIA Can't Even Find It
          </h3>
        </div>
      </div>
      <div className="items-center mx-auto my-auto lg:static">
        <div className="items-center my-auto">
          <div>
            <form action="">
              <div className="bg-white max-w-96 w-[360px] p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <Image src="/logo2.svg" width={100} height={100} />
                </div>
                <label className="font-semibold text-black" htmlFor="">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mb-8"
                  id="email"
                  value={data.email}
                  onChange={(e) => handle(e)}
                />
                <label className="font-semibold text-black" htmlFor="">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mb-8"
                  id="password"
                  value={data.password}
                  onChange={(e) => handle(e)}
                />
                <label className="font-semibold text-black" htmlFor="">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mb-8"
                  id="name"
                  value={data.name}
                  onChange={(e) => handle(e)}
                />
                <label className="font-semibold text-black" htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mb-8"
                  id="address"
                  value={data.address}
                  onChange={(e) => handle(e)}
                />
                <label
                  className="font-semibold underline text-black"
                  htmlFor=""
                  onClick={() => router.push("/")}
                >
                  Sign in
                </label>
                <button
                  type="button"
                  className="bg-black w-full text-white py-2 rounded-xl mt-5 font-bold"
                  onClick={() => handleRegister()}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
