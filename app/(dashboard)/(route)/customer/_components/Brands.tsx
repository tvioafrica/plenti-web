import React from "react";
import { brands } from "../../customer/_constants/customerData";

const Brands = () => {
  return (
    <section>
      <div className="flex justify-between my-[1rem] px-[2rem]">
        <span className="text-[#A09F9F]">More ways to earn points</span>
        <span className=" font-bold">See all</span>
      </div>
      <aside className="flex flex-row justify-center p-[1rem] my-[0.5rem] overflow-x-auto whitespace-nowrap  w-full">
        {brands.map((brand, index) => {
          return (
            <div
              className="h-[140px] w-[220px] flex items-center justify-center flex-col text-[#626060] text-center mx-[2rem]   rounded-lg rounded-lg gap-4"
              key={index}
            >
              <img
                src={brand.img.src}
                alt=""
                className="rounded-full  md:w-[80px] md:h-[80px] h-[50px] w-[50px] "
              />
              <p className="text-[14px] capitalize "> {brand.name}</p>
            </div>
          );
        })}
      </aside>
    </section>
  );
};

export default Brands;
