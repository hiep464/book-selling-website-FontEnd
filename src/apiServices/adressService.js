import * as Request from '../utils/request'

export const getCities = async () => {
    const cities = await Request.get(`/address`);
    return cities;
}

export const getDistrics = async (cityId) => {
    const cities = await Request.get(`/address/${cityId}`);
    return cities;
}

export const getWards = async (cityId, districtId) => {
    const cities = await Request.get(`/address/${cityId}/${districtId}`);
    return cities;
}