import React from "react";

const Button = ({ intent = "primary", children }) => {
  const intents = {
    primary: "bg-[#A64D79] hover:bg-[#A64D79]",
    secondary: "bg-[#ACD7EB] hover:bg-[#ACD7EB]",
  };
  return (
    <button
      className={`font-helvetica-neue text-base font-light leading-[150%] font px-[24px] py-[8px] rounded-[4px] text-white ${intents[intent]}`}
    >
      {children}
    </button>
  );
};

export default Button;
