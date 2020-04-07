import React, { useState } from "react";
import CardContainer from "./components/CardContainer";
import { random, updateOptions } from "./utils/general";

const App = () => {
  const [table, setTable] = useState({
    a: 2,
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
    <div className="flex flex-col bg-blue-400 justify-center content-center items-center w-full lg:w-3/4 mx-auto my-auto h-screen">
      <div className="w-full h-12">
        <p className="text-3xl text-center">Practica las tablas del {table.a}</p>
      </div>

      {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
          Elige la tabla
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={updateGame}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
      {points > 0 &&
        <div className="text-2xl font-bold text-orange-300">
          Record {points}
        </div>
      }
      {won &&
        <div className="win-container flex flex-col justify-center text-center">
          <p> ¡Correcto! </p>
          <p>¿Quiéres jugar de nuevo?</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
            Siguiente
          </button>
        </div>
      }
      <CardContainer a={table.a} b={table.b} answers={options} selectAnswer={pickAnswer} won={won}/>

      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
};

export default App;
