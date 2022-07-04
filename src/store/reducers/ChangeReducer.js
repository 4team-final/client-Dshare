import { SELECTED_CHANGE_SAVE, ITEM_CHANGE_SAVE, LIST_ITEM_ROOM_DELETE, LIST_ITEM_VEHICLE_DELETE } from '../actions/ChangeAction';

const initialState = {
    selected: 0,
    roomItem: {},
    vehicleItem: {},
    deleteRoomId: -1,
    deleteVehicleId: -1
};

export default function changeReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_CHANGE_SAVE:
            return { ...state, selected: action.selected };
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
