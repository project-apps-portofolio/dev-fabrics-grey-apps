import http from '../http-common/http-common';

const getAll = () => {
    return http.get('/fabric');
}

const get = id => {
    return http.get(`/fabric/${id}`);
}

const create = data => {
    return http.post("/fabric/store", data);
}


// Machine

const getMachine = () => {
    return http.get('/machine');
}

const createMachine = data => {
    return http.post('/machine/store', data);
}


// Schedule

const getSchedule = () => {
    return http.get('/schedules');
}

const getIdSchedule = id => {
    return http.get(`/schedules/show/${id}`);
}

// const update = (id, data) => {
//     return http.put(`/fabric/index/${id}`, data);
// }

// const remove = id => {
//     return http.delete(`/fabric/index/${id}`);
// }

// const removeAll = () => {
//     return http.delete(`/fabric/index/`);
// }

export default {
    getAll,
    get,
    create,
    getMachine,
    createMachine,
    getSchedule,
    getIdSchedule,
    // update,
    // remove,
    // removeAll,
  };
