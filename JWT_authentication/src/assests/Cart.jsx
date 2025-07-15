import React, { useContext, useEffect } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
const{userToken}=useContext(userContext)
const navigate = useNavigate()





 useEffect(()=>{
    if (!userToken) {
     navigate("/Login")   
    }

 }),[userToken]





  return (
    <div className='flex justify-center items-center h-screen text-2xl font-semibold'>This is Cart Page</div>

  )
}

export default Cart