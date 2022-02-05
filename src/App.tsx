import React from 'react';
import { Layout, GlobalStyles, Theme } from './ui-kit';
import { Dashboard } from './views/Dashboard/Dashboard.component';

function App() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <Layout>
          <Dashboard />
        </Layout>
      </Theme>
    </>
  );
}

export default App;
