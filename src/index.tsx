import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClientProvider } from './models';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
