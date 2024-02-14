"use client"

import Image from "next/image";
import { items } from "@/app/(dashboard)/constants/pagey";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Item = {
  id: number;
  name: string;
  category: string;
  price: string;
  status: string
};

const OfferCard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All offers');

  const filteredItems: Item[] = selectedCategory === 'All offers'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const uniqueCategories = ['All offers', ...new Set(items.map(item => item.category))];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  }

  return (
    <>

      {uniqueCategories.map(category => (

        <Button
          key={category}
          onClick={() => handleCategoryFilter(category)}
          className={selectedCategory === category ? 'bg-[#f0f0f0] rounded-xl text-black' : 'text-[#909091] rounded-xl  hover:text-white'}
        >
          {category}
        </Button>
      ))}
      <div className="grid py-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <div className="bg-white my-2 rounded-xl shadow-md p-3 " key={item.id}>
            <Image 
            width={300}
            height={100}
            src="/productDetail.png"
            alt="Placeholder Image" 
            className="w-full object-fit h-48 rounded-lg " 
            />
            <div className="flex justify-between py-4">
              <div className="p-2 text-xs text-center rounded-md text-[#bb5a80] bg-[#fff9fa]">
                Earn N1000 Cashback
              </div>
              <div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                      <DotsHorizontalIcon className="h-4 w-4" />

                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[120px] bg-white p-0 ">
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#f0f0f0] text-xs">View offer</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#f0f0f0]  text-xs border-t">Pause</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-[#f0f0f0]  text-xs text-red-500 border-t">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="">
              <p className="text-gray-700 font-semibold text-sm">
                {item.name}
              </p>
              <p className="py-3 text-sm font-semibold">{item.price}</p>
            </div>
            <div className="flex">
              <div className="p-2 flex text-xs text-center rounded-md text-[#ea1c25] bg-[#fef4f5]">
                {item.status}
              </div>
            </div>
            <div className="px-1 pt-3 text-sm">
              <Link href={`/merchant/promotions/${item.id}`} className="underline">
                View details
              </Link>
            </div>
          </div>


          // </div>

        ))}
      </div>
    </>
  );
}

export default OfferCard;

{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
 
<div className="bg-white rounded-lg border p-4">
  <Image src="/promotions.png" width={100} height={100} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover"/>
  <div className="px-1 py-4">
    <div className="font-bold text-xl mb-2">Blog Title</div>
    <p className="text-gray-700 text-base">
      This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
    </p>
  </div>
  <div className="px-1 py-4">
    <a href="#" className="text-blue-500 hover:underline">Read More</a>
  </div>
</div>


</div> */}