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
                <p className='btc'>from 1500 PLN</p>
                <p>- Private -</p>
                <p> - Business -</p>
                <p>- Shops -</p>
                <p>- Web Apps -</p>
                <Link to='/contact' className='btn'>choose</Link>
            </div>
            <div className='card'>
                <h3>- SEO -</h3>
                <span className='bar'></span>
                <p className='btc'>from 1000 PLN /mth</p>
                <p>- Min. 6 mth. contract -</p>
                <p> - Audit inc. -</p>
                <p>- Strategy inc. -</p>
                <p>- Optimization inc. -</p>
                <Link to='/contact' className='btn'>choose</Link>
            </div>
            <div className='card'>
                <h3>- IT OUTSOURCING -</h3>
                <span className='bar'></span>
                <p className='btc'>from 2000 PLN /mth</p>
                <p>-  -</p>
                <p> -  -</p>
                <p>-  -</p>
                <p>-  -</p>
                <Link to='/contact' className='btn'>choose</Link>
            </div>
        </div>

    </div>
  )
}

export default Offer