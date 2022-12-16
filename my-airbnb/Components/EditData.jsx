import React from 'react'
import Cookies from 'js-cookie'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'

const EditData = () => {
    const token = Cookies.get("token")
    const id = Cookies.get("userid")
    const router = useRouter()
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [userData, setUserData] = useState('')

    const config = {
        headers: {Authorization: `Bearer ${token}`}
      }
    
      const getInfoUsers = async () => {
        await axios.get(`https://limagroup.my.id/users/${id}`,config)
            .then(response => {
                setUserData(response.data.data)
                setName(response.data.data.name)
                setEmail(response.data.data.email)
                setAddress(response.data.data.address)
                console.log(response.data.data)
                console.log(name)
            })
            .catch(err => console.log(err.response))
    }
    
    const updatedUser = async () => {
        await axios.put(`https://limagroup.my.id/users/${id}`, {name, address, email}, config)
        .then(response => {
            alert("Data ter Update")
            getInfoUsers()
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

    }

    const deleteUser = async () => {
      await axios.delete(`https://limagroup.my.id/users/${id}`, config)
      .then(response => {
          alert("Ter Delete")
          getInfoUsers()
          console.log(response)
      })
      .catch(error => {
          console.log(error)
      })

  }

    const handleUpdate = (e) => {
        e.preventDefault();
        updatedUser();
    }

    const handleDelete = (e) => {
      e.preventDefault()
      deleteUser() 
      Cookies.remove("userid")
      Cookies.remove("name")
      Cookies.remove("email")
      Cookies.remove("token")
      Cookies.remove("address")
      router.push("/")
    }

    useEffect(() => {
      getInfoUsers()
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
                      <p className="text-black font-bold">Address</p>
                      <input
                        type="text"
                        className="w-full py-2 bg-gray-200 rounded-xl text-gray-500 px-2 outline-none mt-2 mb-4"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="bg-black w-full text-white py-2 rounded-xl mt-5 font-bold cursor-pointer hover:shadow-xl active:bg-black transition transform duration-100 ease-out active:scale-95"
                      >
                        Update Data
                      </button>
                      <button
                        type="submit"
                        className="bg-red-800 w-full text-white py-2 rounded-xl mt-5 font-bold cursor-pointer hover:shadow-xl active:bg-red-900 transition transform duration-100 ease-out active:scale-95"
                        onClick={(e) => handleDelete(e)}
                      >
                        Delete User
                      </button>

            </form>

                

  )
}

export default EditData