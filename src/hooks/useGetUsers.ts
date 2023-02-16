import { useQuery } from 'react-query';
import { apiService } from '../services/apiService';

const getAllUsers = () => {
  return apiService.get('users');
};

export const useGetUsers = () => {
  return useQuery('all-users', getAllUsers);
};
