import React from 'react';
import {
  useUsers, useComments, User, Comment,
} from './models';
import {
  Layout, GlobalStyles, Typography, Table, Theme,
} from './ui-kit';

function App() {
  const { users, isLoading: isLoadingUsers } = useUsers();
  const { comments, isLoading: isLoadingComments } = useComments();

  if (!users || !comments) return null;

  return (
    <>
      <GlobalStyles />
      <Theme>
        <Layout>
          <Typography.H1>Users and comments</Typography.H1>
          {!isLoadingComments && (
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
          )}
          {!isLoadingUsers && (
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
          )}
        </Layout>
      </Theme>
    </>
  );
}

export default App;
