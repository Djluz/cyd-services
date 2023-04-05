import React from 'react'

const Appointment = () => {
  return (
    <div className='w-full p-8 rounded-sm bg-accent max-w-[22rem] md:max-w-md mx-auto'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center'> 
          Get an Appointment
      </h3>
      <div className='w-[54px] h-[3px] bg-white my-5 mx-auto'></div>
      <div className='space-y-[10px]'>
        <input className='form-control' placeholder='Full Name' type='text' />
        <input className='form-control' placeholder='Phone Number' type='text' />
        <input className='form-control' placeholder='Email Address' type='email' />
        <input className='form-control' placeholder='Type of Service' type='text' />
        <textarea className='w-full resize-none h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary' placeholder='Your Message'>
        </textarea>
        <button className='transition-all btn bg-primary hover:bg-primary-hover'>
            Send Message
        </button>
      </div>
    </div>
  )
}

export default Appointment