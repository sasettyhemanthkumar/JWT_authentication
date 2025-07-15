
import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
const{userToken}=useContext(userContext)
const navigate = useNavigate()
const [user,setUSer]=useState("")
  const api = "http://localhost:3000"

useEffect(()=>{

async function getUser(){
         try {
            const res = await axios.get(`${api}/get/user`,{
              Headers:{
                token:userToken
              }
            })
            if (res) {
              setUSer(res.data.user)
            }
        } catch (error) {
            console.error(error);
         }
}
getUser()


 }),[userToken]




 useEffect(()=>{
    if (!userToken) {
     navigate("/Login")   
    }

 }),[userToken]




  return (
    <div className='flex justify-center items-center h-screen text-2xl'>This is a Home page ,<br />email:{user.email}
    </div>
  )
}

export default Home