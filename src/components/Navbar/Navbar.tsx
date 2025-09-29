import Image from "next/image";
import React from "react";
import { H7, Paragraph } from "../typography";

const Navbar = () => {
  const links = [
    {
      text: "About us",
      link: "",
    },
    {
      text: "Our Services",
      link: "",
    },
    {
      text: "Our Products",
      link: "",
    },
    {
      text: "Testimonials",
      link: "",
    },
    {
      text: "Contact us",
      link: "",
    },
  ];
  return (
    <div className="max-w-[1296px] w-full h-[86px] bg-white rounded-[52px] mx-auto flex justify-between">
      <div className="h-full w-auto flex items-center pl-[20px]">
        <Image alt={"logo"} src={"/logo/navLogo.png"} height={57} width={128} />
      </div>
      <div className="h-full w-auto flex items-center gap-[30px] pr-[16px]">
        {links.map((data, index) => {
          return (
            <Paragraph className="text-[#292929]" key={data.text + index}>
              {data.text}
            </Paragraph>
          );
        })}
        <button className="h-[59px] w-[164px] rounded-[45px] bg-[#2F2F2F]">
          <H7 className="text-white">Get a Quote</H7>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
