import React from 'react'
import HeroSection from './HeroSection'
import Image from "next/image";
import Faq from '../_components/Faq';
import {merchantItems} from "../_constants/index"


const Page = () => {
  const {heroSection, testimony, items} = merchantItems
  return (
    <div className=''>
      <HeroSection/>
      <div className='container flex mx-auto items-center flex-col text-center'>
        <div className=' w-2/3'>
        <h3 className='text-3xl py-2 font-semibold'>{heroSection.heading1}</h3>
        <p className='text-md'>{heroSection.subText1}</p>
        </div>
        <Image
          src="/merchant2.png"
          width={800}
          height={600}
          alt="logo"
          className='py-20'
          data-aos="zoom-out-right"
      />
      </div>
      <div className='container mx-auto items-center flex space-x-14 text-center my-6'>
      {items.map((item, index) => (
        <div className='flex flex-col items-center'key={index}>
       <Image
          src={item.icon}
          width={50}
          height={20}
          alt="logo"
          className=''
          // data-aos="zoom-out-right"
      />
      <h3 className='py-4 font-semibold'>{item.title}</h3>
      <p className='text-sm'>{item.text}</p>
       </div>
      ))}
       
      </div>
      <div className='flex items-center my-24 bg-white left-[50px] justify-end'>
        <div className='w-1/2 px-20'>
          <h3 className='text-3xl font-semibold'>{heroSection.heading2}</h3>
          <p className='py-10 text-xl'>{heroSection.subText2}</p>
        </div>
     
        <Image
          src="/merchant3.png"
          width={600}
          height={200}
          alt="logo"
          className=''
          data-aos="zoom-out-right"
      />
      </div>
      <div className='bg-secondary my-6'>
        <div className='w-1/3 text-lg text-center py-24 container mx-auto items-center flex flex-col'>
          <h4 className='text2xl font-semibold'>{testimony.title}</h4>
          <p className='py-10'>{testimony.text}</p>
          <Image
          src="/merchant3.png"
          width={80}
          height={10}
          alt="logo"
          className='rounded-full'
          data-aos="zoom-out-left"
      />
      <h5>{testimony.name}</h5>
      <small>{testimony.designation}</small>
        </div>
      </div>
      <div className='flex container mx-auto items-center w-1/3 flex-col'>
        <h3 className='text-3xl font-semibold text-center p-10'>
        Frequently asked question about Plenti Africa
        </h3>
          <Faq/>
      </div>
      
    </div>
  )
}

export default Page