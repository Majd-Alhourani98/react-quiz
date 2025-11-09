/**
 * Error Component
 * Displays an error message when questions fail to load from the API
 */
function Error() {
  return (
    <p className="error">
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
}

export default Error;
