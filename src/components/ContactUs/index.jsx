import React from "react";

const ContactUs = () => {
  return (
    <div className="my-32 flex flex-col gap-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-20 text-[#212529]">
        <div className="flex justify-center items-center  ">
          <img
            src="/images/contactUsImages/vonecia.png"
            alt="image of an old man in groupe section "
            className="w-full rounded-[9px] bg-[url(<path-to-image>)] bg-lightgray bg-center bg-cover bg-no-repeat"
          />
        </div>

        <div className="flex flex-col  justify-center items-start  gap-[20px]  ">
          <h4 className="font-helvetica-neue text-xl font-medium leading-[120%]">
            Du möchtest Teil des Teams werden?{" "}
          </h4>
          <p className="font-helvetica-neue text-base font-normal leading-[150%]">
            Schicke uns gerne deine Bewerbungsunterlagen zu an
            bewerbung@hellowetogether.de
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-20 text-[#212529]">
        <div className="flex flex-col  justify-center items-start  gap-[20px]  ">
          <h4 className="font-helvetica-neue text-xl font-medium leading-[120%]">
            Ihr seid ein Unternehmen und wollt mit uns in Kontakt treten?{" "}
          </h4>
          <p className="font-helvetica-neue text-base font-normal leading-[150%]">
            Schreibt uns gerne eine Nachricht an info@hellowetogether.de
          </p>
        </div>
        <div className="flex justify-center items-center  ">
          <img
            src="/images/contactUsImages/handsGather.png"
            alt="image of an old man in groupe section "
            className="w-full rounded-[9px] bg-[url(<path-to-image>)] bg-lightgray bg-center bg-cover bg-no-repeat"
          />
        </div>
      </div>
      <div className="pt-12 flex flex-col gap-4 text-[#212529]">
        <h3 className="font-helvetica-neue text-3xl font-medium leading-[120%]">
          Unsere Partner uns Förderer
        </h3>
        <p className="font-helvetica-neue text-base font-light leading-[150%] ">
          Hier findet ihr eine Liste unserer Partner mit denen wir zusammen
          daran arbeiten Menschen miteinander zu verbinden und ihnen Zugang zu
          Selbsthilfegruppen zu ermöglichen.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
