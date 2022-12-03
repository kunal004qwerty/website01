import React, { useState } from "react";
import { Data } from "./Data";
import "./Styles/Section.scss";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Section = ({ slides }) => {
  const [first, setFirst] = useState(0);
  const length = Object.keys(slides).length;
  // const lenght = slides.lenght;

  //for button
  const nextSlide = () => {
    setFirst(first === length - 1 ? 0 : first + 1); // lenght-1 gives last element same as arr.length-1 in JS
  };
  const prevSlide = () => {
    setFirst(first === 0 ? length - 1 : first - 1);
  };

  return (
    <>
      <section id="home">
        <div className="slide">
          <AiOutlineArrowLeft className="back" onClick={prevSlide} />
          <AiOutlineArrowRight className="forward" onClick={nextSlide} />
          {Data.map((item, index) => {
            return (
              <div key={index} className={item.className}>
                <div className={index === first ? "slides active" : "slides"}>
                  {index === first && (
                    <div>
                      <img src={item.image} alt=""></img>
                      <p className="places">{item.text}</p>
                      <p className="status">{item.Status}</p>

                      <div className="buttons">
                        <button>join</button>
                        <button>Discover</button>
                      </div>

                      <div className="bottom">
                        <p>You will get 50% off if its your first purchase ?</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Section;
