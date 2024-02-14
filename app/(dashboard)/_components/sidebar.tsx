import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import Image from "next/image";
import { ChevronDown } from "lucide-react"
import Link from "next/link";

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-[#fffdfd] shadow-sm">
            <div className="flex justify-items-center border-b h-20 p-4">
                <Logo />
            </div>
            <div className="flex flex-col w-full bg-white">
                <SidebarRoutes />
            </div>

            <div className="mt-auto py-20 px-6 flex-col flex-end ">
                <div className="flex items-center">
                    <Image
                        src="/Logo2.png"
                        width={50}
                        height={100}
                        alt="logo"
                        className=' '
                    />
                    <div className="">

                        <p className="text-xs">Business tag</p>
                        <div className="flex">
                            <h3 className="flex items-center text-[14px] font-semibold">Shoprite Ikeja</h3>
                            <ChevronDown />
                        </div>
                    </div>

                </div>
                <Link href="/">
                    <div className="flex gap-4 py-6 ">
                        <Image
                            src="/logout.png"
                            width={20}
                            height={20}
                            alt="logo"
                            className=' '
                        />
                        <h3 className="text-red-400 font-semibold">Log out</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}