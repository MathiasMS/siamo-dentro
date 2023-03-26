import React from 'react';
import {  ThemeProvider, createTheme } from '@mui/material';
import theme from './theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import FamilyTree from './pages/FamilyTree';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
       <ToastContainer
           position="top-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           theme="colored"
       />
      </ThemeProvider>
  )
}


export default App;

