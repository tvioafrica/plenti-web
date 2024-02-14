"use client";
import Searchbar from "../_components/Searchbar";
import Link from "next/link";
import React from "react";
import Tabs from "../_components/Tabs";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { malls } from "../_constants/customerData";
import { useFetchDataPlans } from "@/app/hooks/useFetch";

const Page = () => {


  return (
    <div className="p-6">
      <div className="py-[2rem]">
        <h2 className="text-2xl capitalize mb-[1rem]">stores</h2>
        <Searchbar />
        <p className="text-[#626060]">
          Find and explore stores near you to find get exclusive discounts and
          offers.
        </p>
      </div>

      <Tabs
        tabData={[
          { label: "All Categories" },
          { label: "Fashion" },
          { label: "Health and Beauty" },
          { label: "Restaurant & bars" },
          { label: "Electronics" },
        ]}
      >
        <div>
          {" "}
          <div className="grid  md:grid-cols-2 gap-4 my-[2rem]">
            {malls.map((mall, index) => {
              return (
                <div className="md:w-[320px] mb-[2rem] md:block flex justify-between gap-4 md:p-0 p-[1rem] max-md:border-2 rounded-[12px] h-auto" key={index}>
                  <aside className="relative md:mb-[4rem] md:w-auto md:w-[50%] w-2/5">
                    <img
                      src={mall.image.src}
                      className="w-full rounded-t-xl h-[154px] object-cover md:block hidden"
                      alt=""
                    />
                    <img
                      src={mall.mall.src}
                      className="md:h-[80px] bottom-[-25%] w-[110px] h-[110px] left-4 md:absolute md:w-[80px] md:rounded-full rounded-md"
                      alt=""
                    />
                  </aside>
                  <aside className="max-md:w-[70%]">
                    <h2 className="capitalize">{mall.mallName}</h2>
                    <p className="text-[#818080] max-md:text-sm my-[0.6rem] max-md:hidden">
                      {mall.descripton}
                    </p>

                    <p className="flex items-center md:hidden">
                      <ImLocation />
                      <span className=" max-md:text-[10px] text-[#626060] ">
                        {" "}
                        1 Bisway St, Maroko, Lekki, Lagos Nigeria
                      </span>
                    </p>
                    <figure className=" md:hidden bg-[#FFF5F5]  text-[#EA1C24] my-[0.5rem] inline-block rounded-md p-[0.2rem] px-[0.4rem] text-[10px] w-auto">
                      <span className="flex items-center ">
                        {" "}
                        <AiFillStar /> Add to favourtes
                      </span>
                    </figure>
                    <Link href={`/customer/stores/${mall.mallName}`}>
                      <p className="underline max-md:hidden">
                        view offer details
                      </p>
                    </Link>
                  </aside>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 my-[2rem]">
          {malls.map((mall, index) => {
            return (
              <div className="md:w-[320px] mb-[2rem] md:block flex justify-between gap-4 md:p-0 p-[1rem] max-md:border-2 rounded-[12px] h-auto" key={index}>
                <aside className="relative md:mb-[4rem] md:w-auto md:w-[50%] w-2/5">
                  <img
                    src={mall.image.src}
                    className="w-full rounded-t-xl h-[154px] object-cover md:block hidden"
                    alt=""
                  />
                  <img
                    src={mall.mall.src}
                    className="md:h-[80px] bottom-[-25%] w-[110px] h-[110px] left-4 md:absolute md:w-[80px] md:rounded-full rounded-md"
                    alt=""
                  />
                </aside>
                <aside className="max-md:w-[70%]">
                  <h2 className="capitalize">{mall.mallName}</h2>
                  <p className="text-[#818080] max-md:text-sm my-[0.6rem] max-md:hidden">
                    {mall.descripton}
                  </p>

                  <p className="flex items-center md:hidden">
                    <ImLocation />
                    <span className=" max-md:text-[10px] text-[#626060] ">
                      {" "}
                      1 Bisway St, Maroko, Lekki, Lagos Nigeria
                    </span>
                  </p>
                  <figure className=" md:hidden bg-[#FFF5F5]  text-[#EA1C24] my-[0.5rem] inline-block rounded-md p-[0.2rem] px-[0.4rem] text-[10px] w-auto">
                    <span className="flex items-center ">
                      {" "}
                      <AiFillStar /> Add to favourtes
                    </span>
                  </figure>
                  <Link href={`/customer/stores/${mall.mallName}`}>
                    <p className="underline max-md:hidden">
                      view offer details
                    </p>
                  </Link>
                </aside>
              </div>
            );
          })}
        </div>
        <div>
          <h2>No Content</h2>
        </div>
        <div>
          <h2>No Content</h2>
        </div>
        <div>
          <h2>No Content</h2>
        </div>
        <div>
          <h2>No Content</h2>
        </div>
      </Tabs>
    </div>
  );
};

export default Page;
