import { CommentResponse } from '../../jsonplaceholder-connector';
import { Comment } from './Comments.types';

export const mapCommentsResponseToDto = (
  commentsResponse: CommentResponse[],
): Comment[] => commentsResponse.map((comment) => {
  const {
    body, email, id, name, postId,
  } = comment;
  return {
    id: `${id}`, postId: `${postId}`, name, body, email,
  };
});
