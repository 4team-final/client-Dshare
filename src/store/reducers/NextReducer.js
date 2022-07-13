import { NEXT_STEP_ONE_TO_TWO, NEXT_STEP_TWO_TO_THREE, NEXT_STEP_THREE_TO_FOUR } from '../actions/NextAction';

const initialData = { ready: false };
const initialState = {
    onetotwo: initialData,
    twotothree: initialData,
    threetofour: initialData
};

export default function NextReducer(state = initialState, action) {
    switch (action.type) {
        case NEXT_STEP_ONE_TO_TWO:
            return {
                ...state,
                onetotwo: {
                    ready: action.ready
                }
            };
        case NEXT_STEP_TWO_TO_THREE:
            return {
                ...state,
                twotothree: {
                    ready: action.ready
                }
            };
        case NEXT_STEP_THREE_TO_FOUR:
            return {
                ...state,
                threetofour: {
                    ready: action.ready
                }
            };
        default:
            return state;
    }
}
