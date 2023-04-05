/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import Logo from '../assets/img/logo.png'

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <header className={`${bg && 'bg-white shadow-md py-4'} p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}>
      <div className='container flex items-center justify-between mx-auto'>
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header