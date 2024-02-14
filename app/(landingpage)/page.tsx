import HeroSection from './_components/HeroSection'
import GenericSection from './_components/GenericSection'
import { section1, section2, section3, section4 } from "./_constants/index";
import React from 'react'
import Faq from './_components/Faq';
import Banner from './_components/Banner';
import Card from './_components/Card';
import Shape from './_components/Shapes';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
   
      <div className='bg-secondary footer'>
        <GenericSection
          imageSrc={section1.Image}
          content={section1.title}
          label={section1.label}
          subtext={section1.subtext}
          order2='order-last'
          order='order-first'
          bgColor="bg-section1Button"
          labelColor="bg-section1Lable"
        />
        
       
      </div>
      <div>
        <GenericSection
          imageSrc={section2.Image}
          content={section2.title}
          label={section2.label}
          subtext={section2.subtext}
          order2='order-first'
          order='order-last'
          bgColor="bg-section2Button"
          labelColor="bg-section2Label"
        />
      </div>
      <div className='bg-secondary footer'>
        <GenericSection
          imageSrc={section3.Image}
          content={section3.title}
          label={section3.label}
          subtext={section3.subtext}
          order2='order-last'
          order='order-first'
          bgColor="bg-section1Button"
          labelColor="bg-section1Lable"
        />
      </div>
      <div>
        <GenericSection
          imageSrc={section4.Image}
          content={section4.title}
          label={section4.label}
          subtext={section4.subtext}
          order2='order-first'
          order='order-last'
          bgColor="bg-section2Button"
          labelColor="bg-section2Label"
        />
      </div>
      <div className='flex flex-col container mx-auto px-4 md:px-0 md:w-1/3 items-center'>
         <h2 className='text-center font-semibold text-3xl w-2/3 py-8 mx-auto'>Frequently asked questions about Plenti Africa</h2>
      <Faq />
      </div>
      {/* <Card /> */}

    </>
  )
}

export default HomePage
