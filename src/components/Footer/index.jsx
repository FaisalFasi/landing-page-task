import React from "react";

const footerInfo = [
  {
    title: "Über uns",
  },
  { title: "Impressum" },
  {
    title: "Datenschutz",
  },
  { title: "AGB" },
  {
    title: "Wiederufsrecht",
  },
];

const Footer = () => {
  return (
    <footer className="px-[64px]">
      <div className="flex flex-1  md:flex-row justify-between items-center py-8 px-4 md:py-[64px] md:px-[90px] border-t-2 ">
        <div>
          <img src="/images/logo/Logo.png" alt="Footer Logo" />
        </div>
        <div className="flex flex-col items-start gap-[16px]">
          <h3 className="font-medium fontWeight-[500]">Rechtliches </h3>
          <ul className="w-[172px] flex flex-col items-start gap-[8px]">
            {footerInfo.map(({ title }, index) => {
              return (
                <li key={index} className="px-[16px] py-[8px]">
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
