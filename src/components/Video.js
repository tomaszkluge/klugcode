import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import cypherWorld from '../assets/cypherWorld.mp4'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={cypherWorld} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Web Development. IT Outsourcing. </h1>
        <p>Elevate your business to the next level.</p>
    </div>
    <div>
        <Link to='/offer' className='btn'>Offer</Link>
        <Link to='/Contact' className='btn'>Contact</Link>
    </div>

    </div>
  )
}

export default Video