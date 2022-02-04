import React from 'react';
import {
  Layout, GlobalStyles, Typography, Table, Theme,
} from './ui-kit';

function App() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <Layout>
          <Typography.H1>Users and comments</Typography.H1>
          <Table />
        </Layout>
      </Theme>
    </>
  );
}

export default App;
