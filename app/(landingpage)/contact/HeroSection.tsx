import React from 'react'
import Image from "next/image";
import {faqSection} from "../_constants/index"

const HeroSection = () => {
  return (
    <section className='bg-[#fef5f0]'>
    <div className='container mx-auto flex px-2 md:px-2 flex-col md:flex-row items-center py-14 md:space-x-20'>
        <div className='md:w-1/2 text-center md:text-start' data-aos="fade-up-right">
            <h2 className='text-4xl font-semibold'>{faqSection.text}</h2>
            <p className='py-10 md:text-2xl text-lg'>{faqSection.subtext}</p>
        </div>
        <div className='md:w-1/2 flex justify-center' data-aos="zoom-in-up">
        <Image
            src={faqSection.Image}
            width={400}
            height={400}
            alt="logo"
            className='md:py-10'
          />
        </div>
    </div>
    </section>
  )
}

export default HeroSection