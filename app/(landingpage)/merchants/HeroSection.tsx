"use client"

import React from 'react'
import Image from "next/image";
import Button from '../_components/Button';
import {merchantItems} from "../_constants/index"
import Toggle from '../_components/Toggle';

const HeroSection = () => {

const {heroSection} = merchantItems
 
    return (
        <div className='flexCenter px-4 md:px-0'>


            <div className='flex text-center  container mx-auto items-center flex-col py-12'>
                <div className="flex items-center justify-center w-full mb-12">
                    <Toggle/>
                </div>
                <div className='flex md:flex-row flex-col justify-between'>
               
                   
                    <div>
                        <h1 className='lg:text-5xl text-3xl font-medium px-10' data-aos="fade-right" >{heroSection.title}</h1>
                        <p className='py-10 text-center text-xl lg:px-64' data-aos="fade-left">{heroSection.text}</p>
                    </div>
                   
                 
                </div>

                <Button title="Join for free" />
                <Image
                    src="/merchant1.png"
                    width={800}
                    height={600}
                    alt="logo"
                    className='py-20'
                    data-aos="zoom-out-right"
                />

            </div>
        </div>
    )
}

export default HeroSection