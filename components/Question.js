import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Answer from "./Answer";

function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div className="max-w-[800px]">
      <div className="mt-20 mb-10 border mx-10 border-cyan-400 bg-cyan-500  rounded-3xl text-[25px] px-10 py-5">
        <h1 className="text-black">{currentQuestion.question}</h1>
      </div>
      <div className="mx-10">
        {quizState.answers.map((answer, index) => (
          <Answer currentAnswer={quizState.currentAnswer} correctAnswer={currentQuestion.correctAnswer} answerText={answer} key={index} index={index} onSelectAnswer={(answerText) => dispatch({type: 'SELECT_ANSWER', payload: answerText}) } />
        ))}
      </div>
    </div> 
  );
}

export default Question;
