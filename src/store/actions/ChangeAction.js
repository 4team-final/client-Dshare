export const SELECTED_CHANGE_SAVE = 'SELECTED_CHANGE_SAVE';
export const ITEM_CHANGE_SAVE = 'ITEM_CHANGE_SAVE';
export const LIST_ITEM_ROOM_DELETE = 'LIST_ITEM_ROOM_DELETE';
export const LIST_ITEM_VEHICLE_DELETE = 'LIST_ITEM_VEHICLE_DELETE';

//오윤성
export const PROFILE_CHANGE_SAVE = 'PROFILE_CHANGE_SAVE';
export const GO_ADMIN_PAGE = 'GO_ADMIN_PAGE';

export const SelectedChangeSave = (selected) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SELECTED_CHANGE_SAVE,
                selected: selected
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const ItemChangeSave = (item) => {
    return async (dispatch) => {
        try {
            console.log(item);
            dispatch({
                type: ITEM_CHANGE_SAVE,
                item: item
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const RoomItemDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LIST_ITEM_ROOM_DELETE,
                deleteId: id
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const VehicleItemDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LIST_ITEM_VEHICLE_DELETE,
                deleteId: id
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const ProfileChangeSave = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PROFILE_CHANGE_SAVE,
                data: data
            });
        } catch (err) {
            console.log(err);
        }
    };
};
export const goAdminPage = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: GO_ADMIN_PAGE
            });
        } catch (err) {
            console.log(err);
        }
    };
};
