import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from "react";

const Toggle = () => {

    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);

        if (isChecked) {
            router.push("/home");
        } else {
            router.push("/merchants");
        }
    };

    return (
        <div>
            <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                <div className="mr-6  font-semibold">
                    FOR BUYERS
                </div>
                <div className="relative">

                    <input type="checkbox" id="toggleB" className="sr-only" checked={isChecked} onChange={handleToggle} />


                    <div className="block border border-[#ea1d24] w-16 h-8 rounded-full bg-sec"></div>

                    <div className="dot absolute left-1 top-1 bg-primary w-6 h-6 rounded-full transition"></div>


                </div>


                <div className="ml-6  font-semibold">
                    FOR MERCHANTS
                </div>
            </label>
        </div>
    )
}

export default Toggle