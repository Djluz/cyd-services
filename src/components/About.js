import React from 'react'
import LogoGIF from '../assets/img/logonew.gif'

const About = () => {
    return (
        <section id='about' className='text-white bg-primary min-h-[750px] section'>
            <div className='container mx-auto text-center'>
                <h2 className='mb-4 text-5xl font-extrabold font-primary'>
                    About us
                </h2>
                <img className='mx-auto mt-20' src={LogoGIF} alt='' />
                <h4 className='mt-16 mb-10 text-4xl font-bold text-accent'>
                    Our passion is to constantly deliver results.
                </h4>
                <p className='items-center justify-center max-w-3xl px-5 mx-auto'>
                    Our goal is to exceed the expectations of every client by offering outstanding customer service, 
                    increased flexibility, and greater value, thus optimizing our people efficiency. 
                    Our associates are distinguished by their technical expertise combined with their 
                    hands-on experience, thereby ensuring that our clients receive the most effective and professional services.
                </p>
                
            </div>
        </section>
      )
}

export default About