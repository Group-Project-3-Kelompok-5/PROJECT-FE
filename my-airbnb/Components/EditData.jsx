import React from 'react'
import Cookies from 'js-cookie'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const EditData = (userInfo) => {
    const namamu = Cookies.get("name")
    const addressmu = Cookies.get("address")
    const emailmu = Cookies.get("email")
    const token = Cookies.get("token")
    const id = Cookies.get("userid")

    const [name, setName] = useState(namamu)
    const [address, setAddress] = useState(addressmu)
    const [email, setEmail] = useState(emailmu)

    const config = {
        headers: {Authorization: `Bearer ${token}`}
      }
    

    const updatedUser = async () => {
        await axios.put(`https://limagroup.my.id/users/${id}`, {name, address, email}, config)
        .then(response => {
            alert("Yey")
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    const handleUpdate = (e) => {
        updatedUser();
        e.preventDefault();
    }

    useEffect(() => {
        updatedUser()
    }, [])
    
  return (


            <form onSubmit={(e) => handleUpdate(e)}>

                <p className="text-black font-bold">Email</p>
                      <input
                        type="email"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                      />
                      <p className="text-black font-bold">Username</p>
                      <input
                        type="text"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <p className="text-black font-bold">Password</p>
                      <input
                        type="password"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                        value={userInfo.password}
                      />
                      <p className="text-black font-bold">Address</p>
                      <input
                        type="text"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="bg-black w-full text-white py-2 rounded-xl mt-5 font-bold"
                      >
                        Update Data
                      </button>

            </form>

                

  )
}

export default EditData