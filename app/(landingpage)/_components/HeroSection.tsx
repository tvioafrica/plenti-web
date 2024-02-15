"use client"

import React from 'react'
import Image from "next/image";
import Button from './Button';
import Shape from './Shapes';
import Shape2 from './Shape2';
import { useRouter } from 'next/navigation'
import { useState } from "react";
import Toggle from './Toggle';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
const HeroSection = () => {


    const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);

    // Change the route based on the toggle state
    if (isChecked) {
      router.push("/home");
    } else {
      router.push("/merchants");
    }
  };

//   const [isChecked, setIsChecked] = useState(false);


    return (
        <div className='flexCenter px-4 md:px-0'>


            <div className='flex text-center  container mx-auto items-center flex-col py-12'>
              
              
                <div className="flex items-center justify-center w-full mb-12">
                    <Toggle/>
                    {/* <div className="flex items-center space-x-2">
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div> */}
                    {/* <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                        <div className="mr-6  font-semibold">
                            FOR BUYERS
                        </div>
                        <div className="relative">

                            <input type="checkbox" id="toggleB" className="sr-only" checked={isChecked} onChange={handleToggle}/>

                            
                            <div className="block border border-[#ea1d24] w-16 h-8 rounded-full bg-sec"></div>

                            <div className="dot absolute left-1 top-1 bg-primary w-6 h-6 rounded-full transition"></div>
                     
                     
                        </div>
 

                        <div className="ml-6  font-semibold">
                            FOR MERCHANTS
                        </div>
                    </label> */}
                </div>
                <div className='flex md:flex-row flex-col justify-between'>
                    <div>
                    <Shape />
                    </div>
                   
                    <div>
                        <h1 className='lg:text-5xl text-3xl font-medium' data-aos="fade-right" >Create a free account to start <span className='text-primary'>shopping, earning loyalty points & cashbacks </span>at your favorite stores.</h1>
                        <p className='py-10 text-center text-xl lg:px-64' data-aos="fade-left">Get rewarded every time you shop, Plenti Africa is designed to bring you incredible deals, amazing rewards, and a seamless shopping experience.</p>
                    </div>
                   
                    <div>
                    <Shape2 />
                    </div>
                </div>

                <Button title="Join for free" />
                <Image
                    src="/hero2.png"
                    width={900}
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