
import React, { ReactNode } from 'react'
import Image from "next/image";
import Button from './Button';

interface SectionProps {
    imageSrc: string;
    content: string;
    label: string;
    subtext: string;
    bgColor?: string,
    textColor?: string
    order:string
    order2:string
    labelColor: string
}

const GenericSection: React.FC<SectionProps> = ({imageSrc, bgColor, labelColor, textColor, content, label, subtext, order, order2}) => {

    return (
        <div className='container md:px-10 justify-center lg:px-0 flex lg:flex-row gap-32 items-center flex-col-reverse  md:flex-row   mx-auto pb-10 pt-20 '>

            <div className={`flex  ${order}`}
            data-aos="fade-right">
            <Image
            src={imageSrc}
            width={400}
            height={400}
            alt="logo"
            className='md:py-10'
          />
            </div>

            <div className={` flex-col px-4 md:px-0 md:w-2/3 ${order2}`}  data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <span className={`p-4 rounded-md text-sm md:text-base ${labelColor}`}>{label}</span>
                <h2 className='text-3xl mt-20 font-semibold'>{content}</h2>
                <p className='my-10'>{subtext}</p>
                <Button title='Join for free' bgColor={bgColor}/>
            </div>
        </div>
    )
}

export default GenericSection