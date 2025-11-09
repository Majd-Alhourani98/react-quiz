// Import action creator for restarting the quiz
import { restart } from "../actions";

/**
 * FinishScreen Component
 * Displays the final results after completing the quiz
 * Shows score, percentage, emoji feedback, and restart button
 * @param {Object} props - Component props
 * @param {number} props.points - Final score achieved
 * @param {number} props.maxPossiblePoints - Maximum possible points
 * @param {Function} props.dispatch - Dispatch function for state updates
 */
export default function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  // Calculate percentage score
  const percentage = (points / maxPossiblePoints) * 100;

  // Determine emoji based on performance percentage
  let emoji;
  if (percentage === 100) emoji = "👑"; // Perfect score - King/Queen
  if (percentage >= 80 && percentage < 100) emoji = "🏆"; // Almost perfect - Trophy
  if (percentage >= 50 && percentage < 80) emoji = "😎"; // Good job - Cool face
  if (percentage > 0 && percentage < 50) emoji = "🤔"; // Needs improvement - Thinking
  if (percentage === 0) emoji = "💤"; // Zero effort - Sleeping

  return (
    <>
      {/* Display results with emoji, score, and percentage */}
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>

      {/* Button to restart the quiz */}
      <button
        className="btn btn-ui"
        onClick={() => dispatch(restart())}
      >
        Restart Quiz
      </button>
    </>
  );
}
