"use client";
import React from "react";
import { mall, mallimage } from "@/public/customerImages/index";
import Deals from "../../_components/Deals";
import { dealCard } from "../../_constants/customerData";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="md:w-[420px] md:m-[2rem] my-[2rem]">
        <aside className="relative mb-[4rem]">
          <img
            src={mallimage.src}
            className="w-full rounded-xl h-[174px] object-cover"
            alt=""
          />
          <img
            src={mall.src}
            className="h-[80px] bottom-[-25%] left-4 absolute w-[80px] rounded-full"
            alt=""
          />
        </aside>
      </div>

      <section className="px-[2rem] ">
        <p className="text-2xl">The palms shopping mall</p>
        <p className="my-[2rem] text-[#818080]">
          Your ultimate shopping destination where style meets convenience.
          Unveil a world of fashion, entertainment, and delectable dining all
          under one roof.
        </p>
        <h2 className="text-2xl">Available offers and deals</h2>
      </section>

      <div className="md:flex overflow-x-auto white-space-nowrap gap-8 my-[2rem]">
        {dealCard.map((deal, index) => {
          return (
            <div className="md:w-[340px] w-full flex-shrink-0" key={index}>
            <Deals offer={deal} key={deal.id} detailsLink={`/customer/stores/${deal.id + deal.percentCashback}/offers`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
