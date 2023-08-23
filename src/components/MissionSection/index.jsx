import React from "react";

const MissionSection = () => {
  return (
    <div className="pt-20">
      <div className="flex flex-col  gap-[56px] self-stretch text-[#212529]">
        <div className="flex flex-col max-w-[740px] self-start gap-2 ">
          <h3 className="font-helvetica-neue text-2xl font-medium leading-[120%]">
            Unsere Mission
          </h3>
          <p className="font-helvetica-neue text-base font-light text-justify leading-[150%]">
            ist es, Menschen zu verbinden und ihnen Zugang zur richtigen
            Selbsthilfegruppe zu ermöglichen. Durch unsere Online-Plattform
            schaffen wir eine sichere und unterstützende Umgebung, in der
            Menschen ihre Herausforderungen teilen können, um Heilung, Stärke
            und gemeinsamen Fortschritt zu finden. Bei we.together sind wir
            bestrebt, jedem die Möglichkeit zu geben, sich selbst zu helfen und
            gemeinsam zu wachsen.
          </p>
        </div>
        <div className="flex flex-col max-w-[740px]   gap-2 self-center">
          <h3 className="font-helvetica-neue  text-2xl font-medium leading-[120%]">
            Unsere Vision{" "}
          </h3>
          <p className="font-helvetica-neue text-base font-light text-justify leading-[150%]">
            ist es, dass jeder Mensch den Zugang zu psychologischer
            Unterstützung bekommt. Wir streben danach, eine Gemeinschaft zu
            schaffen, in der Menschen Unterstützung, Inspiration und Ressourcen
            finden, um ihr Potenzial zu entfalten. Durch unsere innovative
            Plattform möchten wir eine Brücke bauen, die Menschen zusammenführt,
            um sich gegenseitig zu stärken, zu ermutigen und gemeinsam zu
            wachsen.
          </p>
        </div>{" "}
        <div className="flex flex-col max-w-[740px]   gap-2 self-end">
          <h3 className="font-helvetica-neue text-2xl font-medium leading-[120%]">
            Unser Team
          </h3>
          <p className="font-helvetica-neue text-base font-light text-justify leading-[150%]">
            besteht aus Expertinnen und Experten, die stetig die Bedürfnisse
            unsere NutzerInnen im Blick haben und dahingehend we.together
            kontinuierlich weiterentwickeln. Unser Team zeichnet sich vor allem
            durch hohe Motivation aus sowie Empathie und Verständnis für
            psychische Erkrankungen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
