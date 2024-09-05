import React from 'react'
import './SobreNos.css'
import { Link } from "react-router-dom";
import fundo from '../assets/fundo2.jpg'

const SobreNos = () => {
  return (
    <>
    <header>
        <div className='titulo'>DRESS TO IMPRESS</div>
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
    
    <img className='fundo' src={fundo} alt="" />
    </>
  )
}

export default SobreNos