import React from 'react'
import Header from '../components/Header'
import Slides from '../components/Slides'
import Announcement from '../components/Announcement'
import Movies from '../components/Movies'
import Footer from '../components/Footer'


const Userdashboard = () => {
  return (
    <div>
      <Header />
      <Slides />
      <Announcement />
      <Movies />
      <Footer />
    </div>
  )
}

export default Userdashboard