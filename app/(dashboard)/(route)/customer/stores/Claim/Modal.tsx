import React from "react";
import { CiStar } from "react-icons/ci";
import { LuChevronRight } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

interface ModalProps {
  openModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ openModal }) => {
  const openModal2 = () => {
    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
    const modal1 = document.getElementById("my_modal_3") as HTMLDialogElement;
    modal.showModal();
    modal1.close();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-[#EA1C24] text-[#FFEAEB] rounded-[24px] h-[48px] my-[2rem] block md:w-2/5 w-full px-[3rem] py-[0.5rem]"
      >
        continue
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <section>
            <h3 className="font-bold text-lg mb-[1rem]">Delivery Details!</h3>
            <hr />
            <div className="my-[1rem]">
              <h2>Add your delivery information </h2>
              <p>Search location or pick a saved delivery address</p>
            </div>

            <div>
              <aside className="flex justify-between my-[1rem] py-[0.7rem]">
                <span className="flex items-center gap-2">
                  <CiStar />
                  Saved Address
                </span>
                <LuChevronRight />
              </aside>
              <hr />
              <aside className="flex justify-between my-[1rem] py-[0.7rem]">
                <span className="flex items-center gap-2">
                  <IoLocationOutline />
                  Search location on map
                </span>
                <LuChevronRight />
              </aside>
            </div>
            <figure className="flex items-center justify-center gap-4 mb-[1rem]">
              <div className="border-[1px] w-full border-[#f3f3f3]"></div>
              <p>or</p>
              <div className="border-[1px] w-full border-[#f3f3f3]"></div>
            </figure>
            <div>
              <p className="font-bold">Input your delivery details here </p>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Delivery Address
                </label>
                <div className="mt-2">
                  <input
                    id="addtess"
                    name="address"
                    type="text"
                    autoComplete=""
                    required
                    className="block w-full rounded-md bg-[#F3F3F3] border-0 py-[0.7rem] text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Phone Number
                </label>
                <div className="my-2 mb-[1rem]">
                  <input
                    id="phone"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="block w-full rounded-md bg-[#F3F3F3] border-0 py-[0.7rem] text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="my-[1rem]">
                <button
                  type="submit"
                  onClick={openModal2}
                  className="flex w-[65%] justify-center bg-red-600 rounded-full px-3 py-[0.7rem] m-auto text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Make payment
                </button>
              </div>
            </div>
          </section>
        </div>
      </dialog>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="font-bold text-lg">Save a location</h2>
          <section>
            <div className="mt-2 w-4/5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-400"
              >
                <span className="font-bold capitalize ">
                  <p className="text-black text-xl ">
                    {" "}
                    give this address a name{" "}
                  </p>
                  this would help you eaisy find it later
                </span>
              </label>
              <div className="my-2 mb-[1rem]">
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete=""
                  required
                  className="block w-full rounded-md bg-[#F3F3F3] border-0 py-[0.7rem] text-gray-400 shadow-sm p-[0.5rem] placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="my-[1rem]">
              <button
                type="submit"
                className="flex w-[65%] justify-center bg-red-600 rounded-full px-3 py-[0.7rem]  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Proceed to checkout
              </button>
            </div>
          </section>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
