import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/globalStyle';
import Theme from './styles/theme';

import Sidebar from './components/SideBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Sidebar />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
