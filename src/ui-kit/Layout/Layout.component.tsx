import React from 'react';
import { Grid } from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  return <Grid>{children}</Grid>;
}
