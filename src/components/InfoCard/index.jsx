import React from "react";
import Button from "../Button";

const InfoCard = () => {
  return (
    <div className="my-32 flex flex-col gap-8 ">
      <div>
        <h2 className="text-[var(--text-text-primary,#212529)] font-HelveticaNeue text-2xl font-medium leading-[120%]">
          So funktioniert we.together
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-20">
        <div className="flex justify-center items-center  ">
          <img
            src="/images/groupImages/oldMan.png"
            alt="image of an old man in groupe section "
            className="w-full rounded-[9px] bg-[url(<path-to-image>)] bg-lightgray bg-center bg-cover bg-no-repeat"
          />
        </div>

        <div className="flex flex-col  justify-center items-start  gap-[20px]  ">
          <h4 className="text-[#212529] font-helvetica-neue font-medium text-xl leading-[120%]">
            Finde deine Gruppe
          </h4>
          <p className="text-[#212529] font-helvetica-neue font-normal text-base leading-[150%]">
            Finde aus zahlreichen Gruppen, die passende(n) für Dich und tausche
            Dich online, in regelmäßigen Terminen, mit anderen Betroffene aus,
            die in der gleichen Situation sind wie Du.
          </p>
          <Button intent="secondary"> Gruppe finden</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 md:gap-20">
        <div className="flex flex-col  justify-center items-start  gap-[20px]  ">
          <h4 className="text-[#212529] font-helvetica-neue font-medium text-xl leading-[120%]">
            Starte neue Gruppen{" "}
          </h4>
          <p className="text-[#212529] font-helvetica-neue font-normal text-base leading-[150%]">
            Zu jedem beliebigen Thema hast du die Möglichkeit eine Gruppe zu
            eröffnen und Menschen zusammenzubringen. Erstelle mit unserer Hilfe
            in nur vier Schritten deine Selbsthilfegruppe. We.together ist für
            Gruppen ModeratorInnen komplett kostenlos.
          </p>
          <Button intent="secondary"> Gruppe finden</Button>
        </div>
        <div className="flex justify-center items-center  ">
          <img
            src="/images/groupImages/people.png"
            alt="image of an old man in groupe section "
            className="w-full rounded-[9px] bg-[url(<path-to-image>)] bg-lightgray bg-center bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
