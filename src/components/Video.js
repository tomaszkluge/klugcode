import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import cypherWorld from '../assets/cypherWorld.mp4'
import Typewriter from 'typewriter-effect'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={cypherWorld} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Web Development & IT Outsourcing</h1>
                <p><Typewriter
                onInit={(typewriter) =>{
                    typewriter
                    .typeString('Elevate your business to the next level ...')
                    .start()
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Be visible on the internet_')
                    .start()
                }}
                /></p>

                <div>
                    <Link to='/offer' className='btn'>Offer</Link>
                    <Link to='/contact' className='btn'>Send msg</Link>
                </div>
            </div>
        </div>
    )
    
}



export default Video