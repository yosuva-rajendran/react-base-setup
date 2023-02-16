import { useQuery, useQueryClient } from 'react-query';
import { IUser } from '../pages/AllUsers';
import { apiService } from '../services/apiService';

const getUser = ({ queryKey }: any) => {
  const userId = queryKey[1];
  return apiService.get(`/users/${userId}`);
};

export const useGetUser = (userId: string) => {
  const queryClient = useQueryClient();
  return useQuery(['user', userId], getUser, {
    initialData: () => {
      const users: any = queryClient.getQueryData('all-users');
      const user = users?.data.find((user: IUser) => (user.id = parseInt(userId)));

      if (user) {
        return { data: user };
      } else {
        return undefined;
      }
    }
  });
};
