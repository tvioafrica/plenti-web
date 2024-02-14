" use client";
import React, { useState, useEffect } from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import Link from "next/link";

interface Offer {
  id: number;
  avatar: string;
  name: string;
  date_to: string; 
  percentCashback: string;
}

interface OfferProps {
  offer: Offer;
  detailsLink: string;
}




const OfferCard: React.FC<OfferProps> = ({ offer, detailsLink }) => {
  const [remainingDays, setRemainingDays] = useState<number>(0);

  useEffect(() => {
    const calculateRemainingDays = () => {
      const currentDate = new Date();
      const endDate = new Date(offer.date_to);
      const timeDifference = endDate.getTime() - currentDate.getTime();
      const days = Math.max(
        Math.ceil(timeDifference / (1000 * 60 * 60 * 24)),
        0
      );
      setRemainingDays(days);
    };

    calculateRemainingDays();
  }, [offer.date_to]);

  return (
    <aside className="rounded-md shadow-md md:p-[1rem] p-[0.5rem] md:w-[260px] xl:my-[2rem]  w-[170px]">
      <div className="relative">
        <img
          src={offer.avatar}
          alt=""
          className="w-full h-[143px]  object-cover rounded-md"
        />
        <figure className="bg-[#FFF5F5] absolute bottom-0 right-[5%] text-[#EA1C24] my-[1rem] rounded-md p-[0.2rem] px-[0.4rem] text-[10px] w-auto">
          <TimerOutlinedIcon />
          <span>Offer ends in {remainingDays} days</span>
        </figure>
      </div>
      <span className="bg-[#FFF5F5] text-[#EA1C24] my-[1rem] inline-block rounded-md p-[0.5rem] md:text-[12px] text-[10px] w-auto">
        <TimerOutlinedIcon /> <span>{offer.percentCashback} offer available in all branches</span>
      </span>
      <p className="text-[#818080]  max-md:text-sm my-[1rem]">{offer.name}</p>
      <Link href={detailsLink}>
        <p className="underline"> view details</p>
      </Link>
    </aside>
  );
};

export default OfferCard;
