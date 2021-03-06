import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const Navbar = ({ title }) => 
    
    <nav className='navbar bg-primary'>

        <h1>{title}</h1> 

        <ul>

            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/about'>About</Link>
            </li>

        </ul>

    </nav>
    

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}