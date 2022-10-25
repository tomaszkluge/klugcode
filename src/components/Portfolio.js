import React from 'react'
import './PortfolioStyles.css'

import {Link} from 'react-router-dom'

import acw from '../assets/aquacar.png'
import bsr from '../assets/bsr.png'
import gwxtac from '../assets/gwxtac.png'
import hermes from '../assets/hermes.png'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='left'>
                <h1>Portfolio</h1>
                <p>The websites I have made and the companies I work with.</p>  
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                       <a href='https://aquacarwash.pl' target='_blank' rel="noopener noreferrer"><img src={acw} className='img' alt='' /></a>
                    </div>
                    <div className='image-stack bottom'>
                    <a href='https://servicesbsr.com' target='_blank' rel="noopener noreferrer"><img src={bsr} className='img' alt='' /></a>
                    </div>
                    <div className='image-stack top-middle'>
                    <a href='https://gwxtac.com' target='_blank' rel="noopener noreferrer"><img src={gwxtac} className='img' alt='' /></a>
                    </div>
                    <div className='image-stack bottom-middle'>
                    <a href='http://hermes-dekoracje.pl' target='_blank' rel="noopener noreferrer"><img src={hermes} className='img' alt='' /></a>
                    </div>
                </div>
            </div>
            <div className='left'>
            <p>If you want to cooperate, write to me.</p>
            <Link to='/contact'><button className='btn'>Cooperation</button></Link>
            </div>
        </div>
    )
}

export default Portfolio