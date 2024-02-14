"use client";
import React from "react";
import { stone_logo, stone_banner } from "@/public/customerImages/index";
import Tabs from "../../../_components/Tabs";
import OfferDecription from "../../../_components/OfferDecription";
import Map from "../../../_components/Map";
import { useFetchDataPlans } from "@/app/hooks/useFetch";
import { useParams } from "next/navigation";

const Page = () => {
  const { data } = useFetchDataPlans(
    "https://admin.plenti.africa/api/v1/user/offers"
  );

  console.log(data);
  
  const { id } = useParams();
  console.log("route", id);

  const filtered  = data?.find((data:any) => data.code === id)

  console.log(filtered);
  
const logitiude = filtered?.store?.longitude
const latitude = filtered?.store?.latitude

console.log(latitude, logitiude);

  return (
    <div>
      <aside className="md:m-[1.5rem]">
        <img
          src={filtered?.avatar}
          className="w-full rounded-xl md:h-[280px] h-[210px] object-cover"
          alt=""
        />
        <div className="flex items-center gap-2 my-[1rem] ">
          <img
            src={stone_logo.src}
            alt=""
            className="w-[80px] h-[80px] object-cover rounded-full"
          />
          <p>
            <span className="text-[#626060] block  md:text-xl">
              Coldstone creamery ice creams
            </span>
            <span className="text-[#818080]">@coldstonecreamy_ngf</span>
          </p>
        </div>
      </aside>

      <Tabs
        tabData={[
          { label: "Offer Description" },
          { label: "Store Locations" },
          { label: "Terms and Conditions " },
        ]}
      >
        <div>
          {" "}
          <OfferDecription />
          <div className="flex items-center flex-col gap-4 my-[2rem]">
            <button className="bg-[#EA1C24] text-[#FFEAEB] rounded-[24px] h-[48px] block md:w-2/5 w-4/5 px-[3rem] py-[0.5rem]">
              claim this deal
            </button>
            <button className="text-[#EA1C24] bg-[#FFEAEB] rounded-[24px] h-[48px] block md:w-2/5 w-4/5 px-[3rem] py-[0.5rem]">
              share to earn points
            </button>
          </div>
        </div>
        <div>
          <Map longitude={logitiude} latitude={latitude}/>
        </div>
        <div>info 3</div>
      </Tabs>
    </div>
  );
};

export default Page;
