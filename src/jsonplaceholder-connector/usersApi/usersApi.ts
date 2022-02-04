import { httpService } from '../../http-client/httpService';
import { GetUsersResponse } from './usersApi.types';

export const usersApi = (baseUrl: string) => {
  const { get } = httpService(baseUrl);

  const getUsers = (): Promise<GetUsersResponse> => get('users');

  return {
    getUsers,
  };
};
