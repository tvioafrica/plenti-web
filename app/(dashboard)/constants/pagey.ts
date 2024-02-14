import {Users2, ArrowDown, ArrowUp, BarChart2, ShoppingCart} from "lucide-react"

export const orderData = [
  {
    products: "Buy 2 get 1 free",
    orderID: "114527",
    customeeDetails: "Hope Samuel",
    status: "Active",
    offerType: "",
    amount: "5000"
  },

]

export const overviewCardItems = [
  {
    icon: Users2 ,
    icon2: ArrowDown,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-300",
    amount: "500,000",
    iconBGColor:"stone-200",
    color2: "red-500",
    iconColor: "stone-800"
  },
  {
    icon: BarChart2 ,
    icon2: ArrowUp,
    text: "Total Store Visit",
    percentage: "10",
    color: "green-50",
    amount: "500,000",
    iconBGColor:"purple-50",
    color2: "green-500",
    iconColor: "purple-300"
  },
  {
    icon: ShoppingCart ,
    icon2: ArrowUp,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-500",
    amount: "500,000",
    iconBGColor:"indigo-100",
    color2: "green-500",
    iconColor: "indigo-800"
  },
]


export const singleOverviewCardItems = [
  {
    icon: Users2 ,
    icon2: ArrowDown,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-300",
    amount: "500,000",
    iconBGColor:"red-500",
    color2: "red-500",
    iconColor: ""
  },
  {
    icon: BarChart2 ,
    icon2: ArrowUp,
    text: "Total Store Visit",
    percentage: "10",
    color: "green-50",
    amount: "500,000",
    iconBGColor:"purple-50",
    color2: "green-500",
    iconColor: "purple-300"
  },
 
]

export const invoiceOverviewCardItems = [
  {
    icon: Users2 ,
    icon2: ArrowDown,
    text: "Total Store Visits",
    percentage: "20",
    color: "red-300",
    amount: "500,000",
    iconBGColor:"red-500",
    color2: "red-500",
    iconColor: ""
  },
  
]

export const storeOverviewTableData = {
  data: [
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000"},
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000" },
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000" },
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", status: "Active", amount: "5000" }
  ],
  headers: ["products", "orderID", "customerDetails", "status", "amount"]
}

export const orderHistoryTableData = {
  data: [
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Delivery", status: "Active", amount: "5000" },
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Pickup", status: "Active", amount: "5000"},
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Delivery", status: "Active", amount: "5000"},
    { products: "Pepsi", orderID: "#243189", customerDetails: "Mary Daniel", offerType: "Pickup", status: "Active", amount: "5000"}
  ],
  headers: ["products", "orderID", "customerDetails", "status", "offerType", "amount"],
  color:["red-500", "blue-500"],
  searchBy: ["All orders", "Today", "Yesterday", "This week", "Last week", "Last 30 days", "This year"]
}

export const customerTableData = {
  data: [
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
    { rank: "#243189", name: "Mary Daniel", email:"femi@gmail.com", contact: "089076564527", totalSpent: "5000"},
  ],
  headers: ["rank", "name", "email", "contact", "totalSpent"]
}

export const items = [
  {
    id: 1, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pending offers',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 2, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Approved offers',
    price: "5000",
    status: "Approved"
  },
  {
    id: 3, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Expired',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 4, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pause',
    price: "5000",
    status: "Approved"
  },
  {
    id: 5, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pending offers',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 6, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Approved offers',
    price: "5000",
    status: "Approved"
  },
  {
    id: 7, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Expired',
    price: "5000",
    status: "Pending approval"
  },
  {
    id: 8, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Pause',
    price: "5000",
    status: "Approved"
  },
  {
    id: 9, name: 'Buy 2 cups of ice cream for N3000 and earn up to n100 cashback and other free goodies',
    category: 'Approved offers',
    price: "5000",
    status: "Pending approval"
  },
  
];