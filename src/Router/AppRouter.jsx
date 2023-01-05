import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Auth/pages/Login';
import { NavbarRoute } from '../Views/Routes/NavbarRoute';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  return (
    <div >
        <Routes>
            <Route path ="Login/*" element={
            <PublicRouter>
              <Routes>
                <Route path ="/*" element={<Login/>}/>
              </Routes>       
            </PublicRouter>}/>

          
            
            <Route path ="/*" element={
            <PrivateRouter>
              <NavbarRoute/>
            </PrivateRouter>}/>


        </Routes>
    </div>
    
  )
}
