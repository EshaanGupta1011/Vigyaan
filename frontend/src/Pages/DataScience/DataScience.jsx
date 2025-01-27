import React from "react";
import DSHero from "./DSComponents/DSHero/DSHero";
import DSServices from "./DSComponents/DSServices/DSServices";
import DSDivider from "./DSComponents/DSDivider/DSDivider";
import Navbar from "../../Components/Navbar/Navbar";
import DSSelf from "./DSComponents/DSSelf/DSSelf";

const DataScience = () => {
  return (
    <div>
      <Navbar />
      <DSHero />
      <DSServices />
      <DSDivider />
      <DSSelf />
    </div>
  );
};

export default DataScience;
