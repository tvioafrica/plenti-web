import React, { useState } from "react";
import { cart, deliveryBike } from "@/public/customerImages";

type OptionType = {
  value: "Delivery options" | "Pay and pickup option";
  text: string;
  img: { src: string };
};

const options: OptionType[] = [
  {
    value: "Delivery options",
    text: "Pay for the offer and it would be delivered to your preferred location",
    img: deliveryBike,
  },
  {
    value: "Pay and pickup option",
    text: "Pay for the offer and pick at merchant store that the offer is available.",
    img: cart,
  },
];

const CustomRadio: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);

  return (
    <div className="md:flex space-x-4 md:w-[90%]">
      {options.map((option) => (
        <label key={option.value} className="relative">
          <input
            type="radio"
            name="custom-radio"
            className="hidden"
            value={option.value}
            onChange={() => setSelectedValue(option)}
          />
          <div
            className={` min-h-24  border border-gray-400 cursor-pointer relative flex items-end rounded-md`}
          >
            <aside className="p-[1rem]">
              <p className="font-bold my-[0.5rem]">{option.value}</p>
              <p>{option.text}</p>
            </aside>
            <img src={option.img.src} alt="" className="h-[60px] w-[60px]" />
            <span
              className={`absolute top-4 right-2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 border border-gray-600 p-[0.2rem] rounded-full flex items-center justify-center ${
                selectedValue === option ? "border-red-500" : "border-gray-600"
              }`}
            >
              <span
                className={`h-full block  w-full rounded-full ${
                  selectedValue === option ? "bg-red-500" : "bg-transparent"
                }`}
              ></span>
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default CustomRadio;
