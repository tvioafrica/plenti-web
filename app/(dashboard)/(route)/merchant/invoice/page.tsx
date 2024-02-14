import StatWidget from "@/components/providers/stat-widget";
import { invoiceOverviewCardItems, customerTableData } from "../../../constants/pagey"
import Table from "@/components/providers/table";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronUp } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const InvoicePage = () => {
    const { data, headers } = customerTableData
    return (
        <div className="p-6">
            <h3 className="font-semibold">Customers</h3>
            <div className=" flex justify-between">

                <div className="w-1/3" >
                    {invoiceOverviewCardItems.map((item, index) => (
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


                <div className="flex space-x-6">
                    <div>
                        <DropdownMenu >
                            <DropdownMenuTrigger className="border py-2 px-4 flex items-center rounded-lg text-md">
                                Filter by store
                                <ChevronUp size={16} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-white">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div>
                        <Button
                            type="button"
                            variant="ghost"
                            size="lg"
                            className="bg-black px-3 text-white rounded-xl hover:bg-black-100 hover:text-white"
                        >
                            Generate invoice
                            <ExternalLink size={16} className="ml-2" />
                        </Button>
                    </div>
                </div>

            </div>

            <div className="py-6">
                <Table data={data} headers={headers} showAdditionalContent={true} color="red" extraTableRow={false} />
            </div>

        </div>
    );
}

export default InvoicePage;