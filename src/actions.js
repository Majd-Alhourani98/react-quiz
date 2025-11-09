/**
 * Action Types
 * Centralized constants for all action types used in the reducer
 */
export const ACTIONS = {
    DATA_RECEIVED: "dataReceived",
    DATA_FAILED: "dataFailed",
    START: "start",
    NEW_ANSWER: "newAnswer",
    NEXT_QUESTION: "nextQuestion",
    FINISH: "finish",
    RESTART: "restart",
    TICK: "tick",
};

/**
 * Action Creators
 * Functions that create action objects for dispatching to the reducer
 * This pattern provides better maintainability and type safety
 */

/**
 * Creates an action for when questions data is successfully received from the API
 * @param {Array} data - The questions array from the API
 * @returns {Object} Action object with type and payload
 */
export const dataReceived = (data) => ({
    type: ACTIONS.DATA_RECEIVED,
    payload: data,
});

/**
 * Creates an action for when fetching questions data fails
 * @returns {Object} Action object with type
 */
export const dataFailed = () => ({
    type: ACTIONS.DATA_FAILED,
});

/**
 * Creates an action to start the quiz
 * @returns {Object} Action object with type
 */
export const start = () => ({
    type: ACTIONS.START,
});

/**
 * Creates an action when user selects an answer
 * @param {number} index - The index of the selected answer option
 * @returns {Object} Action object with type and payload
 */
export const newAnswer = (index) => ({
    type: ACTIONS.NEW_ANSWER,
    payload: index,
});

/**
 * Creates an action to move to the next question
 * @returns {Object} Action object with type
 */
export const nextQuestion = () => ({
    type: ACTIONS.NEXT_QUESTION,
});

/**
 * Creates an action to finish the quiz and show results
 * @returns {Object} Action object with type
 */
export const finish = () => ({
    type: ACTIONS.FINISH,
});

/**
 * Creates an action to restart the quiz
 * @returns {Object} Action object with type
 */
export const restart = () => ({
    type: ACTIONS.RESTART,
});

/**
 * Creates an action to decrement the timer (called every second)
 * @returns {Object} Action object with type
 */
export const tick = () => ({
    type: ACTIONS.TICK,
});

