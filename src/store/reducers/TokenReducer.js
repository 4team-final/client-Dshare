import { SET_TOKEN } from "../actions/UserAction";

const initialState = {
  authenticated: false,
  token: null,
};
export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        authenticated: action.result,
        token: action.token,
      };
    default:
      return state;
  }
}
