export default function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;
  const isLastQuestion = index === numQuestions - 1;
  const actionType = isLastQuestion ? "finish" : "nextQuestion";
  const label = isLastQuestion ? "Finish" : "Next";
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: actionType })}
    >
      {label}
    </button>
  );
}
