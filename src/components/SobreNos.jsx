import React from "react";
import "./SobreNos.css";
import { Link } from "react-router-dom";
import fundo from "../assets/fundo2.jpg";
import { Header } from "./header/Header";

const SobreNos = () => {
  return (
    <>
      <div className="d-block bg-dark text-light conteudo">
        <div className="row divCorpo m-0">
          {/* Perguntas Frequentes */}
          <div className="col w-100 bg-dark">
            <img className="fundo" src={fundo} alt="" />
          </div>
          <div className="col w-100 bg-dark ">
            <h2 className="txt">Dress To Impress</h2>
            <br />
            <br />
            <p>
              O Dress To Impress é uma plataforma inovadora que combina moda,
              beleza e autoestima, proporcionando uma experiência única e
              personalizada para o usuário. Através de um aplicativo intuitivo e
              um site completo, oferecemos um guarda-roupa virtual que te
              permite explorar, criar e compartilhar seus looks favoritos, além
              de receber dicas e inspirações para se sentir confiante e estilosa
              em qualquer ocasião.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SobreNos;
