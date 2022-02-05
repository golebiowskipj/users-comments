import React from 'react';
import { Typography } from '../../ui-kit';
import { CommentsTable } from './components/CommentsTable/CommentsTable.component';
import { UsersTable } from './components/UsersTable/UsersTable.component';

export function Dashboard() {
  return (
    <>
      <Typography.H1>Users and comments</Typography.H1>
      <UsersTable />
      <CommentsTable />
    </>
  );
}
