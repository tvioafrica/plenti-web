import { loginimg } from "@/public/customerImages";
import React, { useState } from "react";
import { DatePicker } from "antd";
import usePostRequest from "@/app/hooks/usepostRequest";
import moment from "moment";
import Loading from "@/app/(dashboard)/_components/loading";
import Swal from "sweetalert2";

interface profileProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  mobile: string;
}


const ProfileInfo: React.FC<profileProps> = ({ onSubmit, email, mobile }) => {
  const postRequest = usePostRequest();
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const DatePickerAny: any = DatePicker;

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile,
    email,
    password: "",
    password_confirmation: "",
    dob: "",
    gender: "",
    state: "",
    city: "",
  });
  console.log(formData);

  const handleDateChange = (date: moment.Moment | null, dateString: string) => {
    setFormData((prev) => ({ ...prev, dob: dateString }));
  };
  const { mutate, isError, error, isPending } = postRequest(
    `${url}/auth/register`,
    (responseData) => {

      onSubmit(responseData);
      
    },
    (error) => {
      console.error(error);
    }
  );
  const handleRegister = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (responseData) => {
        Swal.fire({
          title: 'Success!',
          text: 'Profile updated successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
       
      },
      onError: (error) => {
        console.log(error);
        

        Swal.fire({
          title: 'Error!',
          text: error.response.data.message || 'An error occurred',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });
  };
  return (
    <div className="flex justify-between my-[5rem]">
      {isPending && <Loading />}
      <form action="" className="md:ml-[4rem]" onSubmit={handleSubmit}>
        <h2 className="text-2xl"> Profile information </h2>
        <p className="text-gray-600 my-[1rem]">
          To continue, add your profile details. This information would help us
          to provide offers that are unique to you
        </p>

        <div>
          <label
            htmlFor="f_name"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              id="f_name"
              name="first_name"
              type="text"
              autoComplete=""
              required
              onChange={handleRegister}
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="l_name"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            last name
          </label>
          <div className="mt-2">
            <input
              id="l_name"
              name="last_name"
              type="text"
              autoComplete=""
              placeholder="e.g Romeoscript chukwuemeka"
              required
              onChange={handleRegister}
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="gender"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Gender
          </label>
          <div className="mt-2">
            <input
              id="gender"
              name="gender"
              type="text"
              autoComplete=""
              placeholder="e.g male"
              required
              onChange={handleRegister}
              className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-[1.5rem]">
          <label
            htmlFor="dob"
            className="block text-sm font-medium leading-6 text-gray-400"
          >
            Date of Birth
          </label>
          <DatePickerAny
            onChange={handleDateChange}
            className="bg-[#f3f3f3] border-none w-full p-[0.5rem] mt-2"
          />
        </div>

        <figure className="flex justify-between gap-4">
          <div className="my-[1rem] basis-[48%]">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-400"
              >
                State
              </label>
            </div>
            <div className="mt-2">
              <input
                id="State"
                name="state"
                type="text"
                placeholder="your city"
                required
                onChange={handleRegister}
                className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="my-[1rem] basis-[48%]">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-400"
              >
                City
              </label>
            </div>
            <div className="mt-2">
              <input
                id="city"
                name="city"
                type="text"
                placeholder="your city"
                required
                onChange={handleRegister}
                className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </figure>
        <figure className="flex gap-4 justify-between">
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
          <div className="my-[1.5rem] basis-[48%]">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium leading-6 text-gray-400"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                autoComplete=""
                placeholder="e.g ****"
                required
                onChange={handleRegister}
                className="block w-full rounded-md bg-[#F3F3F3] border-0 py-1.5 text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </figure>
        <div className="mt-[3rem]">
          <button
            type="submit"
            className="flex md:w-3/5 w-full justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </div>
      </form>
      <img className="md:block hidden" src={loginimg.src} alt="" />
    </div>
  );
};

export default ProfileInfo;
