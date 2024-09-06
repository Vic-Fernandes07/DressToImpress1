import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import email from "../../assets/email.png";
import logo from "../../assets/logo.png";
import lupa from "../../assets/lupa.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

export const Header = () => {
  return (
    <>
      <div className="d-block bg-dark text-light">
        <div className="row m-0 divMenu m-0">
          {/* Logo */}
          <div className="col m-0 bg-black">
            <img className="logo1" src={logo} alt="logo Dress To Impress" />
            <img className="email" src={email} alt="" />
            dresstoimpress@gmail.com
            <img className="face" src={facebook} alt="" />
            <img className="insta" src={instagram} alt="" />
          </div>
          {/* Menu */}
          <div className="col m-0 bg-black text-light d-flex justify-content-end align-items-end">
            <div className="d-flex">
              <div className="btnMenu m-3">
                <Link className="text-light text-decoration-none" to={"/"}>
                  Home
                </Link>
              </div>
              <div className="btnMenu m-3">
                <Link
                  className="text-light text-decoration-none"
                  to={"/SobreNos"}
                >
                  Sobre Nós
                </Link>
              </div>
              <div className="btnMenu m-3">
                <Link className="text-light text-decoration-none" to={"/Ajuda"}>
                  Ajuda
                </Link>
              </div>
              <div>
                <img className="lupa" src={lupa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
