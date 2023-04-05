import React from 'react'
import { skills } from '../data'
import { BsFillXDiamondFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills' className='section bg-[#f8f3eca1] pb-32'>
        <div className='container mx-auto text-center'>
            <h2 className='mb-4 text-5xl font-extrabold font-primary'>
                Services we offer
            </h2>
            <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[60px]'>
                Lorem ipsum dolor sir amet consectetur adipisicing elit.
            </p>
            <div className='columns-2'>
                {skills.map((item, index)=> {
                    const {icon, title, description, service1, service2, service3, service4, service5, service6} = item;
                    return (
                        <div className='flex flex-col items-center justify-center mb-16 last:mb-0 lg:mb-0'>
                            <img className='mb-6' src={icon} alt='' />
                            <h4 className='mb-4 text-3xl font-bold font-primary'>
                                {title}
                            </h4>
                            <p className='max-w-[1600px] lg:max-w-[450px]'>
                                {description}
                            </p>
                            <ul className='pt-5 text-lg font-semibold text-left '>
                                <li className='flex gap-3 py-2'><BsFillXDiamondFill className='mt-2 text-xs text-accent' />{service1}</li>
                                <li className='flex gap-3 py-2'><BsFillXDiamondFill className='mt-2 text-xs text-accent' />{service2}</li>
                                <li className='flex gap-3 py-2'><BsFillXDiamondFill className='mt-2 text-xs text-accent' />{service3}</li>
                                <li className='flex gap-3 py-2'><BsFillXDiamondFill className='mt-2 text-xs text-accent' />{service4}</li>
                                <li className='flex gap-3 py-2'><BsFillXDiamondFill className='mt-2 text-xs text-accent' />{service5}</li>
                                <li className='flex gap-3 py-2'><BsFillXDiamondFill className='mt-2 text-xs text-accent' />{service6}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills