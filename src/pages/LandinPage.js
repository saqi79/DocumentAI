import React from "react";
import HomeLand from "../components/HomeLandPage/HomeLand";
import Discover from "../components/DiscoverComponent/Discover";
import Engagement from "../components/Engagement/Engagement";
import Services from "../components/Services/Services";
import Footer from "../components/Footer";

const LandinPage = () => {
  return (
    <div>
      <HomeLand />
      <Engagement />
      <Services />
      <Discover />
      <Footer/>
    </div>
  );
};

export default LandinPage;
