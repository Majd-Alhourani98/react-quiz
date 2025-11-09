import { newAnswer } from "../actions";

export default function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option
            ${index === answer ? "answer" : ""}
            ${
              hasAnswer
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
          key={option}
          disabled={hasAnswer}
          onClick={() => dispatch(newAnswer(index))}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
