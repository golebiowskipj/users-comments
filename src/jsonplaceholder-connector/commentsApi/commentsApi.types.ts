export interface CommentsResponse {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export type GetCommentsResponse = CommentsResponse[];
