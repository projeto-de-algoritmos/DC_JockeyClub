import "../styles/app.css";
import React from "react";
import { Link } from "react-router-dom";

const App = ({ props }) => {
  return (
    <div>
      <header className="header-dc">
        <h2>FGA - UnB</h2>
        <h2>Divide and conquer</h2>
        {props.mode !== 1 && (
          <Link
            to="/"
            style={{
              cursor: "pointer",
              color: "white",
              textDecoration: "none",
            }}
          >
            Voltar ao menu principal
          </Link>
        )}
        {props.mode === 1 && <span>Projeto de Algotimos 2/2022</span>}
      </header>
      {props.mode === 1 && (
        <div className="main-menu">
          <div className="choose-div">
            <h3> Escolha o modo que voce deseja</h3>
            <div className="options">
              <button className="option-button">
                <Link to="/ranking" className="option-button">
                  Buscar a posição dos cavalos na última corrida
                </Link>
              </button>

              <button className="option-button">
                <Link to="/ranking-history" className="option-button">
                  Buscar a posição dos cavalos em qualquer corrida
                </Link>
              </button>

              <button className="option-button">
                <Link to="/corrida-maluca" className="option-button">
                  Disputa de melhores palpites
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
