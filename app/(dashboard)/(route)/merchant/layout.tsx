import { ReactNode } from "react";
import { Sidebar } from "../../_components/sidebar";
import { Navbar } from "../../_components/navbar";
import '../../globals.css'



const DashboardLayout = ({
    children
}: {
    children:ReactNode
}) => {
    return ( 
        <html lang="en">
        <body className="body ">
        <div className="h-full bg-[#fffdfd]">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar/>
            </div>
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar/>
            </div>
            <main className="md:pl-56 pt-[80px] h-full">
            {children}
            </main>
     
        </div>
        </body>
    </html>
     );
}
 
export default DashboardLayout;