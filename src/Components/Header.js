import React, { useState } from "react";

import { BiMenu } from "react-icons/bi";

import { Link } from "react-router-dom";
import "./Styles/Header.scss";
import { Menu } from "./Menu.js";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const showMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="header">
        <nav className="nav-container">
          <div className="menu">
            <BiMenu className="menu-icon" onClick={showMenu} />
          </div>

          <div className="logo">
            <h1>Etravel</h1>
          </div>

          <div className="right">
            <ul>
              <li>
                <Link to={"/"} className="a">
                  Places
                </Link>
              </li>
              <li>
                <Link to={"/pricing"} className="a">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={"/"} className="a">
                  Collections
                </Link>
              </li>
              <li>
                <Link to={"/"} className="a">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <nav className={openMenu ? "slider active" : "slider"}>
          <ul onClick={showMenu} className="ul-items">
            {Menu.map((item, index) => {
              return (
                <div key={index} className="container">
                  <li className={item.className}>
                    {/* <Link to={item.path}>{item.text}</Link> */}
                    <a href={item.path}>{item.text}</a>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
