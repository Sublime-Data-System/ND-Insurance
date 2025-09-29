import React from "react";
import { Paragraph } from "../typography";
import Image from "next/image";
import FooterBase from "./FooterBase";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <div className="max-w-[1296px] w-full h-[584px] flex flex-col rounded-[52px] bg-white mx-auto p-[60px] my-[80px] ">
      <div className="flex flex-1 pb-[50px] justify-between">
        <div className="">
          <Image
            src={"/logo/footerLogo.png"}
            className=""
            height={147}
            width={221}
            alt={"logo"}
          />
          <Paragraph className="w-[266px] text-[#4D3E99] font-[400] mt-[10px]">
            <i>Protecting Your Growth, Securing Your Future !</i>
          </Paragraph>

          <button className="w-[177px] h-[65px] bg-[#2D2D2D] rounded-[45px] mt-[30px]">
            <Paragraph className="text-[21px] font-[350] text-white">
              Get a Quote
            </Paragraph>
          </button>
        </div>
        <FooterRight />
      </div>
      <FooterBase />
    </div>
  );
};

export default Footer;
