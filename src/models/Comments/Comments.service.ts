import { useState } from 'react';
import { useQuery } from 'react-query';
import { jsonplaceholderApi } from '../../jsonplaceholder-connector/jsonplaceholderApi';
import { calculatePages } from '../utils/calculatePages.util';
import { mapCommentsResponseToDto } from './Comments.helpers';

const GET_COMMENTS_QUERY_KEY = 'getComments';
const STALE_TIME = 1000 * 60 * 60; // 1 hour in ms
const COMMENTS_PER_PAGE = 10;

const { commentsApi } = jsonplaceholderApi();

const getComments = async (page: number, limit: number) => {
  const data = await commentsApi.getComments(page, limit);

  return {
    comments: mapCommentsResponseToDto(data.data),
    totalCount: data.totalCount,
  };
};

export const useComments = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    [GET_COMMENTS_QUERY_KEY, page],
    () => getComments(page, COMMENTS_PER_PAGE),
    { keepPreviousData: true, staleTime: STALE_TIME },
  );

  return {
    comments: data?.comments,
    pagination: {
      setPage,
      currentPage: page,
      totalPages: data?.totalCount
        ? calculatePages(data.totalCount, COMMENTS_PER_PAGE)
        : 1,
    },
    isLoading,
  };
};
