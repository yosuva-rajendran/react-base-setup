import { useMutation, useQueryClient } from 'react-query';
import { IUser } from '../pages/AllUsers';
import { apiService } from '../services/apiService';

export const addUser = (newUser: IUser) => {
  return apiService.post('users', newUser);
};
export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation(addUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('all-users');
    }
  });
};
