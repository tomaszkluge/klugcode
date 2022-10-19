import React from 'react'
import './PortfolioStyles.css'
import { Link } from 'react-router-dom'
import Gwxtac from '../assets/gwxtac.png'
const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='up'>
                <p>The websites I have made and the companies I work with.</p>
                <p>Explore on the site.</p>
            </div>
            <div className='down'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <a href='https://aquacarwash.pl' target='_blank' rel="noopener noreferrer"><h2>Aqua Car Wash</h2></a>
                        <iframe src='https://aquacarwash.pl' className='img' title='Aqua Car Wash' />
                    </div>
                    <div className='image-stack middle'>
                        <a href='https://servicesbsr.com' target='_blank' rel="noopener noreferrer"><h2>Best Ship Repair</h2></a>
                        <iframe src='https://servicesbsr.com' className='img' title='Aqua Car Wash' />
                    </div>
                    <div className='image-stack bottom'>
                        <a href='https://gwxtac.com' target='_blank' rel="noopener noreferrer"><h2>Gunworx Tactical</h2>
                        <img src={Gwxtac} id='gwx' className='img' alt='Gunworx Tactical' /></a>
                    </div>
                </div>
            </div>
            <div className='up'>
                <Link to='/contact'><button className='btn'>cooperation</button></Link>
            </div>
        </div>
    )
}

export default Portfolio