import { useEffect, useState } from "react";

import { cavalos } from "../utils/mocks";

import "../styles/ranking.css";

const Ranking = () => {
  const [horseToSearch, setHorseToSearch] = useState(undefined);
  const [horseFound, setHorseFound] = useState();

  function calculate(a) {
    if (a.length < 250) {
      const randomIndex = Math.floor(Math.random() * (a.length - 0)) + 0;
      return a[randomIndex];
    } else {
      const groups = [];
      for (let i = 0; i < 5; i++) {
        groups[i] = [];
      }
      for (let i = 0; i < 25; i += 5) {
        groups[1].push(a[i]);
        groups[2].push(a[i + 1]);
        groups[3].push(a[i + 2]);
        groups[4].push(a[i + 3]);
        groups[5].push(a[i + 4]);
      }

      for (let i = 0; i < 5; i++) {
        groups[i].sort(function (a, b) {
          return a - b;
        });
      }

      const medians = [];

      for (let i = 0; i < 5; i++) {
        medians.push(groups[i][2]);
      }
      medians.sort(function (a, b) {
        return a - b;
      });

      return medians[2];
    }
  }

  function select(a, k) {
    const median = calculate(a);
    const right = [];
    const left = [];
    a.forEach((element) => {
      if (element.volta < median.volta) left.push(element);
      else if (element.volta > median.volta) right.push(element);
    });
    if (left.length === k - 1) return median;
    if (left.length > k - 1) return select(left, k);
    else return select(right, k - left.length - 1);
  }

  function search(posicao) {
    if (posicao > cavalos.length)
      return alert("Posição maior do que o número de cavalos");
    if (posicao === undefined) return alert("Digite uma posição válida");
    const cavalo = select(cavalos, posicao);
    console.log(cavalo);
    setHorseFound(cavalo);
  }

  useEffect(() => {}, [horseToSearch]);
  return (
    <div className="ranking-container">
      <div className="ranking-table">
        <div className="horse-list">
          <h1 className="ranking-title" style={{ marginBottom: "20px" }}>
            Competidores
          </h1>
          {cavalos.map((cavalo, index) => {
            return (
              <div key={index} style={{ display: "flex" }}>
                <span>{cavalo.nome + ": " + cavalo.volta} </span>
              </div>
            );
          })}
        </div>
        <div className="search-horse">
          <h1 className="ranking-title">Escolha a posição</h1>
          <div className="input-div">
            <input
              className="input-search"
              type="number"
              placeholder="Posição"
              onChange={(event) => {
                setHorseToSearch(event.target.value);
              }}
              min={1}
            ></input>
            <button
              className="input-button"
              onClick={() => search(horseToSearch)}
            >
              Buscar
            </button>
          </div>

          {horseFound?.nome !== "" && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {horseFound?.img && (
                <img
                  alt=""
                  width={200}
                  height={200}
                  src={horseFound?.img}
                ></img>
              )}
              {horseFound?.nome && <span>Cavalo: {horseFound?.nome} </span>}
              {horseFound?.volta && <span> Tempo: {horseFound?.volta} s</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
