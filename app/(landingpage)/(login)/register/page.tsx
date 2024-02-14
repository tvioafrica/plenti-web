import Button from '../../_components/Button'
import Image from 'next/image'
import React from 'react'


const Page = () => {
    return (
        <div className=' container mx-auto py-10 '>
            <h2 className='font-semibold text-2xl'>Create your Plenti Account</h2>
            <p className='text-sm'>Earn Cashback and points when you shop at your favourite store</p>

            <div className='flex  '>
                <div className='w-3/6'>

                <div className='my-6'>
                        <div className="mb-6">
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                            <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder="2340000000" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Referral code (optional)</label>
                            <input type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white " placeholder="0000" required />
                        </div>
                    </div>
                    <small>Already have an account? <span>Login</span></small>

                    <div className='flex items-center py-6 flex-col'>
                        <Button title='Create'
                        />
                    </div>
                    <p className='text-center'>OR</p>

                    <div className="text-sm py-4">
                        <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 border border-gray-200 rounded">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
                            <span>Sign in with Google</span>
                        </a>
                        <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 my-4 border border-gray-200  rounded">

                            <svg className="w-5 h-5" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.3428 17.1449C21.0101 17.9135 20.6163 18.6211 20.16 19.2715C19.5381 20.1583 19.0288 20.7721 18.6364 21.113C18.028 21.6724 17.3762 21.959 16.6782 21.9753C16.1771 21.9753 15.5728 21.8327 14.8693 21.5434C14.1636 21.2555 13.515 21.113 12.922 21.113C12.3 21.113 11.633 21.2555 10.9195 21.5434C10.2049 21.8327 9.62928 21.9834 9.18916 21.9984C8.51981 22.0269 7.85264 21.7322 7.18668 21.113C6.76164 20.7422 6.22999 20.1067 5.59309 19.2063C4.90976 18.2449 4.34796 17.13 3.90784 15.8589C3.43648 14.486 3.2002 13.1565 3.2002 11.8694C3.2002 10.3951 3.51878 9.12345 4.15689 8.05784C4.6584 7.20191 5.32557 6.52672 6.16059 6.03105C6.99562 5.53539 7.89786 5.2828 8.86949 5.26664C9.40114 5.26664 10.0983 5.43109 10.9647 5.75429C11.8287 6.07858 12.3834 6.24303 12.6266 6.24303C12.8085 6.24303 13.4247 6.05074 14.4694 5.66738C15.4573 5.31186 16.2911 5.16466 16.9742 5.22264C18.8251 5.37202 20.2157 6.10167 21.1405 7.41619C19.4851 8.4192 18.6662 9.82403 18.6825 11.6262C18.6975 13.03 19.2067 14.1981 20.2076 15.1256C20.6611 15.5561 21.1676 15.8888 21.7312 16.1251C21.609 16.4795 21.48 16.819 21.3428 17.1449ZM17.0978 0.440369C17.0978 1.54062 16.6958 2.56792 15.8946 3.51878C14.9277 4.64917 13.7582 5.30236 12.49 5.19929C12.4738 5.06729 12.4645 4.92837 12.4645 4.78239C12.4645 3.72615 12.9243 2.59576 13.7408 1.67152C14.1485 1.20356 14.667 0.814453 15.2957 0.504058C15.9231 0.198295 16.5166 0.0292007 17.0747 0.000244141C17.091 0.147331 17.0978 0.294426 17.0978 0.440355V0.440369Z" fill="black" />
                            </svg>
                            <span>Sign in with Apple</span>
                        </a>
                    </div>
                </div>
                <div className='w-4/6 '>
                    <Image
                        src="./loginImg.svg"
                        width={800}
                        height={600}
                        alt="logo"
                        className='md:py-10' />
                </div>
            </div>
        </div>
    )
}

export default Page