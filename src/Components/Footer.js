import "./Styles/Footer.scss";
import React from "react";

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="carts">
        <ul className="cart-ul">
          <li>
            <Link to="/">Most Asked Questions</Link>
          </li>
          <li>
            <Link to="/">What We Do ?</Link>
          </li>
          <li>
            <Link to="/">History of Company</Link>
          </li>
          <li>
            <Link to="/">Our Clients</Link>
          </li>
          <li>
            <Link to="/">Market Place</Link>
          </li>
        </ul>

        <form className="form-2">
          <label>Your Name</label>
          <input type="text" required />
          <label>Your Email</label>
          <input type="text" required />
          <label>Message</label>
          <textarea required></textarea>
          <button>send</button>
        </form>
      </div>

      <div className="media">
        <Link to="/">
          <BsFacebook />
        </Link>

        <Link to="/">
          <BsGithub />
        </Link>

        <Link to="/">
          <BsInstagram />
        </Link>

        <Link to="/">
          <BsLinkedin />
        </Link>

        <Link to="/">
          <BsTwitter />
        </Link>

        <Link to="/">
          <BsYoutube />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
