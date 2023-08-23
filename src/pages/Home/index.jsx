import React from "react";
import Layout from "../../Layout";
import HomeBanner from "../../components/HomeBanner";
import Partners from "../../components/Partners";
import TextBlock from "../../components/TextBlock";
import Advantage from "../../components/Advantage";
import PriceInformation from "../../components/PriceInformation";
import GroupCards from "../../components/GroupCards";
import HelpCard from "../../components/HelpCard";
import InfoCard from "../../components/InfoCard";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <Partners />
      <TextBlock />
      <Advantage />
      <InfoCard />
      <PriceInformation />
      <GroupCards />
      <HelpCard />
    </Layout>
  );
};

export default Home;
