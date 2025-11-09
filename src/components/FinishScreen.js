import { restart } from "../actions";

export default function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "👑"; // Perfect score - King/Queen
  if (percentage >= 80 && percentage < 100) emoji = "🏆"; // Almost perfect -Trophy;
  if (percentage >= 50 && percentage < 80) emoji = "😎"; // Good job - Cool face;
  if (percentage > 0 && percentage < 50) emoji = "🤔"; // Needs improvement -Thinking;
  if (percentage === 0) emoji = "💤"; // Zero effort - Sleeping

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%)
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch(restart())}
      >
        Restart Quiz
      </button>
    </>
  );
}
