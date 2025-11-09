// React hooks for state management and side effects
import { useEffect, useReducer } from "react";
// UI components
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
// Action creators for state updates
import { ACTIONS, dataReceived, dataFailed } from "../actions";

/**
 * Initial state for the quiz application
 * Defines the starting values for all state properties
 */
const initialState = {
  questions: [], // Array of quiz questions loaded from API
  status: "loading", // Current state: 'loading', 'error', 'ready', 'active', 'finished'
  index: 0, // Current question index (0-based)
  answer: null, // Selected answer index (null if not answered)
  points: 0, // Current score
  highscore: 0, // Best score achieved
  secondsRemaining: null, // Time remaining in seconds
};

// Time allocated per question in seconds
const SECS_PER_QUESTION = 30;

// Destructure action types for use in reducer
const {
  DATA_RECEIVED,
  DATA_FAILED,
  START,
  NEW_ANSWER,
  NEXT_QUESTION,
  FINISH,
  RESTART,
  TICK,
} = ACTIONS;

/**
 * Reducer function
 * Handles all state transitions based on action types
 * @param {Object} state - Current application state
 * @param {Object} action - Action object with type and optional payload
 * @returns {Object} New state object
 */
function reducer(state, action) {
  switch (action.type) {
    // Questions data successfully loaded from API
    case DATA_RECEIVED:
      return { ...state, questions: action.payload, status: "ready" };

    // Failed to load questions from API
    case DATA_FAILED:
      return { ...state, status: "error" };

    // Start the quiz - set status to active and initialize timer
    case START:
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    // User selected an answer - update answer and calculate points
    case NEW_ANSWER: {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        // Add points if answer is correct, otherwise keep current points
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }

    // Move to the next question and reset answer selection
    case NEXT_QUESTION:
      return { ...state, index: state.index + 1, answer: null };

    // Finish the quiz - update status and highscore if needed
    case FINISH:
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    // Restart the quiz - reset to initial state but keep questions and highscore
    case RESTART:
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
        highscore: state.highscore,
      };

    // Timer tick - decrement seconds and finish if time runs out
    case TICK:
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    // Unknown action type - throw error for debugging
    default:
      throw new Error("Unknown action");
  }
}

/**
 * Main App Component
 * Manages global state and renders appropriate screens based on quiz status
 */
export default function App() {
  // Use reducer hook for state management
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Fetch questions from API on component mount
  useEffect(function () {
    fetch("http://localhost:5000/questions")
      .then((response) => response.json())
      .then((data) => dispatch(dataReceived(data)))
      .catch((err) => dispatch(dataFailed()));
  }, []);

  // Calculate total number of questions
  const numQuestions = questions.length;
  // Calculate maximum possible points (sum of all question points)
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <div className="app">
      {/* Application header with logo and title */}
      <Header />
      <Main>
        {/* Show loader while fetching questions */}
        {status === "loading" && <Loader />}
        
        {/* Show error message if API fetch fails */}
        {status === "error" && <Error />}
        
        {/* Show start screen when questions are loaded and ready */}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        
        {/* Show quiz interface when quiz is active */}
        {status === "active" && (
          <>
            {/* Progress bar and statistics */}
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            {/* Current question and answer options */}
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />

            {/* Footer with timer and next button */}
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}

        {/* Show results screen when quiz is finished */}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
