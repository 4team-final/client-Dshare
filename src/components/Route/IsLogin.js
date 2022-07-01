import { getAccess, getRefresh } from '../ApiModules/ApiParts';

export default function IsLogin() {
    const access = getAccess();
    const refresh = getRefresh();
    if (access || refresh) return true;
    return false;
}
