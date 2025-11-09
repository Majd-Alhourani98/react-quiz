// Import Options component for displaying answer choices
import Options from "./Options";

/**
 * Question Component
 * Displays the current question and answer options
 * @param {Object} props - Component props
 * @param {Object} props.question - Question object with text, options, and correct answer
 * @param {Function} props.dispatch - Dispatch function for state updates
 * @param {number|null} props.answer - Currently selected answer index (null if not answered)
 */
export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      {/* Question text */}
      <h4>{question.question}</h4>
      {/* Answer options component */}
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
