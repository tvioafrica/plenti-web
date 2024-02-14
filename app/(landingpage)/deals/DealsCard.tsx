import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Label from '../_components/Label';

interface ProductProps {
    imageSrc: string;
    text?: string,
    amount?:number,
    link?: string
}

const DealsCard : React.FC<ProductProps>  = ({imageSrc, text, amount, link}) => {
    return (
        <div className='flex flex-col'>
            <div className=''>
            <Image
                src={imageSrc}
                width={350}
                height={200}
                alt="logo"
                className=' '
            />
            <div className='-mt-10 hidden md:flex md:ml-52  md:absolute'>
            <Label
                bgColor='bg-secondary'
                text='Earn N100 Cashback'
                textColor='text-primary'
                
            />
            </div>
            </div>
            <div className='p-2'>
            <Label
                bgColor='bg-secondary'
                text='Earn N100 Cashback'
                textColor='text-primary'
                // width="w-2/4"
            />
            <div className='py-2 space-y-2'>
            <p>{text}</p>
            <p>N{amount}</p>
            <Link href="/" className='text-sm underline'>{link}</Link>
            </div>
            </div>
        </div>
    )
}

export default DealsCard