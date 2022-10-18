import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import PortfolioSection from '../components/Portfolio'

const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='PORTFOLIO_' />
        <PortfolioSection />
        <Footer />
    </div>
  )
}

export default Portfolio