import http from '../http-common/http-common';

// Customer

const getCustomer = () => {
    return http.get('/customers');
}

const postCustomer = data => {
    return http.post('/customers/store', data);
}

// const update = (id, data) => {
//     return http.put(`/fabric/index/${id}`, data);
// }

const deleteCustomer = id => {
    return http.delete(`/customers/delete/${id}`);
}

// const removeAll = () => {
//     return http.delete(`/fabric/index/`);
// }

export default {
    getCustomer,
    postCustomer,
    deleteCustomer,
  };
