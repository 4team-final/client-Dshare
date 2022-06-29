export const SELECTED_CHANGE_SAVE = "SELECTED_CHANGE_SAVE";
export const ITEM_CHANGE_SAVE = "SELECTED_CHANGE_SAVE";

export const SelectedChangeSave = (selected) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SELECTED_CHANGE_SAVE,
        selected: selected,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const ItemChangeSave = (item) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ITEM_CHANGE_SAVE,
        item: item,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
