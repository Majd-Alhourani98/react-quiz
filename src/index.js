// Import React and ReactDOM for rendering
import React from "react";
import ReactDOM from "react-dom/client";
// Import global styles
import "./index.css";
// Import the main App component
import App from "./components/App";

// Get the root DOM element where the app will be mounted
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped in StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
