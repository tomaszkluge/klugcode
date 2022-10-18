import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OfferCards from '../components/Offer'
import HeroImage from '../components/HeroImage'

const Offer = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='OFFER_' />
        <OfferCards />
        <Footer />
    </div>
  )
}

export default Offer