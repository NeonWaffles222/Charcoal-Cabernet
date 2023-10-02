import React from "react";
import TopNavigation from "../components/TopNavigationBar";
import Footer from "../components/Footer";
import Twilio from "../components/Twilio";

const HomeRoute = () => {

  return (
    <div>
      <TopNavigation />
      {/* <Twilio/> */}

      <Footer />
    </div>
  );
};

export default HomeRoute;