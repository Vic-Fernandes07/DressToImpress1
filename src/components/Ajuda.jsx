import React from "react";
import "./Ajuda.css";
import { Link } from "react-router-dom";

//import Italianno from('https://fonts.googleapis.com/css2?family=Italianno&display=swap');

const Ajuda = () => {
  return (
    <>
      <div className="d-block bg-dark text-light conteudo">
        <div className="row divCorpo m-0">
          {/* Perguntas Frequentes */}
          <div className="col w-100 bg-dark">
            <h2 className="texto">
              Perguntas <br />
              Frequentes
            </h2>
          </div>
          {/* Formulario */}
          <div className="col w-100">
            <div className="pergunta">
              <h6>Faça sua pergunta</h6>
              <form>
                <input type="text" className="caixa" />
                <br />
                <input className="botao" type="submit" value="Enviar" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ajuda;
