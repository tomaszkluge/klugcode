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
                    <img src={Aquacar} className='img' alt='www.aquacarwash.pl' />
                </div>
                <div className='image-stack middle'>
                    <img src={Bsr} className='img' alt='www.servicesbsr.com' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Gwxtac} className='img' alt='www.gwxtac.com' />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Portfolio