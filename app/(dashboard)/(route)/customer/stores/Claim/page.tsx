"use client";
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { deal } from "@/public/customerImages/index";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CustomRadio from "../../_components/CustomRadio";
import Modal from "./Modal";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

const Page = () => {
  const openModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal.showModal();
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Coldstone creamery ice creams
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Promotion description
    </Link>,
    <Typography key="3" color="text.primary">
      Claim deal
    </Typography>,
  ];

  return (
    <div className="p-6">
      <div className="max-md:hidden">
        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
          sx={{ margin: "1rem 0" }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <h2 className="md:hidden font-bold text-xl mx-[2rem]">Caim deal</h2>
      <h2 className="mx-[0.5rem] my-[1rem] md:text-2xl text-xl">
        Proceed To Checkout{" "}
      </h2>
      <div className="md:w-4/5 rounded-lg border-2 flex md:gap-8 gap-3 p-[0.5rem] md:min-h-[151px]">
        <img
          src={deal.src}
          alt=""
          className="md:h-[152px] md:w-[152px]  w-[90px] h-[90px] object-cover rounded-md"
        />

        <aside>
          <span className="max-md:hidden bg-[#FFF5F5] text-[#EA1C24]  inline-block rounded-md p-[0.5rem] text-[12px] w-auto">
            <TimerOutlinedIcon /> <span>Earn ₦3000 cashback</span>
          </span>

          <p className="text-[#818080] md:my-[1rem]">
            Buy 2 cups of ice cream for ₦3000 and earn up a cashback of ₦1000
          </p>
          <p className="font-bold">₦3000</p>
        </aside>
      </div>
      <div className="md:w-4/5 my-[2rem]">
        <h2 className="md:text-xl font-bold mb-[1rem]">
          {" "}
          How do you want to claim your order ?
        </h2>
        <p className="text-plenti-black">
          To pick the best option please make sure you have read the terms and
          condition of this deal. Read terms and condition{" "}
          <span className="text-red-500 underline">here</span>
        </p>
      </div>
      {/* custom input */}

      <CustomRadio />
      <Modal openModal={openModal}  />
    </div>
  );
};

export default Page;
