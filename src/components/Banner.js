import React from 'react'
import Header from './Header'
import Appointment from './Appointment'
import LawyerImage from '../assets/img/lawyer_banner.png'

const Banner = () => {
  return (
    <section id='home' className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'>
        <Header/>
        <div className='container h-full pt-32 mx-auto lg:flex'>
            <div className='h-full px-8 mx-auto text-center lg:text-left md:p-0'>
                <h1 className='mb-4 text-6xl font-black font-primary lg:7xl text-primary lg:mt-[70px] leading-tight lg:leading-[90px]'>
                    Your Problem <br /> <span className='text-accent'>Our Goal.</span>
                </h1>
                <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
                    Lorem ipsum dolor sir amet consectetur, adipisicing elit.
                </p>
                <div className='mx-auto lg:absolute max-w-[445px]  lg:mx-0'>
                    <Appointment />
                </div>
            </div>
            <div className='items-end flex-1 hidden lg:flex lg:flex-col'>
                <img src={LawyerImage} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Banner