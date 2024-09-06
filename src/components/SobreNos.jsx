import React from "react";
import "./SobreNos.css";
import { Link } from "react-router-dom";
import fundo from "../assets/fundo2.jpg";

const SobreNos = () => {
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
            <img className="fundo" src={fundo} alt="" />
          </div>
          <div className="col w-100 bg-dark ">
            <h2 className="txt">
            Dress To Impress</h2>
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
