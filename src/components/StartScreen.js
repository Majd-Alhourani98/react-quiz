// Import action creator for starting the quiz
import { start } from "../actions";

/**
 * StartScreen Component
 * Displays the welcome screen before the quiz starts
 * @param {Object} props - Component props
 * @param {number} props.numQuestions - Total number of questions in the quiz
 * @param {Function} props.dispatch - Dispatch function for state updates
 */
function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      {/* Button to start the quiz */}
      <button
        className="btn btn-ui"
        onClick={() => dispatch(start())}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
