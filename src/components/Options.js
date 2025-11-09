// Import action creator for recording user's answer
import { newAnswer } from "../actions";

/**
 * Options Component
 * Renders clickable answer option buttons with visual feedback
 * @param {Object} props - Component props
 * @param {Object} props.question - Question object containing options and correct answer
 * @param {Function} props.dispatch - Dispatch function for state updates
 * @param {number|null} props.answer - Currently selected answer index (null if not answered)
 */
export default function Options({ question, dispatch, answer }) {
  // Check if user has already selected an answer
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {/* Map through each option and create a button */}
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
          // Disable buttons after answer is selected
          disabled={hasAnswer}
          // Dispatch action when option is clicked
          onClick={() => dispatch(newAnswer(index))}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
