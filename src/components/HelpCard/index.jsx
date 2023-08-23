import React from "react";

const helpCardInfo = [
  {
    img: "/images/helpCard/plantInHand.png",
    title: "Unsere Vision",
    desc: "Wir wollen mit we.together Deutschlands führende digitale Selbsthilfe Plattform schaffen, die jedem den Zugang zu der richtigen Selbsthilfegruppe ermöglicht.",
  },
  {
    img: "/images/helpCard/path-1.png",
    title: "Unsere Einstellung",
    desc: "Wir glauben daran, dass jeder Mensch glücklich sein darf und die Lösung, um das zu erreichen, in sich trägt. Wir bieten mit we.together eine Möglichkeit und einen Weg zu dieser Lösung zu kommen.",
  },
  {
    img: "/images/helpCard/gatherPeople.png",
    title: "Unser Team",
    desc: "We.together wird auch bei uns im Team groß geschrieben. Gemeinsam haben wir es uns zur Aufgabe gemacht Menschen in schwierigen Lebenssituationen zu unterstützen und haben damit auch eine Lebensaufgabe gewählt.",
  },
];
const HelpCard = () => {
  return (
    <div className="text-start mt-20">
      <h3 className="text-[var(--text-text-primary,#212529)] font-HelveticaNeue text-3xl font-medium leading-[120%] self-stretch">
        Gemeinsam Selbsthilfe ermöglichen
      </h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[32px] mt-8">
        {helpCardInfo.map(({ img, title, desc }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col  max-w-[450px]  gap-[24px] self-stretch"
            >
              <img
                src={img}
                alt="help card image"
                className="w-full md:max-w-full h-auto"
              />

              <div className="flex flex-col  gap-[12px]">
                <h4 className="text-[var(--text-text-primary,#212529)] font-HelveticaNeue text-xl font-medium leading-[120%]">
                  {title}
                </h4>
                <p className="text-[var(--text-text-secondary,#8590A6)] font-HelveticaNeue text-lg font-normal leading-[150%]">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HelpCard;
