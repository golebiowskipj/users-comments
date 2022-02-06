import React, { useMemo } from 'react';
import { useUsers, User } from '../../../../models';
import { Table } from '../../../../ui-kit';

export function UsersTable() {
  const { users, isLoading } = useUsers();

  const tableUsers = useMemo(
    () => (users ? users.map(({ id, ...restUser }) => restUser) : []),
    [users],
  );

  if (isLoading) return <div>skeleton</div>;

  if (tableUsers.length === 0) {
    return <div>Sorry, there are no users available</div>;
  }

  return (
    <Table<Omit<User, 'id'>>
      columns={[
        { id: 'name', name: 'NAME' },
        { id: 'userName', name: 'USERNAME' },
        { id: 'email', name: 'EMAIL' },
        { id: 'website', name: 'WEBSITE' },
      ]}
      data={tableUsers || []}
      title="Users"
    />
  );
}
