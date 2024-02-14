"use client";
import * as React from "react";
import { AiOutlineStar } from "react-icons/ai";
import Cashback from "../customer/_components/Cashback";
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Balance from "../customer/_components/Balance";
import Searchbar from "../customer/_components/Searchbar";
import Tabs from "../customer/_components/Tabs";
import useUserInfo from "@/app/hooks/useUserInfo";
import { useAuth } from "@/app/hooks/useAuth";

export default function CustomerHome() {
  const { userInfo } = useUserInfo();
  useAuth()
  return (
    <div className="md:p-6">
      <h2 className="md:m-[1.5rem] m-[1rem] text-[#818080]">
        Good Day ,{userInfo &&<span className="font-bold text-black"> {userInfo.username}</span>}
        <Searchbar />
      </h2>

      <div className="md:p-4 p-2">
        <Tabs
          tabData={[
            { label: "Cash Back" },
            { label: "For you", icon: <AiOutlineStar /> },
            { label: "Plenti Credit" },
          ]}
        >
          <div>
            {" "}
            <Cashback />
          </div>
          <div>for you</div>
          <div>
            <Balance />
          </div>
        </Tabs>
      </div>
    </div>
  );
}
