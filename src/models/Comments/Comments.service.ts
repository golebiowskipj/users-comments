import { useQuery } from 'react-query';
import { jsonplaceholderApi } from '../../jsonplaceholder-connector/jsonplaceholderApi';
import { mapCommentsResponseToDto } from './Comments.helpers';

const GET_COMMENTS_QUERY_KEY = 'getComments';

const { commentsApi } = jsonplaceholderApi();

const getComments = async () => {
  const data = await commentsApi.getComments();

  return mapCommentsResponseToDto(data);
};

export const useComments = () => {
  const { data, isLoading } = useQuery(GET_COMMENTS_QUERY_KEY, getComments);

  return {
    comments: data,
    isLoading,
  };
};
