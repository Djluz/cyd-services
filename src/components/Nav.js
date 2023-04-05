import React from 'react'
import { navigation } from '../data'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='space-x-8 text-sm font-semibold lg:flex font-body text-primary'>
        {navigation.map((item, index)=> {
          return <li key={index}>
            <Link
              to={item.href} 
              smooth={true}
              offset={-120}
              activeClass='active'
              spy={true}
              className='transition-all duration-300 cursor-pointer hover:text-accent-hover'
            >
              {item.name}
            </Link>
          </li>
        })}
      </ul>
    </nav>
  );
};

export default Nav