"use client"
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { moreWays, dealSection, productsData } from "../_constants/index";
import MerchantCard from './MerchantCard';
import Link from 'next/link';
import Label from '../_components/Label';

const Page = () => {
  const divData = Array.from({ length: 4 }, (_, index) => index);
  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSelectedCategory(option);
  };

  return (
    <div className=''>

      <section className='bg-secondary'>
        <div className='container px-4 md:px-0 mx-auto md:flex-row flex flex-col-reverse  items-center py-14 space-x-20'>
          <div className='md:w-1/2 text-center md:text-start'>
            <h2 className='text-4xl font-semibold' data-aos="zoom-out-right">{dealSection.title}</h2>
            <p className='py-10 md:text-2xl text-lg ' data-aos="zoom-out-right">{dealSection.text}</p>
          </div>
          <div className='md:w-1/2 flex justify-center '>
            <Image
              src={dealSection.image}
              width={400}
              height={400}
              alt="logo"
              className='py-10'
              data-aos="zoom-in"
            />
          </div>
        </div>
      </section>

      <section className='container mx-auto px-4'>
        <div className='flex justify-between py-6'>
          <h3 className='text-xl font-normal'>Explore Categories</h3>
        </div>
        <div className='md:flex space-x-4 py-4 overflow-scroll hidden'>
          <button onClick={() => setSelectedCategory('All')} className='bg-primary px-10 py-1 rounded-3xl'>All</button>
          {uniqueCategories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className='bg-secondary text-sm md:px-10 py-1 rounded-3xl'>
              {category}
            </button>
          ))}
        </div>
        <div className='container mx-auto flex lg:hidden md:hidden'>
        <select
          id="option"
          name="option"
          value={selectedCategory}
          onChange={handleOptionChange}
          className="appearance-none bg-secondary text-sm  border-primary p-2 border rounded shadow-md w-full md:w-auto"
        >
          <option value="All">All Categories</option>
          {uniqueCategories.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
        <div className='py-10 lg:px-0 gap-4 grid grid-cols-2 md:grid-cols-3'>
          {filteredProducts.map((product, index) => (
            <div className='flex flex-col' key={index}>
              <div className=''>
                <Image
                    src={product.Image}
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
                />
                <div className='py-2 space-y-2'>
                  <p>{product.text}</p>
                  <p>N{product.amount}</p>
                  <Link href={`/deals/${product.text}`} passHref>
                    <a className='text-sm underline'>{product.link}</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='container mx-auto flex px-4 md:px-0 flex-col'>
        <div className='flex justify-between py-6'>
          <h3 className='text-xl font-semibold'>Merchants you would love</h3>
          <p>See all</p>
        </div>
        <div className='gap-10 container mx-auto grid md:grid-cols-3 md:px-0 overflow-hidden'>
          {divData.map((item) => (
            <MerchantCard key={item} />
          ))}
        </div>
      </section>

      <section className='container mx-auto px-4 lg:px-0 flex flex-col py-4'>
        <div className='flex justify-between md:py-6 '>
          <h3 className='text-xl font-semibold'>More ways to earn points</h3>
          <p>See all</p>
        </div>
        <div className='container mx-auto my-6'>
          <div className='flex flex-col md:flex-row md:px-0 gap-4'>
            {moreWays.items.map((item, index) => (
              <div className={`flex p-4 border rounded-md flex-col ${item.backgroundColor}`} key={index}>
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt="logo"
                />
                <h3 className='py-4 font-semibold'>{item.caption}</h3>
                <p className='text-base'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Page;
