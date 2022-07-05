import dshareAPI from '../components/ApiModules/index';

export const selectByRoomDateCalendar = async () => {
    return await dshareAPI('emp/room/reservation/all');
};
export const selectByVehicleDateCalendar = async () => {
    return await dshareAPI('emp/vehicle/list/reservation');
};
export const selectByVehicleNonReservation = async () => {
    return await dshareAPI('emp/vehicle/list/stock');
};
export const findAllByVehicle = async () => {
    return await dshareAPI('emp/vehicle/list/vehicle/all');
};
export const findAllByRoom = async () => {
    return await dshareAPI('emp/room/list/meeting/room/all');
};
export const selectByEmpNoAPI = async () => {
    return await dshareAPI('emp/ws/validation');
};
