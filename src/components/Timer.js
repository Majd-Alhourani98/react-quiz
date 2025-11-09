// React hook for side effects
import { useEffect } from "react";
// Import action creator for timer tick
import { tick } from "../actions";

/**
 * Timer Component
 * Displays a countdown timer and dispatches tick actions every second
 * @param {Object} props - Component props
 * @param {Function} props.dispatch - Dispatch function for state updates
 * @param {number|null} props.secondsRemaining - Time remaining in seconds (null if not started)
 */
export default function Timer({ dispatch, secondsRemaining }) {
  console.log(secondsRemaining);
  
  // Calculate minutes and seconds from total seconds
  const mins = Math.floor((secondsRemaining ?? 0) / 60);
  const seconds = (secondsRemaining ?? 0) % 60;

  // Helper function to pad numbers with leading zeros
  const pad = (n) => String(n).padStart(2, "0");

  // Set up interval to dispatch tick action every second
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(tick());
    }, 1000);
    // Cleanup: clear interval on unmount
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {/* Display formatted time as MM:SS */}
      {pad(mins)}:{pad(seconds)}
    </div>
  );
}
