import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import UserHome from './Pages/UserHome'
import UserPets from './Pages/UserPets'
import UserPetsHistory from './Pages/UserPetsHistory'
import VetHome from './Pages/VetHome'
import VetAddClient from './Pages/VetAddClient'
import RegisterDone from './Pages/RegisterDone'
import Register from './Pages/Register'
import VetLogin from './Pages/VetLogin'
import VetPets from './Pages/VetPets'
import AddPet from './Pages/AddPet'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/registercomplete' element={<RegisterDone/>}/>
      <Route path='/vetlogin' element={<VetLogin/>}/>
      <Route path='/userHome' element={<UserHome/>}/>
      <Route path='/userHome/Pets' element={<UserPets/>}/>
      <Route path='/userHome/Pets/History' element={<UserPetsHistory/>}/>
      <Route path='/vetHome' element={<VetHome/>}/>
      <Route path='/vetHome/AddClient' element={<VetAddClient/>}/>
      <Route path='/vetHome/Pets/:id' element={<VetPets/>}/>
      <Route path='/Pets/Add' element={<AddPet/>}/>
    </Routes>
  )
}

export default App
