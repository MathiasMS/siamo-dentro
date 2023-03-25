import React from 'react';
import {  ThemeProvider, createTheme } from '@mui/material';
import theme from './theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import FamilyTree from './pages/FamilyTree';

const createdTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.siamoGreen
    }
  }
});
const App = () => {

  return (
      <ThemeProvider theme={createdTheme}>
       <FamilyTree />
      </ThemeProvider>
  )
}


export default App;

