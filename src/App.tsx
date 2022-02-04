import React from 'react';
import {
  Layout, GlobalStyles, Typography, Table,
} from './ui-kit';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Typography.H1>Users and comments</Typography.H1>
        <Table />
      </Layout>
    </>
  );
}

export default App;
