import React from "react";

const cardData = [
  {
    img: "/images/groupCardsImages/boy-1.png",
    groupName: "Depressionsgruppen",
  },
  {
    img: "/images/groupCardsImages/artsy-1.png",
    groupName: "Trauergruppen ",
  },
  {
    img: "/images/groupCardsImages/family.png",
    groupName: "Gruppen für Angehörige ",
  },
  {
    img: "/images/groupCardsImages/plant-1.png",
    groupName: "Alle Gruppen anzeigen",
  },
];

const GroupCards = () => {
  return (
    <div className="text-start mt-20">
      <h3 className="text-[#212529] font-HelveticaNeue text-3xl font-medium leading-[120%] self-stretch">
        Finde Die richtige Gruppe für Dich
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[32px] mt-8  ">
        {cardData.map(({ img, groupName }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col max-w-[450px] gap-[24px] self-stretch"
            >
              <img
                src={img}
                alt="group card"
                className="w-full md:max-w-full h-auto"
              />
              <div className="flex items-center gap-8 pl-2">
                <p className="text-[#1E1E1E] font-open-sans text-base font-normal leading-[150%] tracking-tighter">
                  {groupName}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  viewBox="0 0 26 16"
                  fill="none"
                >
                  <path
                    d="M24.8156 8.84456C25.2061 8.45403 25.2061 7.82087 24.8156 7.43034L18.4516 1.06638C18.0611 0.675859 17.428 0.675859 17.0374 1.06638C16.6469 1.45691 16.6469 2.09007 17.0374 2.4806L22.6943 8.13745L17.0374 13.7943C16.6469 14.1848 16.6469 14.818 17.0374 15.2085C17.428 15.599 18.0611 15.599 18.4516 15.2085L24.8156 8.84456ZM0.934692 9.13745H24.1085V7.13745H0.934692V9.13745Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupCards;
