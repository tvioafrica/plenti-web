import React from 'react'
import Image from "next/image";
import Button from '../_components/Button';
import Label from '../_components/Label';
import { dealsDetails } from "../_constants/index"

const DealsDetailsCard = () => {
    return (
        <div className='container mx-auto  flex flex-col  md:flex-row md:space-x-10 py-12'>
            <Image
                src={dealsDetails.Image}
                width={400}
                height={200}
                alt="logo"
                className='md:w-1/2 flex '
            />
            <div className='md:1/2 flex flex-col  justify-between py-4'>
                <Label
                    bgColor='bg-secondary'
                    text='Earn N100 Cashback'
                    textColor='text-primary'
                    width="w-2/3 md:w-1/3"
                />
                <div className='flex items-center md:space-x-4 py-2 '>
                    <Image
                        src={dealsDetails.merchantLogo}
                        width={100}
                        height={100}
                        alt="logo"
                        className=' '
                    />
                    <div className='px-2'>
                        <h3 className='font-semibold'>{dealsDetails.merchantName}</h3>
                        <small className=''>{dealsDetails.merchantEmail}</small>
                    </div>
                </div>
                <h3>{dealsDetails.text}</h3>
                <small className='py-2 md:py-0'>{dealsDetails.subtext}</small>
                <div className='flex items-center space-x-6 py-4'>
                    <div className='text-sm'>
                        <Button title='Claim offer' />
                    </div>
                    <div>
                        <Label
                            bgColor='bg-secondary'
                            text='Deals end in 30 days'
                            textColor='text-primary'
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DealsDetailsCard