import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Section from "./Section";
import { Data } from "./Data";
import Second from "./Second";
import Footer from "./Footer";

const MainHeader = () => {
  return (
    <div>
      <Header className="App" />
      <Section slides={Data} />
      <Second />
      <Footer />

      <Outlet />
    </div>
  );
};

export default MainHeader;
