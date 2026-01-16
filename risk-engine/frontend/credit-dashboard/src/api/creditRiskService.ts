import api from './axiosConfig';

export const creditRiskService = {
    getAll: () => api.get('/credit-risks'),
    getById: (id: number) => api.get(`/credit-risks/${id}`),
    create: (data: object) => api.post('/credit-risks', data),
    update: (id: number, data: object) => api.put(`/credit-risks/${id}`, data),
    delete: (id: number) => api.delete(`/credit-risks/${id}`),
};

export default creditRiskService;
