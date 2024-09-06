import React from "react";
import "./Home.css";
import fundo from "../assets/fundo1.jpg";
import { Link } from "react-router-dom";
import { Header } from "./header/Header";

const Home = () => {
  return (
    <>
      <div className="d-block bg-dark text-light conteudo">
        <div className="row divCorpo m-0">
          {/* Perguntas Frequentes */}
          <div className="col ps-0 w-100 bg-dark overflow-hidden">
            <img src={fundo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
