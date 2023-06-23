import React from 'react';
import {  Route, Routes, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';
import Login from './components/Login';
import ProtectedRoutes from './components/Protected/ProtectedRoutes';



export const AppRouter = () => {
    return (

        
    <Routes>
        <Route path='/' element={<Login />} />

        <Route element={<ProtectedRoutes />} >
        
        <Route path='/' element={<Navigation />}>
            <Route path='/HomePage' element={<HomePage/>} />
            <Route path='pokemon/:id' element={<PokemonPage />} />
            <Route path='search' element={<SearchPage />} />
        </Route>
        </Route>
        
        

        <Route path='*' element={<Navigate to='/' />} />
    </Routes>

    );
};
