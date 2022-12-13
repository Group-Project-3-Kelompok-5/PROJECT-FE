import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await axios
      .post(
        "https://virtserver.swaggerhub.com/HERIBUDIYANA/Air-Bnb/1.0.0/login",
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        console.log(response);
        alert("Success login");
        Cookies.set("token", response.data.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
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
            Find A New Place Where CIA Can't Evene Find It
          </h3>
        </div>
      </div>
      <div className="items-center mx-auto my-auto lg:static">
        <div className="items-center my-auto">
          <div>
            <form>
              <div className="bg-white max-w-96 w-[360px] p-6 rounded-xl shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <Image src="/logo2.svg" width={100} height={100} />
                </div>
                <label className="font-semibold text-black" htmlFor="">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mb-8"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="font-semibold text-black" htmlFor="">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mb-8"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  className="font-semibold underline text-black"
                  htmlFor=""
                >
                  Sign Up
                </label>
                <button
                  type="button"
                  className="bg-black w-full text-white py-2 rounded-xl mt-5 font-bold"
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
