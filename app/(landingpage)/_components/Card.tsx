import React from 'react'
// import { aboutUs } from "../../constant/index";
import { aboutUs } from '../_constants';

const Card = () => {
    const divData = Array.from({ length: 5 }, (_, index) => index);
    return (
        <section className='container mx-auto my-28 px-4 md:px-0 '>
          <h3 className='font-semibold'>What our users are saying about us</h3>
        <div className=' w-full  flex float-right gap-6 my-6 flex-col md:flex-row '>
            {divData.map((item) => (
                <div className='w-full bg-secondary p-2 rounded-lg ' key={item}>
                    <p>{aboutUs.text}</p>
                </div>
            ))}
        </div>
        </section>
    )
}

export default Card