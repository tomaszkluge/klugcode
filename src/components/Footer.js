import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <a href="mailto:info@klugcode.dev"><p><FaMailBulk className='ico' size={35} style={{ color: '#BB001B'}} />info@klugcode.dev</p></a>
                </div>
                <div className='right'>
                    <a href='https://www.facebook.com/KlugCodeSolutions' target='_blank' rel="noopener noreferrer"><p><FaFacebook className='ico' size={35} style={{ color: '#3b5998'}} />fb.com/KlugCodeSolutions</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer