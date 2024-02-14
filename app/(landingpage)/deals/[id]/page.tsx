"use client"
import React, { useState, ChangeEvent } from 'react';
import DealsDetailsCard from '../DealsDetailsCard';
import DealsCard from '../DealsCard';
import { productsData } from "../../_constants/index";

const Page = () => {
  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    setSelectedCategory(option);
  };

  return (
    <div className='container mx-auto px-4'>
      <DealsDetailsCard />
      <div className='flex justify-between flex-col'>
        <div>
          <div className='flex justify-between pt-6'>
            <h3 className='text-md font-normal'>More deals for you</h3>
            <p className='text-sm '>See all</p>
          </div>
          <div className='md:flex space-x-4 py-6 hidden'>
            <button onClick={() => setSelectedCategory('All')} className='bg-primary text-xs px-10 py-1 rounded-3xl'>All</button>
            {uniqueCategories.map(category => (
              <button key={category} onClick={() => setSelectedCategory(category)} className='bg-secondary text-xs md:text-base px-4 md:px-10 py-1 rounded-3xl'>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className='container py-6 mx-auto flex lg:hidden md:hidden'>
          <select
            id="option"
            name="option"
            value={selectedCategory}
            onChange={handleOptionChange}
            className="appearance-none bg-secondary text-sm p-2 border border-primary rounded shadow-md w-full md:w-auto"
          >
            <option value="All">All Categories</option>
            {uniqueCategories.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className='gap-10 grid md:grid-cols-3 overflow-hidden'>
          {filteredProducts.map(product => (
            <DealsCard
              key={product.id}
              imageSrc={product.Image as any}
              text={product.text}
              amount={product.amount}
              link={product.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
