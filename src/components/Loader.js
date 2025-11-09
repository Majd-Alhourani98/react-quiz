/**
 * Loader Component
 * Displays a loading indicator while questions are being fetched
 */
export default function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
