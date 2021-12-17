import React from 'react';
import '../../App.css';
import { Navbar } from './Navbar';

export const Header = () => {

    return (
        <div className='header-container'>
            <h1 className='app-header'> Pickle Rick 🥒 </h1>
            <Navbar/>
        </div>
    )
}