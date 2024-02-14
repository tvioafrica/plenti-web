// "use client"
import React from "react"
// import {MdPeopleAlt} from "react-icons/md"
// import {IconType} from "react-icons"

type CardProbs = {
    icon: React.ElementType;
    icon2: React.ElementType;
    color: string;
    color2: string;
    iconColor: string;
    iconBGColor: string;
    text: string;
    amount: string;
    percentage: string
}


const StatWidget = ({ icon: Icon, icon2: Icon2, color, text, amount, percentage, iconColor, color2, iconBGColor }: CardProbs) => {

    return (
        <div className="relative flex  flex-grow p-4 flex-col rounded-[10px]  border-[1px] border-gray-200 bg-clip-border shadow-md dark:shadow-none">

            <div className="flex  rounded-full  ">

                <Icon
                    size={20}
                    className={`bg-${iconBGColor} text-${iconColor} rounded-xl h-10 p-2 w-10`} />
            </div>

            <div className="h-50  flex w-auto flex-col justify-center">
                <p className="font-dm py-4 text-sm font-medium text-gray-600">{text}</p>
                <div className="flex justify-between">
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">{amount}</h4>
                    <div className={`bg-${color} py-2 px-2 flex space-x-2 items-center text-center text-xs rounded-[6px]`}>
                        <Icon2 size={22} className={`bg-${color} text-${color2} h-3 w-4  rounded-[4px] text-white`} />
                        <span>{percentage}%</span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default StatWidget;