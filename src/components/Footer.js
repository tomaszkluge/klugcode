import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='email'>
                        <h4><FaMailBulk size={30} style={{ color: '#ffffff', marginRight: '2rem' }} />info@klugcode.dev</h4>
                    </div>
                    <div className='social'>
                        <h4><FaFacebook size={30} style={{ color: '#ffffff', marginRight: '2rem' }} />facebook.com/KlugCodeSolutions</h4>
                    </div>
                    
                </div>
                <div className='right'>
                    <h4>About KLUG<span>CODE</span></h4>
                    <p>Making Websites for you and your company.
                        IT Outsourcing is all you need to be better in your own.</p>                    
                </div>
            </div>
        </div>
    )
}

export default Footer