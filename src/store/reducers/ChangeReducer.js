import {
  SELECTED_CHANGE_SAVE,
  ITEM_CHANGE_SAVE,
} from "../actions/ChangeAction";

const initialState = {
  selected: 0,
  roomItem: {},
  vehicleItem: {},
};

export default function changeReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_CHANGE_SAVE:
      return { ...state, selected: action.selected };
    case ITEM_CHANGE_SAVE:
      if (action.item && state.selected === 0) {
        return { ...state, roomItem: action.item };
      } else if (action.item && state.selected === 1) {
        console.log(123);
        return { ...state, vehicleItem: action.item };
      }
      return state;
    default:
      return state;
  }
}
