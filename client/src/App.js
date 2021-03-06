import './App.css';
import React from 'react'
import Home from './pages/home';
import { createTheme, NextUIProvider } from '@nextui-org/react';

function App() {
  const darkTheme = createTheme({type:'dark'})

  return (
    <NextUIProvider theme={darkTheme}>
      <Home />
    </NextUIProvider>
  );
}

export default App;
