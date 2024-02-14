import StatWidget from "@/components/providers/stat-widget";
import { singleOverviewCardItems, customerTableData } from "../../../constants/pagey"
import Table from "@/components/providers/table";
import { PieChartss } from "@/components/providers/pie-chart";
import { Info } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const CustomersPage = () => {
    const { data, headers } = customerTableData
    return (
        <div className="p-6">
            <h3 className="font-semibold">Customers</h3>
            <div className="flex space-x-10">
                <div className="w-3/4">
                    <div className="flex space-x-10 py-6">
                        {singleOverviewCardItems.map((item, index) => (
                            <StatWidget
                                key={index}
                                icon={item.icon}
                                icon2={item.icon2}
                                text={item.text}
                                color={item.color}
                                percentage={item.percentage}
                                amount={item.amount}
                                color2={item.color2}
                                iconBGColor={item.iconBGColor}
                                iconColor={item.iconColor}

                            />
                        ))}
                    </div>
                    <Table color="" data={data} headers={headers} showAdditionalContent={true} extraTableRow={false}/>
                </div>
                <div className="w-1/4 py-6 ">
                    <div className="shadow-lg p-6 flex flex-col">
                        <div className="flex items-end space-x-2">
                            <h3>Customer Segmentation</h3>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info size={20} />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        <PieChartss />
                        <div className="-mt-10">
                            <div className="flex space-x-4 items-center">
                                <div className="w-[16px] h-[16px] bg-[#81cdff] rounded-full"></div>
                                <h4 className="text-sm">Top Buyer</h4>
                                <span className="font-semibold">30%</span>
                            </div>
                            <div className="flex space-x-4 items-center">
                                <div className="w-[16px] h-[16px] bg-[#fc99a2] rounded-full"></div>
                                <h4 className="text-sm">Regular Buyer</h4>
                                <span className="font-semibold">30%</span>
                            </div>
                            <div className="flex space-x-4 items-center">
                                <div className="w-[16px] h-[16px] bg-[#c88efe] rounded-full"></div>
                                <h4 className="text-sm">Occassional Buyer</h4>
                                <span className="font-semibold">30%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomersPage;