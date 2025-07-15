 import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'
import axios from 'axios'
import { Slide, toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
      const api = "http://localhost:3000"
    const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
      const{userToken,setUserToken}=useContext(userContext)
      const navigate = useNavigate()
      



    async function loginUser(e){
        e.preventDefault()
        try {
            const res = await axios.post(`${api}/login`,{email,password})
            if (res) {
               toast.success("signup Successfully")
               setUserToken(res.data.token)
               console.log(res.data);
               
               setTimeout(() => {
                   navigate("/") 
                
               }, 1000);
            }
        } catch (error) {
            console.error(error);
             toast.error("Please Try Again") 
        }

    }  
  
  return (
    
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <ToastContainer position='top-center' theme='dark' transition={Slide} />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login To Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginUser} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input 
                  id="email"
                  name="email"
                  type="email"
                   value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white border-2 border-black px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                   value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white border-2 border-black px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
  )
}

export default Login