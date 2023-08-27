import React, { useEffect, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Button from "../Button";

const navItems = [
  { to: "/", title: "Startseite", _scrollTo: "top" },
  { to: "/gruppen", title: "Gruppen", _scrollTo: "top" },
  { to: "/blog", title: "Blog", _scrollTo: "top" },
  { to: "/preisuebersicht", title: "Preisübersicht", _scrollTo: "top" },
  { to: "/uberuns", title: "Über uns", _scrollTo: "top" },
];
const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavLinkClick = (scrollTo) => {
    if (scrollTo === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsNavbarOpen(false);
  };

  const checkWindowSize = () => {
    if (window.innerWidth > 768) {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div
      className={`sticky h-20 top-0 z-50 flex items-center py-4 px-4 justify-between  bg-[#f8f9fa]`}
    >
      <ul
        className={`w-full z-2 lg:flex gap-2  text-center lg:items-center p-8 lg:p-0 absolute lg:static  lg:bg-none lg:z-auto left-0  transition-all duration-500 ease-out  bg-[#f8f9fa] ${
          isNavbarOpen ? "h-screen top-0 pt-12 " : "top-[-490px]"
        } `}
      >
        {navItems.map(({ to, title, _scrollTo }, index) => {
          return (
            <li key={index} className="px-[16px] py-[8px]">
              <Link
                to={to}
                onClick={() => handleNavLinkClick(_scrollTo)}
                className={``}
              >
                {title}
              </Link>
            </li>
          );
        })}
        <li className="md:hidden block">
          <a
            href="/login"
            className="flex flex-col justify-center items-center self-stretch rounded-[4px] px-[16px] py-[8px] text-[#495057]"
          >
            Anmeldung
          </a>
        </li>
      </ul>
      <div className="md:flex items-center md:justify-between justify-items-start	 w-full  bg-[#f8f9fa]">
        <img
          src="/images/logo/Logo.png"
          alt="navbar logo"
          className="w-[75px] height-[60px]"
        />
        <div className="md:flex items-center gap-8 hidden">
          <input
            type="text"
            placeholder="Gruppe suchen"
            className="px-[8px] py-[4px] rounded-[4px] flex flex-col items-start gap-[8px] flex-1 border-[1px] border-[#CED4DA] bg-white"
          />
          <a
            href="/login"
            className="flex flex-col justify-center items-center self-stretch rounded-[4px] px-[16px] py-[8px] text-[#495057] "
          >
            Anmeldung
          </a>
          <Button> Mitglied werden</Button>
        </div>
      </div>
      <div
        className={` w-20 h-30 p-2 cursor-pointer rounded active:outline outline-2 outline-blue-400  hover:bg-gray-100 lg:hidden block z-10`}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        {!isNavbarOpen ? <Bars3BottomRightIcon /> : <XMarkIcon />}
      </div>
    </div>
  );
};

export default Header;
