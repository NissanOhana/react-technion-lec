import React from 'react';
import { pages } from '../../app-constants';
import '../../App.css';

export const Navbar = () => {
    
    return (
        <div className='nav-tab'>
            {pages.map(page => <button className='nav-button'>{page}</button>)}
        </div>
    )
}