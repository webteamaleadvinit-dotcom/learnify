import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import YourCertificateCollection from '../components/YourCertificateCollection'
import CertificateHero from '../components/CertificateHero'

const Certificates = () => {
  return (
    <div>
      <Navbar />
      <CertificateHero />
      <YourCertificateCollection />
      <Footer />
    </div>
  )
}

export default Certificates
