import dshareAPI from '../components/ApiModules/index';

export const selectVehicleDateCalendar = async () => {
    return await dshareAPI();
};
export const selectRoomDateCalendar = async () => {
    return await dshareAPI('emp/room/reservation/all');
};
