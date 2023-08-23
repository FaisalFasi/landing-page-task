import React from "react";
import Button from "../Button";

const HomeBanner = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="mb-4 md:mb-0 md:min-w-[300px] md:max-w-[570px] flex flex-col flex-1 gap-[32px] items-start justify-center ">
        <h1 className="font-helvetica-neue text-2xl md:text-4xl font-light leading-[120%]">
          Online Selbsthilfegruppen
        </h1>
        <p className="text-sm md:text-base">
          Tausche Dich mit anderen Betroffenen aus oder starte eine neue Gruppe.
          Unabhängig von deinem Wohnort und passend zu deiner Lebenssituation.
        </p>
        <Button>Jetzt starten</Button>
      </div>
      <div className="md:min-w-[440px] flex flex-col md:flex-row gap-[12px] pb-8 md:pb-20">
        <div className="flex flex-col gap-[12px] items-start md:flex-1">
          <img
            src="/images/bannerImages/Rectangle92.png"
            alt=""
            className="w-full h-auto"
          />
          <img
            src="/images/bannerImages/pexels-christina.png"
            alt=""
            className="w-full h-auto"
          />
          <img
            src="/images/bannerImages/Bildschirmfoto.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-[12px] items-start md:flex-1">
          <img
            src="/images/bannerImages/IMG_6818.png"
            alt=""
            className="w-full h-auto"
          />
          <img
            src="/images/bannerImages/Rectangle93.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
