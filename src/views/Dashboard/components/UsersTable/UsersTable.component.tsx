import React, { useMemo } from 'react';
import { useUsers, User } from '../../../../models';
import { Table } from '../../../../ui-kit';

export function UsersTable() {
  const { users, isLoading } = useUsers();

  if (isLoading) return <div>skeleton</div>;

  if (!users) return <div>Sorry, there are no userss available</div>;

  const tableUsers = useMemo(
    () => users.map(({ id, ...restUser }) => restUser),
    [users],
  );

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
