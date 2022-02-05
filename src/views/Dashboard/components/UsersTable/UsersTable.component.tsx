import React from 'react';
import { useUsers, User } from '../../../../models';
import { Table } from '../../../../ui-kit';

export function UsersTable() {
  const { users, isLoading } = useUsers();

  if (isLoading) return <div>skeleton</div>;

  return (
    <Table<User>
      columns={[
        { id: 'id', name: 'ID' },
        { id: 'name', name: 'NAME' },
        { id: 'userName', name: 'USERNAME' },
        { id: 'email', name: 'EMAIL' },
        { id: 'website', name: 'WEBSITE' },
      ]}
      data={users || []}
      title="Users"
    />
  );
}
