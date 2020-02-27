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
    <div class="flex flex-col bg-blue-400 justify-center content-center items-center w-full lg:w-3/4 mx-auto my-auto h-full">
      <div class="w-full h-12">
        <p class="text-3xl text-center">Practica las tablas del {table.a}</p>
      </div>

      {/* <div class="flex flex-wrap -mx-3 mb-6"> */}
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Elige la tabla
        </label>
        <div className="relative">
          <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={updateGame}>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
      </div>
      <CardContainer a={table.a} b={table.b} answers={options} selectAnswer={pickAnswer}/>
      {won &&
        <div className="win-container">
          ¡Correcto!, quieres jugar de nuevo?
          <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>
          Reiniciar
          </button>
        </div>
      }
      Record {points}

      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
};

export default App;
