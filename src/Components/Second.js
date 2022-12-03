import "./Styles/Second.scss";
import React from "react";
import small from "../Assets/small-paris.jpg";
import barca from "../Assets/barcelona.jpg";
import moscow from "../Assets/moscow.jpg";
import newyork from "../Assets/newyork.jpg";

const Second = () => {
  return (
    <section className="second" id="second">
      <h1>Gallery</h1>
      <div className="images">
        <div>
          <img src={small} alt="paris" />
          <p>Paris, France 2011</p>
        </div>
        <div>
          <img src={barca} alt="paris" />
          <p>Barcelona, Spain 2019</p>
        </div>
        <div>
          <img src={moscow} alt="paris" />
          <p>Moscow, Russia 2017</p>
        </div>
        <div>
          <img src={newyork} alt="paris" className="new-york" />
          <p>NYC, USA 2020</p>
        </div>
      </div>
    </section>
  );
};

export default Second;
