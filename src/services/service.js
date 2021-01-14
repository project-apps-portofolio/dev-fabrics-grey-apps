import http from '../http-common/http-common';

const getAll = () => {
    return http.get('/');
}

const get = id => {
    return http.get(`/fabric/index/${id}`);
}

const create = data => {
    return http.post("/fabric/create", data);
}

const update = (id, data) => {
    return http.put(`/fabric/index/${id}`, data);
}

const remove = id => {
    return http.delete(`/fabric/index/${id}`);
}

const removeAll = () => {
    return http.delete(`/fabric/index/`);
}

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
  };
