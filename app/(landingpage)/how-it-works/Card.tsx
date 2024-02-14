import React from 'react'
import Image from "next/image";

interface CardProps {
    imageSrc: string;
    content: string;
    label: string;
    subtext: string;
    bgColor?: string,
    textColor?: string
    order: string
    order2: string
    labelColor: string
}


const Card = () => {
    return (
        <div className=''>

            <div className='flex items-center justify-between' data-aos="fade-up-right">

                <div className=' justify-center w-1/3 '>
                    <div className='h-12 w-12 border-dashed border-[#d88a5f] text-[#d88a5f] border-b-4 py-2 item-center text-center rounded-full font-semibold '>1</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'>Sign up and get rewarded every time you shop</h3>
                        <p className='py-8'>
                            If you&apos;re new here, sign up for a Plenti Africa account.
                            If you&apos;re an existing user, simply log in to access your
                            account to start earning when you shop at your favorites store.
                        </p>
                    </div>
                </div>
                <Image
                    src="/createLogin.png"
                    width={550}
                    height={200}
                    alt="logo"
                    className='w-1/2 '
                    data-aos="fade-up-left"
                />
            </div>

            <div className='flex items-center justify-between py-8'>
                <div className='w-1/2'>
                    <Image
                        src="/picstore.png"
                        width={550}
                        height={200}
                        alt="logo"
                        className=' '
                    />
                </div>
                <div className=' justify-center w-1/2 '>
                    <div className='h-12 w-12 border-dashed border-[#d88a5f] text-[#d88a5f] border-b-4 py-2 item-center text-center rounded-full font-semibold '>2</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'> Pick Your Favorites stores so you can see  their offers first.</h3>
                        <p className='py-8'>
                            🔍  Dive into our treasure trove of deals, gift cards, and exclusive rewards. Browse through an
                            array of categories, from fashion to electronics, and discover
                            discounts and cashbacks that&apos;ll make your wallet smile.
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between' data-aos="flip-left">

                <div className=' justify-center w-1/3 '>
                    <div className='h-12 w-12 border-dashed border-[#d88a5f] text-[#d88a5f] border-b-4 py-2 item-center text-center rounded-full font-semibold '>3</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'> Explore our offers, select a deal that suits your needs.</h3>
                        <p className='py-8'>
                            Found a deal or offer that caught your eye?
                            Click on it to view the details. If you&apos;re interested,
                            proceed to make payment to claim your reward.
                        </p>
                    </div>
                </div>
                <Image
                    src="/payment.png"
                    width={250}
                    height={200}
                    alt="logo"
                    className='w-1/3 data-aos="flip-right"'
                />
            </div>

            <div className='flex items-center justify-between py-8'>
                <div className='w-1/2 ' data-aos="zoom-in">
                    <Image
                        src="/gift.png"
                        width={550}
                        height={200}
                        alt="logo"
                        className=' '
                    />
                </div>
                <div className=' justify-center w-1/2 ' data-aos="zoom-in-up">
                    <div className='h-12 w-12 border-dashed border-[#d88a5f] text-[#d88a5f] border-b-4 py-2 item-center text-center rounded-full font-semibold '>4</div>
                    <div className='px-4 border-l-4 border-b-4 border-[#fef5f0] border-dashed mt-4'>
                        <h3 className='font-semibold'> Pick Your Favorites stores so you can see  their offers first.</h3>
                        <p className='py-8'>
                            🔍  Dive into our treasure trove of deals, gift cards, and exclusive rewards. Browse through an
                            array of categories, from fashion to electronics, and discover
                            discounts and cashbacks that&apos;ll make your wallet smile.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card