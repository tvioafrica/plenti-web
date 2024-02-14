import React from "react";

const OfferDecription = () => {
  return (
    <div className="p-[1rem]">
      <h2 className="md:text-2xl text-xl font-bold md:w-4/5 text-[#424040]">
        Buy 2 cups of ice cream for ₦3000 and earn up to ₦300 airtime and other
        free goodies{" "}
      </h2>
      <ol className="list-decimal p-[1rem] px-[2rem] text-[#818080]">
        <li>
          This offer is valid at participating Cold Stone Creamery locations
          only.
        </li>
        <li>Offer is subject to availability and may vary by location.</li>
        <li>Offer valid for in-store & online purchases </li>
        <li>
          Offer cannot be combined with any other promotions, discounts, or
          offers.
        </li>
        <li>The lower-priced ice cream creation will be discounted.</li>
        <li>
          Offer excludes waffle products, ice cream cakes, and other non-ice
          cream menu items.
        </li>
      </ol>
    </div>
  );
};

export default OfferDecription;
