import React from "react";

function Answer({
  answerText,

  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) {
  console.log(currentAnswer);

  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer
    ? "border-green-500 text-green-500 text-[22px] border-4"
    : "border-cyan-400 text-cyan-500 text-[18px] border";
  const wrongAnswerClass = isWrongAnswer ? "border-red-500 text-red-500 border " : "";
  const disabledClass = currentAnswer
    ? "cursor-not-allowed "
    : "cursor-pointer";

  return (
    <div
      disabled
      onClick={() => {
        if (currentAnswer === "") {
          onSelectAnswer(answerText);
        }
      }}
      className={`${correctAnswerClass} ${wrongAnswerClass} ${disabledClass} mt-5 flex rounded-lg  `}
    >
      <pre className="px-5 whitespace-pre-line py-5" suppressHydrationWarning>
        {answerText}
      </pre>
    </div>
  );
}

export default Answer;
