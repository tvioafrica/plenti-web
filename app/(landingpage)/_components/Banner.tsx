import React from 'react'
import Image from "next/image";
import { bannerSection } from "../_constants/index";
import {BsApple} from "react-icons/bs"
import {BiLogoPlayStore} from "react-icons/bi"

const Banner = () => {
  return (
    <div className='bg-[#3f1e2a] container items-center  justify-between px-28 space-x-20 flex flex-row mx-auto rounded-tl-[80px] rounded-tr-[80px]  '>
        <div>
        <Image
                    src={bannerSection.image}
                    width={250}
                    height={250}
                    alt="logo"
                    className='py-8'
                />
        </div>
        <div className='space-y-10 py-4 w-2/4  items-center content-center'>
            <h3 className='text-3xl text-white'>{bannerSection.title}</h3>
            <p className='text-lg w-3/4 text-white'>{bannerSection.text}</p>
            <div className='flex flex-row space-x-6'>
                <div className='rounded-full space-x-4 bg-white flex items-center  px-3 py-1'>
                    <BsApple/>
                    <div className=''>
                        <p className='text-[8px]'>DOWNLOAD ON THE</p>
                        <h4 className=''>App Store</h4>
                    </div>
                </div>
                <div className='rounded-full space-x-4 bg-white flex items-center px-3 py-1'>
                    <BiLogoPlayStore/>
                    <div className=''>
                        <p className='text-[8px]'>DOWNLOAD ON THE</p>
                        <h4 className=''>Play Store</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner