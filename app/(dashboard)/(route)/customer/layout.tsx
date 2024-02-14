// import '../globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Navbar from "../Components/Navbar";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import Promotions from "./_components/Promotions";
import "../../globals.css";
import { ReactQueryProvider } from "@/app/ReactQueryprovider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ReactQueryProvider>
      <html lang="en" className="font-family-raleway">
        <body className={inter.className}>
          <Navbar />
          <main className="md:flex">
            <Sidebar />
            <div className="  mb-[100px] flex max-sm:p-[1rem] md:w-[95%] overflow-hidden  height-minus-80">
              <aside className="md:w-[70%] w-full h-full overflow-auto hide-scrollbar">
                {children}
              </aside>
              <aside className="w-[30%] hidden md:block">
                <Promotions />
              </aside>
            </div>
          </main>
        </body>
      </html>
    </ReactQueryProvider>
  );
}