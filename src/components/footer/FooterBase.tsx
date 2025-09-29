import React from "react";
import { Paragraph } from "../typography";

const FooterBase = () => {
  return (
    <div className="flex justify-between ">
      <Paragraph className="text-[#858585] w-[470px]">
        IRDA Registration No. 291 & IFSCA No. 017 (Validity: 18th February 2023
        to 17th February 2026) CIN No.: U70100MH1982PTC027681
      </Paragraph>
      <Paragraph className="text-[#858585] self-end">
        @ 2025 ND Insurance All rights reserved. 
      </Paragraph>
    </div>
  );
};

export default FooterBase;
