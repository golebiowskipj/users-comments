import { v4 as uuid } from 'uuid';
import { User } from './Users.types';
import { UserResponse } from '../../jsonplaceholder-connector';

// eslint-disable-next-line max-len
export const mapUsersResponseToDto = (usersResponse: UserResponse[]): User[] => usersResponse.map((user) => {
  const {
    name, username, email, website,
  } = user;

  return {
    id: uuid(),
    name,
    userName: username,
    email,
    website,
  };
});
