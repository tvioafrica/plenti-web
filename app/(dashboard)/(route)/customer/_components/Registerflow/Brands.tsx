import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Assuming the correct import for useRouter
import { choose_brand } from "../../_constants/customerData";
import Swal from "sweetalert2";

const Brands = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const router = useRouter();

  const handleBrandChange = (brandIdentifier: string) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brandIdentifier)) {
        return prevSelectedBrands.filter((brand) => brand !== brandIdentifier);
      } else {
        return [...prevSelectedBrands, brandIdentifier];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedBrands.length === 0) {
      Swal.fire({
        title: 'No Brands Selected',
        text: 'Please select at least one brand to continue.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
    } else {
      console.log("Selected Brands: ", selectedBrands);
      Swal.fire({
        title: 'Success!',
        text: 'Brands selected successfully.',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then(() => {
        router.push("/customer_login");
      });
    }
  };

  return (
    <section className="md:w-2/5 m-auto text-center h-[80vh] flex items-center justify-center flex-col ">
      <div className="grid md:grid-cols-3 grid-cols-2 my-[3rem] gap-6">
        {choose_brand.map((brand, index) => {
          const brandIdentifier = brand.src || `brand-${index}`;
          const isSelected = selectedBrands.includes(brandIdentifier);
          return (
            <div
              key={index}
              className={`h-[140px] p-[1rem] w-[140px] rounded-md border-[1px] cursor-pointer ${isSelected ? 'border-blue-500' : 'border-grey-600'}`}
              onClick={() => handleBrandChange(brandIdentifier)}
            >
              <img src={brand.src} alt={`Brand ${index}`} className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className="flex w-3/5 justify-center bg-red-600 rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Next
      </button>
    </section>
  );
};

export default Brands;
