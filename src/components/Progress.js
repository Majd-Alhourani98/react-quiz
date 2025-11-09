export default function Progress({
  index,
  numQuestions,
  points,
  maxPosssiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPosssiblePoints}
      </p>
    </header>
  );
}
