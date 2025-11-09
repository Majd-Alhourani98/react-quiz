/**
 * Progress Component
 * Displays quiz progress including progress bar, question number, and current score
 * @param {Object} props - Component props
 * @param {number} props.index - Current question index (0-based)
 * @param {number} props.numQuestions - Total number of questions
 * @param {number} props.points - Current accumulated points
 * @param {number} props.maxPossiblePoints - Maximum possible points
 * @param {number|null} props.answer - Selected answer index (null if not answered)
 */
export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      {/* Progress bar: includes current question if answered */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      {/* Current question number */}
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      {/* Current score display */}
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
