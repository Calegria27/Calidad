import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Auth/pages/Login';
import { NavbarRoute } from '../Views/Routes/NavbarRoute';

export const AppRouter = () => {
  return (
    <div >
        <Routes>
            <Route path ="Login" element={<Login/>}/>
            <Route path ="/" element={<Navigate to="/Login"/>}/>
            <Route path ="/*"element={<NavbarRoute/>}/>
        </Routes>
    </div>
    
  )
}
