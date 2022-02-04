import { commentsApi } from './commentsApi/commentsApi';
import { usersApi } from './usersApi/usersApi';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // consider moving to .env in production app

export const jsonplaceholderApi = () => ({
  usersApi: usersApi(BASE_URL),
  commentsApi: commentsApi(BASE_URL),
});
