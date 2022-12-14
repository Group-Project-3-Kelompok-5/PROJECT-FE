import React from 'react'
import Image from 'next/image'
import {BiSearchAlt} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {useRouter} from 'next/dist/client/router'
import Link from 'next/link'
import Cookies from 'js-cookie'




const Navbar = ({kue}) => {
  
  const router = useRouter()
  const search = () => {
    router.push("/staylist");
  };

  const onLogout = () => {
    Cookies.remove("name")
    Cookies.remove("email")
    Cookies.remove("address")
    Cookies.remove("token")
    Cookies.remove("userid")
    router.push("/")
}


  return (
    <div className="bg-white sticky top-0 px-3 py-5 shadow-md md:border-2 z-50 grid grid-cols-3 items-center ">
      <div className="bg-white  flex align-middle ">
        <Image
          src="/logo2.svg"
          onClick={() => router.push("/dashboard")}
          className="w-[50px] h-[30px] md:w-[70px] md:h-[40px] cursor-pointer "
          width={91}
          height={57}
        />
        <label
          className="hidden md:inline-flex text-2xl pl-2 text-black items-center cursor-pointer"
          htmlFor=""
        >
          Hyrule<span className="font-bold">TRAVEL</span>
        </label>
      </div>
      <div className="flex border-2 rounded-full items-center px-3 py-2 md:ml-3 lg:ml-0">
        <input
          type="text"
          className="bg-transparent flex-grow outline-none text-black w-[30px]"
          placeholder="Search"
        />
        <button onClick={search}>
          <BiSearchAlt className="hidden lg:inline-flex bg-black text-white w-8 h-8 rounded-full p-1" />
        </button>
      </div>
      <div className="dropdown dropdown-end items-end justify-end text-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar justify-items-end text-end items-end ml-auto"
        >
          <div className="w-10 rounded-full text-end justify-end items-end">
            <img
              className="items-end"
              src="https://placeimg.com/80/80/people"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
          <Link href={{
                    pathname: '/user/edit-user',
                    query: kue
                  }} className=''>Edit Profile</Link>
          </li>
          <li>
            <a>Rent Your Home</a>
          </li>
          <li>
            <a onClick={() => onLogout()}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar

export async function getServerSideProps() {
  const getHomeStays = await axios.get(`https://virtserver.swaggerhub.com/HERIBUDIYANA/Air-Bnb/1.0.0/users`)
  const data = getHomeStays.data.data
  return { 
      props: {
          token: req.cookies.token
      } 
  }
}
