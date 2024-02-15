import React from 'react'
import {dealSection} from "../_constants/index"
import Shape from '../_components/Shapes'
const HeroSection = () => {
  return (

        <section className='bg-[#fef5f0]'>
          <div className='container mx-auto items-center px-2 md:w-1/3 py-14 md:py-36  '>
          <div className='px-10 md:px-0'>
        <Shape/>
        </div>
        <div className='text-center items-center flex flex-col' data-aos="fade-up-right">
       
        
            <h2 className='text-4xl font-semibold'>{dealSection.title}</h2>
            <p className='py-10 md:text-2xl text-lg'>{dealSection.text}</p>
        </div>
       
        </div>
    </section>
 
  )
}

export default HeroSection