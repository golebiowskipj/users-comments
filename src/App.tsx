import React, { useEffect } from 'react';
import { jsonplaceholderApi } from './jsonplaceholder-connector/jsonplaceholderApi';
import {
  Layout, GlobalStyles, Typography, Table, Theme,
} from './ui-kit';

type Comment = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const comments: Comment[] = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
];

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
};

const users: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net',
  },
];

function App() {
  useEffect(() => {
    const getUsers = async () => {
      const x = await jsonplaceholderApi().usersApi.getUsers();
      const y = await jsonplaceholderApi().commentsApi.getComments();

      console.log(x, y);
    };

    getUsers();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Theme>
        <Layout>
          <Typography.H1>Users and comments</Typography.H1>
          <Table<Comment>
            columns={[
              { id: 'userId', name: 'User Id' },
              { id: 'id', name: 'ID' },
              { id: 'body', name: 'BODY' },
              { id: 'title', name: 'TITLE' },
            ]}
            data={comments}
            title="Comments"
          />
          <Table<User>
            columns={[
              { id: 'id', name: 'ID' },
              { id: 'name', name: 'NAME' },
              { id: 'username', name: 'USERNAME' },
              { id: 'email', name: 'EMAIL' },
              { id: 'website', name: 'WEBSITE' },
            ]}
            data={users}
            title="Users"
          />
        </Layout>
      </Theme>
    </>
  );
}

export default App;
