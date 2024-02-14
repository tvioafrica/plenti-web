"use client";
import { loginimg } from "@/public/customerImages";
import React, { useState } from "react";
import { DatePicker } from "antd";
import usePostRequest from "@/app/hooks/usepostRequest";
import useUserInfo from "@/app/hooks/useUserInfo";
import Loading from "@/app/(dashboard)/_components/loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";



const Page = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();
  const { updateUser } = useUserInfo();
  const postRequest = usePostRequest();

  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  console.log(formData);

  const { mutate, isError, error, isPending } = postRequest(
    `${url}/auth/login`,
    (responseData) => {
      console.log(responseData);
      updateUser(responseData.data.data.user)
      sessionStorage.setItem(
        "accessToken",
        responseData.data.data.access_token
      );
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully",
        icon: "success",
        timer: 2000, // Message displayed for 2 seconds
        timerProgressBar: true,
        didClose: () => {
          router.push('/customer');
        }
      });
    },
    (error) => {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  );

  const handleRegister = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div>
      <div className="flex justify-between my-[5rem]">
        {isPending && <Loading />}
        <form action="" className="md:ml-[4rem]" onSubmit={handleSubmit}>
          <h2 className="text-2xl"> Welcome Back </h2>
          <p className="text-gray-600 my-[1rem]">
            Earn cashback and points when you shop at your favourite store
          </p>

          <div>
            <label
              htmlFor="f_name"
              className="block text-sm font-medium leading-6 text-gray-400"
            >
              Mobile
            </label>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="mobile"
                autoComplete="mobile"
                required
                onChange={handleRegister}
                className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="my-[1.5rem] basis-[48%]">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-400"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete=""
                placeholder="e.g ****"
                required
                onChange={handleRegister}
                className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <p>
            Already have an account ?{" "}
            <Link href="/customer_register">
              <span className="text-[#750E12] underline">Sign up</span>
            </Link>
          </p>

          <div className="mt-[3rem]">
            <button
              type="submit"
              className="flex md:w-3/5 w-full justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
        <img className="md:block hidden" src={loginimg.src} alt="" />
      </div>
    </div>
  );
};

export default Page;
