import {
    SELECTED_CHANGE_SAVE,
    SELECTED_CHANGE_SAVE2,
    ITEM_CHANGE_SAVE,
    LIST_ITEM_ROOM_DELETE,
    LIST_ITEM_VEHICLE_DELETE
} from '../actions/ChangeAction';

const initialState = {
    selected: 0,
    selected2: 1,
    roomItem: {},
    vehicleItem: {},
    deleteRoomId: -1,
    deleteVehicleId: -1
};

export default function changeReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CHANGE_SAVE:
            return { ...state, selected: action.selected };
        case SELECTED_CHANGE_SAVE2:
            console.log(action.selected2);
            return { ...state, selected2: action.selected2 };
        case ITEM_CHANGE_SAVE:
            if (action.item && state.selected === 0) {
                return { ...state, roomItem: action.item };
            } else if (action.item && state.selected === 1) {
                return { ...state, vehicleItem: action.item };
            }
            return state;
        case LIST_ITEM_ROOM_DELETE:
            if (action.deleteId > 0) {
                return { ...state, deleteRoomId: action.deleteId };
            }
            return state;
        case LIST_ITEM_VEHICLE_DELETE:
            if (action.deleteId > 0) {
                return { ...state, deleteVehicleId: action.deleteId };
            }
            return state;
        default:
            return state;
    }
}
