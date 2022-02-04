import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme.consts';

interface ThemeProps {
  children: React.ReactNode;
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
