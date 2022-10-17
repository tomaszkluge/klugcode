import React from 'react'
import {Link} from 'react-router-dom'
import './OfferStyles.css'

const Offer = () => {
  return (
    <div className='offer'>
        <div className='card-container'>
            <div className='card'>
                <h3>- WEBSITES -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 days -</p>
                <p> - Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- WEBSITES -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 days -</p>
                <p> - Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- WEBSITES -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 days -</p>
                <p> - Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>

    </div>
  )
}

export default Offer