import React, { useState } from "react";
import CardContainer from "./components/CardContainer";
import { random, updateOptions } from "./utils/general";

const App = () => {
  const [table, setTable] = useState({
    a: 5,
    b: random()
  });
  const [answer, setAnswer] = useState(table.a * table.b);
  const [points, setPoints] = useState(0);
  const [won, setWon] = useState(false);

  const [options, setAnswers] = useState(updateOptions(answer));

  const pickAnswer = (option) => {
    if (option === answer) {
      setWon(true);
      setPoints(points + 1);
    } else {
      setPoints(0);
    }
  };

  const resetGame = () => {
    const b = random();
    setWon(false);
    setTable({
      ...table,
      b
    });
    setAnswer(table.a * b);
    setAnswers(updateOptions(table.a * b));
  };

  const updateGame = (e) => {
    const b = random();
    setTable({
      a: e.target.value,
      b
    })
    setAnswer(e.target.value * b);
    setAnswers(updateOptions(e.target.value * b));
  }

  return (
    <div className="container">
      Practica las tablas del {table.a}
      <select name="table" onChange={updateGame}>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <CardContainer a={table.a} b={table.b} answers={options} selectAnswer={pickAnswer}/>
      {won &&
        <div className="win-container">
          ¡Correcto!, quieres jugar de nuevo?
          <button onClick={resetGame}>Reiniciar</button>
        </div>
      }
      Record {points}
    </div>
  );
};

export default App;
