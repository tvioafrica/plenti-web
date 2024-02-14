import Table from "@/components/providers/table";
import {orderHistoryTableData} from "../../../constants/pagey"
import { Button } from "@/components/ui/button";

const OrdersPage = () => {
    const {data, headers, color, searchBy} = orderHistoryTableData

    const tableColor = Array.isArray(color) ? color[0] : color; // Use the first color if it's an array

    return (
        <div className="p-6">
            <div className="flex space-x-10 items-center py-4">
                <h3 className="font-bold text-lg">Order History</h3>
                {searchBy.map((item, index) => (
                      <Button
                      key={index}
                  //   onClick={() => handleCategoryFilter(category)}
                    className={ ' rounded-xl text-black text-[#909091] rounded-xl  hover:text-white space-x-10'}
                  >
                    {item}
                  </Button>
                ))}
          
            </div>
            <div>
                <Table data={data} headers={headers} color={tableColor} extraTableRow={true} showAdditionalContent/>
            </div>
        </div>

    );
}

export default OrdersPage;