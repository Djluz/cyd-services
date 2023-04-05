import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaChevronUp } from 'react-icons/fa'

const BackToTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
            })
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    
    return (
        show && (
            <button 
                onClick={() => scrollToTop()} 
                className='fixed z-10 flex items-center justify-center w-12 h-12 text-sm text-white rounded-sm cursor-pointer bg-primary-hover right-8 bottom-16 lg:bottom-8'
            >
                <FaChevronUp />
            </button>
        )
    )
}

export default BackToTopBtn