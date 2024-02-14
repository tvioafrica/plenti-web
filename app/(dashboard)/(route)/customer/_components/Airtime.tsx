import React, { useState, useEffect } from "react";
import { recentTopUp } from "../_constants/customerData";
import { mtn, airtel, glo, etisalat } from "@/public/customerImages";
import usePostRequest from "@/app/hooks/usepostRequest";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "@/app/(dashboard)/_components/loading";
import { useFetchDataPlans } from "@/app/hooks/useFetch";

type NetworkOption = {
  name: string;
  imgSrc: { src: string };
};
type AirtimeOperator = {
  id: number;
  operator: string;
  amount: number;
  payment_code: string;
  airtime_options_desc: string;
};

type BrandAmount = {
  id:number;
  price: string;
  points: string;
};
const options: NetworkOption[] = [
  { name: "mtn", imgSrc: mtn },
  { name: "airtel", imgSrc: airtel },
  { name: "glo", imgSrc: glo },
  { name: "9mobile", imgSrc: etisalat },
];
// const fetchAirtimeOperators = async (): Promise<AirtimeOperator[]> => {
//   const response = await axios.get(
//     "https://admin.plenti.africa/api/v1/user/bills/airtime-operators",
//     {
//       headers: {
//         Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiYzQ2NDcyMDBmMWNhYTEyOTVjNmE1YWZlODA4MzJlMTdjNWZmMGU3ZTMzZGUzNTI2NjA3OGU5MmFlMzAzYzUwNjljYjUyMThmOTI2ZjNiN2QiLCJpYXQiOjE3MDA1NjUyMDUsIm5iZiI6MTcwMDU2NTIwNSwiZXhwIjoxNzMyMTg3NjA1LCJzdWIiOiIxMDQ0OSIsInNjb3BlcyI6W119.Qu7npoF72PWnw3Qz0apGTd5W7XQxTo4DiI02hcVkMubq6K7d1vfl9fOPVSxNLBtLzFV7Rnrd2VYIEsRUom67i45VKxZfGzUzz6NApZkirwA2Q4Gx-hz-nZ6nXABRuW36vvnYXRRqmMqK03R3pnOI3R6aq5fvK033gv6Kmx0TwWtconP3eyIjTviSVD3TGjZYYhDyFZaJPNW8aG5qDz0BJooFZowS28aiMlBisufHJhKlv9w-c7575b5PG0jRBMTQsHHSOLd5wVRGfzfloMI96VDo5auGfRR8PDUvhP76aN0ZPuDZaaOoJqSDBHQ-cAkyQeGOHjHCGSvhiWsiyrf6rebw-7zyWHP6YdXGOqbooQAfYMwf7H-dxLfcES9mitWPt7P2KR2a8lIvPcCubtS8SqU3fKgXttA4HMhuhGZbE_dYpcuqGJJKxOmZL4JGyJUM6m6VA8NeI1ELKxGUY4lGAWTIpztu_IRLviuam8_ecHBwYY2ZPf2xzHrlad_x0kg-axUvvlmrg9je4y0FuftCyBVQlvwEhfTSjAp44jlUiSW29UymHhJABWDo5-Kkn8tNjXbZnppuXaFUL-bLTL7uPRimlL0_U8Jew99yEzik3WrW5pRyU8swM816J4gQKf_jzHn7EjV5vjQ6Welloqgub-PhxTNWhf8HN9fDDCqPLBs`,
//       },
//     }
//   );
//   return response.data.data;
// };
const Airtime = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkOption | null>(
    null
  );
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [mobile, setMobile] = useState("");
  const [paymentCode, setPaymentCode] = useState<string>("");
  const [brandAmounts, setBrandAmounts] = useState<BrandAmount[]>([]);
  const [selectedBrandAmountId, setSelectedBrandAmountId] = useState<number | null>(null);


  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const postRequest = usePostRequest();
  const { data: packages, isLoading } = useFetchDataPlans('https://admin.plenti.africa/api/v1/user/bills/airtime-operators')



  useEffect(() => {
    if (packages) {
      const newBrandAmounts = packages?.map((packageItem:AirtimeOperator) => ({
        id: packageItem.id,
        price: packageItem.amount.toString(),
        points: packageItem.operator.trim()
      }));
      setBrandAmounts(newBrandAmounts);
    }
  }, [packages]);

  const payload = {
    amount: parseInt(amount),
    network: selectedNetwork?.name.toUpperCase(),
    paymentcode: paymentCode,
    mobile: mobile,
    reward: 1,
  };
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const determineNetwork = (mobileNumber: string): NetworkOption | null => {
    const prefix = mobileNumber.substring(0, 4);
    if (["0703", "0706", "0803", "0806", "0810", "0813", "0816", "0814", "0903", "0906", "0913", "0916"].includes(prefix)) {
        return options.find(o => o.name === "mtn") || null;
    } else if (["0815", "0811", "0805", "0807", "0705", "0905", "0915"].includes(prefix)) {
        return options.find(o => o.name === "glo") || null;
    } else if (["0701", "0708", "0812", "0802", "0808", "0902", "0901", "0904", "0907", "0912"].includes(prefix)) {
        return options.find(o => o.name === "airtel") || null;
    } else if (["0809", "0818", "0817", "0909", "0908"].includes(prefix)) {
        return options.find(o => o.name === "9mobile") || null;
    }
    return null;
};

  useEffect(() => {
    const network = determineNetwork(mobile);
    setSelectedNetwork(network);
  }, [mobile]);
  useEffect(() => {
    if (!selectedNetwork) return;
    const matchedOperator = packages?.find(
      (o:any) =>
        o.operator.trim().toUpperCase() ===
          selectedNetwork.name.toUpperCase() &&
        o.amount.toString() === amount.toString()
    );

    if (matchedOperator) {
      setPaymentCode(matchedOperator.payment_code.trim());
    }
  }, [selectedNetwork, amount, packages]);

  const handleAmountClick = (brandAmountId: number) => {
    const selectedBrandAmount = brandAmounts.find(ba => ba.id === brandAmountId);
    if (selectedBrandAmount) {
      setAmount(selectedBrandAmount.price);
      setSelectedBrandAmountId(brandAmountId); 
      
    }
  };
  const selectNetwork = (option: any) => {
    setSelectedNetwork(option);
    setDropdownOpen(false);
  };

  const { mutate, isError, error, isPending } = postRequest(
    `${url}/user/bills/buy-airtime`,
    (responseData) => {
      Swal.fire({
        title: "Success!",
        text: `Airtime purchase of ${amount} was successful.`,
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    },
    (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
      console.error(error.message);
    }
  );
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedNetwork || !amount || !mobile) {
      alert("Please fill in all fields");
      return;
    }
    mutate(payload);
  };

  return (
    <>
      {isPending && <Loading />}
      <div>
        Your recent top-up
        <div className="grid grid-cols-4 gap-4 place-items-center my-[1rem] ">
          {recentTopUp.map((recent, index) => {
            return (
              <div className="my-[1rem] " key={index}>
                <img
                  src={recent.brand.src}
                  className="md:h-[80px] md:w-[80px] w-[60px] h-[60px] rounded-full"
                  alt=""
                />
                <p className="my-[1rem] max-md:text-[12px]">{recent.num}</p>
              </div>
            );
          })}
        </div>
        <section>
          <h2>Select an amount to top up </h2>
          <figure className="grid grid-cols-4">
            {brandAmounts.slice(0,8).map((brandAmount, index) => {
              const isSelected = brandAmount.id === selectedBrandAmountId;
              return (
                <div
                  className={`bg-[#F8F8F8] rounded-lg m-[1rem] max-md:w-[68px] place-items-center flex items-center justify-center flex-col md:py-[2.5rem] p-[0.5rem] md:p-[1.5rem] cursor-pointer ${
                    isSelected ? "border-2 border-blue-500" : ""
                  }`}
                  key={index}
                  onClick={() => handleAmountClick(brandAmount.id)}
                >
                  <h2 className="text-[#626060] font-bold md:text-2xl">
                    {" "}
                    &#8358;{brandAmount.price}
                  </h2>
                  <p className="text-[#ED4249] max-md:text-[10px] font-bold">
                    {" "}
                    {brandAmount.points} 
                  </p>
                </div>
              );
            })}
          </figure>
          <div className="p-[1.5rem]">
            <figure className="md:flex items-center justify-center gap-5 mb-[1rem]">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Amount</span>
                  <span className="label-text-alt text-[#ED4249]">
                    100 points
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  value={amount}
                  className="input input-bordered w-full bg-[#F3F3F3] text-[#A09F9F] "
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Phone number</span>
                  <span className="label-text-alt text-[#ED4249]">
                    100 points
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  value={mobile}
                  className="input input-bordered bg-[#F3F3F3] w-full text-[#A09F9F]"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </figure>
            <div
              className=" relative inline-flex rounded-md bg-[#F3F3F3] w-full px-[1rem] cursor-pointer"
              onClick={toggleDropdown}
            >
              <div className="w-full rounded-l-md px-4 py-2">
                {" "}
                <span>
                  {selectedNetwork ? selectedNetwork.name : "Network"}
                </span>
              </div>
              <div className="relative">
                <button
                  type="button"
                  className=" text-gray-600hover:text-gray-700 inline-flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 "
                >
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.516 7.548c0.436-0.446 1.045-0.481 1.576 0l3.908 3.747 3.908-3.747c0.531-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.217 0.223-0.502 0.335-0.788 0.335s-0.571-0.112-0.788-0.335l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className=" relative inline-flex rounded-md bg-[#F3F3F3] w-full  my-[0.5rem]">
              {isDropdownOpen && (
                <ul className=" z-10 w-full border mt-1 p-[1rem] rounded-md">
                  {options.map((option) => (
                    <li
                      key={option.name}
                      className="flex items-center px-4 py-2 hover:bg-[#A09F9F] rouned-md cursor-pointer"
                      onClick={() => selectNetwork(option)}
                    >
                      <img
                        src={option.imgSrc.src}
                        alt={option.name}
                        className="h-6 w-6 mr-2"
                      />
                      <span>{option.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-600 max-md:w-full max-md:mb-[4rem] rounded-full md:mx-4 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </section>
      </div>
    </>
  );
};

export default Airtime;
