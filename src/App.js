import React from 'react'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Skills from './components/Skills'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn'
import MessengerCustomerChat from 'react-messenger-customer-chat'

const App = () => {
  return (
  <div>
    <Banner />
    <Testimonials />
    <About />
    <Skills />
    <Newsletter />
    <Contact />
    <Footer />
    <BackToTopBtn />
    <MessengerCustomerChat
      pageId='105153695882106'
      appId='215246734486991'
    />
  </div>
  )
}

export default App
