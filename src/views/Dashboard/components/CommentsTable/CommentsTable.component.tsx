import React from 'react';
import { useComments, Comment } from '../../../../models';
import { Pagination, Table } from '../../../../ui-kit';

export function CommentsTable() {
  const { comments, isLoading, pagination } = useComments();

  if (isLoading) return <div>skeleton</div>;

  return (
    <>
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
      <Pagination
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        handlePageChange={pagination.setPage}
      />
    </>
  );
}
