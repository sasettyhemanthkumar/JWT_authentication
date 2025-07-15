import React, { useState } from 'react'
import './App.css'
import Navbar from './assests/Navbar'
import Home from './assests/Home'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { createContext } from 'react' 
import Login from './assests/Login'
import Signup from './assests/Signup'
import Cart from './assests/Cart'
export const userContext = createContext()

const App = () => {
 const [userToken , setUserToken]= useState("")
  return (
    <userContext.Provider value={{ userToken , setUserToken}}> 
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login/>} />
         <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Cart' element={<Cart/>} />

      </Routes>

    </Router>
    </userContext.Provider>
   
  )
}

export default App