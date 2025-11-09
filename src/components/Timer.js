import { useEffect } from "react";
import { tick } from "../actions";

export default function Timer({ dispatch, secondsRemaining }) {
  console.log(secondsRemaining);
  const mins = Math.floor((secondsRemaining ?? 0) / 60);
  const seconds = (secondsRemaining ?? 0) % 60;

  const pad = (n) => String(n).padStart(2, "0");

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(tick());
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {pad(mins)}:{pad(seconds)}
    </div>
  );
}
