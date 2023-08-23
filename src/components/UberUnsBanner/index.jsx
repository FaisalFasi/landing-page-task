import React from "react";

const UberUnsBanner = () => {
  return (
    <div className=" flex flex-col items-center gap-[48px] self-stretch">
      <div className="flex w-full max-w-[700px] flex-col text-center gap-[32px] self-stretch mx-auto">
        <h3 className="font-helvetica-neue text-3xl md:text-5xl font-light md:leading-[120%] leading-normal">
          Wir demokratisieren Selbsthilfegruppen
        </h3>
        <p className="font-helvetica-neue text-base font-light leading-[150%]">
          Gemeinsam haben wir es uns zur Aufgabe gemacht Menschen in schwierigen
          Lebenssituationen zu unterstützen und haben damit auch eine
          Lebensaufgabe gewählt.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[12px] self-stretch grid-auto-flow-row">
        <div>
          <img
            src="/images/uberUnsBannerImages/kelsey-1.png"
            alt="uber uns banner image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="/images/uberUnsBannerImages/people-2.png"
            alt="uber uns banner image"
            className="w-full h-auto"
          />{" "}
          <img
            src="/images/uberUnsBannerImages/Rectangle3.png"
            alt="uber uns banner image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-3">
          <img
            src="/images/uberUnsBannerImages/Rectangle4.png"
            alt="uber uns banner image"
            className="w-full h-auto"
          />
          <img
            src="/images/uberUnsBannerImages/mark-55.png"
            alt="uber uns banner image"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="/images/uberUnsBannerImages/kelsey-66.png"
            alt="uber uns banner image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default UberUnsBanner;
