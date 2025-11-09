# React Quiz Application

A modern, interactive quiz application built with React that tests your knowledge of React concepts. The application features a timer, score tracking, and a beautiful user interface.

## Features

- **Interactive Quiz**: Answer multiple-choice questions about React
- **Timer**: Each question has a time limit to add challenge
- **Score Tracking**: Track your points and highscore
- **Progress Indicator**: Visual progress bar showing quiz completion
- **Action Creator Pattern**: Clean state management using action creators
- **Responsive Design**: Modern and intuitive user interface

## Tech Stack

- **React 19.2.0**: Modern React with hooks
- **useReducer**: For centralized state management
- **JSON Server**: Mock API server for questions data
- **CSS3**: Styling and animations

## Project Structure

```
react-quiz/
├── public/
│   ├── index.html
│   └── logo512.png
├── src/
│   ├── actions.js          # Action creators and action types
│   ├── components/
│   │   ├── App.js          # Main application component with state management
│   │   ├── Header.js       # Application header
│   │   ├── Main.js         # Main content wrapper
│   │   ├── Loader.js       # Loading indicator
│   │   ├── Error.js        # Error message component
│   │   ├── StartScreen.js  # Initial quiz start screen
│   │   ├── Question.js     # Question display component
│   │   ├── Options.js      # Answer options component
│   │   ├── Progress.js     # Progress bar and stats
│   │   ├── NextButton.js   # Next/Finish button
│   │   ├── Timer.js        # Countdown timer
│   │   ├── FinishScreen.js # Results screen
│   │   └── Footer.js       # Footer wrapper
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── data/
│   └── questions.json      # Quiz questions data
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-quiz
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

1. Start the JSON server (in a separate terminal):
```bash
npm run server
```
This will start the mock API server on `http://localhost:5000`

2. Start the React development server:
```bash
npm start
```
The application will open in your browser at `http://localhost:3000`

## How It Works

### State Management

The application uses React's `useReducer` hook for state management with an action creator pattern:

- **Actions**: Defined in `src/actions.js` with action types and creator functions
- **Reducer**: Handles state transitions based on action types
- **State**: Manages quiz questions, current question index, user answers, points, timer, and game status

### Application Flow

1. **Loading**: Fetches questions from the API
2. **Ready**: Displays start screen with question count
3. **Active**: Quiz in progress with timer and questions
4. **Finished**: Shows results and allows restart

### Key Components

- **App.js**: Main component managing global state and rendering appropriate screens
- **Question.js**: Displays current question and answer options
- **Options.js**: Renders clickable answer buttons with visual feedback
- **Timer.js**: Countdown timer that automatically finishes quiz when time runs out
- **Progress.js**: Shows current question number and accumulated points
- **FinishScreen.js**: Displays final score with emoji feedback based on performance

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run server`: Starts the JSON server for questions API

## Action Creators

The application uses action creators for all state updates:

- `dataReceived(data)`: Sets questions data when fetched successfully
- `dataFailed()`: Handles API fetch errors
- `start()`: Begins the quiz
- `newAnswer(index)`: Records user's answer selection
- `nextQuestion()`: Moves to the next question
- `finish()`: Ends the quiz and calculates final score
- `restart()`: Resets the quiz to start a new game
- `tick()`: Decrements the timer each second

## Customization

### Adding Questions

Edit `data/questions.json` to add or modify quiz questions. Each question should have:
- `question`: The question text
- `options`: Array of answer options
- `correctOption`: Index of the correct answer (0-based)
- `points`: Points awarded for correct answer

### Modifying Timer

Change `SECS_PER_QUESTION` constant in `App.js` to adjust time per question.

## License

This project is open source and available under the MIT License.
