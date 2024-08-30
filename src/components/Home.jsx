import React from "react";
import "./Home.css";
import fundo from "../assets/fundo1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <div className="yo">DRESS TO IMPRESS</div>
      </header>
      <div>
        <header className="header2">
          <div>
            <button className="btn1">
            <Link to={"/"}>Home</Link>
            </button>
          </div>
          <div>
            <button className="btn2">
              <Link to={"/SobreNos"}>Sobre Nós</Link>
            </button>
          </div>
          <div>
            <button className="btn3">
            <Link to={"/Ajuda"}>Ajuda</Link>
            </button>
          </div>
        </header>
      </div>

      <img src={fundo} alt="" />
    </>
  );
};

export default Home;
