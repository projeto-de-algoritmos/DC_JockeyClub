import "./styles/app.css";
import React from "react";
import { useState } from "react";
import Ranking from "./components/ranking";
import Corrida from "./components/index";

function App() {
  const [mode, setMode] = useState(1);

  return (
    <div>
      <header>
        <span onClick={() => setMode(1)}>menu</span>
      </header>
      {mode === 1 && (
        <div className="main-menu">
          <div className="choose-div">
            <h3> Escolha a função que voce deseja</h3>
            <div className="options">
              <span
                onClick={() => {
                  setMode(2);
                }}
              >
                Verificar a posição dos cavalos
              </span>
              <span
                onClick={() => {
                  setMode(3);
                }}
              >
                Verificar histórico de posições dos cavalos e buscar qual foi
                melhor em qual volta
              </span>
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
