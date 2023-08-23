import React from "react";
import Layout from "../../Layout";
import UberUnsBanner from "../../components/UberUnsBanner";
import MissionSection from "../../components/MissionSection";
import ContactUs from "../../components/ContactUs";

const UberUns = () => {
  return (
    <Layout>
      <UberUnsBanner />
      <MissionSection />
      <ContactUs />
    </Layout>
  );
};

export default UberUns;
