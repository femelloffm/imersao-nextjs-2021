import React from 'react';

import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';

export default function QuizPage() {
  const currentQuestion = db.questions[0];
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Widget>
        <Widget.Header>
          <h1>Pergunta 1 de 5</h1>
        </Widget.Header>
        <Widget.Content>
          <img src={currentQuestion.image} alt="Imagem da primeira pergunta" />
          <h1>{currentQuestion.title}</h1>
          <p>{currentQuestion.description}</p>
          <form onSubmit={function (infosDoEvento) {
            infosDoEvento.preventDefault();
            console.log('submit da resposta realizado');
          }}
          >
            <button type="button">
              {currentQuestion.alternatives[0]}
            </button>
            <button type="submit" disabled={false}>
              Confirmar
            </button>
          </form>
        </Widget.Content>
      </Widget>
    </QuizBackground>
  );
}
