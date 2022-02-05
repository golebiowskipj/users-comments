import React from 'react';
import { useComments, Comment } from '../../../../models';
import { Table } from '../../../../ui-kit';

export function CommentsTable() {
  const { comments, isLoading } = useComments();

  if (isLoading) return <div>skeleton</div>;

  return (
    <Table<Comment>
      columns={[
        { id: 'id', name: 'ID' },
        { id: 'postId', name: 'Post Id' },
        { id: 'name', name: 'NAME' },
        { id: 'body', name: 'BODY' },
        { id: 'email', name: 'EMAIL' },
      ]}
      data={comments || []}
      title="Comments"
    />
  );
}
