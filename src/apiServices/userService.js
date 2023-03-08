import * as Request from '../utils/request'

export const postInfo = async (data) => {
    const res = Request.post('/user', data);
    return res;
}