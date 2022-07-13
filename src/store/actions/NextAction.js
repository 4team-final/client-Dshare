export const NEXT_STEP_ONE_TO_TWO = 'NEXT_STEP_ONE_TO_TWO';
export const NEXT_STEP_TWO_TO_THREE = 'NEXT_STEP_TWO_TO_THREE';
export const NEXT_STEP_THREE_TO_FOUR = 'NEXT_STEP_THREE_TO_FOUR';

export const nextStepOneToTwo = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: NEXT_STEP_ONE_TO_TWO, ready: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const nextStepTwoToThree = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: NEXT_STEP_TWO_TO_THREE, ready: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const nextStepThreeToFour = (data) => {
    return (dispatch) => {
        try {
            dispatch({ type: NEXT_STEP_THREE_TO_FOUR, ready: data });
        } catch (error) {
            console.log(error);
        }
    };
};
