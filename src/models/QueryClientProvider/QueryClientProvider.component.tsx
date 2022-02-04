import { QueryClient, QueryClientProvider as Provider } from 'react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </Provider>
  );
}
