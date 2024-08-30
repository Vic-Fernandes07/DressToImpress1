import React from 'react'
import './Ajuda.css'
import { Link } from "react-router-dom";

const Ajuda = () => {
  return (
    <>
    <header>
        <div>DRESS TO IMPRESS</div>
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
    
    </>
  )
}

export default Ajuda