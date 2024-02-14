"use client";
import React from "react";
import Airtime from "../../../_components/Airtime";
import Data from "../../../_components/Data";
import Tabs from "../../../_components/Tabs";

const Page = () => {
  return (
    <div>
      <div className="text-sm breadcrumbs m-[1rem]">
        <ul>
          <li>Other Services</li>
          <li>Airtime</li>
        </ul>
      </div>
      <div className="md:p-4 p-2">
        <Tabs
          tabData={[{ label: "Buy Airtime" }, { label: "Buy Data Bundles " }]}
        >
          <div>
            <Airtime />
          </div>
          <div>
            <Data />
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
