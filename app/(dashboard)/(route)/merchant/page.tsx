import Table from "@/components/providers/table";
import OrderTable from "@/components/providers/order-table";
import { StatOverview } from "@/components/providers/stat-overview";
import StatWidget from "@/components/providers/stat-widget";
import { storeOverviewTableData, overviewCardItems } from "../../constants/pagey"
// import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { data, headers } = storeOverviewTableData
  return (
    <div className="p-6 flex flex-col ">
      <h2 className="pb-6 font-bold text-xl">Store Overview</h2>
      <div className="flex space-x-10">
        {overviewCardItems.map((item, index) => (
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
      <div className="border shadow-lg rounded-md my-10 py-2 bg-white">
        <h3 className="p-6 text-base font-semibold">Sales statistics</h3>
        <StatOverview />
      </div>
      <div>
        <div
          className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white p-4  shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none"
        >
          <h5 className="text-md font-semibold text-navy-700 dark:text-white">
            Recent orders
          </h5>
          <button
            className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
          >
            See all
          </button>
        </div>
        <Table data={data} headers={headers} extraTableRow={true} showAdditionalContent color=""/>
      </div>

    </div>
  )
}
