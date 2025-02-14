import "./App.css";


import AulaUm from "./aulas/AulaUm";
import AulaDois from "./aulas/AulaDois";
import AulaTres from "./aulas/AulaTres";
import AulaQuatro from "./aulas/AulaQuatro";

import { useState } from "react";

function App() {
  const [cardTrocar, setCardTrocar] = useState(true);
  return (
    <>
      {/*
      <AulaUm />
      <AulaDois />
      <AulaTres />
      */}
      <button
        onClick={() => {
          setCardTrocar(!cardTrocar);
        }}
      >
        Trocar cards
      </button>
      {cardTrocar ? (
        <AulaQuatro cardsAtual="jogadores" />
      ) : (
        <AulaQuatro cardsAtual="cantores" />
      )}
    </>
  );
}

export default App;
