import { User } from './Users.types';
import { UserResponse } from '../../jsonplaceholder-connector';

// eslint-disable-next-line max-len
export const mapUsersResponseToDto = (usersResponse: UserResponse[]): User[] => usersResponse.map((user) => {
  const {
    id, name, username, email, website,
  } = user;

  return {
    id: `${id}`,
    name,
    userName: username,
    email,
    website,
  };
});
