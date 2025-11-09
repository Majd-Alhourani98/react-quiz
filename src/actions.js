// Action types
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

// Action creators
export const dataReceived = (data) => ({
    type: ACTIONS.DATA_RECEIVED,
    payload: data,
});

export const dataFailed = () => ({
    type: ACTIONS.DATA_FAILED,
});

export const start = () => ({
    type: ACTIONS.START,
});

export const newAnswer = (index) => ({
    type: ACTIONS.NEW_ANSWER,
    payload: index,
});

export const nextQuestion = () => ({
    type: ACTIONS.NEXT_QUESTION,
});

export const finish = () => ({
    type: ACTIONS.FINISH,
});

export const restart = () => ({
    type: ACTIONS.RESTART,
});

export const tick = () => ({
    type: ACTIONS.TICK,
});

