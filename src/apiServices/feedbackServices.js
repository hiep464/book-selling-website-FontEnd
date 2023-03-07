import * as Request from '../utils/request'

export const getAll = async (bookId) => {
    const res = Request.get('/feedback', {params:{bookId}});
    return res;
}