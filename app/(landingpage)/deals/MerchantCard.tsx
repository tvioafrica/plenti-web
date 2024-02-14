import React from 'react'

const MerchantCard = () => {
  return (
    <div className="  ">
            <div className="  bg-white  shadow-lg   transform   duration-200 easy-in-out">
                <div className=" h-40 overflow-hidden rounded-tl-xl rounded-tr-xl" >
                    <img className="" src="/merch.png" alt="" />
                </div>
                <div className="flex justify-left px-5  -mt-12">
                    <img className="h-20 w-20 bg-white p-2 rounded-full   " src="/merchLogo.png" alt="" />

                </div>
                <div className=" py-2">
                    <div className=" px-4">
                        <h2 className="text-gray-800 text-xl font-bold">The palms shopping mall</h2>
                        <p className="mt-2 text-gray-500 text-sm pb-4">Lorem Ipsum is simpprinting and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, </p>
                        <a href="" className='text-sm text-gray-500  underline'>View offers available</a>
                    </div>
                 
                </div>
            </div>
        </div>
  )
}

export default MerchantCard