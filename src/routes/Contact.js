import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading='CONTACT_' />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact