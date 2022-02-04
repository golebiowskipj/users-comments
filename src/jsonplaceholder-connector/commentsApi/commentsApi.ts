import { httpService } from '../../http-client/httpService';
import { GetCommentsResponse } from './commentsApi.types';

export const commentsApi = (baseUrl: string) => {
  const { get } = httpService(baseUrl);

  const getComments = (page = 1, limit = 10): Promise<GetCommentsResponse> => get(`comments?_page=${page}&_limit=${limit}`);

  return {
    getComments,
  };
};
