import React from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Pricing from "./Components/Pricing";
import Second from "./Components/Second";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
