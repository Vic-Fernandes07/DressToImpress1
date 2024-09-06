import React from "react";
import "./Home.css";
import fundo from "../assets/fundo1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="d-block bg-dark text-light conteudo">
        <div className="row m-0 divMenu m-0">
          {/* Logo */}
          <div className="col m-0 bg-black">Logo/redes sociais</div>
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
            </div>
          </div>
        </div>

        <div className="row divCorpo m-0">
          {/* Perguntas Frequentes */}
          <div className="col w-100 bg-dark">
            <img src={fundo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
