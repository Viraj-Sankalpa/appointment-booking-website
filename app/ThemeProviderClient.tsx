"use client";

import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const theme = createTheme();

const ThemeProviderClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default ThemeProviderClient;
