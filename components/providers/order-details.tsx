import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";
import { Button } from "../ui/button";


const OrderDetail = () => {
    return (
        <Dialog>
            <DialogTrigger className="underline">View details</DialogTrigger>
            <DialogContent className='bg-white'>
                <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                    <DialogDescription>
                        <div>
                            <div className="flex items-center py-6">
                                <div className="w-1/2">
                                    <Image
                                        width={200}
                                        height={100}
                                        src="/productDetail.png"
                                        alt="Placeholder Image"
                                        className="object-fit rounded-lg "
                                    />
                                </div>
                                <div className="w-1/2 justify-center items-center">
                                    <div className=" flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Category:</p>
                                        <span className="font-semibold">Food and Drink</span>
                                    </div>
                                    <div className=" flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Offer earned:</p>
                                        <span className="font-semibold">N500 Airtime</span>
                                    </div>
                                    <div className=" flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Order Fulfilment:</p>
                                        <p className="rounded-lg text-[10px] font-semibold flex items-center text-blue-500 px-2 bg-blue-100">Delivery</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-4">
                                <div className="pt-8">
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9]">Customer&apos;s name:</p>
                                        <span className="font-semibold">Kanyinsola Balogun</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Phone Number:</p>
                                        <span className="font-semibold">080665544236</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Amount:</p>
                                        <span className="font-semibold">N2,500</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Product name:</p>
                                        <span className="font-semibold text-[12px]">
                                            Buy 2 cups of ice cream for N3000
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Address:</p>
                                        <span className="font-semibold">100B Kanyinsola Balogun Street Festac</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Offer type:</p>
                                        <p className="rounded-lg text-[10px] font-semibold flex items-center text-purple-500 px-2 bg-purple-100">Airtime</p>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <p className="text-[#a8a9a9] ">Order ID:</p>
                                        <span className="font-semibold">PA6788</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                type="button"
                                variant="ghost"
                                size="lg"
                                className="bg-black w-1/2 text-white  rounded-3xl hover:bg-black-100 hover:text-white"
                            >
                                Okay
                            </Button>
                        </div>

                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
}

export default OrderDetail;