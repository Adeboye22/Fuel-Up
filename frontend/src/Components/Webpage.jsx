import React from 'react'
import Hero from './website/Hero'
import About from './website/AboutUs'
import Services from './website/Services'
import Location from './website/Location'
import Contact from './website/ContactUs'
import Navbar from './navbar'
import OurService from './website/OurService'

const Webpage = () => {
  return (
    <div className='h-full bg-black'>
      {/* hero section */}
      <div className='bg-altBlack'>
        <section className='px-16 py-14 bg-my-image bg-cover flex flex-col gap-20 space-between opacity-50'>
            <Navbar/>
            <Hero/>
        </section>
      </div>
      {/* body of the website */}
      <div className='flex flex-col px-16'>
        {/* --our services-- */}
        <section className='pt-16 flex flex-col'>
          <strong><h1 className='text-white text-3xl'>Our Services</h1></strong>
          <div className='my-14 bg-gray  w-full py-12'>
            <OurService/>
          </div>
        </section>
        {/* --about-- */}
        <section id='about' className='py-16'>
          <About/>
        </section>
        {/* --services-- */}
        <section id='services' className='py-16'>
          <Services/>
        </section>
      </div>
      {/* --footer div-- */}
      <div className='bg-white opacity-90 flex flex-col'>
        {/* --location-- */}
        <section id='locations' className='p-16 bg-white opacity-90'>
          <Location/>
        </section>
        <div className='px-8'>
        <hr className='text-black pb-8' />
        <div>hjklasdf</div>
        </div>
      </div>
    </div>
  )
}

export default Webpage
