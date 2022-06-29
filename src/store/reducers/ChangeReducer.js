import {
  SELECTED_CHANGE_SAVE,
  ITEM_CHANGE_SAVE,
} from "../actions/ChangeAction";

const initialState = {
  selected: 0,
  item: {},
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SELECTED_CHANGE_SAVE:
      return { selected: action.selected };
    case ITEM_CHANGE_SAVE:
      return { item: action.item };
    default:
      return state;
  }
}
