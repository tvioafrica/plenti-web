import React, { useState, useEffect } from "react";
import { promotionlady } from "@/public/customerImages/index";
import { offerCard as offerData } from "../../customer/_constants/customerData";
import MorePoints from "../_components/MorePoints";
import OfferCard from "./Offers"; // Replace with the correct path to the OfferCard component
import { useFetchDataPlans } from "@/app/hooks/useFetch";

const CashbackPromotions: React.FC = () => {

  const { data } = useFetchDataPlans(
    "https://admin.plenti.africa/api/v1/user/offers"
  );
  return (
    <>
      <div className="my-[1.5rem]">
        <h2 className="text-[20px]">More ways to earn cashback</h2>
        <p className="text-[#A09F9F]">
          Extra cash back for a selected few like you
        </p>
      </div>

      
      <div className="flex overflow-x-auto gap-4">
          {data?.map((offer:any, index:any) => (
             <div className="md:w-1/3 " key={index}>
               <OfferCard offer={offer} key={offer.id} detailsLink={`/customer/stores/${offer.code}/offers`} />
             </div>
          ))}
        </div>
    
      <MorePoints />
    </>
  );
};

export default CashbackPromotions;
