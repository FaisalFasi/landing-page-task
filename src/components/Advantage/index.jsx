import React from "react";

const advantages = [
  {
    id: "01",
    title: "Fortlaufende Gruppen",
    desc: "Tausch Dich regelmäßig mit Menschen aus, die in einer ähnlichen Situation sind wie Du um gemeinsam zu heilen.",
  },
  {
    id: "02",
    title: "Anonymität",
    desc: "Deine Sicherheit liegt uns besonders am Herzen, deshalb achten wir sehr auf Deine Anonymität auf der Plattform.",
  },
  {
    id: "03",
    title: "Jederzeit zugänglich",
    desc: "Alle Gruppen finden online per Video-Call statt. Unabhängig von deinem Wohnort und deiner Lebenssituation.",
  },
  {
    id: "04",
    title: "Von Psychologen entwickelt",
    desc: "Unsere Gruppen-Konzepte werden von Psycholog/innen mit dem Feedback von Betroffenen entwickelt. ",
  },
  {
    id: "05",
    title: "Kostenlos ausprobieren",
    desc: "Um zu schauen, ob dir we.together hilft, hast du die Möglichkeit es kostenlos in 5 Terminen unverbindlich auszuprobieren.",
  },
  {
    id: "06",
    title: "Keine Wartezeit",
    desc: "Auf we.together findest Du zahlreiche Selbsthilfegruppen zu verschiedenen Themen mit täglichen Angeboten.",
  },
];

const Advantage = () => {
  return (
    <div>
      <h2 className="text-[#212529] font-helvetica-neue font-semibold text-2xl md:text-4xl leading-[120%]">
        Deine Vorteile mit we.together
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[32px] pt-8">
        {advantages.map(({ id, title, desc }, index) => {
          return (
            <div
              key={index}
              className="flex max-w-[450px]  gap-[24px] self-stretch p-4"
            >
              <h1 className="pt-4 text-[#A64D79] font-noto-sans-sc font-semibold text-5xl tracking-[0.28px]">
                {id}
              </h1>
              <div className="flex flex-col gap-4 ">
                <h4 className="text-[#212529] font-helvetica-neue font-medium text-xl leading-[120%]">
                  {title}
                </h4>
                <p className=" self-stretch text-[#212529] text-justify font-helvetica-neue font-normal text-base leading-[150%]">
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

export default Advantage;
