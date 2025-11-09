// Import action creators for navigation
import { finish, nextQuestion } from "../actions";

/**
 * NextButton Component
 * Displays a button to move to the next question or finish the quiz
 * Only visible after user has selected an answer
 * @param {Object} props - Component props
 * @param {Function} props.dispatch - Dispatch function for state updates
 * @param {number|null} props.answer - Currently selected answer (null if not answered)
 * @param {number} props.numQuestions - Total number of questions
 * @param {number} props.index - Current question index (0-based)
 */
export default function NextButton({ dispatch, answer, numQuestions, index }) {
  // Don't render button if no answer has been selected
  if (answer === null) return null;

  // Check if this is the last question
  const isLastQuestion = index === numQuestions - 1;
  // Set button label based on question position
  const label = isLastQuestion ? "Finish" : "Next";

  return (
    <button
      className="btn btn-ui"
      // Dispatch finish action on last question, nextQuestion otherwise
      onClick={() => dispatch(isLastQuestion ? finish() : nextQuestion())}
    >
      {label}
    </button>
  );
}
