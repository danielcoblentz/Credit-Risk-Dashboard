import api from './axios-config';
import type { CreditRisk } from '@/types';

export const creditRiskService = {
  getAll: () => api.get<CreditRisk[]>('/credit-risks'),
  getById: (id: number) => api.get<CreditRisk>(`/credit-risks/${id}`),
  create: (data: Omit<CreditRisk, 'id' | 'createdAt' | 'updatedAt'>) =>
    api.post<CreditRisk>('/credit-risks', data),
  update: (id: number, data: Partial<CreditRisk>) =>
    api.put<CreditRisk>(`/credit-risks/${id}`, data),
  delete: (id: number) => api.delete(`/credit-risks/${id}`),
};

export default creditRiskService;
