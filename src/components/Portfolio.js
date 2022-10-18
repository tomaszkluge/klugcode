import React from 'react'
import './PortfolioStyles.css'
import {Link} from 'react-router-dom'
import Aquacar from '../assets/aquacar.png'
import Bsr from '../assets/bsr.png'
import Gwxtac from '../assets/gwxtac.png'
const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='left'>
            <h1>Portfolio</h1>
            <p>The websites I have made and the companies I work with.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <a href='https://aquacarwash.pl' target='_blank' rel="noopener noreferrer"><img src={Aquacar} className='img' alt='Aqua car wash' /></a>
                </div>
                <div className='image-stack middle'>
                <a href='https://servicesbsr.com' target='_blank' rel="noopener noreferrer"><img src={Bsr} className='img' alt='Services BSR' /></a>
                </div>
                <div className='image-stack bottom'>
                <a href='https://gwxtac.com' target='_blank' rel="noopener noreferrer"><img src={Gwxtac} className='img' alt='Gunworks Tactic' /></a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio