import React from "react";
import { gift, settings, apply, withdraw } from "@/public/customerImages/index";

const transactions = [
  {
    title: "Loan Application",
    data: Date.now(),
    ammount: 5000,
    status: " successfull",
  },
  {
    title: "Loan Application",
    data: Date.now(),
    ammount: 5000,
    status: " successfull",
  },
  {
    title: "Loan Application",
    data: Date.now(),
    ammount: 5000,
    status: " successfull",
  },
  {
    title: "Loan Application",
    data: Date.now(),
    ammount: 5000,
    status: " successfull",
  },
];

const Balance = () => {
  return (
    <>
      <div className="md:p-[2rem] py-[2rem]">
        <p className="text-[#818080] text-xl">Current outstanding balance</p>
        <p className="font-bold "> &#8358;20,000.00</p>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        <aside className="flex flex-col gap-3 items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] flex items-center justify-center">
            <img src={withdraw.src} alt="" className="m-auto" />
          </div>
          <p>Repay</p>
        </aside>
        <aside className="flex flex-col gap-3 items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] flex items-center justify-center">
            <img src={apply.src} alt="" className="m-auto" />
          </div>
          <p>Apply</p>
        </aside>
        <aside className="flex flex-col gap-3 items-center justify-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#F3F3F3] flex items-center justify-center">
            <img src={settings.src} alt="" className="m-auto" />
          </div>
          <p>Settings</p>
        </aside>
      </div>
      <div className="md:w-[90%] border-b-[1px] shadow-md p-[1rem]  m-auto mt-[1rem]">
        <div className="flex justify-between my-[1rem] md:px-[2rem]">
          <span className="text-[#A09F9F] md:text-2xl text-l">Recent transactions</span>
          <span className=" font-bold text-l">See More</span>
        </div>
        {transactions.map((transaction, index) => {
          let date = new Date(transaction.data);
          let monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "April",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];
          let month = monthNames[date.getMonth()];
          let day = date.getDate();
          let year = date.getFullYear();

          const newDate = `${month} ${day}, ${year}`;
          return (
            <div className="flex gap-2 justify-between md:p-[1rem] py-[0.9rem] border-b-grey m-auto" key={index}>
              <aside className="flex items-center justify-center gap-4">
                <span className="p-[0.5rem] rounded-full bg-[#FFF4F4]">
                  <img src={gift.src} alt="" />
                </span>
                <div>
                  <h2 className="md:text-xl  text-[#818080]">
                    {transaction.title}
                  </h2>
                  <p className="text-[#A09F9F]">{newDate}</p>
                </div>
              </aside>
              <aside>
                <h2 className="md:text-xl text-[#424040]">
                  {" "}
                  +&#8358; {transaction.ammount}
                </h2>
                <p className="text-[#1BB85A]">{transaction.status}</p>
              </aside>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Balance;
