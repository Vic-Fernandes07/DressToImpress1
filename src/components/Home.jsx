import React from "react";
import "./Home.css";
import fundo from "../assets/fundo1.jpg";

const Home = () => {
  return (
    <>
    <header>
      <div className="yo">DRESS TO IMPRESS</div>
      <div>
        <header className="header2">
          <div>
        <button className="btn1">Home</button>
      </div>
      <div>
        <button className="btn2">Sobre Nós</button>
      </div>
      <div>
        <button className="btn3">Ajuda</button>
        </div>
</header>
         </div>        
        </header>
     
      <img src={fundo} alt="" />
    </>
  );
};

export default Home;
