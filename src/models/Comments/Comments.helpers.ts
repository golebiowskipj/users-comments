import { v4 as uuid } from 'uuid';
import { CommentResponse } from '../../jsonplaceholder-connector';
import { Comment } from './Comments.types';

export const mapCommentsResponseToDto = (
  commentsResponse: CommentResponse[],
): Comment[] => commentsResponse.map((comment) => {
  const {
    body, email, name, postId,
  } = comment;
  return {
    id: uuid(), postId: `${postId}`, name, body, email,
  };
});
