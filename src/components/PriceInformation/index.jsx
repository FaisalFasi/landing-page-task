import React from "react";
import Button from "../Button";

const PriceInformation = () => {
  return (
    <div className="w-full py-20 bg-[#F9F5E6] text-black flex justify-center items-center">
      <div className="max-w-[680px] w-full px-6">
        <h4 className="text-[#212529] text-center font-HelveticaNeue text-xl font-medium leading-[120%]">
          Ein monatlicher Preis - unlimitierter Zugang zu Gruppen
        </h4>
        <p className="mt-4 text-[#212529] text-center font-HelveticaNeue text-base font-normal leading-[150%]">
          Teste 5 Gruppen-Termine jetzt kostenlos. Danach kannst Du für 19,95 €
          / Monat an unbegrenzt vielen Gruppen teilnehmen.
        </p>
        <div className="mt-6">
          <div className="max-w-[480px] mx-auto p-6 rounded-md border-[1px] border-[#9AC0D1] bg-[#FCFCFC] flex gap-6 items-center">
            <img
              src="/images/priceInfoImages/SeedIcon.png"
              alt="small-tree-on-ground"
              className="w-12 h-12"
            />
            <div className="flex flex-col gap-1">
              <h4 className="text-[var(--text-text-primary,#212529)] font-HelveticaNeue text-xl font-medium leading-[120%]">
                5 Teilnahmen kostenlos
              </h4>
              <p className="text-[var(--text-text-primary,#212529)] font-HelveticaNeue text-base font-normal leading-[150%]">
                Danach 19,95 € / Monat. Jederzeit kündbar
              </p>
            </div>
          </div>
          <p className="mt-2 text-[#212529] text-center font-HelveticaNeue text-sm font-normal leading-[150%]">
            We.together ist kostenlos für Gruppenmoderatoren{" "}
            <span className="text-[#A64D79]">
              - <span className="underline">Jetzt mehr erfahren.</span>
            </span>
          </p>
          <div className="mt-8 text-center">
            <Button>Jetzt testen</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceInformation;
