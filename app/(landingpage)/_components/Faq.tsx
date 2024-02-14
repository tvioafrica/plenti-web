import React from 'react'
import { faqSection } from "../_constants/index";
import {BiMinusCircle} from "react-icons/bi"

const Faq = () => {

    const divData = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className='container mx-auto  space-y-4'>
       
        <div className='bg-secondary rounded-md p-4'>
            <h3 className='font-semibold'>Q: What is plenti Africa?</h3>
        </div>
        {divData.map((item) => (
        <div className='border rounded-md p-4' key={item}>
           <div className='flex justify-between'>
            <h3 className='font-semibold'>Q: {faqSection.title}</h3>
            <BiMinusCircle 
            className="text-primary bg-red"
            size={24}
            />
            </div>
            <p className='pt-2'>{faqSection.subtext}</p>
        </div>
          ))}
    </div>
  )
}

export default Faq