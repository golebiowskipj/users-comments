import React, { useMemo } from 'react';
import { useComments, Comment } from '../../../../models';
import { Pagination, Table } from '../../../../ui-kit';

export function CommentsTable() {
  const { comments, isLoading, pagination } = useComments();

  const tableComments = useMemo(
    () => (comments ? comments.map(({ id, ...restComment }) => restComment) : []),
    [comments],
  );

  if (isLoading) return <div>skeleton</div>;

  if (tableComments.length === 0) {
    return <div>Sorry, there are no comments available</div>;
  }

  return (
    <>
      <Table<Omit<Comment, 'id'>>
        columns={[
          { id: 'postId', name: 'Post Id' },
          { id: 'name', name: 'NAME' },
          { id: 'body', name: 'BODY' },
          { id: 'email', name: 'EMAIL' },
        ]}
        data={tableComments || []}
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
