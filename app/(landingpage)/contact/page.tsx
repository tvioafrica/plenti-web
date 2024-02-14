import React from 'react'
import HeroSection from "./HeroSection"
import Faq from '../_components/Faq'
import { FaqLinks, contact } from "../_constants/index";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className=''>
      <HeroSection />
      <div className='container mx-auto flex my-20 px-4 md:px-o'>
        <div className='w-1/3 hidden md:block'>
          <h3 className='text-primary text-lg font-semibold'>Account and Registration</h3>
          <ul className='flex flex-col '>
            {FaqLinks.map((link) => (
              <Link href={link.href} key={link.name} className="text-base">
                <li className='py-4'>
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='md:w-2/3'>
          <Faq />
        </div>

      </div>
      <div className='container mx-auto flex md:w-1/3 flex-col px-2 md:px-0 text-center'>
        <h3 className='text-bold text-3xl'>{contact.title}</h3>
        <p className='text-lg py-6'>{contact.subtext}</p>
      </div>
      <div className='container mx-auto my-6 px-4 md:px-0 '>
        <div className='flex md:flex-row gap-4 lg:gap-0 lg:space-x-6 flex-col'>
          {contact.items.map((item, index) => (
            <div className='flex p-4 border rounded-md flex-col ' key={index}>
              <Image
                src={item.icon}
                width={50}
                height={50}
                alt="logo"
                className=''
              />
              <h3 className='py-4 font-semibold'>{item.caption}</h3>
              <p className='text-base'>{item.text}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page