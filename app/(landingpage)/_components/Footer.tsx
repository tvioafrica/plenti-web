import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "../_constants/index";

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column ">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
);

const Footer = () => (
    <>
    <section className="md:w-full footer mt-10 bg-secondary">
        <div className="md:flex px-4 md:px-0 flex-row gap-12  container mx-auto pt-28 grid grid-cols-2">
   
            
            <div className="flex items-start flex-col ">
                <Image src="/plenti_logo_dark.svg" width={116} height={38} alt="logo" />

                <p className="text-start text-sm font-normal mt-5 ">
                   Biggest reward platform in Africa
                </p>
            </div>
     
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

                    <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                
                <div>
                <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                </div>
       
        </div>

       
    </section>
    <div className="flex justify-items-center footer_copyright py-6">
           
         
           <p  className="text-white text-center container mx-auto">@ 2024 Plenti. All rights reserved</p>
              
    
       </div>
    </>
);

export default Footer;