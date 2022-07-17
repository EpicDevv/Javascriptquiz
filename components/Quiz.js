import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Question from "./Question";

function Quiz() {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState.currentAnswer)

  return (
    <div className="flex flex-col items-center pt-5 justify-center">
      {quizState.showResults && (
        <div className="flex flex-col mx-5">
          <div className=" text-center bg-cyan-500 px-10 rounded-lg py-5 text-black text-[30px]">Congratulations!</div>
          <div>
            <div className="text-cyan-500 flex flex-col items-center  mt-5 text-center text-[20px]">
              You have completed the quiz.
              <div className="mt-5 mb-5">
                You answered {quizState.correctAnswersCount} out of{" "}
                {quizState.questions.length} questions correctly.
              </div>
              <div className="text-black bg-cyan-500 rounded-lg cursor-pointer  px-5 py-2" onClick={() => dispatch({ type: "RESTART" })}>Restart</div>
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div className="flex flex-col items-center justify-center">
          <div className="text-cyan-500 border  border-cyan-400 rounded-3xl px-5 py-2">
            Question {quizState.currentQuestionIndex + 1} of{" "}
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className={`${quizState.currentAnswer !== '' ? 'animate-bounce text-[30px]' : "text-[15px]"} text-black mb-20 border mt-10 rounded-xl border-cyan-400 bg-cyan-500 cursor-pointer px-5 py-2`}
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
