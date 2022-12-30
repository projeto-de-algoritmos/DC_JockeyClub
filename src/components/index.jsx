import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Slider from "@mui/material/Slider";

import { winner, cavalos } from "../../src/services/winner";

import "../styles/styles.css";

const Corrida = () => {
  const [questions] = useState([
    {
      id: 1,
      label: "Pegasus",
    },
    {
      id: 2,
      label: "Pesadelo",
    },
    {
      id: 3,
      label: "Galã",
    },
    {
      id: 4,
      label: "Fergus",
    },
    {
      id: 5,
      label: "Pé de pano",
    },
    {
      id: 6,
      label: "Atlas",
    },
    {
      id: 7,
      label: "Sansão",
    },
    {
      id: 8,
      label: "Jato",
    },
    {
      id: 9,
      label: "Alazão",
    },
    {
      id: 10,
      label: "Marvin",
    },
  ]);
  const [answers, setAnswers] = useState([
    {
      id: 1,
      label: "Pegasus",
      priority: 5,
    },
    {
      id: 2,
      label: "Pesadelo",
      priority: 5,
    },
    {
      id: 3,
      label: "Galã",
      priority: 5,
    },
    {
      id: 4,
      label: "Fergus",
      priority: 5,
    },
    {
      id: 5,
      label: "Pé de pano",
      priority: 5,
    },
    {
      id: 6,
      label: "Atlas",
      priority: 5,
    },
    {
      id: 7,
      label: "Sansão",
      priority: 5,
    },
    {
      id: 8,
      label: "Jato",
      priority: 5,
    },
    {
      id: 9,
      label: "Alazão",
      priority: 5,
    },
    {
      id: 10,
      label: "Marvin",
      priority: 5,
    },
  ]);
  const [answers2, setAnswers2] = useState([
    {
      id: 1,
      label: "Pegasus",
      priority: 5,
    },
    {
      id: 2,
      label: "Pesadelo",
      priority: 5,
    },
    {
      id: 3,
      label: "Galã",
      priority: 5,
    },
    {
      id: 4,
      label: "Fergus",
      priority: 5,
    },
    {
      id: 5,
      label: "Pé de pano",
      priority: 5,
    },
    {
      id: 6,
      label: "Atlas",
      priority: 5,
    },
    {
      id: 7,
      label: "Sansão",
      priority: 5,
    },
    {
      id: 8,
      label: "Jato",
      priority: 5,
    },
    {
      id: 9,
      label: "Alazão",
      priority: 5,
    },
    {
      id: 10,
      label: "Marvin",
      priority: 5,
    },
  ]);
  const [priorityList, setPriorityList] = useState([1, 2, 3, 4]);
  const [priorityList2, setPriorityList2] = useState([1, 2, 3, 4]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [candidate, setCandidate] = useState(null);
  const [player, setPlayer] = useState(null);

  function handleSubmit() {
    const player = winner(priorityList, priorityList2);

    if (player) {
      setPlayer(player);
    }
    setIsModalOpen(true);
  }

  const reinitialize = () => {
    console.log("reinicializando");
    setIsModalOpen(false);
    answers.map((answer) => {
      answer.priority = 5;
    });
    answers2.map((answer) => {
      answer.priority = 5;
    });
  };

  useEffect(() => {
    const orderedAnswers = answers.sort((a, b) => b.priority - a.priority);
    const updatedAnswers = orderedAnswers.reduce((acc, item) => {
      return [...acc, item.id];
    }, []);
    setPriorityList(updatedAnswers);
    const orderedAnswers2 = answers2.sort((a, b) => b.priority - a.priority);
    const updatedAnswers2 = orderedAnswers2.reduce((acc, item) => {
      return [...acc, item.id];
    }, []);

    setPriorityList2(updatedAnswers2);
  }, [answers, answers2]);

  return (
    <div className="form-page">
      <h1
        style={{
          fontSize: "3.5rem",
          color: "GREEN",
          fontFamily: "LasVegas",
          textAlign: "center",
        }}
      >
        CORRIDA MALUCA
      </h1>
      <p
        style={{
          width: "90%",
          maxWidth: 550,
          textAlign: "center",
        }}
      >
        O jogo a seguir possui um conjunto de 10 cavalos para aposta. Cada um
        possui uma probabilidade de vitória aleatória. O objetivo é escolher,
        para cada cavalo, um valor de 1 a 10 para representar a posição que o
        cavalo chegará na corrida. Vence o jogador que mais se aproximar das
        posições dos cavalos na corrida. <br />
        <br />
      </p>
      <div className="questions-list">
        <div>
          <span style={{ marginRight: "250px" }}>PLAYER 1</span>
          <span>PLAYER 2</span>
        </div>
        {questions.map((question) => {
          const answer = answers.find((item) => item.id === question.id);

          return (
            <div key={question.id} className="question-item">
              <b>
                {question.id} - {question.label}
              </b>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    marginBottom: 0,
                    marginRight: "0.8rem",
                  }}
                >
                  1
                </p>
                <div style={{ width: "300px", marginRight: "5px" }}>
                  <Slider
                    valueLabelDisplay="auto"
                    style={{
                      marginRight: "0.8rem",
                    }}
                    color="primary"
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={5}
                    onChange={(mouseEvent) => {
                      const updatedAnswers = answers.reduce((acc, item) => {
                        if (item.id === question.id) {
                          return [
                            ...acc,
                            {
                              ...item,
                              priority: 10 - mouseEvent.target.value,
                            },
                          ];
                        }

                        return [...acc, item];
                      }, []);

                      setAnswers(updatedAnswers);
                    }}
                  />
                </div>
                <div style={{ width: "300px" }}>
                  <Slider
                    valueLabelDisplay="auto"
                    color="secondary"
                    min={1}
                    max={10}
                    step={1}
                    defaultValue={5}
                    onChange={(mouseEvent) => {
                      const updatedAnswers2 = answers2.reduce((acc, item) => {
                        if (item.id === question.id) {
                          return [
                            ...acc,
                            {
                              ...item,
                              priority: 10 - mouseEvent.target.value,
                            },
                          ];
                        }

                        return [...acc, item];
                      }, []);

                      setAnswers2(updatedAnswers2);
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "1.125rem",
                    marginBottom: 0,
                    marginLeft: "0.8rem",
                  }}
                >
                  10
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="submit-btn"
        style={{
          backgroundColor: "GREEN",
          width: "85%",
        }}
        onClick={() => handleSubmit()}
      >
        GANHADOR
      </button>
      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>GANHADOR</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {player ? (
            <div className="modal-body-container">
              <h2>{player}</h2>
              <div>
                {player != "Empate" ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3508/3508754.png"
                    alt=""
                  />
                ) : (
                  <img src="https://s.dicio.com.br/empate.jpg" alt="" />
                )}
              </div>
              {/* {cavalos[0].priorityList.map((cavalo, index) => {
                return <span>Posição{cavalo}</span>;
              })} */}
            </div>
          ) : (
            <h1>error</h1>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-footer-container">
            <button
              style={{ backgroundColor: "GREEN", color: "white" }}
              onClick={() => reinitialize()}
            >
              JOGAR NOVAMENTE
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Corrida;
