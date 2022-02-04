import { useQuery } from 'react-query';
import { mapUsersResponseToDto } from './Users.helpers';
import { jsonplaceholderApi } from '../../jsonplaceholder-connector/jsonplaceholderApi';

const GET_USERS_QUERY_KEY = 'getUsers';

const { usersApi } = jsonplaceholderApi();

const getUsers = async () => {
  const data = await usersApi.getUsers();

  return mapUsersResponseToDto(data);
};

export const useUsers = () => {
  const { data, isLoading } = useQuery(GET_USERS_QUERY_KEY, getUsers);

  return {
    users: data,
    isLoading,
  };
};
