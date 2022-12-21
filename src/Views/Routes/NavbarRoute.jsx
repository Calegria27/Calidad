import React from 'react'
import { Navbar } from '../../ui'
import { Routes, Route } from 'react-router-dom'
import MainView from '../pages/MainView'
export const NavbarRoute = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path ="home" element={<MainView/>}/>
        </Routes>
    </>

  )
}
