import React from "react";
import { Paragraph } from "../typography";

const FooterRight = () => {
  const pages = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About us",
      link: "#",
    },
    {
      title: "Our Services",
      link: "#",
    },
    {
      title: "Our Products",
      link: "#",
    },
    {
      title: "Testimonials",
      link: "#",
    },
    {
      title: "Contact Us",
      link: "#",
    },
  ];

  const contacts = [
    {
      icon: "",
      text: "1, Manekbaug Society, SM Road, Ambawadi, Ahmedabad, Gujarat – 380015, India",
    },
    {
      icon: "",
      text: "079-66621146/47/48",
    },
    {
      icon: "",
      text: "info@ndinsurance.com",
    },
  ];
  return (
    <div className="flex gap-[100px] pt-[20px]">
      <div className=" flex flex-col gap-[20px]">
        <Paragraph className=" text-black font-[400] mb-[10px]">
          <i>QUICK LINKS</i>
        </Paragraph>

        {pages.map((data, index) => {
          return (
            <Paragraph className="text-[#858585]" key={data.title + index}>
              {data.title}
            </Paragraph>
          );
        })}
      </div>
      <div className=" flex flex-col gap-[20px]">
        <Paragraph className=" text-black font-[400] mb-[10px]">
          <i>CONTACTS</i>
        </Paragraph>

        {contacts.map((data, index) => {
          return (
            <div key={data.text + index} className="flex gap-[14px] ">
              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#4D3E99]"></div>
              <Paragraph className="max-w-[336px] w-full font-[350px] text-[#5F5F5F] flex items-center">
                {data.text}
              </Paragraph>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterRight;
