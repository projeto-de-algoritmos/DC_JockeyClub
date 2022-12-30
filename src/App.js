import "./styles/app.css";
import React from "react";
import { useState } from "react";
import Ranking from "./components/ranking";
import Corrida from "./components/aposta";

function App() {
  const [mode, setMode] = useState(1);

  return (
    <div>
      <header className="header-dc">
        <h2>FGA - UnB</h2>
        <h2>Divide and conquer</h2>
        {mode !== 1 && (
          <span style={{ cursor: "pointer" }} onClick={() => setMode(1)}>
            Voltar ao menu principal
          </span>
        )}
        {mode === 1 && <span>Projeto de Algotimos 2/2022</span>}
      </header>
      {mode === 1 && (
        <div className="main-menu">
          <div className="choose-div">
            <h3> Escolha o modo que voce deseja</h3>
            <div className="options">
              <button
                className="option-button"
                onClick={() => {
                  setMode(2);
                }}
              >
                Buscar a posição dos cavalos na última corrida
              </button>
              <button
                className="option-button"
                onClick={() => {
                  setMode(3);
                }}
              >
                Disputa de melhores palpites
              </button>
            </div>
          </div>
        </div>
      )}
      {mode === 2 && <Ranking />}
      {mode === 3 && <Corrida />}
    </div>
  );
}

export default App;
