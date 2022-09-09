import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    return (
        <div className='header'>
            <Link to='./'>
                <h1>KlugCode Solutions</h1>
            </Link>
            <ul className='nav-menu'>
                <li>
                    <Link to='./'>Home</Link>
                </li>
                <li>
                    <Link to='./portfolio'>Portfolio</Link>
                </li> 
                <li>
                    <Link to='./offer'>Offer</Link>
                </li> 
                <li>
                    <Link to='./contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger'>
                <FaBars size={20} style={{color: '#fff'}} />
            </div>

        </div>
    )
}

export default Navbar